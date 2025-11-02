## Migration Vite/React → Next.js 14 (App Router)

### Fichiers créés
- `next.config.js`
- `.gitignore`
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `app/services/page.tsx`
- `app/realisations/page.tsx`
- `app/blog/page.tsx`
- `app/contact/page.tsx`
- `app/villes/[slug]/page.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `lib/cities.ts`
- `lib/utils.ts`
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/ContactForm.tsx`
- `components/PhoneButton.tsx`
- `MIGRATION-SUMMARY.md`

### Fichiers modifiés
- `package.json` (scripts Next.js, versions next/react, suppression de react-router-dom)
- `tailwind.config.ts` (content Next.js + plugin)
- `tsconfig.json` (config Next.js + alias `@/*`)

### Instructions pour tester
1. Installer les dépendances:
   ```bash
   npm install
   ```
2. Lancer le serveur de dev:
   ```bash
   npm run dev
   ```
3. Ouvrir le site: `http://localhost:3000`

### URLs à vérifier
- Accueil: `/`
- Services: `/services`
- Réalisations: `/realisations`
- Blog: `/blog`
- Contact: `/contact`
- Villes (exemples):
  - `/villes/ramonville-saint-agne`
  - `/villes/auzeville-tolosane`
  - `/villes/toulouse`

### Notes
- Les composants shadcn/ui existants sont référencés depuis `src/components/ui/*` via l’alias TypeScript pour compatibilité immédiate.
- Les images locales sont optimisées via `next/image` lorsqu’importées en modules.

