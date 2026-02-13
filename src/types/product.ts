export type Product = {
  id: string;
  slug: string;
  name: {
    fr: string;
    ar: string;
  };
  brand: string;
  priceMAD: number;
  images: string[];
  gender: "men" | "women" | "unisex";
  concentration: "EDP" | "EDT" | "Extrait";
  volumeML: number[];
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  tags: string[];
  collection?: string;
  inStock: boolean;
  featured?: boolean;
  bestSeller?: boolean;
  description?: {
    fr: string;
    ar: string;
  };
};

export type Collection = {
  id: string;
  slug: string;
  name: {
    fr: string;
    ar: string;
  };
  description: {
    fr: string;
    ar: string;
  };
  image: string;
  featured?: boolean;
};
