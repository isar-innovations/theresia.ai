import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const processSteps = [
  {
    body: "Theresia scans scientific papers, technical sources and domain context around one high-value question.",
    label: "01",
    title: "Read",
  },
  {
    body: "Agents identify links across disciplines that human teams would rarely explore manually.",
    label: "02",
    title: "Connect",
  },
  {
    body: "Weak hypotheses are tested, argued against and filtered out before they waste expert attention.",
    label: "03",
    title: "Challenge",
  },
  {
    body: "Promising paths are checked through sources, reasoning traces, simulations, code or formal proof where applicable.",
    label: "04",
    title: "Verify",
  },
  {
    body: "The strongest direction becomes a research dossier, proof path, experiment plan, paper draft or IP-relevant technical path.",
    label: "05",
    title: "Package",
  },
];

const commercialSteps = [
  {
    body: "For teams with one urgent research bottleneck and a clear decision to unlock.",
    title: "Paid Research Sprints",
  },
  {
    body: "For teams that need a continuous pipeline of scientific opportunity and technical validation.",
    title: "Recurring Research Partnerships",
  },
  {
    body: "For sensitive R&D environments where IP, confidentiality and private deployment matter.",
    title: "On-Premise Research Systems",
  },
];

const customerAreas = [
  "DeepTech",
  "AI infrastructure",
  "Privacy and security",
  "Industrial R&D",
  "Automotive and robotics",
  "Mathematics, physics, biology and applied science",
];

const proofLinks = [
  {
    body: "A reviewed research output around KPT and encrypted-data search.",
    href: "https://isar-innovations.dev/research/kpt-whitepaper-reviewed-2026-06-02.pdf",
    title: "Reviewed KPT paper",
  },
  {
    body: "Technical disclosure for a path toward search in encrypted data.",
    href: "https://isar-innovations.dev/research/beam-keyed-polarization-search-disclosure.pdf",
    title: "Encrypted-data search disclosure",
  },
  {
    body: "Origin proof: a clustering bottleneck turned into a research output.",
    href: "https://isar-innovations.dev/research/projectfit-clustering-whitepaper.pdf",
    title: "Projectfit clustering research",
  },
  {
    body: "A public index of published work and AI-generated research workflows.",
    href: "https://isar-innovations.dev/research.html#de",
    title: "Published research outputs",
  },
];

export default function Home() {
  return (
    <main className="landing-page story-page">
      <header className="story-nav">
        <div className="site-shell story-nav-inner">
          <Link className="brand story-brand" href="#top" aria-label="Theresia Start">
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
          <a
            className="nav-apply"
            href="mailto:info@isar-innovations.dev?subject=Theresia%20Research%20Partnership"
          >
            <span>Apply</span>
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="story-hero" id="top">
        <div className="site-shell story-hero-inner">
          <p className="story-eyebrow">Autonomous Research for Scientific R&amp;D</p>
          <h1>Turn frontier science into market advantage.</h1>
          <p className="story-hero-lead">
            Theresia runs autonomous research agents that read papers, connect ideas across
            disciplines and turn unresolved scientific questions into proof paths, product
            opportunities and IP.
          </p>
          <p className="story-proof-line">
            Published outputs include reviewed work on KPT, encrypted-data search and AI-generated
            research workflows.
          </p>
          <div className="hero-actions story-actions">
            <a
              className="primary-button"
              href="mailto:info@isar-innovations.dev?subject=Theresia%20Research%20Partnership"
            >
              <span>Apply for a Research Partnership</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              className="secondary-button"
              href="https://isar-innovations.dev/research.html#de"
              rel="noreferrer"
              target="_blank"
            >
              <span>View Published Research</span>
              <ExternalLink size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="story-section problem-section" id="problem">
        <div className="site-shell split-section">
          <div className="section-copy">
            <h2>R&amp;D teams are drowning in scientific knowledge.</h2>
          </div>
          <div className="section-body">
            <p>
              Every year, millions of papers are published across fields that rarely talk to each
              other. The opportunities are there, but finding the right connection still depends on
              slow manual review, scarce experts and months of exploratory work.
            </p>
            <p>
              The result: promising product paths stay hidden, technical bets are delayed, and
              companies miss research-driven opportunities before they become obvious.
            </p>
          </div>
        </div>
      </section>

      <section className="story-section why-section">
        <div className="site-shell split-section">
          <div className="section-copy">
            <h2>AI accelerated software. Research is next.</h2>
          </div>
          <div className="section-body">
            <p>
              Frontier models can now read, reason, critique and generate technical work at a level
              that makes autonomous research workflows possible. But search and summary tools stop at
              what is already known.
            </p>
            <p>
              Theresia is built for the next step: turning scientific literature into new
              hypotheses, proof paths and commercial opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="story-section solution-section centered-solution" id="solution">
        <div className="site-shell">
          <div className="section-heading solution-heading">
            <h2>Autonomous research for scientific R&amp;D.</h2>
            <p>
              Specialized agents explore literature, generate competing hypotheses, challenge weak
              directions and package the strongest paths into reviewable outputs for technical
              teams.
            </p>
          </div>
          <div className="statement-panel">
            <p>Not another research search tool.</p>
            <strong>A system for finding what the market has not connected yet.</strong>
          </div>
        </div>
      </section>

      <section className="story-section process-section">
        <div className="site-shell">
          <div className="section-heading">
            <h2>From papers to proof paths.</h2>
          </div>
          <div className="process-grid">
            {processSteps.map((step) => (
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
            <h2>Start with a Research Sprint.</h2>
          </div>
          <div className="section-body">
            <p>
              A Research Sprint is a 2-4 week engagement around one high-value scientific or
              technical question. It gives teams a concrete way to test whether Theresia can unlock
              a product path, proof direction or IP-relevant opportunity before a larger
              partnership.
            </p>
            <p>
              The commercial path is simple: start with one focused question, expand into recurring
              research capacity, then deploy privately for sensitive R&amp;D environments.
            </p>
          </div>
        </div>
        <div className="site-shell commercial-grid" aria-label="Commercial expansion">
          {commercialSteps.map((step, index) => (
            <article className="commercial-card" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section customer-section">
        <div className="site-shell split-section">
          <div className="section-copy">
            <h2>Built for teams where one research question can change the roadmap.</h2>
          </div>
          <div className="section-body">
            <p>
              Theresia is designed for technical founders, CTOs and R&amp;D leaders working on
              high-value scientific uncertainty.
            </p>
            <div className="area-list">
              {customerAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="story-section proof-section-story" id="proof">
        <div className="site-shell">
          <div className="section-heading">
            <h2>Research outputs already published.</h2>
            <p>
              Theresia has already produced research outputs in areas where ordinary search and
              summary tools are not enough.
            </p>
          </div>
          <div className="proof-card-grid">
            {proofLinks.map((proof) => (
              <a className="proof-card" href={proof.href} key={proof.title} rel="noreferrer" target="_blank">
                <span>{proof.title}</span>
                <p>{proof.body}</p>
                <ExternalLink size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section differentiation-section">
        <div className="site-shell split-section">
          <div className="section-copy">
            <h2>Search tools summarize what is known. Theresia explores what is not obvious yet.</h2>
          </div>
          <div className="section-body">
            <p>
              Perplexity, Elicit and Deep Research help teams find and summarize existing knowledge.
              Theresia goes further: it generates hypotheses, challenges competing paths and turns
              promising directions into proof-oriented outputs.
            </p>
            <p className="strong-copy">
              The value is not faster reading. The value is finding the research path before
              everyone else does.
            </p>
          </div>
        </div>
      </section>

      <section className="story-section moat-section">
        <div className="site-shell split-section">
          <div className="section-copy">
            <h2>Research is not a single prompt.</h2>
          </div>
          <div className="section-body">
            <p>
              Theresia combines multi-agent exploration, adversarial review, paper-grounded
              reasoning and verification workflows into a system built specifically for scientific
              R&amp;D.
            </p>
            <p>
              The core advantage is cross-disciplinary search plus structured critique: agents can
              explore connections across fields, discard weak paths and focus human experts on the
              few directions worth reviewing.
            </p>
          </div>
        </div>
      </section>

      <section className="story-final-cta">
        <div className="site-shell final-cta-panel">
          <h2>Bring us the research question your team keeps postponing.</h2>
          <p>
            We work with selected research partners on high-value scientific and technical questions
            that can become product paths, proofs or IP.
          </p>
          <div className="hero-actions story-actions">
            <a
              className="primary-button"
              href="mailto:info@isar-innovations.dev?subject=Theresia%20Research%20Partnership"
            >
              <span>Apply for a Research Partnership</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
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
