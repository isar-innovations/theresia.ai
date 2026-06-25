import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="landing-page">
      <section className="hero" id="top">
        <div className="site-shell">
          <header className="top-brand">
            <Link className="brand brand-centered" href="#top" aria-label="Theresia Start">
              <Image
                className="brand-logo"
                src="/theresia-mark.svg"
                alt="Theresia.ai"
                width={72}
                height={72}
                priority
                unoptimized
              />
            </Link>
          </header>

          <div className="hero-content">
            <h1>Agentische Forschung macht aus ungelösten Problemen neue Marktchancen.</h1>
            <p className="hero-lead">
              Forschung ist der Hebel, um Wege zu finden, die der Wettbewerb noch nicht sieht.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="mailto:info@isar-innovations.dev">
                <span>Kontakt aufnehmen</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
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
