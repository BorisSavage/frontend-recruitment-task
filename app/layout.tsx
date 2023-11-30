import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Provider from "@/lib/Providers";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Montserrat } from "next/font/google";
import BackgroundDots from "@/components/BackgroundDots";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recruitment Task",
  description: "lorem ipsum",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${montserrat.variable} font-sans`}
    >
      <body className="relative bg-slate-100 font-montserrat text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        <Provider attribute="class" defaultTheme="light">
          <div className="flex justify-center">
            <div className="max-w-[1000px] grow">
              <Header />
              <BackgroundDots />
              <div className="space-y-8 pt-16">
                <BreadcrumbNav />
                {children}
              </div>
            </div>
          </div>
          <footer className="relative w-full pb-4 pt-32 text-center text-sm sm:text-base">
            Michał Borysewicz 2023 @ All rights reserved
          </footer>
        </Provider>
      </body>
    </html>
  );
}
