"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/src/components/ui/card'
import { Button } from '@/src/components/ui/button'
import PageHero from '@/components/PageHero'

interface ProjectImage {
  src: string
  description: string
}

export default function RealisationsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filter, setFilter] = useState('all')

  // Toutes les images avec leurs descriptions
  const allImages: ProjectImage[] = [
    { src: '/realisations/luminaire.jpeg', description: "Éclairage ruban LED - Installation moderne et design à Ramonville" },
    { src: '/realisations/luminaire2.jpeg', description: "Éclairage ruban LED - Éclairage indirect et ambiance chaleureuse" },
    { src: '/realisations/compteur avant.jpeg', description: "Maintenance de compteur électrique à Castanet-Tolosan - Avant intervention" },
    { src: '/realisations/compteur après.jpeg', description: "Maintenance de compteur électrique à Castanet-Tolosan - Après intervention" },
    { src: '/realisations/luminaire3.jpeg', description: "Pose éclairage - Installation d'éclairage moderne à Vieille-Toulouse" },
    { src: '/realisations/travaux.jpeg', description: "Installation neuve - Rénovation électrique complète avec mise aux normes" },
    { src: '/realisations/cuisine.jpeg', description: "Installation neuve normes NFC15100 - Tableau électrique et prises conformes" },
    { src: '/realisations/clim1.jpeg', description: "Pose de climatisation - Installation système réversible multi-split" },
    { src: '/realisations/clim2.jpeg', description: "Pose de climatisation - Unité extérieure et gaines de ventilation" },
    { src: '/realisations/VMC_avant.jpeg', description: "Pose de VMC - Système de ventilation avant installation à Labège" },
    { src: '/realisations/VMC_apres.jpeg', description: "Pose de VMC - VMC double flux installée et opérationnelle" },
    { src: '/realisations/plaque_cuisson.jpeg', description: "Remplacement d'une plaque de cuisson - Installation électrique et raccordement" },
  ]

  const projects = [
    { category: 'installation', title: 'Éclairage ruban LED', location: 'Ramonville', year: '2024', description: "Installation d'éclairage ruban LED moderne pour ambiance design et éclairage indirect", imageIndexes: [0, 1] },
    { category: 'maintenance', title: 'Maintenance de compteur électrique', location: 'Castanet-Tolosan', year: '2025', description: "Maintenance et remplacement de compteur électrique - Mise aux normes et sécurité", imageIndexes: [2, 3] },
    { category: 'installation', title: 'Pose éclairage', location: 'Vieille-Toulouse', year: '2025', description: "Installation d'éclairage moderne et design pour intérieur - Éclairage LED et spots", imageIndexes: [4] },
    { category: 'installation', title: 'Installation neuve', location: 'Toulouse', year: '2024', description: "Installation électrique complète pour rénovation - Tableau, prises, éclairage et mise aux normes", imageIndexes: [5] },
    { category: 'installation', title: 'Installation neuve normes NFC15100', location: 'Toulouse', year: '2025', description: "Installation électrique neuve conforme normes NFC15100 - Tableau, protection différentielle et sécurité", imageIndexes: [6] },
    { category: 'climatisation', title: 'Pose de climatisation', location: 'Blagnac', year: '2024', description: "Installation de climatisation réversible multi-split - Confort thermique et économie d'énergie", imageIndexes: [7, 8] },
    { category: 'installation', title: 'Pose de VMC', location: 'Labège', year: '2025', description: "Installation de VMC double flux - Ventilation mécanique contrôlée et qualité d'air optimale", imageIndexes: [9, 10] },
    { category: 'installation', title: 'Remplacement d\'une plaque de cuisson', location: 'Escalquens', year: '2024', description: "Remplacement et installation de plaque de cuisson électrique - Raccordement et sécurité", imageIndexes: [11] },
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

  // Ouvrir lightbox avec toutes les images du projet
  const openLightbox = (imageIndexes: number[]) => {
    setCurrentIndex(imageIndexes[0])
    setLightboxOpen(true)
  }

  // Fermer lightbox
  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  // Image précédente
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  // Image suivante
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length)
  }

  // Navigation clavier
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false)
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % allImages.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, allImages.length])

  // Empêcher le scroll du body quand la lightbox est ouverte
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [lightboxOpen])

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

          <div className="realisations-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const projectImages = project.imageIndexes.map(idx => allImages[idx])
              const hasTwoImages = project.imageIndexes.length === 2
              
              return (
                <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2" onClick={() => openLightbox(project.imageIndexes)}>
                  <div className={`relative h-64 overflow-hidden ${hasTwoImages ? 'grid grid-cols-2 gap-0' : ''}`}>
                    {hasTwoImages ? (
                      <>
                        <div className="relative overflow-hidden">
                          <Image 
                            src={projectImages[0].src} 
                            alt={`${project.title} - Photo 1`} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <div className="relative overflow-hidden">
                          <Image 
                            src={projectImages[1].src} 
                            alt={`${project.title} - Photo 2`} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <Image 
                          src={projectImages[0].src} 
                          alt={project.title} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </>
                    )}
                    {project.imageIndexes.length > 2 && (
                      <div className="absolute top-2 right-2 bg-background/80 px-2 py-1 rounded-full text-xs font-semibold z-10">
                        {project.imageIndexes.length} photos
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

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="lightbox fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeLightbox()
            }
          }}
        >
          <button 
            className="absolute top-4 right-4 md:top-5 md:right-8 text-white text-4xl md:text-5xl font-light hover:text-gray-300 transition-colors z-[10000]"
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            &times;
          </button>
          
          <button 
            className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl bg-black/50 hover:bg-black/70 border-none px-2 py-1 md:px-4 md:py-2 rounded cursor-pointer z-[10000] transition-colors"
            onClick={prevImage}
            aria-label="Photo précédente"
          >
            &#10094;
          </button>
          
          <button 
            className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl bg-black/50 hover:bg-black/70 border-none px-2 py-1 md:px-4 md:py-2 rounded cursor-pointer z-[10000] transition-colors"
            onClick={nextImage}
            aria-label="Photo suivante"
          >
            &#10095;
          </button>
          
          <div className="relative max-w-[90%] max-h-[85vh] flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={allImages[currentIndex].src} 
              alt={allImages[currentIndex].description}
              className="max-w-full max-h-[100vh] md:max-h-[75vh] object-contain"
            />
            <div className="absolute bottom-0 w-full bg-black/70 text-white p-4 text-center text-base">
              {allImages[currentIndex].description}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

