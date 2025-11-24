import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Testimonials from '@/components/home/Testimonials'
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
            "name": "Alexandre Magalhães - Électricien",
            "telephone": "+33603442495",
            "email": "rdielectricite@laposte.net",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ramonville-Saint-Agne",
              "postalCode": "31520",
              "addressCountry": "FR"
            },
            "areaServed": ["Ramonville-Saint-Agne", "Castanet-Tolosan", "Labège", "Auzeville-Tolosane", "Escalquens", "Péchabou", "Vieille-Toulouse", "Quint-Fonsegrives", "Balma"],
            "priceRange": "€€",
            "openingHours": "Mo-Su 00:00-23:59",
            "sameAs": ["https://www.facebook.com/profile.php?id=100091819618346"]
          })
        }}
      />
      <Hero />
      <Services />
      <Testimonials />
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


