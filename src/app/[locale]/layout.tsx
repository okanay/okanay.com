import Providers from "@/providers";
import type { Metadata } from "next";

import interFont from "@/assets/fonts/inter";
import "./globals.css";
import loraFont from "@/assets/fonts/lora";
import chakraPetch from "@/assets/fonts/chakra-petch";

export const metadata: Metadata = {
  title: "Okan Ay - Full Stack Developer",
  description: "Full Stack Developer",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body
        className={`${loraFont.variable} ${chakraPetch.variable} font-chakra`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
