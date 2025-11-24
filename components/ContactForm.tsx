"use client"

interface ContactFormProps {
  defaultCity?: string
}

export default function ContactForm({ defaultCity }: ContactFormProps) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Demande de devis gratuit</h2>
      <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
        <input type="hidden" name="access_key" value="5258340c-ce30-4392-9936-418b0d5dd6ab" />
        <input type="hidden" name="redirect" value="https://alexandre-magalhaes-v1.vercel.app/merci" />
        {defaultCity && <input type="hidden" name="city" value={defaultCity} />}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="font-semibold text-gray-700 mb-2 block">Nom *</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              required 
              placeholder="Votre nom" 
              className="w-full px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="font-semibold text-gray-700 mb-2 block">Téléphone *</label>
            <input 
              id="phone" 
              name="phone" 
              type="tel" 
              required 
              placeholder="06 03 44 24 95" 
              className="w-full px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="font-semibold text-gray-700 mb-2 block">Email *</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            required 
            placeholder="votre@email.fr" 
            className="w-full px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="font-semibold text-gray-700 mb-2 block">Type de prestation</label>
          <select 
            id="service" 
            name="service" 
            className="w-full px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">Sélectionnez un service</option>
            <option value="Dépannage">Dépannage</option>
            <option value="Installation">Installation</option>
            <option value="Rénovation">Rénovation</option>
            <option value="Domotique">Domotique</option>
            <option value="Climatisation">Climatisation</option>
            <option value="Courant faible">Courant faible</option>
            <option value="Mise en conformité">Mise en conformité</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="font-semibold text-gray-700 mb-2 block">Message *</label>
          <textarea 
            id="message" 
            name="message" 
            rows={5} 
            required 
            placeholder="Décrivez votre projet ou votre problème..." 
            className="w-full px-4 py-3 border-2 border-gray-200 focus:border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
        >
          Envoyer ma demande de devis
        </button>

        <p className="text-xs text-muted-foreground text-center">
          En soumettant ce formulaire, vous acceptez d'être recontacté par nos services.
        </p>
      </form>
    </div>
  )
}
