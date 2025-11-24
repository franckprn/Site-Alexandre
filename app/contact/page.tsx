import { Metadata } from 'next'
import { Card, CardContent } from '@/src/components/ui/card'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: "Contact Électricien Toulouse | Devis Gratuit 24h | Alexandre Magalhaes",
  description: "Contactez votre électricien à Toulouse pour un devis gratuit sous 24h ou un dépannage 7j/7. Intervention rapide sur Toulouse et alentours.",
  openGraph: {
    title: "Contact Électricien Toulouse",
    description: "Devis gratuit sous 24h - Dépannage 7j/7",
    type: "website",
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <PageHero 
        title="Contactez-nous"
        description="Une question ? Un projet ? Nous sommes à votre écoute"
        backgroundImage="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80"
      />

      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <Card className="bg-white shadow-2xl rounded-2xl border-0">
                <ContactForm />
              </Card>
            </div>

            <div>
              <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 p-3 rounded-full flex items-center justify-center shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Téléphone</h3>
                        <a href="tel:+33603442495" className="text-white/90 hover:text-white transition-colors">06 03 44 24 95</a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 p-3 rounded-full flex items-center justify-center shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a href="mailto:rdielectricite@laposte.net" className="text-white/90 hover:text-white transition-colors">rdielectricite@laposte.net</a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 p-3 rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Zone d'intervention</h3>
                        <p className="text-white/90">Ramonville-Saint-Agne et agglomération toulousaine sud</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 p-3 rounded-full flex items-center justify-center shrink-0">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Horaires</h3>
                        <p className="text-white/90">Lundi - Vendredi : 8h - 19h<br />Samedi : 9h - 17h<br /><span className="text-white font-medium">Dépannage d'urgence 7j/7</span></p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92685.71449827964!2d1.3628008!3d43.6044622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte de Toulouse"
        />
      </section>
    </div>
  )
}

