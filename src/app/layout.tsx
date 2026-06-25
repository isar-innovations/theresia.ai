import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Theresia.ai - Autonomous Research by Isar Innovations",
  description:
    "Agentische Forschung macht aus ungelösten Problemen neue Marktchancen.",
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
