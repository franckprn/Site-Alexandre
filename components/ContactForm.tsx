"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Textarea } from "@/src/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Checkbox } from "@/src/components/ui/checkbox"

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(6),
  email: z.string().email(),
  service: z.string(),
  message: z.string().min(10),
  urgent: z.boolean().optional(),
  city: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

export default function ContactForm({ defaultCity }: { defaultCity?: string }) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { city: defaultCity },
  })

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true)
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      })
      setIsSubmitting(false)
      form.reset({ city: defaultCity })
    }, 800)
  }

  return (
    <CardContent className="p-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Demande de devis gratuit</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-semibold text-gray-700 mb-2">Nom *</Label>
            <Input id="name" {...form.register("name")} required placeholder="Votre nom" className="border-2 border-gray-200 focus:border-blue-500 rounded-lg" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="font-semibold text-gray-700 mb-2">Téléphone *</Label>
            <Input id="phone" type="tel" {...form.register("phone")} required placeholder="06 03 44 24 95" className="border-2 border-gray-200 focus:border-blue-500 rounded-lg" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="font-semibold text-gray-700 mb-2">Email *</Label>
          <Input id="email" type="email" {...form.register("email")} required placeholder="votre@email.fr" className="border-2 border-gray-200 focus:border-blue-500 rounded-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="service" className="font-semibold text-gray-700 mb-2">Type d'intervention *</Label>
            <Select onValueChange={(v) => form.setValue("service", v)}>
              <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500 rounded-lg">
                <SelectValue placeholder="Sélectionnez un service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="depannage">Dépannage électrique</SelectItem>
                <SelectItem value="installation">Installation électrique</SelectItem>
                <SelectItem value="domotique">Domotique</SelectItem>
                <SelectItem value="climatisation">Climatisation</SelectItem>
                <SelectItem value="courant-faible">Courant faible</SelectItem>
                <SelectItem value="diagnostic">Diagnostic / Conformité</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="city" className="font-semibold text-gray-700 mb-2">Ville</Label>
            <Input id="city" {...form.register("city")} placeholder="Ex: Ramonville-Saint-Agne" className="border-2 border-gray-200 focus:border-blue-500 rounded-lg" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="font-semibold text-gray-700 mb-2">Message *</Label>
          <Textarea id="message" rows={5} {...form.register("message")} required placeholder="Décrivez votre projet ou votre problème..." className="border-2 border-gray-200 focus:border-blue-500 rounded-lg" />
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="urgent" onCheckedChange={(v) => form.setValue("urgent", Boolean(v))} />
          <Label htmlFor="urgent" className="text-sm cursor-pointer">C'est une urgence (réponse prioritaire)</Label>
        </div>

        <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 px-8 transition-all duration-200 hover:scale-105 hover:shadow-lg" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          En soumettant ce formulaire, vous acceptez d'être recontacté par nos services.
        </p>
      </form>
    </CardContent>
  )
}

