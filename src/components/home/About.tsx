import { Award, Users, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Expertise reconnue",
      description: "Plus de 15 ans d'expérience dans tous types de travaux électriques",
    },
    {
      icon: Users,
      title: "Équipe qualifiée",
      description: "Des professionnels certifiés et formés aux dernières normes",
    },
    {
      icon: Clock,
      title: "Disponibilité 7j/7",
      description: "Service d'urgence disponible tous les jours de la semaine",
    },
    {
      icon: Shield,
      title: "Garantie & Assurance",
      description: "Tous nos travaux sont garantis et assurés pour votre tranquillité",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            À propos d'Alexandre Magalhaes, électricien à Toulouse
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Électricien passionné et professionnel, je mets mon savoir-faire au service de vos projets depuis 2008
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Une passion devenue métier
            </h3>
            <p className="text-muted-foreground mb-4">
              Depuis plus de 15 ans, j'exerce mon métier d'<strong>électricien Toulouse</strong> avec passion et engagement. 
              Basé à Toulouse, je propose mes services aux particuliers et professionnels de la région 
              pour tous types de travaux électriques.
            </p>
            <p className="text-muted-foreground mb-4">
              De l'installation complète à la simple réparation, en passant par la mise aux normes et 
              la domotique, je m'adapte à tous vos besoins avec un souci permanent de qualité et de sécurité.
            </p>
            <p className="text-muted-foreground">
              Mon objectif : vous garantir des installations électriques sûres, performantes et conformes 
              aux normes en vigueur, tout en vous offrant un service personnalisé et des conseils adaptés 
              à votre projet.
            </p>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Image
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80"
              alt="Électricien au travail"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
