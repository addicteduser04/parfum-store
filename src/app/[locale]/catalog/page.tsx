"use client";

import { useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { Search, Filter, ChevronDown } from "lucide-react";

export default function CatalogPage() {
  const t = useTranslations("catalog");
  const locale = useLocale();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedConcentration, setSelectedConcentration] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique brands
  const brands = useMemo(() => {
    const uniqueBrands = [...new Set(products.map(p => p.brand))];
    return uniqueBrands.sort();
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => product.inStock);

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.fr.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.name.ar.includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Gender filter
    if (selectedGender !== "all") {
      filtered = filtered.filter(product => product.gender === selectedGender);
    }

    // Brand filter
    if (selectedBrand !== "all") {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    // Concentration filter
    if (selectedConcentration !== "all") {
      filtered = filtered.filter(product => product.concentration === selectedConcentration);
    }

    // Price filter
    filtered = filtered.filter(product => 
      product.priceMAD >= priceRange.min && product.priceMAD <= priceRange.max
    );

    // Sort products
    switch (sortBy) {
      case "priceAsc":
        filtered.sort((a, b) => a.priceMAD - b.priceMAD);
        break;
      case "priceDesc":
        filtered.sort((a, b) => b.priceMAD - a.priceMAD);
        break;
      case "popular":
        filtered.sort((a, b) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0));
        break;
      case "newest":
      default:
        // Keep original order (newest first)
        break;
    }

    return filtered;
  }, [searchTerm, selectedGender, selectedBrand, selectedConcentration, priceRange, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-playfair font-bold mb-4">
          {t("title")}
        </h1>
        
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder={t("filters.search")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-64">
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filtres
              <ChevronDown className={`ml-2 h-4 w-4 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          <div className={`${showFilters ? 'block' : 'hidden'} lg:block bg-white p-6 rounded-lg border border-gray-200`}>
            <h3 className="font-semibold mb-4">Filtres</h3>
            
            {/* Gender Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Genre</label>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
              >
                <option value="all">{t("filters.all")}</option>
                <option value="men">{t("filters.men")}</option>
                <option value="women">{t("filters.women")}</option>
                <option value="unisex">{t("filters.unisex")}</option>
              </select>
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">{t("filters.brand")}</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
              >
                <option value="all">{t("filters.all")}</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Concentration Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">{t("filters.concentration")}</label>
              <select
                value={selectedConcentration}
                onChange={(e) => setSelectedConcentration(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
              >
                <option value="all">{t("filters.all")}</option>
                <option value="EDP">EDP</option>
                <option value="EDT">EDT</option>
                <option value="Extrait">Extrait</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">{t("filters.price")}</label>
              <div className="space-y-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: parseInt(e.target.value) || 0 }))}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseInt(e.target.value) || 5000 }))}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
              </div>
            </div>

            {/* Reset Filters */}
            <Button
              variant="outline"
              onClick={() => {
                setSelectedGender("all");
                setSelectedBrand("all");
                setSelectedConcentration("all");
                setPriceRange({ min: 0, max: 5000 });
                setSearchTerm("");
              }}
              className="w-full"
            >
              Réinitialiser
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Sorting */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              {filteredProducts.length} produits trouvés
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{t("sorting.label")}</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
              >
                <option value="newest">{t("sorting.newest")}</option>
                <option value="priceAsc">{t("sorting.priceAsc")}</option>
                <option value="priceDesc">{t("sorting.priceDesc")}</option>
                <option value="popular">{t("sorting.popular")}</option>
              </select>
            </div>
          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">{t("noResults")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
