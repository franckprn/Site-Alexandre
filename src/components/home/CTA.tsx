import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
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
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg">
              <Phone className="mr-2 h-5 w-5" />
              06 03 44 24 95
            </Button>
          </a>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              Demander un devis
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
