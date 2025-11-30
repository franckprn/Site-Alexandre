import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";

interface AvisItem {
  name: string;
  initial: string;
  avatarColor: string;
  rating: number;
  text: string;
  date: string;
  badge?: string;
}

const Avis = () => {
  const avis: AvisItem[] = [
    {
      name: "Candida Patricio",
      initial: "C",
      avatarColor: "#9C27B0",
      rating: 5,
      text: "Un électricien compétent et sérieux ! J'ai fait appel à cet électricien pour mon chantier, et je suis extrêmement satisfaite de son travail. Il est ponctuel, très sérieux, et réalise un travail de grande qualité. Tout s'est parfaitement déroulé, sans aucun souci, et le chantier a été géré de manière irréprochable. Si j'avais à nouveau besoin d'un électricien, je n'hésiterais pas une seconde à refaire appel à lui. Je le recommande vivement à toutes celles et ceux qui recherchent un professionnel compétent et fiable.",
      date: "Il y a 1 mois",
    },
    {
      name: "Olxann Olive",
      initial: "O",
      avatarColor: "#FF5722",
      rating: 5,
      text: "Super électricien, monsieur Magalhaes c'est occupé de la rénovation complète de notre maison. Super qualité de travail 👌 Je recommande sincèrement cette artisan",
      date: "Il y a 8 mois",
      badge: "Local Guide · 23 avis",
    },
    {
      name: "Carmen Carmen",
      initial: "C",
      avatarColor: "#00BCD4",
      rating: 5,
      text: "Electricien sérieux à recommander, très propre",
      date: "Il y a 2 ans",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nos avis Google
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-10">
          {avis.map((avisItem, index) => (
            <Card
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 flex flex-col"
            >
              <CardContent className="p-6 md:p-7 flex flex-col h-full">
                {/* Header avec avatar */}
                <div className="flex gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-xl flex-shrink-0"
                    style={{ backgroundColor: avisItem.avatarColor }}
                    aria-label={`Avatar de ${avisItem.name}`}
                  >
                    {avisItem.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1.5">
                      {avisItem.name}
                    </h3>
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(avisItem.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    {avisItem.badge && (
                      <div className="text-sm text-muted-foreground mt-1">
                        {avisItem.badge}
                      </div>
                    )}
                  </div>
                </div>

                {/* Texte de l'avis */}
                <p className="text-muted-foreground leading-relaxed text-[15px] mb-5 flex-grow">
                  {avisItem.text}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <span className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                    <span className="text-base">🔍</span>
                    Google
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {avisItem.date}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bouton CTA */}
        <div className="text-center mt-8">
          <a
            href="https://share.google/ynUMQHoTRzDkJcIKD"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir tous nos avis sur Google"
          >
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg px-8 py-6 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Voir tous nos avis
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Avis;
