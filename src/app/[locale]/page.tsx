"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts, getBestSellers } from "@/data/products";
import { getFeaturedCollections } from "@/data/collections";
import { ProductCard } from "@/components/product/product-card";
import { CollectionCard } from "@/components/collection/collection-card";
import { ArrowRight, Star, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("home");
  const featuredProducts = getFeaturedProducts();
  const bestSellers = getBestSellers();
  const featuredCollections = getFeaturedCollections();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              {t("hero.subtitle")}
            </p>
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
              {t("hero.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            {t("featured.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCollections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/collections">
            <Button variant="outline">
              {t("featured.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">
              {t("featured.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/catalog">
              <Button variant="outline">
                {t("featured.viewAll")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            {t("bestSellers.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/catalog?filter=best-sellers">
            <Button variant="outline">
              {t("bestSellers.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold mb-4">
                {t("story.title")}
              </h2>
              <h3 className="text-xl mb-6 text-yellow-600">
                {t("story.subtitle")}
              </h3>
              <p className="text-gray-300 mb-8">
                {t("story.description")}
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  {t("story.readMore")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-96 bg-gray-800 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Star className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                  <p className="text-xl">20+ ans d'excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            {t("store.title")}
          </h2>
        </div>
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Adresse</h3>
              <p className="text-gray-600">{t("store.address")}</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Horaires</h3>
              <p className="text-gray-600">{t("store.hours")}</p>
            </div>
            <div className="text-center">
              <div className="h-8 w-8 bg-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <p className="text-gray-600">+212 522 123 456</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/contact">
              <Button>
                Nous contacter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
