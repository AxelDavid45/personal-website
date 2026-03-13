import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../styles/globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Axel Espinosa | Developer Advocate at AWS",
  description:
    "Developer Advocate at AWS for LATAM. Ex software engineer passionate about cloud-native technologies and empowering the developer community.",
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
