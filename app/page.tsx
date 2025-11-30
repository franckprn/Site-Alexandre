import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Avis from '@/components/home/Avis'
import About from '@/components/home/About'
import ZoneIntervention from '@/components/home/ZoneIntervention'
import CTA from '@/components/home/CTA'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: "Électricien Ramonville-Saint-Agne (31520) | Dépannage & Installation | Alexandre Magalhães",
  description: "Électricien professionnel à Ramonville-Saint-Agne. Intervention rapide Ramonville, Castanet, Labège et environs. Dépannage 7j/7, installation, rénovation. Devis gratuit.",
  openGraph: {
    title: "Électricien Ramonville-Saint-Agne (31520) | Dépannage & Installation | Alexandre Magalhães",
    description: "Électricien professionnel à Ramonville-Saint-Agne. Intervention rapide Ramonville, Castanet, Labège et environs. Dépannage 7j/7, installation, rénovation. Devis gratuit.",
    type: "website",
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Electrician",
            "name": "Alexandre Magalhaes - Électricien Ramonville",
            "image": "https://www.electricienramonville.fr/logo.jpg",
            "telephone": "+33603442495",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ramonville-Saint-Agne",
              "postalCode": "31520",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 43.5447,
              "longitude": 1.4783
            },
            "url": "https://www.electricienramonville.fr",
            "priceRange": "€€",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "07:00",
                "closes": "19:00"
              }
            ],
            "areaServed": [
              {"@type": "City", "name": "Ramonville-Saint-Agne"},
              {"@type": "City", "name": "Labège"},
              {"@type": "City", "name": "Castanet-Tolosan"},
              {"@type": "City", "name": "Auzeville-Tolosane"},
              {"@type": "City", "name": "Escalquens"},
              {"@type": "City", "name": "Mervilla"},
              {"@type": "City", "name": "Pechbusque"},
              {"@type": "City", "name": "Vieille-Toulouse"},
              {"@type": "City", "name": "Lacroix-Falgarde"},
              {"@type": "City", "name": "Saint-Orens-de-Gameville"}
            ],
            "sameAs": ["https://share.google/ynUMQHoTRzDkJcIKD"]
          })
        }}
      />
      <Hero />
      <Services />
      <Avis />
      <About />
      <ZoneIntervention />
      <CTA />
      <a 
        href="tel:+33603442495" 
        className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Appeler maintenant"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  )
}


