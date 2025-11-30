import { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: "Zone d'intervention - Électricien Toulouse Sud-Est | Alexandre Magalhaes",
  description: "Alexandre Magalhaes intervient dans toute l'agglomération toulousaine sud-est : Ramonville, Labège, Castanet-Tolosan, Auzeville-Tolosane, Escalquens et environs.",
}

const villes = [
  {
    name: "Ramonville-Saint-Agne",
    description: "Ville principale d'intervention. Dépannage électrique rapide et installation complète pour particuliers et professionnels dans toute la commune.",
  },
  {
    name: "Labège",
    description: "Interventions régulières dans la zone technopole et résidentielle. Expertise en installations tertiaires et domotique pour particuliers.",
  },
  {
    name: "Castanet-Tolosan",
    description: "Service de proximité pour tous vos besoins électriques. Mise aux normes, rénovation et dépannage d'urgence 7j/7.",
  },
  {
    name: "Auzeville-Tolosane",
    description: "Électricien de confiance pour vos projets résidentiels et commerciaux. Devis gratuit et conseils personnalisés.",
  },
  {
    name: "Escalquens",
    description: "Interventions rapides pour dépannages et installations neuves. Disponibilité 7j/7 pour vos urgences électriques.",
  },
  {
    name: "Mervilla",
    description: "Service électricité complet pour particuliers et entreprises. Travaux sur mesure et respect des délais garantis.",
  },
  {
    name: "Pechbusque",
    description: "Électricien qualifié pour tous vos projets de rénovation et construction neuve. Artisan local de confiance.",
  },
  {
    name: "Vieille-Toulouse",
    description: "Expertise en rénovation électrique de bâtiments anciens et modernes. Mise en conformité et conseil technique.",
  },
  {
    name: "Lacroix-Falgarde",
    description: "Interventions professionnelles pour installations électriques complètes. Dépannage d'urgence et travaux programmés.",
  },
  {
    name: "Saint-Orens-de-Gameville",
    description: "Service électricité réactif pour particuliers et professionnels. Solutions adaptées à tous vos besoins électriques.",
  },
]

export default function ZoneInterventionPage() {
  return (
    <div className="min-h-screen pt-20">
      <PageHero 
        title="Zone d'intervention - Électricien Toulouse Sud-Est"
        description="Alexandre Magalhaes intervient dans toute l'agglomération toulousaine sud-est pour vos travaux d'électricité"
        backgroundImage="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80"
      />

      <section className="zone-intervention py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Zone d'intervention - Électricien Toulouse Sud-Est
          </h1>
          
          <p className="intro text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Alexandre Magalhaes intervient dans toute l'agglomération toulousaine sud-est pour vos travaux d'électricité, du simple dépannage à l'installation complète.
          </p>

          <div className="villes-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {villes.map((ville, index) => (
              <div key={index} className="ville-card bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-primary">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  📍 {ville.name}
                </h3>
                <p className="text-muted-foreground">{ville.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

