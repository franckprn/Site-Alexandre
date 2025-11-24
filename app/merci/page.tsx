import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Home } from 'lucide-react'
import { Card, CardContent } from '@/src/components/ui/card'

export default function MerciPage() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white shadow-2xl border-0">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Merci !
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Votre demande a bien été envoyée. Je vous recontacterai dans les plus brefs délais.
              </p>
              <Link href="/">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
                >
                  <Home className="h-5 w-5" />
                  Retour à l'accueil
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

