import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../styles/globals.css";
import Link from "next/link";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "Axel Espinosa | %s",
    default: "Axel Espinosa | Inicio",
  },
  description:
    "Fullstack developer in Mexico, SAAS services, freelancers in Mexico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <nav className="bg-white shadow-md container mx-auto mt-3 rounded-full py-5  px-7 items-center flex border-gray-300">
          <section className="border-r border-r-blLinkck space-x-2 pr-5 flex items-center">
            <div className="h-10 w-10 rounded-full bg-yellow-200"></div>
            <Link href="" className="hover:text-blue-500">
              About
            </Link>
            <Link href="">Works</Link>
          </section>
          <section className="pl-5 space-x-3 flex-1">
            <Link href="">Twitter</Link>
            <Link href="">Dribble</Link>
            <Link href="">LinkedIn</Link>
          </section>

          <section>
            <Link
              href=""
              className="bg-emphasis text-black font-medium py-3 px-3 rounded-full hover:bg-yellow-300"
            >
              Pricing it{"'"}s free
            </Link>
          </section>
        </nav>
        {children}
      </body>
    </html>
  );
}
