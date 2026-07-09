import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ApplyForm } from "@/components/ApplyForm";
import { LanguagePicker } from "@/components/LanguagePicker";
import {
  getDictionary,
  isLocale,
  Locale,
  locales,
  localizedMetadata,
  localizedPath,
} from "@/lib/i18n";

type ApplyPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

async function resolveLocale(params: ApplyPageProps["params"]): Promise<Locale> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return locale;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: ApplyPageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = getDictionary(locale);

  return localizedMetadata(locale, "/apply/", copy.apply.metadata);
}

export default async function ApplyPage({ params }: ApplyPageProps) {
  const locale = await resolveLocale(params);
  const copy = getDictionary(locale);

  return (
    <main className="apply-page">
      <header className="story-nav">
        <div className="site-shell story-nav-inner">
          <Link
            className="brand story-brand"
            href={localizedPath(locale)}
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
            <LanguagePicker label={copy.nav.languageLabel} locale={locale} path="/apply/" />
            <Link className="nav-apply" href={localizedPath(locale)}>
              <ArrowLeft size={16} aria-hidden="true" />
              <span>{copy.nav.back}</span>
            </Link>
          </div>
        </div>
      </header>

      <section className="apply-section">
        <div className="site-shell apply-layout">
          <div className="apply-copy">
            <h1>{copy.apply.title}</h1>
            <p>{copy.apply.copy}</p>
          </div>
          <ApplyForm copy={copy.apply.form} />
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
