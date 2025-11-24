import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Toulouse Centre",
      rating: 5,
      comment: "Intervention rapide et professionnelle. Alexandre a résolu mon problème de tableau électrique en un rien de temps. Je recommande vivement !",
    },
    {
      name: "Jean Lefebvre",
      location: "Colomiers",
      rating: 5,
      comment: "Excellent travail pour l'installation de ma domotique. Très à l'écoute et de bons conseils. Prix honnête et travail soigné.",
    },
    {
      name: "Sophie Martin",
      location: "Blagnac",
      rating: 5,
      comment: "Très satisfaite de la mise aux normes de mon installation électrique. Travail propre et dans les délais. Un vrai professionnel !",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ils nous font confiance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="animate-fade-in-up bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
