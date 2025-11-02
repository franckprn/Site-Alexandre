"use client"
import { Phone } from "lucide-react"

export default function PhoneButton() {
  return (
    <a
      href="tel:+33603442495"
      className="fixed bottom-6 right-6 z-50 lg:hidden inline-flex items-center gap-2 px-4 py-3 rounded-full shadow-card bg-orange-500 text-white hover:bg-orange-600 transition-colors"
      aria-label="Appeler l'électricien"
    >
      <Phone className="h-5 w-5" />
      06 03 44 24 95
    </a>
  )
}

