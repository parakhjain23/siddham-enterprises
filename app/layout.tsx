import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Siddham Enterprises - Premium Plastic Materials Supplier & Trader",
    template: "%s | Siddham Enterprises"
  },
  description: "Leading supplier and trader of plastic granules, masterbatches, and plastic tiles. Trusted supply chain expertise for industrial applications across India.",
  keywords: ["plastic granules", "masterbatches", "plastic tiles", "plastic supplier", "plastic trader", "industrial plastics", "plastic materials", "PP granules", "PE granules", "ABS granules", "PVC granules", "color masterbatch", "plastic supplier India", "plastic trader Delhi", "plastic materials supplier"],
  authors: [{ name: "Siddham Enterprises" }],
  creator: "Siddham Enterprises",
  publisher: "Siddham Enterprises",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://siddhamenterprises.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Siddham Enterprises - Premium Plastic Materials Supplier & Trader",
    description: "Leading supplier and trader of plastic granules, masterbatches, and plastic tiles. Trusted supply chain expertise for industrial applications across India.",
    url: 'https://siddhamenterprises.com',
    siteName: 'Siddham Enterprises',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Siddham Enterprises - Plastic Materials Supplier',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Siddham Enterprises - Premium Plastic Materials Supplier & Trader",
    description: "Leading supplier and trader of plastic granules, masterbatches, and plastic tiles. Trusted supply chain expertise for industrial applications across India.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Siddham Enterprises",
    "description": "Leading supplier and trader of plastic granules, masterbatches, and plastic tiles. Trusted supply chain expertise for industrial applications across India.",
    "url": "https://siddhamenterprises.com",
    "logo": "https://siddhamenterprises.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-99999-99999",
      "contactType": "Sales",
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Industrial Area, Sector 15",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/siddham-enterprises",
      "https://twitter.com/siddhamenterprises"
    ],
    "foundingDate": "2009",
    "numberOfEmployees": "50-100",
    "industry": "Plastic Materials Trading",
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Plastic Materials Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Plastic Granules",
            "description": "High-quality PP, PE, ABS, and PVC granules"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Masterbatches",
            "description": "Color and additive masterbatches"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Plastic Tiles",
            "description": "Durable plastic tiles for flooring and walls"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
