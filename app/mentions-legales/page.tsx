import { Metadata } from 'next'
import { Card, CardContent } from '@/src/components/ui/card'

export const metadata: Metadata = {
  title: "Mentions légales | Alexandre Magalhães Électricien",
  description: "Mentions légales du site d'Alexandre Magalhães, électricien professionnel à Ramonville-Saint-Agne.",
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8 md:p-12">
              <h1 className="text-4xl font-bold text-foreground mb-8">Mentions légales</h1>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Éditeur du site</h2>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>Alexandre Magalhães</strong></p>
                  <p>Électricien professionnel</p>
                  <p>Ramonville-Saint-Agne 31520</p>
                  <p>SIREN : 504438714RM31</p>
                  <p>Email : <a href="mailto:rdielectricite@laposte.net" className="text-blue-600 hover:underline">rdielectricite@laposte.net</a></p>
                  <p>Téléphone : <a href="tel:+33603442495" className="text-blue-600 hover:underline">06 03 44 24 95</a></p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Directeur de publication</h2>
                <p className="text-muted-foreground">Alexandre Magalhães</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Hébergement</h2>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>Vercel Inc.</strong></p>
                  <p>340 S Lemon Ave #4133</p>
                  <p>Walnut CA 91789, USA</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Propriété intellectuelle</h2>
                <p className="text-muted-foreground">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. 
                  La reproduction de tout ou partie de ce site sur un support électronique ou autre est formellement interdite sauf autorisation expresse de l'éditeur.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies</h2>
                <p className="text-muted-foreground">
                  Ce site n'utilise aucun cookie tiers. Aucune donnée de navigation n'est collectée à des fins publicitaires ou analytiques.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

