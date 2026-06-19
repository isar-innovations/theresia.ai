import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { ResearchVisual } from "@/components/ResearchVisual";

export default function Home() {
  return (
    <main className="landing-page">
      <section className="hero" id="top">
        <div className="site-shell">
          <header className="top-brand">
            <Link className="brand brand-centered" href="#top" aria-label="Theresia Start">
              <span className="brand-mark">T</span>
              <span>
                <strong>Theresia.ai</strong>
                <em>by Isar Innovations</em>
              </span>
            </Link>
          </header>

          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <Sparkles size={16} aria-hidden="true" />
                Autonomous Research Board
              </div>
              <h1>Forschung wird steuerbar, wenn der Pfad sichtbar bleibt.</h1>
              <p className="hero-lead">
                Theresia verbindet Quellen, offene Fragen, Belege und nächste Tests zu einem
                Arbeitsboard. Keine Black-Box-Antworten, sondern nachvollziehbare Recherche mit
                Evidenzspur.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="https://rsrx.de/">
                  <span>Live Board ansehen</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className="secondary-button" href="mailto:info@isar-innovations.dev">
                  Demo anfragen
                </a>
              </div>
              <div className="signal-row" aria-label="Produktsignale">
                <span>EU Betrieb</span>
                <span>Quellen · Belege · Tests</span>
                <span>Trace by design</span>
              </div>
            </div>
            <ResearchVisual />
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
