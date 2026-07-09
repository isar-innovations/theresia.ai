import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ApplyPayload = {
  company?: unknown;
  email?: unknown;
  message?: unknown;
  name?: unknown;
  website?: unknown;
};

type ApplyData = {
  company: string;
  email: string;
  message: string;
  name: string;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const rateLimitStore = new Map<string, RateLimitEntry>();

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function truncate(value: string, maxLength: number) {
  return value.length > maxLength ? value.slice(0, maxLength) : value;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for") ?? "";
  const ip =
    forwardedFor
      .split(",")
      .map((part) => part.trim())
      .find(Boolean) ??
    request.headers.get("x-real-ip") ??
    "unknown";
  const userAgent = request.headers.get("user-agent") ?? "unknown";

  return `${ip}:${truncate(userAgent, 120)}`;
}

function isRateLimited(key: string) {
  const now = Date.now();

  for (const [storedKey, entry] of rateLimitStore) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(storedKey);
    }
  }

  const entry = rateLimitStore.get(key);

  if (!entry) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

function validatePayload(payload: ApplyPayload) {
  const data: ApplyData = {
    company: truncate(readString(payload.company), 160),
    email: truncate(readString(payload.email), 180),
    message: truncate(readString(payload.message), 4000),
    name: truncate(readString(payload.name), 120),
  };

  if (!data.name || !data.email || !data.company || !data.message) {
    return null;
  }

  if (!EMAIL_PATTERN.test(data.email)) {
    return null;
  }

  return data;
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;
  const to = process.env.CONTACT_TO || "info@isar-innovations.dev";

  if (!host || !Number.isFinite(port) || port <= 0 || !user || !pass || !from) {
    return null;
  }

  return {
    from,
    host,
    pass,
    port,
    secure: port === 465,
    to,
    user,
  };
}

function buildEmail(data: ApplyData, request: Request) {
  const submittedAt = new Date().toISOString();
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const subjectCompany = truncate(data.company.replace(/\s+/g, " "), 80);

  const text = [
    "New Theresia research partnership application",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company}`,
    "",
    "Research question:",
    data.message,
    "",
    `Submitted at: ${submittedAt}`,
    `IP: ${ip}`,
    `User agent: ${truncate(userAgent, 220)}`,
  ].join("\n");

  const html = `
    <h1>New Theresia research partnership application</h1>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
    <h2>Research question</h2>
    <p>${escapeHtml(data.message).replaceAll("\n", "<br />")}</p>
    <hr />
    <p><strong>Submitted at:</strong> ${escapeHtml(submittedAt)}</p>
    <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
    <p><strong>User agent:</strong> ${escapeHtml(truncate(userAgent, 220))}</p>
  `;

  return {
    html,
    subject: `New Theresia research partnership application - ${subjectCompany}`,
    text,
  };
}

export async function POST(request: Request) {
  let payload: ApplyPayload;

  try {
    payload = (await request.json()) as ApplyPayload;
  } catch {
    return NextResponse.json({ error: "validation_error", ok: false }, { status: 400 });
  }

  if (readString(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  if (isRateLimited(getClientKey(request))) {
    return NextResponse.json({ error: "rate_limited", ok: false }, { status: 429 });
  }

  const data = validatePayload(payload);

  if (!data) {
    return NextResponse.json({ error: "validation_error", ok: false }, { status: 400 });
  }

  const smtpConfig = getSmtpConfig();

  if (!smtpConfig) {
    console.error("Missing SMTP configuration for Theresia apply form.");
    return NextResponse.json({ error: "send_failed", ok: false }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    auth: {
      pass: smtpConfig.pass,
      user: smtpConfig.user,
    },
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
  });

  const email = buildEmail(data, request);

  try {
    await transporter.sendMail({
      from: smtpConfig.from,
      html: email.html,
      replyTo: data.email,
      subject: email.subject,
      text: email.text,
      to: smtpConfig.to,
    });
  } catch (error) {
    console.error("Failed to send Theresia apply form email.", error);
    return NextResponse.json({ error: "send_failed", ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
