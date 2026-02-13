import { useTranslations } from "next-intl";
import Image from "next/image";
import { Award, Users, Heart, Star } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-playfair font-bold mb-4">
          {t("title")}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Notre Histoire
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              {t("description")}
            </p>
            <p>
              Fondée en 2000 par passion pour l'art de la parfumerie, notre maison a commencé comme une petite boutique 
              spécialisée dans les parfums rares et d'exception. Au fil des ans, nous avons développé une expertise 
              reconnue dans la sélection des créations les plus prestigieuses.
            </p>
            <p>
              Aujourd'hui, Parfum House est une référence incontournable pour les amateurs de parfums au Maroc, 
              offrant une collection soigneusement curée de plus de 500 références provenant des maisons les plus 
              prestigieuses du monde entier.
            </p>
          </div>
        </div>
        <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-600 to-yellow-800">
            <div className="text-center text-white">
              <Star className="h-16 w-16 mx-auto mb-4" />
              <p className="text-2xl font-bold">24 ans d'excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12">
          Nos Valeurs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600 text-sm">
              Une sélection rigoureuse des parfums les plus exceptionnels
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold mb-2">Service</h3>
            <p className="text-gray-600 text-sm">
              Une expertise personnalisée pour chaque client
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold mb-2">Passion</h3>
            <p className="text-gray-600 text-sm">
              Un amour profond pour l'art de la parfumerie
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold mb-2">Authenticité</h3>
            <p className="text-gray-600 text-sm">
              Des produits 100% authentiques et garantis
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 text-white rounded-lg p-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-yellow-600 mb-2">500+</p>
            <p className="text-gray-300">Références</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-yellow-600 mb-2">24</p>
            <p className="text-gray-300">Années d'expérience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-yellow-600 mb-2">50+</p>
            <p className="text-gray-300">Maisons de parfum</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-yellow-600 mb-2">10k+</p>
            <p className="text-gray-300">Clients satisfaits</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-playfair font-bold text-center mb-12">
          Notre Équipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold mb-1">Karim Alami</h3>
            <p className="text-gray-600 text-sm mb-2">Fondateur & Expert Parfum</p>
            <p className="text-gray-500 text-xs">
              Plus de 25 ans d'expérience dans la parfumerie de luxe
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold mb-1">Sophie Martin</h3>
            <p className="text-gray-600 text-sm mb-2">Directrice Artistique</p>
            <p className="text-gray-500 text-xs">
              Spécialiste en création olfactive et tendances
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold mb-1">Youssef Benali</h3>
            <p className="text-gray-600 text-sm mb-2">Conseiller Clientèle</p>
            <p className="text-gray-500 text-xs">
              Expert en conseil personnalisé et découverte olfactive
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
