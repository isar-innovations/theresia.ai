import { ArrowUpRight, Check, FileText, Network, Radar, ShieldCheck, Sparkles } from "lucide-react";

export type HeroIllustrationVariant =
  | "evidence-orbit"
  | "command-desk"
  | "research-atlas"
  | "source-prism"
  | "agent-swarm";

type HeroIllustrationProps = {
  variant: HeroIllustrationVariant;
};

const sourceCards = ["Paper", "Patent", "Dataset", "Interview"];
const traceItems = ["Quellen", "Belege", "Risiko", "Test"];

export const visualDirections: Array<{
  id: HeroIllustrationVariant;
  title: string;
  intent: string;
}> = [
  {
    id: "evidence-orbit",
    title: "Evidence Orbit",
    intent: "Premium, reduziert, starkes Symbol für Research-Pfade und Quellenbeziehungen.",
  },
  {
    id: "command-desk",
    title: "Command Desk",
    intent: "Mehr Produktnähe: Theresia als operativer Research-Arbeitsplatz.",
  },
  {
    id: "research-atlas",
    title: "Research Atlas",
    intent: "Explorer-Gefühl: Quellenlandschaft, Routen, Signale und offene Zonen.",
  },
  {
    id: "source-prism",
    title: "Source Prism",
    intent: "Sehr brandig: Quellen werden durch Theresia in Insights und Tests gebrochen.",
  },
  {
    id: "agent-swarm",
    title: "Agent Swarm",
    intent: "Autonomie sichtbar machen: spezialisierte Agents um einen zentralen Trace.",
  },
];

export function HeroIllustration({ variant }: HeroIllustrationProps) {
  switch (variant) {
    case "evidence-orbit":
      return <EvidenceOrbit />;
    case "command-desk":
      return <CommandDesk />;
    case "research-atlas":
      return <ResearchAtlas />;
    case "source-prism":
      return <SourcePrism />;
    case "agent-swarm":
      return <AgentSwarm />;
  }
}

function EvidenceOrbit() {
  return (
    <div className="visual-frame evidence-orbit">
      <div className="orbit-field">
        <span className="orbit-ring ring-a" />
        <span className="orbit-ring ring-b" />
        <span className="orbit-ring ring-c" />
        <div className="orbit-core">
          <Sparkles size={24} aria-hidden="true" />
          <strong>Theresia</strong>
          <span>Research Trace</span>
        </div>
        {sourceCards.map((card, index) => (
          <div className={`orbit-card orbit-card-${index + 1}`} key={card}>
            <FileText size={16} aria-hidden="true" />
            <span>{card}</span>
          </div>
        ))}
      </div>
      <div className="visual-strip">
        {traceItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function CommandDesk() {
  return (
    <div className="visual-frame command-desk">
      <div className="desk-window main-window">
        <div className="desk-bar">
          <span />
          <strong>theresia.run</strong>
          <em>live</em>
        </div>
        <div className="desk-grid">
          <div className="desk-source">
            <span>01</span>
            <strong>Source Intake</strong>
            <p>12 Dokumente verbunden</p>
          </div>
          <div className="desk-source highlighted">
            <span>02</span>
            <strong>Claim Review</strong>
            <p>3 Aussagen offen</p>
          </div>
          <div className="desk-source">
            <span>03</span>
            <strong>Next Test</strong>
            <p>Experiment bereit</p>
          </div>
        </div>
      </div>
      <div className="desk-window side-window">
        <Network size={22} aria-hidden="true" />
        <strong>Context Graph</strong>
        <span>8 Pfade</span>
      </div>
      <div className="desk-window note-window">
        <ShieldCheck size={20} aria-hidden="true" />
        <strong>Evidence Score</strong>
        <span>82%</span>
      </div>
    </div>
  );
}

function ResearchAtlas() {
  return (
    <div className="visual-frame research-atlas">
      <div className="atlas-map">
        <span className="contour contour-a" />
        <span className="contour contour-b" />
        <span className="contour contour-c" />
        <div className="route-line" />
        {["Quelle", "These", "Review", "Test"].map((label, index) => (
          <div className={`atlas-pin atlas-pin-${index + 1}`} key={label}>
            <span />
            <strong>{label}</strong>
          </div>
        ))}
        <div className="atlas-card">
          <Radar size={20} aria-hidden="true" />
          <strong>Signal entdeckt</strong>
          <p>Neue Brücke zwischen Material A und Test C.</p>
        </div>
      </div>
    </div>
  );
}

function SourcePrism() {
  return (
    <div className="visual-frame source-prism">
      <div className="prism-input">
        <span>PDF</span>
        <span>Link</span>
        <span>Notiz</span>
      </div>
      <div className="prism-core">
        <span className="prism-shape" />
        <strong>T</strong>
      </div>
      <div className="beam beam-a" />
      <div className="beam beam-b" />
      <div className="beam beam-c" />
      <div className="prism-output">
        <div>
          <Check size={16} aria-hidden="true" />
          <span>Beleg</span>
        </div>
        <div>
          <Check size={16} aria-hidden="true" />
          <span>Risiko</span>
        </div>
        <div>
          <Check size={16} aria-hidden="true" />
          <span>Test</span>
        </div>
      </div>
    </div>
  );
}

function AgentSwarm() {
  return (
    <div className="visual-frame agent-swarm">
      <div className="swarm-core">
        <strong>Trace</strong>
        <span>8</span>
      </div>
      {[
        ["Scout", "Quellen finden"],
        ["Verify", "Aussagen prüfen"],
        ["Bridge", "Ideen verbinden"],
        ["Decide", "Test empfehlen"],
      ].map(([name, text], index) => (
        <div className={`agent-tile agent-tile-${index + 1}`} key={name}>
          <ArrowUpRight size={16} aria-hidden="true" />
          <strong>{name}</strong>
          <span>{text}</span>
        </div>
      ))}
      <div className="swarm-thread thread-a" />
      <div className="swarm-thread thread-b" />
      <div className="swarm-thread thread-c" />
    </div>
  );
}
