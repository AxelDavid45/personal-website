import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../styles/globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Axel Espinosa | Fullstack Developer",
  description:
    "Fullstack software engineer building valuable solutions with Node.js, React, and modern web technologies. Based in Mexico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {/* Background layers */}
        <div className="mesh-gradient" />
        <div className="noise-overlay" />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
