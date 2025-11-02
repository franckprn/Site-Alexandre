"use client"
import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/src/components/ui/card'
import { Button } from '@/src/components/ui/button'
import { Dialog, DialogContent } from '@/src/components/ui/dialog'
import PageHero from '@/components/PageHero'
import realisation1 from '@/src/assets/realisation-1.jpg'
import realisation2 from '@/src/assets/realisation-2.jpg'
import realisation3 from '@/src/assets/realisation-3.jpg'
import realisation4 from '@/src/assets/realisation-4.jpg'
import realisation5 from '@/src/assets/realisation-5.jpg'
import realisation6 from '@/src/assets/realisation-6.jpg'

export default function RealisationsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState('all')

  const projects = [
    { category: 'installation', title: 'Installation électrique complète', location: 'Toulouse Centre', year: '2024', description: "Mise aux normes complète avec nouveau tableau électrique", image: realisation1 },
    { category: 'domotique', title: 'Système domotique intelligent', location: 'Colomiers', year: '2024', description: "Installation domotique complète avec contrôle de l'éclairage et du chauffage", image: realisation2 },
    { category: 'climatisation', title: 'Installation climatisation', location: 'Blagnac', year: '2023', description: "Installation d'une climatisation réversible multi-split", image: realisation3 },
    { category: 'renovation', title: "Dépannage électrique d'urgence", location: 'Toulouse Sud', year: '2024', description: 'Intervention rapide pour diagnostic et réparation', image: realisation4 },
    { category: 'installation', title: 'Installation fibre optique', location: 'Tournefeuille', year: '2023', description: 'Installation complète de réseau et fibre optique', image: realisation5 },
    { category: 'renovation', title: 'Mise aux normes électriques', location: 'Ramonville', year: '2024', description: 'Mise en conformité électrique complète avec certification', image: realisation6 },
  ]

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'renovation', label: 'Rénovation' },
    { id: 'installation', label: 'Installation' },
    { id: 'domotique', label: 'Domotique' },
    { id: 'climatisation', label: 'Climatisation' },
  ]

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className="min-h-screen pt-20">
      <PageHero 
        title="Nos réalisations"
        description="Découvrez quelques-uns de nos projets d'électricité à Toulouse et sa région"
        backgroundImage="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80"
      />

      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <Button key={cat.id} onClick={() => setFilter(cat.id)} variant={filter === cat.id ? 'default' : 'outline'} className={`${filter === cat.id ? 'bg-gradient-hero' : ''} rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg`}>
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2" onClick={() => setSelectedImage((project.image as unknown as any).src)}>
                <div className="relative h-64 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
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

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={selectedImage} alt="Réalisation agrandie" className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

