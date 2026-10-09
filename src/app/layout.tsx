import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import SmoothScroll from "@/components/SmoothScroll";
import LanguageProvider from "@/components/LanguageProvider";

const sans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-instrument", subsets: ["latin"], weight: "400", style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.headline,
  openGraph: { title: `${site.name} — ${site.role}`, description: site.headline, type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable} ${serif.variable} antialiased`}>
      <head>
        {/* Evita el parpadeo de la intro si ya se vio en esta sesión o se entra con #ancla */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem("intro-seen")||location.hash)document.documentElement.dataset.intro="skip"}catch(e){}`,
          }}
        />
      </head>
      <body>
        <div className="marble-clouds" aria-hidden="true" />
        <div className="marble-veins" aria-hidden="true" />
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
