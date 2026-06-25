import Link from "next/link";
import { ResearchVisual } from "@/components/ResearchVisual";

export const metadata = {
  title: "Hero Research Field - Theresia.ai",
  description: "Art Direction für das Theresia.ai Hero-Research-Field Visual.",
};

const researchVisualDirections = [
  {
    id: "hero-field",
    title: "Hero Research Field",
    intent:
      "Ein randloses Hero-System: ein großes Problem startet viele Forschungsfelder, schwache Spuren sterben aus, wenige stabile Pfade laden rechts eine große Lösung auf.",
  },
] as const;

export default function VisualsPage() {
  return (
    <main className="visuals-page">
      <div className="site-shell">
        <header className="visuals-header">
          <Link className="back-link" href="/">
            Zurück zur Startseite
          </Link>
          <h1>Hero Research Field für die Research-Story.</h1>
          <p>
            Das Visual nutzt die gesamte Hero-Fläche: ein großer Problemkreis läuft links unten in
            den Rand, viele Forschungswege streuen aus, schwache Spuren sterben aus, wenige stabile
            Pfade laden rechts eine große Lösung auf.
          </p>
        </header>

        <section className="visual-directions" aria-label="Hero Illustration Varianten">
          {researchVisualDirections.map((direction, index) => (
            <article className="visual-direction-card" key={direction.id}>
              <div className="direction-copy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{direction.title}</h2>
                <p>{direction.intent}</p>
              </div>
              <div className="visual-sample">
                <ResearchVisual variant={direction.id} />
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
