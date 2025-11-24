import { Metadata } from 'next'
import { Card, CardContent } from '@/src/components/ui/card'

export const metadata: Metadata = {
  title: "Politique de confidentialité | Alexandre Magalhães Électricien",
  description: "Politique de confidentialité et protection des données personnelles du site d'Alexandre Magalhães, électricien professionnel.",
}

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen pt-20 pb-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8 md:p-12">
              <h1 className="text-4xl font-bold text-foreground mb-8">Politique de confidentialité</h1>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Données collectées</h2>
                <p className="text-muted-foreground mb-4">
                  Dans le cadre de l'utilisation du formulaire de contact, les données suivantes peuvent être collectées :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Nom</li>
                  <li>Email</li>
                  <li>Téléphone</li>
                  <li>Message (contenu de la demande)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Finalité</h2>
                <p className="text-muted-foreground">
                  Les données collectées sont utilisées exclusivement pour le traitement des demandes de devis et la prise de contact. 
                  Aucune donnée n'est utilisée à des fins commerciales ou transmise à des tiers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Durée de conservation</h2>
                <p className="text-muted-foreground">
                  Les données personnelles sont conservées pendant une durée maximale de 3 ans à compter de la dernière interaction, 
                  sauf obligation légale ou réglementaire nécessitant une conservation plus longue.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Droits RGPD</h2>
                <p className="text-muted-foreground mb-4">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Droit d'accès : vous pouvez demander l'accès à vos données personnelles</li>
                  <li>Droit de rectification : vous pouvez demander la correction de vos données</li>
                  <li>Droit à l'effacement : vous pouvez demander la suppression de vos données</li>
                  <li>Droit à la portabilité : vous pouvez demander la récupération de vos données</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : 
                  <a href="mailto:rdielectricite@laposte.net" className="text-blue-600 hover:underline ml-1">rdielectricite@laposte.net</a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies</h2>
                <p className="text-muted-foreground">
                  Ce site n'utilise aucun cookie analytique ou publicitaire. Aucun suivi de navigation n'est effectué.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Sécurité</h2>
                <p className="text-muted-foreground">
                  Le site est hébergé sur Vercel, une plateforme sécurisée conforme aux standards de sécurité les plus élevés. 
                  Les données transmises via le formulaire de contact sont chiffrées en transit (HTTPS).
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

