import { Collection } from '@/types/product';

export const collections: Collection[] = [
  {
    id: "1",
    slug: "oriental-collection",
    name: {
      fr: "Collection Orientale",
      ar: "مجموعة شرقية"
    },
    description: {
      fr: "Découvrez notre collection de parfums orientaux, riches et envoûtants, inspirés des trésors de l'Orient.",
      ar: "اكتشف مجموعتنا من العطور الشرقية الغنية والساحرة، المستوحاة من كنوز الشرق."
    },
    image: "/collections/oriental-collection.jpg",
    featured: true
  },
  {
    id: "2",
    slug: "floral-collection",
    name: {
      fr: "Collection Florale",
      ar: "مجموعة زهرية"
    },
    description: {
      fr: "Une élégance florale intemporelle avec les plus belles fleurs du monde entier.",
      ar: "أناقة زهرية خالدة مع أجمل زهور العالم."
    },
    image: "/collections/floral-collection.jpg",
    featured: true
  },
  {
    id: "3",
    slug: "masculine-collection",
    name: {
      fr: "Collection Masculine",
      ar: "مجموعة رجالية"
    },
    description: {
      fr: "Des parfums audacieux et sophistiqués pour l'homme moderne et confiant.",
      ar: "عطور جريئة ومتطورة للرجل العصري الواثق."
    },
    image: "/collections/masculine-collection.jpg",
    featured: true
  },
  {
    id: "4",
    slug: "fresh-collection",
    name: {
      fr: "Collection Fraîche",
      ar: "مجموعة منعشة"
    },
    description: {
      fr: "Une bouffée de fraîcheur avec nos parfums légers et revitalisants.",
      ar: "نفحة منعشة مع عطورنا الخفيفة والمنعشة."
    },
    image: "/collections/fresh-collection.jpg",
    featured: false
  },
  {
    id: "5",
    slug: "gourmand-collection",
    name: {
      fr: "Collection Gourmande",
      ar: "مجموعة شهية"
    },
    description: {
      fr: "Des parfums délicieusement gourmands qui éveillent les sens.",
      ar: "عطور لذيذة شهية توقظ الحواس."
    },
    image: "/collections/gourmand-collection.jpg",
    featured: false
  }
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find(collection => collection.slug === slug);
}

export function getFeaturedCollections(): Collection[] {
  return collections.filter(collection => collection.featured);
}
