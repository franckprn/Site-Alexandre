"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/src/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Réalisations", path: "/realisations" },
    { name: "Zone d'intervention", path: "/zone-intervention" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm md:text-xl">AM</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg md:text-xl text-gray-900">Alexandre Magalhaes</span>
              <p className="text-xs text-gray-600">Électricien à Toulouse</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-medium transition-colors relative group ${
                  isActive(link.path) ? "text-primary" : "text-gray-900 hover:text-primary"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-transform origin-left ${
                    isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:+33603442495" className="hidden sm:block">
              <Button variant="default" size="lg" className="bg-gradient-accent font-semibold rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                06 03 44 24 95
              </Button>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1 text-gray-900 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-2 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium py-2 transition-colors ${
                    isActive(link.path) ? "text-primary" : "text-gray-900 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:+33603442495" className="sm:hidden">
                <Button variant="default" size="lg" className="w-full bg-gradient-accent font-semibold rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  06 03 44 24 95
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

