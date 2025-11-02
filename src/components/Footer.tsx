import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">AM</span>
              </div>
              <div>
                <span className="font-bold text-lg text-foreground">Alexandre Magalhaes</span>
                <p className="text-xs text-muted-foreground">Électricien depuis 2008</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Votre électricien de confiance à Toulouse pour tous vos travaux d'électricité, domotique et climatisation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/realisations" className="text-muted-foreground hover:text-primary transition-colors">Réalisations</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Dépannage électrique</li>
              <li>Installation électrique</li>
              <li>Domotique & automatisation</li>
              <li>Climatisation & chauffage</li>
              <li>Courant faible</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 mt-0.5 text-accent" />
                <a href="tel:+33603442495" className="hover:text-primary transition-colors">06 03 44 24 95</a>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 mt-0.5 text-accent" />
                <a href="mailto:contact@alexandre-electricien.fr" className="hover:text-primary transition-colors">
                  contact@alexandre-electricien.fr
                </a>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                <span>Toulouse et alentours (31)</span>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground text-sm">
                <Clock className="h-4 w-4 mt-0.5 text-accent" />
                <span>Lun-Dim: 7h30-19h30</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} Alexandre Magalhaes - Électricien Toulouse. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
