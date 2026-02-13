# Parfum House - Boutique de Parfums de Luxe

Une plateforme e-commerce moderne pour une boutique de parfums premium au Maroc, construite avec Next.js 14, TypeScript, et Tailwind CSS.

## 🌟 Fonctionnalités

- **Catalogue de produits** avec filtres avancés (genre, marque, concentration, prix)
- **Pages de détails produits** avec galerie d'images et notes olfactives
- **Collections thématiques** pour organiser les produits
- **Internationalisation** complète (Français/Arabe) avec support RTL
- **Intégration WhatsApp** pour les commandes
- **Design responsive** et moderne inspiré de hadriparfums.ma
- **SEO optimisé** avec métadonnées et sitemap automatique
- **Performance optimisée** avec Next.js Image et lazy loading

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Internationalisation**: next-intl
- **Icons**: Lucide React
- **Déploiement**: Vercel ready

## 📁 Structure du Projet

```
src/
├── app/                    # Pages Next.js
│   ├── [locale]/          # Routes internationalisées
│   │   ├── page.tsx       # Accueil
│   │   ├── catalog/       # Catalogue produits
│   │   ├── product/       # Détails produit
│   │   ├── collections/   # Collections
│   │   ├── about/         # À propos
│   │   ├── contact/       # Contact
│   │   ├── privacy/       # Politique confidentialité
│   │   └── terms/         # Conditions générales
│   ├── layout.tsx         # Layout racine
│   └── sitemap.ts         # Sitemap automatique
├── components/            # Composants React
│   ├── layout/           # Header, Footer, Language switcher
│   ├── product/          # Product cards, gallery, info
│   ├── collection/       # Collection cards
│   └── ui/               # Composants UI réutilisables
├── data/                 # Données statiques
│   ├── products.ts       # Liste des produits
│   └── collections.ts    # Collections
├── types/                # Types TypeScript
├── lib/                  # Utilitaires
└── i18n.ts              # Configuration i18n
```

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

1. Cloner le repository:
```bash
git clone <repository-url>
cd parfum-store
```

2. Installer les dépendances:
```bash
npm install
```

3. Lancer le serveur de développement:
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📝 Comment Ajouter des Produits

1. Éditer `src/data/products.ts`
2. Ajouter un nouvel objet au tableau `products`:

```typescript
{
  id: "unique-id",
  slug: "product-slug",
  name: {
    fr: "Nom en français",
    ar: "الاسم بالعربية"
  },
  brand: "Marque",
  priceMAD: 1500,
  images: ["/products/image1.jpg", "/products/image2.jpg"],
  gender: "men" | "women" | "unisex",
  concentration: "EDP" | "EDT" | "Extrait",
  volumeML: [50, 100],
  notes: {
    top: ["Note1", "Note2"],
    heart: ["Note3", "Note4"],
    base: ["Note5", "Note6"]
  },
  tags: ["tag1", "tag2"],
  collection: "collection-slug",
  inStock: true,
  featured: false,
  bestSeller: false
}
```

3. Ajouter les images correspondantes dans `public/products/`

## 🌐 Comment Ajouter des Traductions

1. Éditer les fichiers de traduction:
   - `messages/fr.json` pour le français
   - `messages/ar.json` pour l'arabe

2. Ajouter les nouvelles clés de traduction dans les deux fichiers.

3. Utiliser dans les composants avec `useTranslations()`:

```typescript
const t = useTranslations("section");
return <h1>{t("title")}</h1>;
```

## 🎨 Personnalisation

### Couleurs et Thème

Les couleurs sont définies dans `src/app/globals.css`:
- `--primary`: Couleur principale (or: #d4af37)
- `--background`: Fond (blanc)
- `--foreground`: Texte principal

### Polices

Le projet utilise:
- **Playfair Display**: Pour les titres élégants
- **Inter**: Pour le corps de texte

### Images

Remplacer les images placeholder par vos propres images:
- Produits: `public/products/`
- Collections: `public/collections/`
- OpenGraph: `public/og-image.jpg`

## 📱 Configuration WhatsApp

Pour modifier le numéro WhatsApp:
1. Éditer `src/components/product/product-info.tsx`
2. Changer le numéro dans la fonction `handleWhatsAppClick()`

## 🔧 Configuration Déploiement

### Variables d'Environnement

Créer un fichier `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://votredomaine.ma
NEXT_PUBLIC_WHATSAPP_NUMBER=212600000000
```

### Déploiement Vercel

1. Connecter votre repository GitHub à Vercel
2. Configurer les variables d'environnement
3. Déployer automatiquement

## 🛡️ SEO

Le site inclut:
- Métadonnées optimisées pour chaque page
- Open Graph et Twitter Cards
- Sitemap automatique (`/sitemap.xml`)
- Robots.txt configuré
- Données structurées (JSON-LD) pour les produits

## 📊 Performance

- Optimisation des images avec Next.js Image
- Lazy loading des composants
- Code splitting automatique
- CSS optimisé avec Tailwind

## 🤝 Contribuer

1. Fork le projet
2. Créer une branche feature
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.

## 📞 Support

Pour toute question ou support technique:
- Email: contact@parfumhouse.ma
- Téléphone: +212 522 123 456
