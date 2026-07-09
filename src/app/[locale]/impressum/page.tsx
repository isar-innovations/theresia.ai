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

type ImpressumPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

async function resolveLocale(params: ImpressumPageProps["params"]): Promise<Locale> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return locale;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: ImpressumPageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = getDictionary(locale);

  return localizedMetadata(locale, "/impressum/", copy.legal.metadata);
}

export default async function ImpressumPage({ params }: ImpressumPageProps) {
  const locale = await resolveLocale(params);
  const copy = getDictionary(locale);

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <div className="legal-topline">
          <Link className="back-link" href={localizedPath(locale)}>
            {copy.legal.back}
          </Link>
          <LanguagePicker label={copy.nav.languageLabel} locale={locale} path="/impressum/" />
        </div>

        <h1>{copy.legal.title}</h1>
        <p>{copy.legal.intro}</p>
        {copy.legal.authoritativeNote ? (
          <p className="legal-note">{copy.legal.authoritativeNote}</p>
        ) : null}

        <section>
          <h2>{copy.legal.provider.title}</h2>
          <p>
            {copy.legal.provider.lines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </section>

        <section>
          <h2>{copy.legal.representedBy.title}</h2>
          <p>{copy.legal.representedBy.body}</p>
        </section>

        <section>
          <h2>{copy.legal.contact.title}</h2>
          <p>
            {copy.legal.contact.label}{" "}
            <a href="mailto:info@isar-innovations.dev">info@isar-innovations.dev</a>
          </p>
        </section>

        <section>
          <h2>{copy.legal.register.title}</h2>
          <p>
            {copy.legal.register.lines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </section>

        <section>
          <h2>{copy.legal.vat.title}</h2>
          <p>{copy.legal.vat.body}</p>
        </section>

        <section>
          <h2>{copy.legal.responsible.title}</h2>
          <p>
            {copy.legal.responsible.lines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </section>
      </div>
    </main>
  );
}
