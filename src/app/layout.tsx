import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import WhatsAppButton from "./components/WhatsAppButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Druta Systems | High-Speed AI Software & SaaS Engineering Studio",
  description:
    "Druta Systems is a venture engineering studio architecting production-grade AI applications, custom SaaS platforms, video engines, and scalable cloud systems. 5+ years of verified full-stack expertise.",
  keywords: [
    "AI SaaS development agency",
    "custom software development India",
    "hire Next.js developers",
    "AI web app development studio",
    "full stack SaaS agency",
    "video processing web app build",
    "hire AI engineer",
    "Druta Systems",
  ],
  authors: [{ name: "Druta Systems Engineering Team" }],
  creator: "Druta Systems",
  publisher: "Druta Systems",
  metadataBase: new URL("https://drutasystems.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Druta Systems | Modern AI & Full-Stack Venture Studio",
    description:
      "Turn your vision into production-ready software in 2-4 weeks. Zero bloat, modern Next.js/AI architectures, and 100% commercial IP transfer.",
    url: "https://drutasystems.com",
    siteName: "Druta Systems",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Druta Systems Architecture Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Druta Systems | High-Speed AI & SaaS Studio",
    description: "Production-ready web software, AI tooling, and cloud platforms.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Structured Data / JSON-LD for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Druta Systems",
              "url": "https://drutasystems.com",
              "logo": "https://drutasystems.com/favicon.ico",
              "description":
                "Venture engineering studio building custom AI software, SaaS applications, and high-performance digital platforms.",
              "priceRange": "$$$",
              "openingHours": "Mo-Su 00:00-24:00",
              "serviceArea": "Worldwide",
              "areaServed": ["Worldwide", "United States", "United Kingdom", "India", "Europe"],
              "knowsAbout": [
                "Artificial Intelligence",
                "Next.js Development",
                "SaaS Architecture",
                "Cloud Computing",
                "Full Stack Web Development"
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        {children}
        <WhatsAppButton />
        <GoogleAnalytics gaId="G-8J2RC08FFN" />
      </body>
    </html>
  );
}