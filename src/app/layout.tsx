import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Axel Espinosa | Developer Advocate en AWS",
  description:
    "Developer Advocate en AWS para LATAM. Ingeniero de software apasionado por tecnologías cloud-native y la comunidad de desarrolladores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <div className="mesh-gradient" />
        <div className="relative z-10">{children}</div>

        <Script
          src="https://plausible.io/js/pa-PjOTxQltUWg6j9qjq8EBs.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){(plausible.o=i||{})};plausible.init()`}
        </Script>
      </body>
    </html>
  );
}
