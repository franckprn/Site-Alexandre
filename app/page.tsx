import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Testimonials from '@/components/home/Testimonials'
import About from '@/components/home/About'
import CTA from '@/components/home/CTA'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: "Électricien Toulouse | Dépannage 7j/7 | Alexandre Magalhaes",
  description: "Électricien professionnel à Toulouse depuis 2008. Dépannage 7j/7, installation, rénovation électrique. Intervention rapide. Devis gratuit sous 24h.",
  openGraph: {
    title: "Électricien Toulouse - Alexandre Magalhaes",
    description: "Dépannage électrique, installation, rénovation à Toulouse. Intervention rapide 7j/7.",
    type: "website",
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <CTA />
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <a href="tel:+33603442495" className="block">
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-105">
            <Phone className="mr-2 h-5 w-5" />
            Appeler maintenant
          </Button>
        </a>
      </div>
    </div>
  )
}


