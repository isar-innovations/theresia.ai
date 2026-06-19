import Link from "next/link";
import { HeroIllustration, visualDirections } from "@/components/HeroIllustrations";

export const metadata = {
  title: "Hero Visual Directions - Theresia.ai",
  description: "Fünf visuelle Richtungen für die Theresia.ai Hero Illustration.",
};

export default function VisualsPage() {
  return (
    <main className="visuals-page">
      <div className="site-shell">
        <header className="visuals-header">
          <Link className="back-link" href="/">
            Zurück zur Startseite
          </Link>
          <h1>Fünf Richtungen für die Hero-Illustration.</h1>
          <p>
            Jede Variante ist als echte, responsive UI-Illustration gebaut. Wir können eine davon
            übernehmen oder zwei Richtungen kombinieren.
          </p>
        </header>

        <section className="visual-directions" aria-label="Hero Illustration Varianten">
          {visualDirections.map((direction, index) => (
            <article className="visual-direction-card" key={direction.id}>
              <div className="direction-copy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{direction.title}</h2>
                <p>{direction.intent}</p>
              </div>
              <HeroIllustration variant={direction.id} />
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
