import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/home/CTA";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, Home, Wifi, Wind, Phone as PhoneIcon, Shield, CheckCircle2 } from "lucide-react";
import serviceDep from "@/assets/service-depannage.jpg";
import serviceInst from "@/assets/service-installation.jpg";
import serviceDomo from "@/assets/service-domotique.jpg";
import serviceClim from "@/assets/service-climatisation.jpg";
import serviceCourant from "@/assets/service-courant-faible.jpg";
import serviceConf from "@/assets/service-conformite.jpg";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Électricité générale & dépannage",
      description: "Intervention rapide pour tous vos problèmes électriques : pannes, courts-circuits, disjoncteurs qui sautent, prises défectueuses.",
      features: ["Dépannage urgent 7j/7", "Recherche de panne", "Réparation tableau électrique", "Remplacement disjoncteurs"],
      image: serviceDep,
    },
    {
      icon: Home,
      title: "Installation & rénovation",
      description: "Installation électrique complète pour construction neuve, rénovation ou extension. Mise aux normes NF C 15-100.",
      features: ["Installation neuve", "Rénovation complète", "Extension électrique", "Mise aux normes"],
      image: serviceInst,
    },
    {
      icon: Wifi,
      title: "Domotique & automatisation",
      description: "Transformez votre maison en habitat intelligent avec des solutions domotiques sur mesure pour plus de confort et d'économies.",
      features: ["Éclairage connecté", "Chauffage intelligent", "Volets automatisés", "Contrôle à distance"],
      image: serviceDomo,
    },
    {
      icon: Wind,
      title: "Climatisation et volets roulants",
      description: "Installation, entretien et dépannage de systèmes de climatisation et motorisation de volets roulants pour votre confort toute l'année.",
      features: ["Climatisation réversible", "Motorisation de volets roulants", "Installation et entretien", "Maintenance annuelle"],
      image: serviceClim,
    },
    {
      icon: PhoneIcon,
      title: "Courant faible",
      description: "Installation de systèmes de communication et de sécurité : interphone, vidéophone, réseau informatique, fibre optique.",
      features: ["Interphone vidéo", "Réseau informatique", "Fibre optique", "Téléphonie"],
      image: serviceCourant,
    },
    {
      icon: Shield,
      title: "Diagnostic & conformité",
      description: "Diagnostic électrique obligatoire pour la vente ou la location, mise en conformité et conseils personnalisés.",
      features: ["Diagnostic obligatoire", "Mise en conformité", "Certificat Consuel", "Conseils sécurité"],
      image: serviceConf,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Nos services
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up">
              Une expertise complète pour tous vos besoins électriques à Toulouse et ses alentours
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-2 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image.src} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center space-x-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Card className="max-w-2xl mx-auto border-2 border-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Besoin d'un devis personnalisé ?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Contactez-nous pour un devis gratuit et sans engagement sous 24h
                  </p>
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-hero font-semibold text-lg px-8 py-4">
                      Demander un devis gratuit
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
