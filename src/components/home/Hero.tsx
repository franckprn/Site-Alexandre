import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, FileText, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center text-white py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="/photo accueil.jpeg" 
          alt="Électricien professionnel au travail"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-blue-500/40 z-0"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <CheckCircle2 className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Depuis 2008 à votre service</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Électricien à Ramonville-Saint-Agne et agglomération toulousaine
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Dépannage 7j/7, installation électrique, domotique et climatisation.
            <br className="hidden md:block" />
            Intervention rapide sur Toulouse et ses alentours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="tel:+33603442495">
              <Button size="lg" variant="default" className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-200 hover:shadow-xl">
                <Phone className="mr-2 h-6 w-6" />
                Appelez-nous maintenant
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg font-semibold px-8 py-4 bg-white text-blue-800 hover:bg-gray-100 rounded-full shadow-lg hover:scale-105 transition-all duration-200 hover:shadow-xl">
                <FileText className="mr-2 h-6 w-6" />
                Demandez un devis
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { number: "15+", label: "Années d'expérience" },
              { number: "1000+", label: "Clients satisfaits" },
              { number: "24h", label: "Délai de réponse" },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
