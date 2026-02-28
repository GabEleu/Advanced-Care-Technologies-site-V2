import type { Metadata } from "next";
import { Lexend, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import { MainNavigation } from "@/components/site/MainNavigation";
import { Footer } from "@/components/site/Footer";
import { ScrollProgressBar } from "@/components/site/ScrollProgressBar";
import { LanguageWrapper } from "@/components/site/LanguageWrapper";

const lexend = Lexend({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800"],
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "800"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://gabeleu.github.io/Advanced-Care-Technologies-site-V2";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl.replace(/\/$/, "")}${basePath || ""}/`),
  title: {
    default: "Advanced Care Technologies",
    template: "%s | Advanced Care Technologies",
  },
  description:
    "Advanced Care Technologies conçoit des solutions medtech de suivi et d’aide au parcours de soin, à destination des patients et des professionnels de santé.",
  openGraph: {
    title: "Advanced Care Technologies",
    description:
      "Solutions medtech de suivi et d’aide à la décision, à destination des patients et des professionnels de santé.",
    type: "website",
    locale: "fr_FR",
    siteName: "Advanced Care Technologies",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Advanced Care Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${lexend.variable} ${montserratAlternates.variable} antialiased`}>
        <LanguageWrapper>
          <div className="min-h-svh bg-background text-foreground">
            <MainNavigation />
            <ScrollProgressBar />
            <main className="pt-16">{children}</main>
            <Footer />
          </div>
        </LanguageWrapper>
      </body>
    </html>
  );
}
