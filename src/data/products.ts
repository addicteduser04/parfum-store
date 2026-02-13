import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: "1",
    slug: "oud-royal",
    name: {
      fr: "Oud Royal",
      ar: "عود ملكي"
    },
    brand: "Maison de Parfum",
    priceMAD: 2850,
    images: [
      "/products/oud-royal-1.jpg",
      "/products/oud-royal-2.jpg",
      "/products/oud-royal-3.jpg"
    ],
    gender: "unisex",
    concentration: "Extrait",
    volumeML: [50, 100],
    notes: {
      top: ["Oud", "Saffron", "Bergamote"],
      heart: ["Rose", "Jasmin", "Cardamome"],
      base: ["Santale", "Ambre", "Vanille"]
    },
    tags: ["oriental", "luxury", "oud"],
    collection: "oriental-collection",
    inStock: true,
    featured: true,
    bestSeller: true,
    description: {
      fr: "Un parfum royal qui capture l'essence la plus précieuse de l'oud, enrichi d'épices rares et de fleurs délicates.",
      ar: "عطر ملكي يلتقط أثمن جوهر العود، مثراً بالتوابل النادرة والزهور الرقيقة."
    }
  },
  {
    id: "2",
    slug: "jasmin-blanc",
    name: {
      fr: "Jasmin Blanc",
      ar: "ياسمين أبيض"
    },
    brand: "Fleurs du Maroc",
    priceMAD: 1250,
    images: [
      "/products/jasmin-blanc-1.jpg",
      "/products/jasmin-blanc-2.jpg"
    ],
    gender: "women",
    concentration: "EDP",
    volumeML: [30, 50, 100],
    notes: {
      top: ["Jasmin", "Pêche", "Citron"],
      heart: ["Rose", "Muguet", "Orchidée"],
      base: ["Musc", "Santale", "Cèdre"]
    },
    tags: ["floral", "fresh", "elegant"],
    collection: "floral-collection",
    inStock: true,
    featured: true,
    description: {
      fr: "Une composition florale élégante mettant en valeur le jasmin blanc dans toute sa splendeur.",
      ar: "تركيبة زهرية أنيقة تبرز جمال الياسمين الأبيض في كامل روعته."
    }
  },
  {
    id: "3",
    slug: "vetiver-masculin",
    name: {
      fr: "Vétiver Masculin",
      ar: "فييتيفير رجالي"
    },
    brand: "Terre d'Afrique",
    priceMAD: 980,
    images: [
      "/products/vetiver-masculin-1.jpg",
      "/products/vetiver-masculin-2.jpg"
    ],
    gender: "men",
    concentration: "EDT",
    volumeML: [50, 100],
    notes: {
      top: ["Vétiver", "Citron Vert", "Gingembre"],
      heart: ["Poivre", "Géranium", "Sauge"],
      base: ["Cèdre", "Patchouli", "Ambre"]
    },
    tags: ["woody", "spicy", "fresh"],
    collection: "masculine-collection",
    inStock: true,
    bestSeller: true,
    description: {
      fr: "Un parfum masculin puissant et frais, parfait pour l'homme moderne et confiant.",
      ar: "عطر رجالي قوي ومنعش، مثالي للرجل العصري الواثق."
    }
  },
  {
    id: "4",
    slug: "ambre-orient",
    name: {
      fr: "Ambre Orient",
      ar: "عنبر شرقي"
    },
    brand: "Mystère d'Orient",
    priceMAD: 1580,
    images: [
      "/products/ambre-orient-1.jpg",
      "/products/ambre-orient-2.jpg"
    ],
    gender: "unisex",
    concentration: "EDP",
    volumeML: [50, 100],
    notes: {
      top: ["Ambre", "Benjoin", "Miel"],
      heart: ["Vanille", "Tonka", "Cannelle"],
      base: ["Santale", "Musc", "Patchouli"]
    },
    tags: ["oriental", "warm", "sweet"],
    collection: "oriental-collection",
    inStock: true,
    featured: true,
    description: {
      fr: "Un voyage sensoriel dans les contrées de l'Orient, où l'ambre règne en maître.",
      ar: "رحلة حسية في أراضي الشرق، حيث يحكم العنبر."
    }
  },
  {
    id: "5",
    slug: "rose-marocaine",
    name: {
      fr: "Rose Marocaine",
      ar: "وردة مغربية"
    },
    brand: "Fleurs du Maroc",
    priceMAD: 1890,
    images: [
      "/products/rose-marocaine-1.jpg",
      "/products/rose-marocaine-2.jpg"
    ],
    gender: "women",
    concentration: "Extrait",
    volumeML: [30, 50],
    notes: {
      top: ["Rose de Damas", "Pivoine", "Framboise"],
      heart: ["Rose Centifolia", "Jasmin", "Ylang-Ylang"],
      base: ["Musc", "Santale", "Vanille"]
    },
    tags: ["floral", "luxury", "rose"],
    collection: "floral-collection",
    inStock: true,
    bestSeller: true,
    description: {
      fr: "L'essence même de la rose marocaine, capturée dans un flacon d'exception.",
      ar: "جوهر الوردة المغربية الأصيل، محفوظ في قنينة استثنائية."
    }
  },
  {
    id: "6",
    slug: "citrus-fresh",
    name: {
      fr: "Citrus Fresh",
      ar: "حمضيات منعشة"
    },
    brand: "Méditerranée",
    priceMAD: 750,
    images: [
      "/products/citrus-fresh-1.jpg",
      "/products/citrus-fresh-2.jpg"
    ],
    gender: "unisex",
    concentration: "EDT",
    volumeML: [100, 150],
    notes: {
      top: ["Citron", "Orange", "Pamplemousse"],
      heart: ["Menthe", "Basilic", "Thym"],
      base: ["Cèdre", "Musc", "Ambre"]
    },
    tags: ["citrus", "fresh", "summer"],
    collection: "fresh-collection",
    inStock: true,
    description: {
      fr: "Une explosion d'agrumes méditerranéens pour une sensation de fraîcheur absolue.",
      ar: "انفجار من الحمضيات المتوسطية لإحساس بالانتعاش المطلق."
    }
  },
  {
    id: "7",
    slug: "bois-precieux",
    name: {
      fr: "Bois Précieux",
      ar: "أخشاب ثمينة"
    },
    brand: "Terre d'Afrique",
    priceMAD: 1350,
    images: [
      "/products/bois-precieux-1.jpg",
      "/products/bois-precieux-2.jpg"
    ],
    gender: "men",
    concentration: "EDP",
    volumeML: [50, 100],
    notes: {
      top: ["Santale", "Cèdre", "Vétiver"],
      heart: ["Poivre", "Cardamome", "Gingembre"],
      base: ["Patchouli", "Musc", "Ambre"]
    },
    tags: ["woody", "spicy", "masculine"],
    collection: "masculine-collection",
    inStock: true,
    featured: true,
    description: {
      fr: "L'élégance des bois précieux dans une composition masculine sophistiquée.",
      ar: "أناقة الأخشاب الثمينة في تركيبة رجالية متطورة."
    }
  },
  {
    id: "8",
    slug: "vanille-noire",
    name: {
      fr: "Vanille Noire",
      ar: "فانيليا سوداء"
    },
    brand: "Douceur Orientale",
    priceMAD: 1120,
    images: [
      "/products/vanille-noire-1.jpg",
      "/products/vanille-noire-2.jpg"
    ],
    gender: "women",
    concentration: "EDP",
    volumeML: [50, 100],
    notes: {
      top: ["Vanille", "Cacao", "Café"],
      heart: ["Amande", "Praliné", "Tonka"],
      base: ["Santale", "Musc", "Ambre"]
    },
    tags: ["gourmand", "sweet", "warm"],
    collection: "gourmand-collection",
    inStock: true,
    description: {
      fr: "Une vanille noire et gourmande, réconfortante et sensuelle à la fois.",
      ar: "فانيليا سوداء شهية، مريحة وحسية في آن واحد."
    }
  },
  {
    id: "9",
    slug: "musc-blanc",
    name: {
      fr: "Musc Blanc",
      ar: "مسك أبيض"
    },
    brand: "Pureté",
    priceMAD: 890,
    images: [
      "/products/musc-blanc-1.jpg",
      "/products/musc-blanc-2.jpg"
    ],
    gender: "unisex",
    concentration: "EDT",
    volumeML: [100, 150],
    notes: {
      top: ["Musc Blanc", "Lys", "Jasmin"],
      heart: ["Rose", "Orchidée", "Ylang-Ylang"],
      base: ["Santale", "Ambre", "Vanille"]
    },
    tags: ["clean", "soft", "unisex"],
    collection: "fresh-collection",
    inStock: true,
    description: {
      fr: "La pureté du musc blanc dans une composition épurée et moderne.",
      ar: "نقاء المسك الأبيض في تركيبة نقية وعصرية."
    }
  },
  {
    id: "10",
    slug: "epices-royales",
    name: {
      fr: "Épices Royales",
      ar: "توابل ملكية"
    },
    brand: "Mystère d'Orient",
    priceMAD: 1680,
    images: [
      "/products/epices-royales-1.jpg",
      "/products/epices-royales-2.jpg"
    ],
    gender: "men",
    concentration: "Extrait",
    volumeML: [50, 100],
    notes: {
      top: ["Safran", "Cardamome", "Poivre"],
      heart: ["Cannelle", "Gingembre", "Clou de Girofle"],
      base: ["Santale", "Patchouli", "Ambre"]
    },
    tags: ["spicy", "oriental", "luxury"],
    collection: "oriental-collection",
    inStock: true,
    bestSeller: true,
    description: {
      fr: "Un mélange royal d'épices précieuses pour une présence inoubliable.",
      ar: "مزيج ملكي من التوابل الثمينة لحضور لا يُنسى."
    }
  },
  {
    id: "11",
    slug: "fleur-d-oranger",
    name: {
      fr: "Fleur d'Oranger",
      ar: "زهر البرتقال"
    },
    brand: "Fleurs du Maroc",
    priceMAD: 980,
    images: [
      "/products/fleur-d-oranger-1.jpg",
      "/products/fleur-d-oranger-2.jpg"
    ],
    gender: "women",
    concentration: "EDP",
    volumeML: [50, 100],
    notes: {
      top: ["Fleur d'Oranger", "Néroli", "Pétale de Rose"],
      heart: ["Jasmin", "Ylang-Ylang", "Mimosa"],
      base: ["Musc", "Santale", "Ambre"]
    },
    tags: ["floral", "fresh", "mediterranean"],
    collection: "floral-collection",
    inStock: true,
    description: {
      fr: "La fraîcheur ensoleillée de la fleur d'oranger dans un parfum printanier.",
      ar: "انتعاشية زهر البرتقال المشمسة في عطر ربيعي."
    }
  },
  {
    id: "12",
    slug: "cuir-noble",
    name: {
      fr: "Cuir Noble",
      ar: "جلد نبيل"
    },
    brand: "Luxe Français",
    priceMAD: 2250,
    images: [
      "/products/cuir-noble-1.jpg",
      "/products/cuir-noble-2.jpg"
    ],
    gender: "men",
    concentration: "Extrait",
    volumeML: [50, 100],
    notes: {
      top: ["Cuir", "Safran", "Baies Roses"],
      heart: ["Oud", "Rose", "Vétiver"],
      base: ["Santale", "Musc", "Vanille"]
    },
    tags: ["leather", "luxury", "masculine"],
    collection: "masculine-collection",
    inStock: true,
    featured: true,
    description: {
      fr: "L'élégance du cuir noble associée aux notes les plus précieuses de l'Orient.",
      ar: "أناقة الجلد النبيل مرتبطة بأثمن نوتات الشرق."
    }
  },
  {
    id: "13",
    slug: "the-vert",
    name: {
      fr: "Thé Vert",
      ar: "شاي أخضر"
    },
    brand: "Zen Garden",
    priceMAD: 650,
    images: [
      "/products/the-vert-1.jpg",
      "/products/the-vert-2.jpg"
    ],
    gender: "unisex",
    concentration: "EDT",
    volumeML: [100, 150],
    notes: {
      top: ["Thé Vert", "Menthe", "Citron"],
      heart: ["Jasmin", "Bergamote", "Gingembre"],
      base: ["Santale", "Musc", "Ambre"]
    },
    tags: ["fresh", "green", "zen"],
    collection: "fresh-collection",
    inStock: true,
    description: {
      fr: "La pureté du thé vert pour une sensation de bien-être et de sérénité.",
      ar: "نقاء الشاي الأخضر لإحساس بالراحة والسكينة."
    }
  },
  {
    id: "14",
    slug: "coco-exotique",
    name: {
      fr: "Coco Exotique",
      ar: "جوز الهند استوائي"
    },
    brand: "Tropic Paradise",
    priceMAD: 890,
    images: [
      "/products/coco-exotique-1.jpg",
      "/products/coco-exotique-2.jpg"
    ],
    gender: "women",
    concentration: "EDP",
    volumeML: [50, 100],
    notes: {
      top: ["Noix de Coco", "Mangue", "Ananas"],
      heart: ["Ylang-Ylang", "Frisia", "Jasmin"],
      base: ["Vanille", "Santale", "Musc"]
    },
    tags: ["tropical", "sweet", "summer"],
    collection: "gourmand-collection",
    inStock: true,
    description: {
      fr: "Une évasion tropicale avec les saveurs ensoleillées de la noix de coco.",
      ar: "هروب استوائي بنكهات جوز الهند المشمسة."
    }
  },
  {
    id: "15",
    slug: "pin-sylvestre",
    name: {
      fr: "Pin Sylvestre",
      ar: "صنوبر بري"
    },
    brand: "Forêt Nordique",
    priceMAD: 780,
    images: [
      "/products/pin-sylvestre-1.jpg",
      "/products/pin-sylvestre-2.jpg"
    ],
    gender: "men",
    concentration: "EDT",
    volumeML: [100, 150],
    notes: {
      top: ["Pin Sylvestre", "Eucalyptus", "Menthe"],
      heart: ["Cèdre", "Sapin", "Genévrier"],
      base: ["Vétiver", "Musc", "Ambre"]
    },
    tags: ["woody", "fresh", "nature"],
    collection: "fresh-collection",
    inStock: true,
    description: {
      fr: "La fraîcheur de la forêt nordique capturée dans un parfum masculin.",
      ar: "انتعاش الغابة الشمالية محفوظ في عطر رجالي."
    }
  },
  {
    id: "16",
    slug: "iris-mystique",
    name: {
      fr: "Iris Mystique",
      ar: "سوسن غامض"
    },
    brand: "Fleurs Rares",
    priceMAD: 1980,
    images: [
      "/products/iris-mystique-1.jpg",
      "/products/iris-mystique-2.jpg"
    ],
    gender: "women",
    concentration: "Extrait",
    volumeML: [30, 50],
    notes: {
      top: ["Iris", "Violette", "Pivoine"],
      heart: ["Rose", "Jasmin", "Orchidée"],
      base: ["Santale", "Musc", "Vanille"]
    },
    tags: ["floral", "powdery", "luxury"],
    collection: "floral-collection",
    inStock: true,
    featured: true,
    description: {
      fr: "La noblesse de l'iris dans une composition mystérieuse et élégante.",
      ar: "نبالة السوسن في تركيبة غامضة وأنيقة."
    }
  },
  {
    id: "17",
    slug: "tabac-blond",
    name: {
      fr: "Tabac Blond",
      ar: "تبغ أشقر"
    },
    brand: "Luxe Français",
    priceMAD: 1780,
    images: [
      "/products/tabac-blond-1.jpg",
      "/products/tabac-blond-2.jpg"
    ],
    gender: "unisex",
    concentration: "EDP",
    volumeML: [50, 100],
    notes: {
      top: ["Tabac Blond", "Miel", "Orange"],
      heart: ["Cacao", "Vanille", "Tonka"],
      base: ["Santale", "Patchouli", "Musc"]
    },
    tags: ["sweet", "warm", "unisex"],
    collection: "gourmand-collection",
    inStock: true,
    description: {
      fr: "La douceur du tabac blond associée à des notes gourmandes et réconfortantes.",
      ar: "حلاوة التبغ الأشقر مرتبطة بنوتات شهية ومريحة."
    }
  },
  {
    id: "18",
    slug: "lavande-provencale",
    name: {
      fr: "Lavande Provençale",
      ar: "خزامى بروفنسال"
    },
    brand: "Campagne Française",
    priceMAD: 720,
    images: [
      "/products/lavande-provencale-1.jpg",
      "/products/lavande-provencale-2.jpg"
    ],
    gender: "unisex",
    concentration: "EDT",
    volumeML: [100, 150],
    notes: {
      top: ["Lavande", "Romarin", "Thym"],
      heart: ["Géranium", "Sauge", "Menthe"],
      base: ["Cèdre", "Musc", "Ambre"]
    },
    tags: ["aromatic", "fresh", "relaxing"],
    collection: "fresh-collection",
    inStock: true,
    description: {
      fr: "L'authenticité de la lavande de Provence pour un moment de détente.",
      ar: "أصالة خزامى بروفانس للحظة من الاسترخاء."
    }
  },
  {
    id: "19",
    slug: "patchouli-intense",
    name: {
      fr: "Patchouli Intense",
      ar: "باتشولي مكثف"
    },
    brand: "Terre d'Afrique",
    priceMAD: 1450,
    images: [
      "/products/patchouli-intense-1.jpg",
      "/products/patchouli-intense-2.jpg"
    ],
    gender: "men",
    concentration: "Extrait",
    volumeML: [50, 100],
    notes: {
      top: ["Patchouli", "Vétiver", "Poivre"],
      heart: ["Cèdre", "Santale", "Cardamome"],
      base: ["Musc", "Ambre", "Vanille"]
    },
    tags: ["earthy", "woody", "intense"],
    collection: "masculine-collection",
    inStock: true,
    bestSeller: true,
    description: {
      fr: "L'intensité du patchouli dans une composition masculine puissante.",
      ar: "كثافة الباتشولي في تركيبة رجالية قوية."
    }
  },
  {
    id: "20",
    slug: "fruits-rouges",
    name: {
      fr: "Fruits Rouges",
      ar: "فواكه حمراء"
    },
    brand: "Jardin Fruité",
    priceMAD: 820,
    images: [
      "/products/fruits-rouges-1.jpg",
      "/products/fruits-rouges-2.jpg"
    ],
    gender: "women",
    concentration: "EDP",
    volumeML: [50, 100],
    notes: {
      top: ["Framboise", "Fraise", "Cassis"],
      heart: ["Rose", "Pivoine", "Jasmin"],
      base: ["Vanille", "Musc", "Santale"]
    },
    tags: ["fruity", "sweet", "fresh"],
    collection: "gourmand-collection",
    inStock: true,
    description: {
      fr: "Un panier de fruits rouges juteux dans un parfum gourmand et pétillant.",
      ar: "سلة من الفواكه الحمراء العصيرة في عطر شهي ومنعش."
    }
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter(product => product.collection === collectionSlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getBestSellers(): Product[] {
  return products.filter(product => product.bestSeller);
}

export function getProductsByGender(gender: string): Product[] {
  return products.filter(product => product.gender === gender);
}
