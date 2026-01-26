import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "InfinityBox | Hygiene Made Sustainable",
    template: "%s | InfinityBox",
  },
  icons:{
    icon:'/IBlogo.ico'
  },
  description:
    "Pan-India operator delivering integrated ecosystem across sustainable hygiene solutions, eco-friendly packaging, commercial kitchens, and workforce enablement.",
  keywords: [
    "sustainable hygiene",
    "eco-friendly packaging",
    "commercial kitchen solutions",
    "workforce enablement",
    "hygiene solutions India",
    "sustainability compliance",
  ],
  authors: [{ name: "InfinityBox" }],
  creator: "InfinityBox",
  publisher: "InfinityBox",
  metadataBase: new URL("https://infinitybox.in"),
  alternates: {
    canonical: "https://infinitybox.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://infinitybox.in",
    siteName: "InfinityBox",
    title: "InfinityBox | Hygiene Made Sustainable",
    description:
      "Integrated ecosystem for sustainable hygiene, packaging, kitchens, and workforce solutions across India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "InfinityBox | Hygiene Made Sustainable",
    description:
      "Integrated ecosystem for sustainable hygiene, packaging, kitchens, and workforce solutions.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "InfinityBox",
              url: "https://infinitybox.in",
              logo: "https://infinitybox.in/logo.png",
              description:
                "Pan-India operator delivering integrated ecosystem across sustainable hygiene solutions, eco-friendly packaging, commercial kitchens, and workforce enablement.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body
        className={`${publicSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
