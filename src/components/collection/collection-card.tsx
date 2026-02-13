"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Collection } from "@/types/product";
import { getLocalizedText } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  const locale = useLocale();
  
  const collectionName = getLocalizedText(collection.name, locale);
  const collectionDescription = getLocalizedText(collection.description, locale);

  return (
    <Link href={`/collections/${collection.slug}`} className="group block">
      <div className="relative h-80 rounded-lg overflow-hidden bg-gray-100">
        <Image
          src={collection.image}
          alt={collectionName}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-playfair font-bold mb-2">
            {collectionName}
          </h3>
          <p className="text-sm text-gray-200 mb-4 line-clamp-2">
            {collectionDescription}
          </p>
          <div className="flex items-center text-yellow-600 group-hover:text-yellow-500 transition-colors">
            <span className="font-medium">Découvrir</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
