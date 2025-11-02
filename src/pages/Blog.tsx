import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      category: "Conseils",
      title: "5 signes qu'il est temps de refaire votre installation électrique",
      excerpt: "Découvrez les principaux indicateurs qui montrent qu'une rénovation électrique est nécessaire pour votre sécurité.",
      date: "15 Mars 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600",
    },
    {
      category: "Réglementations",
      title: "Norme NF C 15-100 : tout ce qu'il faut savoir en 2024",
      excerpt: "Un guide complet sur la norme électrique française et ses dernières évolutions.",
      date: "10 Mars 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
    },
    {
      category: "Innovations",
      title: "La domotique : économies et confort au quotidien",
      excerpt: "Comment les systèmes domotiques peuvent transformer votre maison et réduire votre facture énergétique.",
      date: "5 Mars 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600",
    },
    {
      category: "Conseils",
      title: "Bien choisir son système de climatisation",
      excerpt: "Les différents types de climatisation et comment choisir le système adapté à vos besoins.",
      date: "28 Février 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1631545806609-7937a6c2c4e0?w=600",
    },
    {
      category: "Actualités",
      title: "Les aides financières pour vos travaux électriques",
      excerpt: "Tour d'horizon des différentes aides et subventions disponibles pour la rénovation électrique.",
      date: "20 Février 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600",
    },
    {
      category: "Innovations",
      title: "Véhicules électriques : installer une borne de recharge",
      excerpt: "Tout savoir sur l'installation d'une borne de recharge pour voiture électrique à domicile.",
      date: "15 Février 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600",
    },
  ];

  const categories = ["Tous", "Conseils", "Réglementations", "Innovations", "Actualités"];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Blog & Actualités
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up">
              Conseils, actualités et innovations dans le domaine de l'électricité
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <Badge
                  key={cat}
                  variant="outline"
                  className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {cat}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in-up border-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-gradient-accent">
                      {article.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-primary font-medium group-hover:text-accent transition-colors">
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
