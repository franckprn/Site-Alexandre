import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ZoneIntervention = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Votre électricien à Ramonville et alentours
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Intervention rapide dans toute l'agglomération toulousaine sud : Ramonville-Saint-Agne, Castanet-Tolosan, Labège, Auzeville-Tolosane, Escalquens, Péchabou, Vieille-Toulouse, Quint-Fonsegrives et Balma.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ZoneIntervention;

