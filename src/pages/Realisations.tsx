import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import realisation1 from "@/assets/realisation-1.jpg";
import realisation2 from "@/assets/realisation-2.jpg";
import realisation3 from "@/assets/realisation-3.jpg";
import realisation4 from "@/assets/realisation-4.jpg";
import realisation5 from "@/assets/realisation-5.jpg";
import realisation6 from "@/assets/realisation-6.jpg";

const Realisations = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      category: "installation",
      title: "Installation électrique complète",
      location: "Toulouse Centre",
      year: "2024",
      description: "Mise aux normes complète avec nouveau tableau électrique",
      image: realisation1,
    },
    {
      category: "domotique",
      title: "Système domotique intelligent",
      location: "Colomiers",
      year: "2024",
      description: "Installation domotique complète avec contrôle de l'éclairage et du chauffage",
      image: realisation2,
    },
    {
      category: "climatisation",
      title: "Installation climatisation",
      location: "Blagnac",
      year: "2023",
      description: "Installation d'une climatisation réversible multi-split",
      image: realisation3,
    },
    {
      category: "renovation",
      title: "Dépannage électrique d'urgence",
      location: "Toulouse Sud",
      year: "2024",
      description: "Intervention rapide pour diagnostic et réparation",
      image: realisation4,
    },
    {
      category: "installation",
      title: "Installation fibre optique",
      location: "Tournefeuille",
      year: "2023",
      description: "Installation complète de réseau et fibre optique",
      image: realisation5,
    },
    {
      category: "renovation",
      title: "Mise aux normes électriques",
      location: "Ramonville",
      year: "2024",
      description: "Mise en conformité électrique complète avec certification",
      image: realisation6,
    },
  ];

  const categories = [
    { id: "all", label: "Tous les projets" },
    { id: "renovation", label: "Rénovation" },
    { id: "installation", label: "Installation" },
    { id: "domotique", label: "Domotique" },
    { id: "climatisation", label: "Climatisation" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Nos réalisations
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up">
              Découvrez quelques-uns de nos projets d'électricité à Toulouse et sa région
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  variant={filter === cat.id ? "default" : "outline"}
                  className={filter === cat.id ? "bg-gradient-hero" : ""}
                >
                  {cat.label}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-hover transition-all duration-300 cursor-pointer animate-fade-in-up border-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedImage(project.image)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Réalisation agrandie"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Realisations;
