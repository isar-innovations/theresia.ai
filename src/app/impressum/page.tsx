import Link from "next/link";

export const metadata = {
  title: "Impressum - Theresia",
  description: "Impressum der Isar Innovations GmbH für Theresia.",
};

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link className="back-link" href="/">
          Zurück zur Startseite
        </Link>
        <h1>Impressum</h1>
        <p>Angaben gemäß § 5 TMG / § 18 Abs. 2 MStV</p>

        <section>
          <h2>Anbieter</h2>
          <p>
            Isar Innovations GmbH
            <br />
            Waldmeisterstr. 31
            <br />
            80935 München
          </p>
        </section>

        <section>
          <h2>Vertreten durch</h2>
          <p>Geschäftsführer: Christian Schuhbaum</p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a href="mailto:info@isar-innovations.dev">info@isar-innovations.dev</a>
          </p>
        </section>

        <section>
          <h2>Registereintrag</h2>
          <p>
            Registergericht: Amtsgericht München
            <br />
            Registernummer: HRB 300461
          </p>
        </section>

        <section>
          <h2>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE453587263</p>
        </section>

        <section>
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Christian Schuhbaum
            <br />
            Waldmeisterstr. 31
            <br />
            80935 München
          </p>
        </section>
      </div>
    </main>
  );
}
