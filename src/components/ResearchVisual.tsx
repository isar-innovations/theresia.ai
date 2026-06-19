"use client";

const nodes = [
  { label: "Quellen", x: 16, y: 24, tone: "lime" },
  { label: "Kontext", x: 43, y: 16, tone: "cyan" },
  { label: "Review", x: 74, y: 30, tone: "orange" },
  { label: "Ideen", x: 28, y: 62, tone: "violet" },
  { label: "Tests", x: 61, y: 74, tone: "lime" },
  { label: "Output", x: 84, y: 64, tone: "cyan" },
];

const trace = [
  "Quelle aufgenommen",
  "Kontext verbunden",
  "Gegenperspektive gelesen",
  "Aussage markiert",
  "Nächster Test bereit",
];

export function ResearchVisual() {
  return (
    <div className="research-visual" aria-label="Animierte Vorschau des Theresia Forschungsboards">
      <div className="visual-topbar">
        <span className="status-dot" />
        <span>theresia@research:~$ run --trace</span>
        <strong>EU Betrieb</strong>
      </div>

      <div className="mesh-stage">
        <div className="mesh-lines" />
        {nodes.map((node, index) => (
          <div
            className={`mesh-node ${node.tone}`}
            key={node.label}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              animationDelay: `${index * 0.18}s`,
            }}
          >
            <span>{node.label}</span>
          </div>
        ))}
        <div className="mesh-core">
          <span>Trace</span>
          <strong>8</strong>
        </div>
      </div>

      <div className="trace-panel">
        {trace.map((item, index) => (
          <div className="trace-row" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
            <strong>{index === 3 ? "WARN" : "OK"}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
