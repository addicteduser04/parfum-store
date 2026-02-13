import { useTranslations } from "next-intl";
import { getFeaturedCollections } from "@/data/collections";
import { CollectionCard } from "@/components/collection/collection-card";

export default function CollectionsPage() {
  const t = useTranslations("collection");
  const collections = getFeaturedCollections();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-playfair font-bold mb-4">
          {t("title")}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez nos collections exclusives, chacune racontant une histoire unique à travers des parfums d'exception.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
}
