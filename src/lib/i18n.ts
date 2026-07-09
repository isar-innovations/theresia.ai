import type { Metadata } from "next";

export const locales = ["en", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, path: "/" | "/apply/" | "/impressum/" = "/") {
  return path === "/" ? `/${locale}/` : `/${locale}${path}`;
}

export function languageAlternates(path: "/" | "/apply/" | "/impressum/") {
  return {
    de: localizedPath("de", path),
    en: localizedPath("en", path),
  };
}

export function localizedMetadata(
  locale: Locale,
  path: "/" | "/apply/" | "/impressum/",
  metadata: Pick<Metadata, "description" | "title">,
): Metadata {
  return {
    ...metadata,
    alternates: {
      canonical: localizedPath(locale, path),
      languages: languageAlternates(path),
    },
  };
}

export const dictionaries = {
  en: {
    nav: {
      apply: "Apply",
      back: "Back",
      brandStartLabel: "Theresia Start",
      footerImpressum: "Impressum",
      languageLabel: "Select language",
      scrollNext: "Scroll to the next section",
    },
    home: {
      metadata: {
        title: "Theresia - Turn Frontier Science into Market Advantage",
        description:
          "Theresia runs autonomous research agents that turn scientific papers into proof paths, product opportunities and IP for R&D teams.",
      },
      hero: {
        eyebrow: "Autonomous Research for Scientific R&D",
        title: "Turn frontier science into market advantage.",
        lead: "Theresia runs autonomous research agents that read papers, connect ideas across disciplines and turn unresolved scientific questions into proof paths, product opportunities and IP.",
        proof:
          "Published outputs include reviewed work on KPT, encrypted-data search and AI-generated research workflows.",
        apply: "Apply for a Research Partnership",
        research: "View Published Research",
      },
      problem: {
        title: "R&D teams are drowning in scientific knowledge.",
        thesis: "Too many papers. Too few experts. Too many missed connections.",
        copy: [
          "Every year, millions of papers are published across fields that rarely talk to each other. The opportunity is there, but finding the right connection still depends on slow manual review and scarce senior expertise.",
          "The result: promising product paths stay hidden, technical bets are delayed, and companies miss research-driven opportunities before they become obvious.",
        ],
      },
      why: {
        title: "Software got agents. Research is next.",
        strong:
          "Code generation compressed implementation cycles. Frontier models can now read, reason, critique and generate technical work.",
        copy: "Search tools summarize what is already known. Theresia is built for what comes after summary: exploring possible proof paths, challenging them and finding the research direction that can become a market advantage.",
      },
      solution: {
        title: "Autonomous research for scientific R&D.",
        copy: "Specialized agents explore literature, generate competing hypotheses, challenge weak directions and package the strongest paths into reviewable outputs for technical teams.",
        panelLead: "Not another research search tool.",
        panelTitle: "A system for finding what the market has not connected yet.",
      },
      process: {
        title: "From papers to proof paths.",
        steps: [
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
        ],
      },
      buy: {
        title: "Start with a Research Sprint.",
        expansionLabel: "Commercial expansion",
        copy: [
          "A Research Sprint is a focused 2-4 week engagement around one high-value scientific or technical question. It gives teams a concrete way to test whether Theresia can unlock a product path, proof direction or IP-relevant opportunity before a larger partnership.",
          "The commercial path is simple: start with one focused question, expand into recurring research capacity, then deploy privately for sensitive R&D environments.",
        ],
        stages: [
          {
            body: "For teams with one urgent research bottleneck and a clear decision to unlock.",
            title: "Research Sprint",
          },
          {
            body: "For teams that need a continuous pipeline of scientific opportunity and technical validation.",
            title: "Research Partnership",
          },
          {
            body: "For sensitive R&D environments where IP, confidentiality and private deployment matter.",
            title: "Private R&D System",
          },
        ],
      },
      customer: {
        title: "Built for teams where one research question can change the roadmap.",
        copy: "Theresia is designed for leaders working on high-value scientific uncertainty, where a faster proof path can affect product direction, IP strategy or funding.",
        audienceLabel: "Target audiences",
        audiences: [
          "Technical founders",
          "CTOs",
          "R&D leaders",
          "Industrial AI teams",
          "Scientific product teams",
        ],
      },
      proof: {
        title: "Research outputs already published.",
        copy: "Theresia has already produced research outputs in areas where ordinary search and summary tools are not enough.",
        links: [
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
        ],
      },
      differentiation: {
        title:
          "Search tools summarize what is known. Theresia explores what is not obvious yet.",
        copy: "Perplexity, Elicit and Deep Research help teams find and summarize existing knowledge. Theresia goes further.",
        searchLabel: "Search & summary tools",
        theresiaLabel: "Theresia",
        ariaLabel: "Search tools compared with Theresia",
        rows: [
          ["Find existing knowledge", "Generate new research paths"],
          ["Summarize papers", "Challenge hypotheses"],
          ["Answer questions", "Build proof-oriented outputs"],
          ["User reviews everything", "Agents filter weak paths first"],
        ],
        close:
          "The value is not faster reading. The value is finding the research path before everyone else does.",
      },
      moat: {
        title: "Research is not a single prompt.",
        copy: "Theresia combines multi-agent exploration, adversarial review, paper-grounded reasoning and verification workflows into a system built specifically for scientific R&D.",
        layers: [
          "Literature-scale exploration",
          "Cross-disciplinary hypothesis generation",
          "Adversarial critique",
          "Evidence, proof, simulation and code grounding",
          "Private deployment for sensitive R&D",
        ],
      },
      finalCta: {
        title: "Bring us the research question your team keeps postponing.",
        copy: "We work with selected research partners on high-value scientific and technical questions that can become product paths, proofs or IP.",
        apply: "Apply for a Research Partnership",
      },
    },
    apply: {
      metadata: {
        title: "Apply for a Research Partnership - Theresia",
        description:
          "Apply for a Theresia research partnership around a high-value scientific or technical question.",
      },
      title: "Apply for a Research Partnership.",
      copy: "Bring us the scientific or technical question your team keeps postponing. We will review whether Theresia can turn it into a proof path, product opportunity or IP-relevant direction.",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        message: "What research question should we look at?",
        website: "Website",
        submit: "Send application",
        submitting: "Sending...",
        note: "We review every application manually and reply when the question is a good fit.",
        success: "Thanks. Your application has been sent. We will review it and get back to you.",
        errors: {
          default: "We could not send the form right now. Please try again later.",
          rateLimited: "Too many submissions in a short time. Please try again in a few minutes.",
          validation: "Please check the form and fill in all required fields.",
        },
      },
    },
    legal: {
      metadata: {
        title: "Legal Notice - Theresia",
        description: "Legal notice for Isar Innovations GmbH and Theresia.",
      },
      back: "Back to homepage",
      title: "Legal Notice",
      intro: "Information pursuant to Section 5 TMG / Section 18(2) MStV",
      authoritativeNote: "The German version is legally authoritative.",
      provider: {
        title: "Provider",
        lines: ["Isar Innovations GmbH", "Waldmeisterstr. 31", "80935 Munich, Germany"],
      },
      representedBy: {
        title: "Represented by",
        body: "Managing Director: Christian Schuhbaum",
      },
      contact: {
        title: "Contact",
        label: "Email:",
      },
      register: {
        title: "Commercial register",
        lines: ["Register court: Amtsgericht München", "Register number: HRB 300461"],
      },
      vat: {
        title: "VAT ID",
        body: "VAT identification number pursuant to Section 27a UStG: DE453587263",
      },
      responsible: {
        title: "Responsible for content pursuant to Section 18(2) MStV",
        lines: ["Christian Schuhbaum", "Waldmeisterstr. 31", "80935 Munich, Germany"],
      },
    },
  },
  de: {
    nav: {
      apply: "Bewerben",
      back: "Zurück",
      brandStartLabel: "Theresia Startseite",
      footerImpressum: "Impressum",
      languageLabel: "Sprache auswählen",
      scrollNext: "Zum nächsten Abschnitt scrollen",
    },
    home: {
      metadata: {
        title: "Theresia - Aus Forschung wird Marktvorteil",
        description:
          "Theresia lässt autonome Research Agents wissenschaftliche Papers auswerten, Zusammenhänge finden und daraus belastbare Proof Paths, Produktchancen und IP ableiten.",
      },
      hero: {
        eyebrow: "Autonomous Research für R&D-Teams",
        title: "Mach aus Forschung Marktvorteil.",
        lead: "Theresia lässt autonome Research Agents Papers lesen, Disziplinen verbinden und offene wissenschaftliche Fragen in belastbare Proof Paths, Produktchancen und IP übersetzen.",
        proof:
          "Bereits veröffentlicht: reviewed Work zu KPT, Suche in verschlüsselten Daten und AI-generierten Research Workflows.",
        apply: "Research Partnership anfragen",
        research: "Forschung ansehen",
      },
      problem: {
        title: "R&D-Teams versinken in wissenschaftlichem Wissen.",
        thesis:
          "Zu viele Papers. Zu wenig Zeit für echte Expertise. Zu viele Chancen, die niemand verbindet.",
        copy: [
          "Jedes Jahr erscheinen Millionen Papers in Feldern, die kaum miteinander sprechen. Die Chancen liegen in den Papers, aber die entscheidende Verbindung zu finden hängt noch immer an langsamer Recherche und knapper Expertenzeit.",
          "Dadurch bleiben Produktpfade verborgen, technische Wetten verzögern sich und Unternehmen verpassen wissenschaftlich begründete Chancen, bevor der Markt sie erkennt.",
        ],
      },
      why: {
        title: "Software hat Agents. Research ist der nächste Hebel.",
        strong:
          "Code-Agents haben Umsetzung beschleunigt. Jetzt können Modelle auch wissenschaftliche Papers lesen, Argumente prüfen und technische Arbeit vorbereiten.",
        copy: "Recherche-Tools zeigen, was schon bekannt ist. Theresia setzt danach an: mögliche Proof Paths erkunden, schwache Richtungen aussortieren und die Forschungsrichtung finden, aus der ein echter Marktvorteil entstehen kann.",
      },
      solution: {
        title: "Autonomous Research für wissenschaftliche R&D.",
        copy: "Spezialisierte Agents durchsuchen wissenschaftliche Papers, entwickeln konkurrierende Hypothesen, prüfen schwache Richtungen kritisch und verdichten die besten Pfade zu Outputs, die technische Teams reviewen können.",
        panelLead: "Kein weiteres Tool zum Papersuchen.",
        panelTitle: "Ein System, das Verbindungen findet, bevor der Markt sie sieht.",
      },
      process: {
        title: "Von Papers zu belastbaren Proof Paths.",
        steps: [
          {
            body: "Wissenschaftliche Papers, technische Quellen und Domain-Kontext erfassen.",
            label: "01",
            title: "Lesen",
          },
          {
            body: "Ideen über Fachgrenzen hinweg verbinden, die manuell selten zusammenkommen.",
            label: "02",
            title: "Verbinden",
          },
          {
            body: "Schwache Hypothesen früh angreifen, bevor sie wertvolle Expertenzeit binden.",
            label: "03",
            title: "Prüfen",
          },
          {
            body: "Vielversprechende Pfade mit Evidenz, Code, Simulation oder Proof absichern.",
            label: "04",
            title: "Absichern",
          },
          {
            body: "Das Ergebnis als Research Dossier, Proof Path oder IP-Richtung aufbereiten.",
            label: "05",
            title: "Aufbereiten",
          },
        ],
      },
      buy: {
        title: "Starte mit einem Research Sprint.",
        expansionLabel: "Kommerzieller Ausbau",
        copy: [
          "Ein Research Sprint ist ein fokussiertes 2-4-Wochen-Engagement rund um eine wissenschaftlich oder technisch wertvolle Frage. Teams sehen schnell, ob Theresia daraus einen Produktpfad, eine Proof-Richtung oder eine IP-relevante Chance freilegen kann.",
          "Der Einstieg bleibt bewusst klar: mit einer konkreten Frage starten, bei Bedarf zu laufender Research Capacity ausbauen und später privat für sensible R&D-Umgebungen deployen.",
        ],
        stages: [
          {
            body: "Für Teams mit einem dringenden Research Bottleneck und einer Entscheidung, die belastbare Evidenz braucht.",
            title: "Research Sprint",
          },
          {
            body: "Für Teams, die regelmäßig wissenschaftliche Chancen finden und technisch validieren wollen.",
            title: "Research Partnership",
          },
          {
            body: "Für sensible R&D-Umgebungen, in denen IP, Vertraulichkeit und private Deployments entscheidend sind.",
            title: "Private R&D System",
          },
        ],
      },
      customer: {
        title: "Für Teams, bei denen eine Forschungsfrage die Roadmap verändern kann.",
        copy: "Theresia ist für Gründer, CTOs und R&D-Leads gebaut, die an wissenschaftlicher Unsicherheit mit echtem wirtschaftlichem Gewicht arbeiten: Produktstrategie, IP, technische Roadmap oder Finanzierung.",
        audienceLabel: "Zielgruppen",
        audiences: [
          "DeepTech-Gründer",
          "CTOs",
          "R&D-Leads",
          "Industrial-AI-Teams",
          "Scientific-Product-Teams",
        ],
      },
      proof: {
        title: "Erste Research Outputs sind bereits veröffentlicht.",
        copy: "Theresia hat bereits Ergebnisse in Bereichen produziert, in denen einfache Recherche- und Summary-Tools nicht weit genug kommen.",
        links: [
          {
            body: "Ein reviewed Research Output zu KPT und Suche in verschlüsselten Daten.",
            href: "https://isar-innovations.dev/research/kpt-whitepaper-reviewed-2026-06-02.pdf",
            title: "Reviewed KPT Paper",
          },
          {
            body: "Technische Disclosure für einen möglichen Pfad zu Suche in verschlüsselten Daten.",
            href: "https://isar-innovations.dev/research/beam-keyed-polarization-search-disclosure.pdf",
            title: "Encrypted-Data Search Disclosure",
          },
          {
            body: "Aus einem Clustering Bottleneck wurde ein konkreter Research Output.",
            href: "https://isar-innovations.dev/research/projectfit-clustering-whitepaper.pdf",
            title: "Projectfit Clustering Research",
          },
          {
            body: "Ein öffentlicher Index publizierter Arbeiten und AI-generated Research Workflows.",
            href: "https://isar-innovations.dev/research.html#de",
            title: "Published Research Outputs",
          },
        ],
      },
      differentiation: {
        title:
          "Recherche-Tools erklären den Stand der Forschung. Theresia sucht den nächsten belastbaren Schritt.",
        copy: "Perplexity, Elicit und Deep Research helfen, bestehendes Wissen schneller zu erfassen. Theresia geht weiter.",
        searchLabel: "Recherche- & Summary-Tools",
        theresiaLabel: "Theresia",
        ariaLabel: "Recherche-Tools im Vergleich mit Theresia",
        rows: [
          ["Bestehendes Wissen finden", "Neue Research Paths entwickeln"],
          ["Papers zusammenfassen", "Hypothesen kritisch prüfen"],
          ["Fragen beantworten", "Proof-orientierte Outputs erzeugen"],
          ["Alles manuell reviewen", "Schwache Pfade vorher herausfiltern"],
        ],
        close:
          "Der Wert liegt nicht im schnelleren Lesen. Der Wert liegt darin, den richtigen Research Path zu finden, bevor er offensichtlich wird.",
      },
      moat: {
        title: "Research ist kein einzelner Prompt.",
        copy: "Theresia kombiniert Multi-Agent Exploration, kritische Gegenprüfung, paper-grounded Reasoning und Verification Workflows zu einem System für wissenschaftlich anspruchsvolle R&D.",
        layers: [
          "Papers in großem Maßstab explorieren",
          "Hypothesen über Fachgrenzen hinweg entwickeln",
          "Starke Gegenargumente systematisch prüfen",
          "Evidenz, Proof, Simulation und Code verbinden",
          "Private Deployments für sensible R&D",
        ],
      },
      finalCta: {
        title: "Bring uns die Frage, die dein Team immer wieder vertagt.",
        copy: "Wir arbeiten mit ausgewählten Partnern an wissenschaftlichen und technischen Fragen, die Produktpfade, Proofs oder IP freilegen können.",
        apply: "Research Partnership anfragen",
      },
    },
    apply: {
      metadata: {
        title: "Research Partnership anfragen - Theresia",
        description:
          "Bewirb dich für eine Theresia Research Partnership rund um eine hochwertige wissenschaftliche oder technische Frage.",
      },
      title: "Research Partnership anfragen.",
      copy: "Bring uns die wissenschaftliche oder technische Frage, die dein Team immer wieder vertagt. Wir prüfen, ob Theresia daraus einen belastbaren Proof Path, eine Produktchance oder eine IP-relevante Richtung machen kann.",
      form: {
        name: "Name",
        email: "E-Mail",
        company: "Unternehmen",
        message: "Welche Forschungsfrage sollen wir uns ansehen?",
        website: "Website",
        submit: "Anfrage senden",
        submitting: "Wird gesendet...",
        note: "Wir prüfen jede Anfrage manuell und melden uns, wenn die Frage gut passt.",
        success: "Danke. Deine Anfrage wurde gesendet. Wir prüfen sie und melden uns bei dir.",
        errors: {
          default:
            "Wir konnten das Formular gerade nicht senden. Bitte versuche es später erneut.",
          rateLimited:
            "Zu viele Anfragen in kurzer Zeit. Bitte versuche es in ein paar Minuten erneut.",
          validation: "Bitte prüfe das Formular und fülle alle Pflichtfelder aus.",
        },
      },
    },
    legal: {
      metadata: {
        title: "Impressum - Theresia",
        description: "Impressum der Isar Innovations GmbH für Theresia.",
      },
      back: "Zurück zur Startseite",
      title: "Impressum",
      intro: "Angaben gemäß § 5 TMG / § 18 Abs. 2 MStV",
      authoritativeNote: "",
      provider: {
        title: "Anbieter",
        lines: ["Isar Innovations GmbH", "Waldmeisterstr. 31", "80935 München"],
      },
      representedBy: {
        title: "Vertreten durch",
        body: "Geschäftsführer: Christian Schuhbaum",
      },
      contact: {
        title: "Kontakt",
        label: "E-Mail:",
      },
      register: {
        title: "Registereintrag",
        lines: ["Registergericht: Amtsgericht München", "Registernummer: HRB 300461"],
      },
      vat: {
        title: "Umsatzsteuer-ID",
        body: "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE453587263",
      },
      responsible: {
        title: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
        lines: ["Christian Schuhbaum", "Waldmeisterstr. 31", "80935 München"],
      },
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
export type ApplyFormCopy = Dictionary["apply"]["form"];

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
