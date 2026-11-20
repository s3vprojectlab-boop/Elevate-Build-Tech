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
      </head>
      <body className="bg-elevate-black text-foreground antialiased selection:bg-elevate-terracotta selection:text-white">
        {children}
      </body>
    </html>
  );
}
