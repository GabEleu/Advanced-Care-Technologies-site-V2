import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digiskin-act.fr"),
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
      <body className={`${nunito.variable} antialiased`}>
        <div className="min-h-svh bg-background text-foreground">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
