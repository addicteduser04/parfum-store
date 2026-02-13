import { notFound } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { getCollectionBySlug } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CollectionPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug, locale } = await params;
  const collection = getCollectionBySlug(slug);
  
  if (!collection) {
    notFound();
  }

  const products = getProductsByCollection(slug);
  const collectionName = collection.name[locale as keyof typeof collection.name] || collection.name.fr;
  const collectionDescription = collection.description[locale as keyof typeof collection.description] || collection.description.fr;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link href="/collections" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux collections
        </Link>
      </div>

      {/* Collection Header */}
      <div className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-playfair font-bold mb-4">
              {collectionName}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {collectionDescription}
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>{products.length} produits</span>
              <span>•</span>
              <span>Luxe</span>
              <span>•</span>
              <span>Exclusif</span>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src={collection.image}
              alt={collectionName}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div>
          <h2 className="text-2xl font-playfair font-bold mb-8">
            Produits de la collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucun produit disponible dans cette collection pour le moment.</p>
        </div>
      )}
    </div>
  );
}
