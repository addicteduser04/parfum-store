"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Product } from "@/types/product";
import { formatPrice, getLocalizedText } from "@/lib/utils";
import { Eye, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const locale = useLocale();
  const t = useTranslations("catalog");
  
  const productName = getLocalizedText(product.name, locale);
  const productDescription = product.description ? getLocalizedText(product.description, locale) : "";

  return (
    <div className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.images[0]}
          alt={productName}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <div className="absolute top-2 left-2 bg-yellow-600 text-white px-2 py-1 text-xs rounded">
            Vedette
          </div>
        )}
        {product.bestSeller && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
            Best-seller
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Rupture de stock</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-2">
            <Link href={`/product/${product.slug}`}>
              <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                <Eye className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <p className="text-sm text-gray-500">{product.brand}</p>
          <h3 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
            <Link href={`/product/${product.slug}`}>
              {productName}
            </Link>
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-gray-900">
              {formatPrice(product.priceMAD)}
            </p>
            <p className="text-xs text-gray-500">
              {product.volumeML[0]}ml
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">{product.concentration}</p>
            <p className="text-xs text-gray-500 capitalize">{product.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
