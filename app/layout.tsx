import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PetitPetit Enterprise | Affordable Luxury Homes in Lagos",
  description:
    "Discover your dream home in Lagos, Nigeria. PetitPetit Enterprise specializes in affordable luxury homes and apartments for young professionals and families. Properties from ₦50M to ₦200M.",
  keywords:
    "Lagos real estate, luxury homes Lagos, affordable apartments Nigeria, property Lagos, PetitPetit Enterprise, Victoria Island, Lekki, Ikoyi",
  openGraph: {
    title: "PetitPetit Enterprise | Affordable Luxury Homes in Lagos",
    description: "Discover your dream home in Lagos, Nigeria with PetitPetit Enterprise.",
    type: "website",
    locale: "en_NG",
    siteName: "PetitPetit Enterprise",
  },
  twitter: {
    card: "summary_large_image",
    title: "PetitPetit Enterprise | Luxury Homes Lagos",
    description: "Discover your dream home in Lagos, Nigeria.",
  },
  robots: "index, follow",
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#243E60",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "PetitPetit Enterprise",
              description: "Affordable luxury homes and apartments in Lagos, Nigeria",
              url: "https://petitpetit.ng",
              logo: "https://petitpetit.ng/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Plot 123, Admiralty Way",
                addressLocality: "Victoria Island",
                addressRegion: "Lagos",
                addressCountry: "NG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "6.4281591",
                longitude: "3.4226018",
              },
              telephone: "+234-801-234-5678",
              email: "info@petitpetit.ng",
              priceRange: "₦50M - ₦200M",
              openingHours: "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
              sameAs: [
                "https://facebook.com/petitpetit",
                "https://twitter.com/petitpetit",
                "https://instagram.com/petitpetit",
                "https://linkedin.com/company/petitpetit",
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Luxurious 3-Bed Apartment Victoria Island",
                    description: "Premium 3-bedroom apartment in Victoria Island with city views",
                  },
                  price: "85000000",
                  priceCurrency: "NGN",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Modern 4-Bed Duplex Lekki",
                    description: "Magnificent 4-bedroom duplex in Lekki Phase 1",
                  },
                  price: "150000000",
                  priceCurrency: "NGN",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
