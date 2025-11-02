import Image from 'next/image'

interface PageHeroProps {
  title: string
  description: string
  backgroundImage?: string
}

export default function PageHero({ title, description, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16 md:py-20">
      {backgroundImage && (
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-10"
          />
        </div>
      )}
      <div className="relative z-10 container max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-blue-100 max-w-3xl">{description}</p>
      </div>
    </section>
  )
}

