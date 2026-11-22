import type { Metadata, Viewport } from "next";
import { Jost, Manrope } from "next/font/google";
import { TAB_ICON_32, TAB_ICON_192 } from "@/components/tab-icon-data";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#0e0f12",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://elevatebuildtech.com"),
  title: {
    default: "Elevate Build Tech | Architecture, Construction & PMC in Sagar, Karnataka",
    template: "%s | Elevate Build Tech",
  },
  description:
    "Elevate Build Tech brings architecture, construction, and project management together into one seamless team. Spaces designed to rise across Sagar and the Malnad region.",
  keywords: [
    "Elevate Build Tech",
    "Architecture Sagar",
    "Construction Sagar Karnataka",
    "PMC Malnad",
    "Project Management Consultancy Karnataka",
    "Architects in Sagar",
    "Civil Engineering Sagar",
    "Turnkey Construction Karnataka",
    "Building Contractor Sagar",
    "Residential Architecture Malnad",
    "Commercial Construction Sagar",
  ],
  authors: [{ name: "Elevate Build Tech", url: "https://elevatebuildtech.com" }],
  creator: "Elevate Build Tech",
  publisher: "Elevate Build Tech",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: TAB_ICON_32, sizes: "32x32", type: "image/png" },
      { url: TAB_ICON_192, sizes: "192x192", type: "image/png" },
    ],
    shortcut: TAB_ICON_32,
    apple: [
      { url: TAB_ICON_192, sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Elevate Build Tech | Spaces Designed to Rise",
    description:
      "One team from first sketch to final handover. Architecture, Construction & PMC building across Sagar and the Malnad region.",
    url: "https://elevatebuildtech.com",
    siteName: "Elevate Build Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elevate Build Tech - Architecture, Construction, PMC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate Build Tech | Spaces Designed to Rise",
    description:
      "Three disciplines. One structure. Always rising. Architecture, Construction, and Project Management in Sagar, Karnataka.",
    images: ["/og-image.png"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Elevate Build Tech",
    alternateName: "Elevate BuildTech Sagar",
    description:
      "Integrated Architecture, Construction, and Project Management Consultancy (PMC) firm based in Sagar, Karnataka, building across the Malnad region.",
    url: "https://elevatebuildtech.com",
    telephone: "+919019708760",
    email: "elevatebuildtech02@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Road",
      addressLocality: "Sagar",
      addressRegion: "Karnataka",
      postalCode: "577401",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "14.1670",
      longitude: "75.0298",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Sagar",
      },
      {
        "@type": "AdministrativeArea",
        name: "Shivamogga District",
      },
      {
        "@type": "AdministrativeArea",
        name: "Malnad Region",
      },
      {
        "@type": "State",
        name: "Karnataka",
      },
    ],
    image: "https://elevatebuildtech.com/og-image.png",
    logo: "https://elevatebuildtech.com/ebt-horizontal-ivory-copper.png",
    knowsAbout: [
      "Architectural Design",
      "Civil Construction",
      "Project Management Consultancy (PMC)",
      "Site Execution",
      "Structural Engineering",
      "Turnkey Building Solutions",
    ],
    priceRange: "₹₹ - ₹₹₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you handle both architectural design and on-site civil construction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Elevate Build Tech is an integrated firm. That means our architects, structural engineers, and site execution contractors work under one unified team. This eliminates the common blame game between architects and third-party contractors and ensures what is drawn on paper is executed precisely on site.",
        },
      },
      {
        "@type": "Question",
        name: "How do you engineer buildings for the heavy Malnad monsoon climate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Western Ghats receive substantial rainfall. We integrate deep overhang eaves, specialized multi-layer foundation waterproofing, sloping roof profiles, damp-proof courses, and optimized natural cross-ventilation to prevent moisture retention and ensure structural longevity for generations.",
        },
      },
      {
        "@type": "Question",
        name: "What is Project Management Consultancy (PMC) and why is it essential?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PMC is your independent quality assurance and financial control team. We oversee vendor procurement, conduct rigorous lab testing on cement and steel, verify contractor bills before payment, and ensure the project remains strictly within the scheduled timeline and budget.",
        },
      },
      {
        "@type": "Question",
        name: "How do you prevent budget overruns and unexpected hidden costs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Before a single brick is laid, we provide a complete, computerized Bill of Quantities (BOQ) with fixed itemized rates. Every milestone is pre-agreed with transparent payment schedules linked directly to certified on-site progress.",
        },
      },
      {
        "@type": "Question",
        name: "Can you assist with local municipal approvals and plan sanctions in Sagar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our team assists with preparing sanction-compliant architectural drawings, structural safety certificates, and documentation required for Sagar City Municipality (CMC) and local Gram Panchayat building permissions.",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${manrope.variable} ${jost.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href={TAB_ICON_32} />
        <link rel="icon" type="image/png" sizes="192x192" href={TAB_ICON_192} />
        <link rel="shortcut icon" href={TAB_ICON_32} />
        <link rel="apple-touch-icon" sizes="180x180" href={TAB_ICON_192} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="bg-elevate-black text-foreground antialiased selection:bg-elevate-terracotta selection:text-white">
        {children}
      </body>
    </html>
  );
}
