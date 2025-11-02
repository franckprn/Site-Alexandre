import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alexandre Magalhaes - Électricien à Toulouse',
  description: "Électricien professionnel à Toulouse. Dépannage 7j/7, installation, rénovation. Intervention rapide à Ramonville et alentours.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Alexandre Magalhaes - Électricien à Toulouse',
    description: "Dépannage électrique, installation, rénovation. Intervention rapide.",
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Alexandre Magalhaes Électricien",
            "image": "https://electricienramonville.fr/logo.png",
            "telephone": "+33603442495",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ramonville-Saint-Agne",
              "addressLocality": "Ramonville-Saint-Agne",
              "postalCode": "31520",
              "addressCountry": "FR"
            },
            "areaServed": [
              "Ramonville-Saint-Agne", "Auzeville-Tolosane", "Castanet-Tolosan",
              "Labège", "Lacroix-Falgarde", "Mervilla", "Pechbusque", 
              "Rebigue", "Vigoulet-Auzil", "Toulouse"
            ],
            "priceRange": "€€",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            }
          })
        }} />
        </Providers>
      </body>
    </html>
  )
}