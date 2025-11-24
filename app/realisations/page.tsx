"use client"
import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/src/components/ui/card'
import { Button } from '@/src/components/ui/button'
import { Dialog, DialogContent } from '@/src/components/ui/dialog'
import PageHero from '@/components/PageHero'
import realisation3 from '@/src/assets/realisation-3.jpg'

export default function RealisationsPage() {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null)
  const [filter, setFilter] = useState('all')

  const projects = [
    { category: 'climatisation', title: 'Installation climatisation', location: 'Blagnac', year: '2023', description: "Installation d'une climatisation réversible multi-split", images: [realisation3] },
    { category: 'installation', title: 'Pose de luminaire', location: 'Ramonville', year: '2024', description: "Installation de luminaires modernes pour un éclairage optimal", images: ['/luminaire.jpeg', '/luminaire2.jpeg'] },
    { category: 'maintenance', title: 'Maintenance de compteur électrique', location: 'Castanet-Tolosan', year: '2025', description: "Maintenance et remplacement de compteur électrique", images: ['/compteur avant.jpeg', '/compteur après.jpeg'] },
    { category: 'installation', title: 'Pose de luminaire', location: 'Vieille-Toulouse', year: '2025', description: "Installation de luminaire design pour éclairage intérieur", images: ['/luminaire3.jpeg'] },
    { category: 'installation', title: 'Installation électrique complète', location: 'Toulouse', year: '2024', description: "Installation électrique complète pour rénovation", images: ['/travaux.jpeg'] },
    { category: 'installation', title: "Installation électrique d'une cuisine neuve", location: 'Toulouse', year: '2025', description: "Installation électrique complète pour une cuisine neuve", images: ['/cuisine.jpeg'] },
  ]

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'installation', label: 'Installation' },
    { id: 'climatisation', label: 'Climatisation' },
    { id: 'maintenance', label: 'Maintenance' },
  ]

  // Trier par année décroissante (plus récent en premier)
  const sortedProjects = [...projects].sort((a, b) => parseInt(b.year) - parseInt(a.year))
  const filteredProjects = filter === 'all' ? sortedProjects : sortedProjects.filter((p) => p.category === filter)

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
            {filteredProjects.map((project, index) => {
              const imageSources = project.images.map(img => typeof img === 'string' ? img : img.src)
              const hasTwoImages = project.images.length === 2
              
              return (
                <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2" onClick={() => setSelectedImages(imageSources)}>
                  <div className={`relative h-64 overflow-hidden ${hasTwoImages ? 'grid grid-cols-2 gap-0' : ''}`}>
                    {hasTwoImages ? (
                      <>
                        <div className="relative overflow-hidden">
                          <Image src={imageSources[0]} alt={`${project.title} - Photo 1`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="relative overflow-hidden">
                          <Image src={imageSources[1]} alt={`${project.title} - Photo 2`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      </>
                    ) : (
                      <>
                        <Image src={imageSources[0]} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </>
                    )}
                    {project.images.length > 2 && (
                      <div className="absolute top-2 right-2 bg-background/80 px-2 py-1 rounded-full text-xs font-semibold z-10">
                        {project.images.length} photos
                      </div>
                    )}
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
              )
            })}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImages} onOpenChange={() => setSelectedImages(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImages && (
            <div className="space-y-4">
              {selectedImages.map((img, idx) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={idx} src={img} alt={`Réalisation ${idx + 1}`} className="w-full h-auto rounded-lg" />
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

