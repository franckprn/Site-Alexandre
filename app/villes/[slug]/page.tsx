import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react'
import { cities } from '@/lib/cities'
import ContactForm from '@/components/ContactForm'
import { Button } from '@/src/components/ui/button'
import { Card } from '@/src/components/ui/card'

export function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const city = cities.find((c) => c.slug === params.slug)
  if (!city) return {}
  return {
    title: `Électricien ${city.name} | Intervention Rapide | Devis Gratuit`,
    description: `Électricien professionnel à ${city.name}. Basé à Ramonville, intervention en ${city.time}. Dépannage 7j/7, installation, rénovation électrique.`,
    openGraph: {
      title: `Électricien ${city.name} - Alexandre Magalhaes`,
      description: `Service d'électricité rapide à ${city.name}. Devis gratuit.`,
    }
  }
}

export default function VillePage({ params }: { params: { slug: string } }) {
  const city = cities.find((c) => c.slug === params.slug)
  if (!city) notFound()

  const services = [
    "Dépannage électrique urgent",
    "Installation électrique complète",
    "Rénovation tableau électrique",
    "Mise aux normes NF C 15-100",
    "Domotique et objets connectés",
    "Installation borne de recharge"
  ]

  const faqs = [
    {
      q: `Quel est votre délai d'intervention à ${city.name} ?`,
      a: `Nous intervenons à ${city.name} en ${city.time} maximum depuis notre base à Ramonville. En cas d'urgence, nous pouvons être sur place encore plus rapidement.`
    },
    {
      q: `Quels quartiers de ${city.name} couvrez-vous ?`,
      a: `Nous intervenons dans tous les quartiers de ${city.name}, notamment ${city.quartiers.join(', ')}.`
    },
    {
      q: `Faites-vous des devis gratuits à ${city.name} ?`,
      a: `Oui, tous nos devis sont gratuits et sans engagement. Nous nous déplaçons à ${city.name} pour évaluer vos besoins et vous proposer une solution adaptée.`
    },
    {
      q: `Intervenez-vous en urgence le week-end à ${city.name} ?`,
      a: `Oui, nous assurons un service de dépannage 7j/7 à ${city.name}. Appelez-nous au 06 03 44 24 95 pour toute urgence.`
    },
    {
      q: `Êtes-vous certifié et assuré ?`,
      a: `Oui, nous sommes un électricien qualifié avec 15 ans d'expérience, certifié et entièrement assuré pour tous nos travaux à ${city.name}.`
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-700">Accueil</Link>
            <span>/</span>
            <Link href="/#zone-intervention" className="hover:text-blue-700">Villes</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{city.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Électricien à {city.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Intervention rapide en {city.time} • Devis gratuit • 15 ans d'expérience
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Phone className="mr-2 h-5 w-5" />
              06 03 44 24 95
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-blue-800 hover:bg-gray-100">
              Devis gratuit
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>À {city.distance} de notre base</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Intervention en {city.time}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">
              Votre électricien de confiance à {city.name}
            </h2>
            <div className="prose prose-lg">
              <p>
                {city.description} Depuis 2008, nous accompagnons les particuliers et professionnels 
                de {city.name} pour tous leurs besoins en électricité.
              </p>
              <p>
                Que vous ayez besoin d'un <strong>dépannage électrique urgent à {city.name}</strong>, 
                d'une installation complète ou d'une rénovation de votre tableau électrique, 
                notre équipe intervient rapidement avec du matériel professionnel et un savoir-faire reconnu.
              </p>
              <p>
                Basés à Ramonville-Saint-Agne, nous connaissons parfaitement {city.name} et ses quartiers 
                ({city.quartiers.join(', ')}). Cette proximité nous permet de vous garantir une intervention 
                rapide en {city.time} maximum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Nos services d'électricité à {city.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{service}</h3>
                    <p className="text-sm text-gray-600">
                      Service professionnel à {city.name}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Pourquoi nous choisir à {city.name} ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <MapPin className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Proximité</h3>
              <p className="text-gray-600">
                À seulement {city.distance}, nous intervenons rapidement à {city.name}
              </p>
            </Card>
            <Card className="p-8 text-center">
              <Clock className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Réactivité</h3>
              <p className="text-gray-600">
                Intervention garantie en {city.time} maximum
              </p>
            </Card>
            <Card className="p-8 text-center">
              <CheckCircle className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Expertise</h3>
              <p className="text-gray-600">
                15 ans d'expérience à {city.name} et ses environs
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Questions fréquentes sur nos services à {city.name}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-6">
                <h3 className="font-bold text-lg mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'un électricien à {city.name} ?
            </h2>
            <p className="text-xl text-gray-600">
              Contactez-nous pour un devis gratuit
            </p>
          </div>
          <ContactForm defaultCity={city.name} />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Urgence électrique à {city.name} ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Appelez-nous maintenant, nous intervenons en {city.time}
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Phone className="mr-2 h-5 w-5" />
            06 03 44 24 95
          </Button>
        </div>
      </section>
    </div>
  )
}

