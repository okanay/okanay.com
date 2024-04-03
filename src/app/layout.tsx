import type { Metadata } from "next";

import interFont from "@/assets/fonts/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Okan Ay - Full Stack Developer",
  description: "Full Stack Developer based in Istanbul, Turkey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={interFont.className}>{children}</body>
    </html>
  );
}
