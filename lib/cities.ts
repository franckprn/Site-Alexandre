export const cities = [
  {
    name: "Ramonville-Saint-Agne",
    slug: "ramonville-saint-agne",
    distance: "Basé à Ramonville",
    time: "Immédiat",
    description: "Situés à Ramonville-Saint-Agne, nous sommes votre électricien de proximité.",
    quartiers: ["Centre-ville", "Belbeder", "La Marouette"]
  },
  {
    name: "Auzeville-Tolosane",
    slug: "auzeville-tolosane",
    distance: "2 km",
    time: "7 minutes",
    description: "Intervention rapide à Auzeville-Tolosane, commune voisine de Ramonville.",
    quartiers: ["Centre", "INRAE", "Parc Technologique"]
  },
  {
    name: "Castanet-Tolosan",
    slug: "castanet-tolosan",
    distance: "4 km",
    time: "10 minutes",
    description: "Votre électricien à Castanet-Tolosan pour tous vos travaux électriques.",
    quartiers: ["Centre", "Les Noguès", "La Maurette"]
  },
  {
    name: "Labège",
    slug: "labege",
    distance: "5 km",
    time: "12 minutes",
    description: "Service d'électricité professionnel à Labège et ses zones commerciales.",
    quartiers: ["Centre", "Innopole", "Zones commerciales"]
  },
  {
    name: "Lacroix-Falgarde",
    slug: "lacroix-falgarde",
    distance: "3 km",
    time: "8 minutes",
    description: "Électricien à Lacroix-Falgarde, intervention rapide garantie.",
    quartiers: ["Centre", "Bords de Garonne"]
  },
  {
    name: "Mervilla",
    slug: "mervilla",
    distance: "8 km",
    time: "15 minutes",
    description: "Service électrique à Mervilla par un artisan de confiance.",
    quartiers: ["Centre"]
  },
  {
    name: "Pechbusque",
    slug: "pechbusque",
    distance: "6 km",
    time: "12 minutes",
    description: "Votre électricien à Pechbusque pour dépannage et installation.",
    quartiers: ["Centre", "Le Village"]
  },
  {
    name: "Rebigue",
    slug: "rebigue",
    distance: "7 km",
    time: "13 minutes",
    description: "Électricien intervenant à Rebigue et ses environs.",
    quartiers: ["Centre"]
  },
  {
    name: "Vigoulet-Auzil",
    slug: "vigoulet-auzil",
    distance: "9 km",
    time: "14 minutes",
    description: "Service d'électricité à Vigoulet-Auzil, artisan qualifié.",
    quartiers: ["Centre", "Le Château"]
  },
  {
    name: "Toulouse",
    slug: "toulouse",
    distance: "6 km",
    time: "15 minutes",
    description: "Intervention dans tous les quartiers Sud et Est de Toulouse.",
    quartiers: ["Ramonville", "Rangueil", "Sauzelong", "Montaudran", "Lespinet"]
  }
] as const

export type City = typeof cities[number]

