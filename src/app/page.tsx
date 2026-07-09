import { ArrowDown, ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const processSteps = [
  {
    body: "Read scientific literature, technical sources and domain context.",
    label: "01",
    title: "Read",
  },
  {
    body: "Connect ideas across disciplines that rarely meet in manual review.",
    label: "02",
    title: "Connect",
  },
  {
    body: "Challenge weak hypotheses before they waste expert attention.",
    label: "03",
    title: "Challenge",
  },
  {
    body: "Verify promising paths through evidence, code, simulation or proof.",
    label: "04",
    title: "Verify",
  },
  {
    body: "Package the result into a research dossier, proof path or IP direction.",
    label: "05",
    title: "Package",
  },
];

const commercialSteps = [
  {
    label: "Wedge",
    body: "For teams with one urgent research bottleneck and a clear decision to unlock.",
    title: "Research Sprint",
  },
  {
    label: "Expansion",
    body: "For teams that need a continuous pipeline of scientific opportunity and technical validation.",
    title: "Research Partnership",
  },
  {
    label: "Scale",
    body: "For sensitive R&D environments where IP, confidentiality and private deployment matter.",
    title: "Private R&D System",
  },
];

const customerAudiences = [
  "Technical founders",
  "CTOs",
  "R&D leaders",
  "Industrial AI teams",
  "Scientific product teams",
];

const comparisonRows = [
  ["Find existing knowledge", "Generate new research paths"],
  ["Summarize papers", "Challenge hypotheses"],
  ["Answer questions", "Build proof-oriented outputs"],
  ["User reviews everything", "Agents filter weak paths first"],
];

const moatLayers = [
  "Literature-scale exploration",
  "Cross-disciplinary hypothesis generation",
  "Adversarial critique",
  "Evidence, proof, simulation and code grounding",
  "Private deployment for sensitive R&D",
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
        <a className="scroll-cue" href="#problem" aria-label="Scroll to the next section">
          <ArrowDown size={15} aria-hidden="true" />
        </a>
      </section>

      <section className="story-section problem-section" id="problem">
        <div className="site-shell problem-centered">
          <h2>R&amp;D teams are drowning in scientific knowledge.</h2>
          <p className="problem-thesis">
            Too many papers. Too few experts. Too many missed connections.
          </p>
          <div className="editorial-copy problem-copy-stack">
            <p>
              Every year, millions of papers are published across fields that rarely talk to each
              other. The opportunity is there, but finding the right connection still depends on slow
              manual review and scarce senior expertise.
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
            <h2>Software got agents. Research is next.</h2>
          </div>
          <div className="section-body">
            <p className="strong-copy">
              Code generation compressed implementation cycles. Frontier models can now read,
              reason, critique and generate technical work.
            </p>
            <p>
              Search tools summarize what is already known. Theresia is built for what comes after
              summary: exploring possible proof paths, challenging them and finding the research
              direction that can become a market advantage.
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
              A Research Sprint is a focused 2-4 week engagement around one high-value scientific or
              technical question. It gives teams a concrete way to test whether Theresia can unlock a
              product path, proof direction or IP-relevant opportunity before a larger partnership.
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
        <div className="site-shell customer-focus">
          <h2>Built for teams where one research question can change the roadmap.</h2>
          <p>
            Theresia is designed for leaders working on high-value scientific uncertainty, where a
            faster proof path can affect product direction, IP strategy or funding.
          </p>
          <div className="audience-pills" aria-label="Target audiences">
            {customerAudiences.map((audience) => (
              <span key={audience}>{audience}</span>
            ))}
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
            <h2>Search tools summarize what is known. Theresia explores what is not obvious yet.</h2>
            <p>
              Perplexity, Elicit and Deep Research help teams find and summarize existing knowledge.
              Theresia goes further.
            </p>
          </div>
          <div className="comparison-flow" aria-label="Search tools compared with Theresia">
            <div className="comparison-flow-labels">
              <span>Search &amp; summary tools</span>
              <span>Theresia</span>
            </div>
            {comparisonRows.map(([searchTool, theresia]) => (
              <div className="comparison-flow-row" key={searchTool}>
                <span className="comparison-muted">{searchTool}</span>
                <span className="comparison-bridge" aria-hidden="true" />
                <span className="comparison-strong">{theresia}</span>
              </div>
            ))}
          </div>
          <p className="table-close">
            The value is not faster reading. The value is finding the research path before everyone
            else does.
          </p>
        </div>
      </section>

      <section className="story-section moat-section">
        <div className="site-shell moat-layout">
          <div className="section-heading">
            <h2>Research is not a single prompt.</h2>
            <p>
              Theresia combines multi-agent exploration, adversarial review, paper-grounded
              reasoning and verification workflows into a system built specifically for scientific
              R&amp;D.
            </p>
          </div>
          <div className="moat-stack">
            {moatLayers.map((layer, index) => (
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
