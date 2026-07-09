import Link from "next/link";
import { Locale, locales, localizedPath } from "@/lib/i18n";

type LanguagePickerProps = {
  label: string;
  locale: Locale;
  path: "/" | "/apply/" | "/impressum/";
};

export function LanguagePicker({ label, locale, path }: LanguagePickerProps) {
  return (
    <nav className="language-picker" aria-label={label}>
      {locales.map((targetLocale) => (
        <Link
          aria-current={targetLocale === locale ? "page" : undefined}
          className={targetLocale === locale ? "active" : undefined}
          href={localizedPath(targetLocale, path)}
          key={targetLocale}
        >
          {targetLocale.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
