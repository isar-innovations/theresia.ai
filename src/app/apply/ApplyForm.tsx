"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";

type FormValues = {
  company: string;
  email: string;
  message: string;
  name: string;
  website: string;
};

type SubmitState = "error" | "idle" | "submitting" | "success";

const initialValues: FormValues = {
  company: "",
  email: "",
  message: "",
  name: "",
  website: "",
};

function errorMessageFor(status: number) {
  if (status === 429) {
    return "Too many submissions in a short time. Please try again in a few minutes.";
  }

  if (status === 400) {
    return "Please check the form and fill in all required fields.";
  }

  return "We could not send the form right now. Please try again later.";
}

export function ApplyForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/apply/", {
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const result = (await response.json()) as { ok?: boolean };

      if (!response.ok || !result.ok) {
        setSubmitState("error");
        setErrorMessage(errorMessageFor(response.status));
        return;
      }

      setFormValues(initialValues);
      setSubmitState("success");
    } catch {
      setSubmitState("error");
      setErrorMessage("We could not send the form right now. Please try again later.");
    }
  }

  function updateField(field: keyof FormValues, value: string) {
    setFormValues((current) => ({
      ...current,
      [field]: value,
    }));
  }

  return (
    <form className="apply-form" onSubmit={handleSubmit}>
      <div className="apply-field-grid">
        <label>
          <span>Name</span>
          <input
            autoComplete="name"
            maxLength={120}
            name="name"
            onChange={(event) => updateField("name", event.target.value)}
            required
            type="text"
            value={formValues.name}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            autoComplete="email"
            maxLength={180}
            name="email"
            onChange={(event) => updateField("email", event.target.value)}
            required
            type="email"
            value={formValues.email}
          />
        </label>
      </div>
      <label>
        <span>Company</span>
        <input
          autoComplete="organization"
          maxLength={160}
          name="company"
          onChange={(event) => updateField("company", event.target.value)}
          required
          type="text"
          value={formValues.company}
        />
      </label>
      <label>
        <span>What research question should we look at?</span>
        <textarea
          maxLength={4000}
          name="message"
          onChange={(event) => updateField("message", event.target.value)}
          required
          rows={8}
          value={formValues.message}
        />
      </label>
      <div className="form-honeypot" aria-hidden="true">
        <label>
          <span>Website</span>
          <input
            autoComplete="off"
            name="website"
            onChange={(event) => updateField("website", event.target.value)}
            tabIndex={-1}
            type="text"
            value={formValues.website}
          />
        </label>
      </div>
      <div className="apply-form-footer">
        <button
          className="primary-button apply-submit"
          disabled={submitState === "submitting"}
          type="submit"
        >
          <span>{submitState === "submitting" ? "Sending..." : "Send application"}</span>
          <ArrowRight size={18} aria-hidden="true" />
        </button>
        <p className="apply-form-note">
          We review every application manually and reply when the question is a good fit.
        </p>
      </div>
      <div className="apply-form-status" aria-live="polite">
        {submitState === "success" ? (
          <p className="apply-success">
            Thanks. Your application has been sent. We will review it and get back to you.
          </p>
        ) : null}
        {submitState === "error" ? <p className="apply-error">{errorMessage}</p> : null}
      </div>
    </form>
  );
}
