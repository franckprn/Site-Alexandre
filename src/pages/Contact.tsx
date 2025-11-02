import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Contactez-nous
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up">
              Une question ? Un projet ? Nous sommes à votre écoute
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <Card className="border-2">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Informations de contact
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center shrink-0">
                          <Phone className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                          <a href="tel:+33603442495" className="text-muted-foreground hover:text-primary transition-colors">
                            06 03 44 24 95
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center shrink-0">
                          <Mail className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Email</h3>
                          <a href="mailto:contact@alexandre-electricien.fr" className="text-muted-foreground hover:text-primary transition-colors">
                            contact@alexandre-electricien.fr
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center shrink-0">
                          <MapPin className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Zone d'intervention</h3>
                          <p className="text-muted-foreground">
                            Toulouse et ses alentours<br />
                            (Haute-Garonne - 31)
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center shrink-0">
                          <Clock className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Horaires</h3>
                          <p className="text-muted-foreground">
                            Lundi - Vendredi : 8h - 19h<br />
                            Samedi : 9h - 17h<br />
                            <span className="text-accent font-medium">Dépannage d'urgence 7j/7</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 bg-gradient-hero text-primary-foreground">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4">Temps de réponse</h3>
                    <p className="mb-4">
                      Nous nous engageons à vous répondre dans les <strong>24 heures</strong> suivant votre demande.
                    </p>
                    <p className="text-sm opacity-90">
                      Pour les urgences, n'hésitez pas à nous appeler directement au 06 03 44 24 95
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Demande de devis gratuit
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom *</Label>
                        <Input id="name" name="name" required placeholder="Votre nom" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input id="phone" name="phone" type="tel" required placeholder="06 03 44 24 95" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" required placeholder="votre@email.fr" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Type d'intervention *</Label>
                      <Select name="service" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="depannage">Dépannage électrique</SelectItem>
                          <SelectItem value="installation">Installation électrique</SelectItem>
                          <SelectItem value="domotique">Domotique</SelectItem>
                          <SelectItem value="climatisation">Climatisation</SelectItem>
                          <SelectItem value="courant-faible">Courant faible</SelectItem>
                          <SelectItem value="diagnostic">Diagnostic / Conformité</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Décrivez votre projet ou votre problème..."
                        rows={5}
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="urgent" name="urgent" />
                      <Label htmlFor="urgent" className="text-sm cursor-pointer">
                        C'est une urgence (réponse prioritaire)
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-hero font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      En soumettant ce formulaire, vous acceptez d'être recontacté par nos services.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92685.71449827964!2d1.3628008!3d43.6044622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte de Toulouse"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
