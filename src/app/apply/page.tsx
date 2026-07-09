import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ApplyForm } from "./ApplyForm";

export const metadata: Metadata = {
  title: "Apply for a Research Partnership - Theresia",
  description:
    "Apply for a Theresia research partnership around a high-value scientific or technical question.",
};

export default function ApplyPage() {
  return (
    <main className="apply-page">
      <header className="story-nav">
        <div className="site-shell story-nav-inner">
          <Link className="brand story-brand" href="/" aria-label="Theresia Start">
            <Image
              className="story-mark"
              src="/theresia-mark.svg"
              alt=""
              width={140}
              height={140}
              priority
              unoptimized
            />
            <span>Theresia</span>
          </Link>
          <Link className="nav-apply" href="/">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back</span>
          </Link>
        </div>
      </header>

      <section className="apply-section">
        <div className="site-shell apply-layout">
          <div className="apply-copy">
            <p className="story-eyebrow">Research Partnership</p>
            <h1>Apply for a Research Partnership.</h1>
            <p>
              Bring us the scientific or technical question your team keeps postponing. We will
              review whether Theresia can turn it into a proof path, product opportunity or
              IP-relevant direction.
            </p>
            <div className="apply-context">
              <span>Best fit</span>
              <p>
                High-value R&amp;D uncertainty, technical founders, CTOs, industrial AI teams and
                scientific product teams.
              </p>
            </div>
          </div>
          <ApplyForm />
        </div>
      </section>

      <footer className="footer">
        <div className="site-shell footer-inner">
          <span>© Isar Innovations GmbH</span>
          <Link href="/impressum/">Impressum</Link>
        </div>
      </footer>
    </main>
  );
}
