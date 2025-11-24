import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent } from '@/src/components/ui/card'
import { Button } from '@/src/components/ui/button'
import Link from 'next/link'
import { Zap, Home, Wifi, Wind, Phone as PhoneIcon, Shield, CheckCircle2, Phone } from 'lucide-react'
import serviceDep from '@/src/assets/service-depannage.jpg'
import serviceInst from '@/src/assets/service-installation.jpg'
import serviceDomo from '@/src/assets/service-domotique.jpg'
import serviceClim from '@/src/assets/service-climatisation.jpg'
import serviceCourant from '@/src/assets/service-courant-faible.jpg'
import serviceConf from '@/src/assets/service-conformite.jpg'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: "Services Électricité Toulouse | Alexandre Magalhaes Électricien",
  description: "Dépannage, installation, rénovation électrique à Toulouse. Devis gratuit sous 24h. 15 ans d'expérience. Intervention rapide.",
  openGraph: {
    title: "Services Électricité Toulouse",
    description: "Électricien professionnel à Toulouse depuis 2008",
    type: "website",
  }
}

export default function ServicesPage() {
  const services = [
    { icon: Zap, title: 'Électricité générale & dépannage', description: "Intervention rapide pour tous vos problèmes électriques : pannes, courts-circuits, disjoncteurs qui sautent, prises défectueuses.", features: ['Dépannage urgent 7j/7', 'Recherche de panne', 'Réparation tableau électrique', 'Remplacement disjoncteurs'], image: serviceDep },
    { icon: Home, title: 'Installation & rénovation', description: "Installation électrique complète pour construction neuve, rénovation ou extension. Mise aux normes NF C 15-100.", features: ['Installation neuve', 'Rénovation complète', 'Extension électrique', 'Mise aux normes'], image: serviceInst },
    { icon: Wifi, title: 'Domotique & automatisation', description: "Transformez votre maison en habitat intelligent avec des solutions domotiques sur mesure pour plus de confort et d'économies.", features: ['Éclairage connecté', 'Chauffage intelligent', 'Volets automatisés', 'Contrôle à distance'], image: serviceDomo },
    { icon: Wind, title: 'Climatisation et volets roulants', description: "Installation, entretien et dépannage de systèmes de climatisation et motorisation de volets roulants pour votre confort toute l'année.", features: ['Climatisation réversible', 'Motorisation de volets roulants', 'Installation et entretien', 'Maintenance annuelle'], image: serviceClim },
    { icon: PhoneIcon, title: 'Courant faible', description: "Installation de systèmes de communication et de sécurité : interphone, vidéophone, réseau informatique, fibre optique.", features: ['Interphone vidéo', 'Réseau informatique', 'Fibre optique', 'Téléphonie'], image: serviceCourant },
    { icon: Shield, title: 'Diagnostic & conformité', description: "Diagnostic électrique obligatoire pour la vente ou la location, mise en conformité et conseils personnalisés.", features: ['Diagnostic obligatoire', 'Mise en conformité', 'Certificat Consuel', 'Conseils sécurité'], image: serviceConf },
  ]

  return (
    <div className="min-h-screen pt-20">
      <PageHero 
        title="Nos services d'électricité"
        description="Installation, rénovation, dépannage : découvrez toutes nos prestations"
        backgroundImage="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80"
      />

      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group bg-gradient-to-br from-blue-50 to-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-blue-100 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image src={service.image} alt={`Électricien Ramonville - ${service.title}`} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-600"></div>
            <div className="absolute inset-0 opacity-10">
              <Image 
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Besoin d'un devis personnalisé ?</h2>
              <p className="text-xl mb-8 text-blue-100">Contactez-nous pour un devis gratuit et sans engagement sous 24h</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:+33603442495">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg">
                    <Phone className="mr-2 h-5 w-5" />
                    06 03 44 24 95
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100 text-lg font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg">
                    Demander un devis
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

