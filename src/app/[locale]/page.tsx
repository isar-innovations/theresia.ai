import { ArrowDown, ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LanguagePicker } from "@/components/LanguagePicker";
import {
  getDictionary,
  isLocale,
  Locale,
  locales,
  localizedMetadata,
  localizedPath,
} from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

async function resolveLocale(params: LocalePageProps["params"]): Promise<Locale> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return locale;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = getDictionary(locale);

  return localizedMetadata(locale, "/", copy.home.metadata);
}

export default async function Home({ params }: LocalePageProps) {
  const locale = await resolveLocale(params);
  const copy = getDictionary(locale);

  return (
    <main className="landing-page story-page">
      <header className="story-nav">
        <div className="site-shell story-nav-inner">
          <Link
            className="brand story-brand"
            href={`${localizedPath(locale)}#top`}
            aria-label={copy.nav.brandStartLabel}
          >
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
          <div className="story-nav-actions">
            <LanguagePicker label={copy.nav.languageLabel} locale={locale} path="/" />
            <Link className="nav-apply" href={localizedPath(locale, "/apply/")}>
              <span>{copy.nav.apply}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </header>

      <section className="story-hero" id="top">
        <div className="site-shell story-hero-inner">
          <p className="story-eyebrow">{copy.home.hero.eyebrow}</p>
          <h1>{copy.home.hero.title}</h1>
          <p className="story-hero-lead">{copy.home.hero.lead}</p>
          <p className="story-proof-line">{copy.home.hero.proof}</p>
          <div className="hero-actions story-actions">
            <Link className="primary-button" href={localizedPath(locale, "/apply/")}>
              <span>{copy.home.hero.apply}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              className="secondary-button"
              href="https://isar-innovations.dev/research.html#de"
              rel="noreferrer"
              target="_blank"
            >
              <span>{copy.home.hero.research}</span>
              <ExternalLink size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <a className="scroll-cue" href="#problem" aria-label={copy.nav.scrollNext}>
          <ArrowDown size={15} aria-hidden="true" />
        </a>
      </section>

      <section className="story-section problem-section" id="problem">
        <div className="site-shell problem-centered">
          <h2>{copy.home.problem.title}</h2>
          <p className="problem-thesis">{copy.home.problem.thesis}</p>
          <div className="editorial-copy problem-copy-stack">
            {copy.home.problem.copy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section why-section">
        <div className="site-shell split-section">
          <div className="section-copy">
            <h2>{copy.home.why.title}</h2>
          </div>
          <div className="section-body">
            <p className="strong-copy">{copy.home.why.strong}</p>
            <p>{copy.home.why.copy}</p>
          </div>
        </div>
      </section>

      <section className="story-section solution-section centered-solution" id="solution">
        <div className="site-shell">
          <div className="section-heading solution-heading">
            <h2>{copy.home.solution.title}</h2>
            <p>{copy.home.solution.copy}</p>
          </div>
          <div className="statement-panel">
            <p>{copy.home.solution.panelLead}</p>
            <strong>{copy.home.solution.panelTitle}</strong>
          </div>
        </div>
      </section>

      <section className="story-section process-section">
        <div className="site-shell">
          <div className="section-heading">
            <h2>{copy.home.process.title}</h2>
          </div>
          <div className="process-grid">
            {copy.home.process.steps.map((step) => (
              <article className="process-card" key={step.title}>
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section buy-section">
        <div className="site-shell split-section">
          <div className="section-copy">
            <h2>{copy.home.buy.title}</h2>
          </div>
          <div className="section-body">
            {copy.home.buy.copy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="site-shell commercial-grid" aria-label={copy.home.buy.expansionLabel}>
          {copy.home.buy.stages.map((step, index) => (
            <article className="commercial-card" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section customer-section">
        <div className="site-shell customer-focus">
          <h2>{copy.home.customer.title}</h2>
          <p>{copy.home.customer.copy}</p>
          <div className="audience-pills" aria-label={copy.home.customer.audienceLabel}>
            {copy.home.customer.audiences.map((audience) => (
              <span key={audience}>{audience}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section proof-section-story" id="proof">
        <div className="site-shell">
          <div className="section-heading">
            <h2>{copy.home.proof.title}</h2>
            <p>{copy.home.proof.copy}</p>
          </div>
          <div className="proof-card-grid">
            {copy.home.proof.links.map((proof) => (
              <a
                className="proof-card"
                href={proof.href}
                key={proof.title}
                rel="noreferrer"
                target="_blank"
              >
                <span>{proof.title}</span>
                <p>{proof.body}</p>
                <ExternalLink size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section differentiation-section">
        <div className="site-shell">
          <div className="section-heading">
            <h2>{copy.home.differentiation.title}</h2>
            <p>{copy.home.differentiation.copy}</p>
          </div>
          <div className="comparison-flow" aria-label={copy.home.differentiation.ariaLabel}>
            <div className="comparison-flow-labels">
              <span>{copy.home.differentiation.searchLabel}</span>
              <span>{copy.home.differentiation.theresiaLabel}</span>
            </div>
            {copy.home.differentiation.rows.map(([searchTool, theresia]) => (
              <div className="comparison-flow-row" key={searchTool}>
                <span className="comparison-muted">{searchTool}</span>
                <span className="comparison-bridge" aria-hidden="true" />
                <span className="comparison-strong">{theresia}</span>
              </div>
            ))}
          </div>
          <p className="table-close">{copy.home.differentiation.close}</p>
        </div>
      </section>

      <section className="story-section moat-section">
        <div className="site-shell moat-layout">
          <div className="section-heading">
            <h2>{copy.home.moat.title}</h2>
            <p>{copy.home.moat.copy}</p>
          </div>
          <div className="moat-stack">
            {copy.home.moat.layers.map((layer, index) => (
              <div className="moat-layer" key={layer}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{layer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="story-final-cta">
        <div className="site-shell final-cta-panel">
          <h2>{copy.home.finalCta.title}</h2>
          <p>{copy.home.finalCta.copy}</p>
          <div className="hero-actions story-actions">
            <Link className="primary-button" href={localizedPath(locale, "/apply/")}>
              <span>{copy.home.finalCta.apply}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="site-shell footer-inner">
          <span>© Isar Innovations GmbH</span>
          <Link href={localizedPath(locale, "/impressum/")}>{copy.nav.footerImpressum}</Link>
        </div>
      </footer>
    </main>
  );
}
