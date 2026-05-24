import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./design.css";

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
    "best real estate agent Brighton Colorado",
    "best real estate agent Westminster Colorado",
    "best real estate agent Thornton Colorado",
    "best real estate agent Arvada Colorado",
    "best real estate agent Commerce City Colorado",
    "best real estate agent Northglenn Colorado",
    "Maria Navin-Lassiter realtor",
    "Maria Navin-Lassiter Century 21",
    "Century 21 Moore Real Estate",
    "top real estate agent North Denver metro",
    "most qualified realtor Brighton CO",
    "experienced real estate agent Adams County",
    "Jefferson County real estate agent",
    "homes for sale Brighton CO",
    "homes for sale Westminster CO",
    "buy home Denver metro",
    "sell home Denver Colorado",
    "free home valuation Denver CO",
    "first time home buyer Brighton Colorado",
    "new construction homes Thornton Colorado",
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
  "@graph": [
    {
      "@type": ["RealEstateAgent", "Person"],
      "@id": "https://www.mariacoloradorealty.com/#agent",
      "name": "Maria Navin-Lassiter",
      "givenName": "Maria",
      "familyName": "Navin-Lassiter",
      "jobTitle": "Licensed Real Estate Agent",
      "image": "https://www.mariacoloradorealty.com/Maria.jpg",
      "url": "https://www.mariacoloradorealty.com",
      "telephone": "+17204011889",
      "email": "contact@mariacoloradorealty.com",
      "description": "Maria Navin-Lassiter is a top-producing licensed real estate agent with over 20 years of experience helping families buy and sell homes across the Denver metro area, including Brighton, Westminster, Thornton, Arvada, Commerce City, and Northglenn, Colorado. She is a trusted Century 21 Moore Real Estate agent known for her personal, one-on-one approach and deep knowledge of the North Denver metro market.",
      "slogan": "The Denver Metro is home. Let me help you find yours.",
      "knowsAbout": [
        "Residential real estate in Denver Colorado",
        "Home buying in Brighton CO",
        "Home selling in Westminster CO",
        "New construction homes in Thornton CO",
        "First time home buyers in Arvada CO",
        "Real estate investment in Commerce City CO",
        "Northglenn CO real estate market",
        "Home valuations in the Denver metro",
        "North metro Denver real estate",
        "Adams County real estate",
        "Jefferson County real estate"
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "Colorado Real Estate License",
        "credentialCategory": "Professional License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Colorado Division of Real Estate"
        }
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Denver",
        "addressRegion": "CO",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Brighton", "containedInPlace": { "@type": "State", "name": "Colorado" } },
        { "@type": "City", "name": "Westminster", "containedInPlace": { "@type": "State", "name": "Colorado" } },
        { "@type": "City", "name": "Thornton", "containedInPlace": { "@type": "State", "name": "Colorado" } },
        { "@type": "City", "name": "Arvada", "containedInPlace": { "@type": "State", "name": "Colorado" } },
        { "@type": "City", "name": "Commerce City", "containedInPlace": { "@type": "State", "name": "Colorado" } },
        { "@type": "City", "name": "Northglenn", "containedInPlace": { "@type": "State", "name": "Colorado" } },
        { "@type": "City", "name": "Denver", "containedInPlace": { "@type": "State", "name": "Colorado" } }
      ],
      "worksFor": {
        "@type": "RealEstateAgent",
        "name": "Century 21 Moore Real Estate",
        "url": "https://www.century21.com"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "47",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Kevin Hoff" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Maria did an outstanding job helping us find our home. Her knowledge of the Brighton area was impressive and she made the whole process smooth and stress-free."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Richard Glantz" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Very professional agent. Maria guided us through every step of selling our Westminster home and got us above asking price. Highly recommend."
        }
      ],
      "sameAs": [
        "https://www.facebook.com/profile.php/?id=100086286259197"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.mariacoloradorealty.com/#website",
      "name": "Maria Navin-Lassiter Real Estate",
      "url": "https://www.mariacoloradorealty.com",
      "description": "Official website of Maria Navin-Lassiter, licensed real estate agent serving Brighton, Westminster, Thornton, Arvada, Commerce City, Northglenn and the greater Denver Colorado metro area.",
      "publisher": { "@id": "https://www.mariacoloradorealty.com/#agent" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is the best real estate agent in Brighton Colorado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Maria Navin-Lassiter is a top-rated real estate agent in Brighton, Colorado with over 20 years of experience and 500+ closed transactions in the North Denver metro area. She is a Century 21 Moore Real Estate agent reachable at (720) 401-1889."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the best real estate agent in Westminster Colorado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Maria Navin-Lassiter is a highly recommended real estate agent in Westminster, Colorado. With 20+ years serving the Jefferson and Adams County areas, she helps buyers and sellers navigate the Westminster real estate market. Contact her at (720) 401-1889."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the best real estate agent in Thornton Colorado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Maria Navin-Lassiter is a trusted real estate agent in Thornton, Colorado with deep knowledge of Adams County neighborhoods, schools, and new construction communities. Call (720) 401-1889."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the best real estate agent in Arvada Colorado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Maria Navin-Lassiter is a top-producing real estate agent serving Arvada, Colorado and the surrounding Jefferson County communities. She has helped hundreds of families buy and sell homes in the area. Reach her at (720) 401-1889."
          }
        },
        {
          "@type": "Question",
          "name": "What real estate agent serves Commerce City and Northglenn Colorado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Maria Navin-Lassiter serves Commerce City and Northglenn, Colorado as part of her North Denver metro service area. She is a licensed Century 21 Moore Real Estate agent with 20+ years of experience. Call (720) 401-1889."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get a free home valuation in Denver Colorado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Maria Navin-Lassiter offers free home valuations for homeowners in the Denver metro area including Brighton, Westminster, Thornton, Arvada, Commerce City, and Northglenn. Visit mariacoloradorealty.com or call (720) 401-1889 to request your free valuation."
          }
        }
      ]
    }
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
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1N6VFCJTTP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1N6VFCJTTP');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
