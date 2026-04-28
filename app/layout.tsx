import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Maria Navin-Lassiter | Real Estate Agent | Denver, CO | Century 21 Moore Real Estate",
  description:
    "Maria Navin-Lassiter — trusted real estate agent serving Denver, Brighton, Westminster, Thornton, Arvada & surrounding Colorado communities. 20+ years experience. Call (720) 401-1889.",
  keywords: [
    "real estate agent Denver CO",
    "homes for sale Denver Colorado",
    "Maria Navin-Lassiter realtor",
    "Century 21 Moore Real Estate",
    "Brighton CO homes for sale",
    "Westminster CO real estate",
    "Thornton CO realtor",
    "Arvada homes for sale",
    "Broomfield real estate agent",
    "Denver metro real estate",
    "buy home Denver",
    "sell home Denver",
    "first time home buyer Denver",
  ],
  openGraph: {
    title: "Maria Navin-Lassiter | Real Estate Agent | Denver, CO",
    description: "20+ years helping families buy & sell homes across the Denver metro area. Call (720) 401-1889.",
    url: "https://www.mariacoloradorealty.com",
    siteName: "Maria Navin-Lassiter Real Estate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maria Navin-Lassiter | Real Estate Agent | Denver, CO",
    description: "20+ years helping families buy & sell homes across the Denver metro area. Call (720) 401-1889.",
  },
  alternates: {
    canonical: "https://www.mariacoloradorealty.com",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Maria Navin-Lassiter",
  "image": "https://www.mariacoloradorealty.com/Maria.jpg",
  "url": "https://www.mariacoloradorealty.com",
  "telephone": "+17204011889",
  "email": "contact@mariacoloradorealty.com",
  "description": "Maria Navin-Lassiter is a real estate agent with 20+ years of experience serving Denver, Brighton, Westminster, Thornton, Arvada, Broomfield and the surrounding Colorado communities.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Denver",
    "addressRegion": "CO",
    "addressCountry": "US"
  },
  "areaServed": [
    "Denver, CO",
    "Brighton, CO",
    "Westminster, CO",
    "Thornton, CO",
    "Arvada, CO",
    "Broomfield, CO",
    "Commerce City, CO",
    "Northglenn, CO",
    "Lakewood, CO",
    "Aurora, CO"
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "Century 21 Moore Real Estate"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php/?id=100086286259197"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
