import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Theresia - Turn Frontier Science into Market Advantage",
  description:
    "Theresia runs autonomous research agents that turn scientific papers into proof paths, product opportunities and IP for R&D teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
