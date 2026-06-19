import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Theresia.ai - Autonomous Research by Isar Innovations",
  description:
    "Theresia macht Quellen, Belege, offene Fragen und nächste Tests in einem prüfbaren Forschungsboard sichtbar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
