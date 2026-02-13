"use client";

import { useLocale, useTranslations } from "next-intl";
import { Product } from "@/types/product";
import { formatPrice, getLocalizedText, createWhatsAppMessage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, Star, MessageCircle } from "lucide-react";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const locale = useLocale();
  const t = useTranslations("product");
  
  const productName = getLocalizedText(product.name, locale);
  const productDescription = product.description ? getLocalizedText(product.description, locale) : "";

  const handleWhatsAppClick = () => {
    const message = createWhatsAppMessage(productName, locale);
    const whatsappUrl = `https://wa.me/212600000000?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Product Name & Brand */}
      <div>
        <p className="text-lg text-gray-500 mb-2">{product.brand}</p>
        <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
          {productName}
        </h1>
        
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < 4 ? "text-yellow-600 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">(4.5) • 128 avis</span>
        </div>
      </div>

      {/* Price */}
      <div className="border-b border-gray-200 pb-6">
        <div className="flex items-baseline space-x-2">
          <p className="text-3xl font-bold text-gray-900">
            {formatPrice(product.priceMAD)}
          </p>
          <p className="text-sm text-gray-500">
            à partir de {product.volumeML[0]}ml
          </p>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          {product.concentration} • {product.gender === "men" ? "Homme" : product.gender === "women" ? "Femme" : "Unisex"}
        </p>
      </div>

      {/* Description */}
      {productDescription && (
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-lg font-semibold mb-3">{t("description")}</h3>
          <p className="text-gray-600 leading-relaxed">{productDescription}</p>
        </div>
      )}

      {/* Notes */}
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-semibold mb-4">{t("notes")}</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">{t("topNotes")}</h4>
            <div className="flex flex-wrap gap-2">
              {product.notes.top.map((note, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-yellow-50 text-yellow-800 rounded-full text-sm"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">{t("heartNotes")}</h4>
            <div className="flex flex-wrap gap-2">
              {product.notes.heart.map((note, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-pink-50 text-pink-800 rounded-full text-sm"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">{t("baseNotes")}</h4>
            <div className="flex flex-wrap gap-2">
              {product.notes.base.map((note, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-sm"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Volume Options */}
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-lg font-semibold mb-4">{t("volume")}</h3>
        <div className="flex space-x-3">
          {product.volumeML.map((volume) => (
            <button
              key={volume}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:border-yellow-600 hover:bg-yellow-50 transition-colors"
            >
              {volume}ml
            </button>
          ))}
        </div>
      </div>

      {/* Stock Status */}
      <div className="flex items-center space-x-2">
        {product.inStock ? (
          <>
            <Check className="h-5 w-5 text-green-600" />
            <span className="text-green-600 font-medium">{t("inStock")}</span>
          </>
        ) : (
          <>
            <span className="text-red-600 font-medium">{t("outOfStock")}</span>
          </>
        )}
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3">
        <Button
          size="lg"
          onClick={handleWhatsAppClick}
          disabled={!product.inStock}
          className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          {t("addToWhatsApp")}
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className="w-full"
          disabled={!product.inStock}
        >
          Ajouter au panier
        </Button>
      </div>

      {/* Product Details */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold mb-4">{t("details")}</h3>
        <dl className="space-y-3">
          <div className="flex justify-between">
            <dt className="text-gray-600">{t("brand")}</dt>
            <dd className="font-medium">{product.brand}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-600">{t("concentration")}</dt>
            <dd className="font-medium">{product.concentration}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-600">Genre</dt>
            <dd className="font-medium capitalize">
              {product.gender === "men" ? "Homme" : product.gender === "women" ? "Femme" : "Unisex"}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
