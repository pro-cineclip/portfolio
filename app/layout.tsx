import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Portfolio — Baptiste",
  description: "Designer & Développeur créatif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--text)]">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
