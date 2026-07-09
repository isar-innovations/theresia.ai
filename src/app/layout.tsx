import type { Metadata } from "next";
import { defaultLocale } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://theresia.ai"),
  title: {
    default: "Theresia",
    template: "%s",
  },
  description:
    "Theresia runs autonomous research agents that turn scientific papers into proof paths, product opportunities and IP for R&D teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale}>
      <body>{children}</body>
    </html>
  );
}
