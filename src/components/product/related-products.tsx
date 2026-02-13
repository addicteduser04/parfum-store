"use client";

import { useTranslations } from "next-intl";
import { Product } from "@/types/product";
import { ProductCard } from "./product-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  const t = useTranslations("product");

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-playfair font-bold">
          {t("related")}
        </h2>
        <Link href="/catalog" className="flex items-center text-yellow-600 hover:text-yellow-700 transition-colors">
          <span className="font-medium">Voir plus</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
