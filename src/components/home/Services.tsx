import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Zap, Home, Wifi, Wind, Phone as PhoneIcon, Shield, ArrowRight } from "lucide-react";
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
      title: "Dépannage électrique",
      description: "Intervention rapide 7j/7 pour tous vos problèmes électriques",
      image: serviceDep,
    },
    {
      icon: Home,
      title: "Installation électrique",
      description: "Mise aux normes, rénovation et installation complète",
      image: serviceInst,
    },
    {
      icon: Wifi,
      title: "Domotique",
      description: "Automatisation et contrôle intelligent de votre habitat",
      image: serviceDomo,
    },
    {
      icon: Wind,
      title: "Climatisation et volets roulants",
      description: "Installation et entretien de systèmes de climatisation et motorisation de volets roulants",
      image: serviceClim,
    },
    {
      icon: PhoneIcon,
      title: "Courant faible",
      description: "Interphone, téléphonie, fibre optique et réseau",
      image: serviceCourant,
    },
    {
      icon: Shield,
      title: "Mise en conformité",
      description: "Diagnostic et mise aux normes électriques",
      image: serviceConf,
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une gamme complète de services pour tous vos besoins électriques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={service.image}
                  alt={`Électricien Ramonville - ${service.title}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button size="lg" variant="default" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto">
              Voir tous nos services
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
