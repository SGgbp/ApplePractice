import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luma One | ApplePractice",
  description: "A polished Next.js practice site using Tailwind CSS, Framer Motion, and public APIs.",
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
