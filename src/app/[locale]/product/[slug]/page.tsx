import { notFound } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { getProductBySlug, getProductsByCollection } from "@/data/products";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfo } from "@/components/product/product-info";
import { RelatedProducts } from "@/components/product/related-products";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ProductPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug, locale } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    notFound();
  }

  const relatedProducts = product.collection 
    ? getProductsByCollection(product.collection).filter(p => p.id !== product.id).slice(0, 4)
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link href="/catalog" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour au catalogue
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Gallery */}
        <ProductGallery product={product} />
        
        {/* Product Info */}
        <ProductInfo product={product} />
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <RelatedProducts products={relatedProducts} />
      )}
    </div>
  );
}
