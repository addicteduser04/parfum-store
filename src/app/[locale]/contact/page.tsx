"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Bonjour, je souhaite en savoir plus sur vos produits.");
    window.open(`https://wa.me/212600000000?text=${message}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-playfair font-bold mb-4">
          {t("title")}
        </h1>
        <p className="text-xl text-gray-600">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {t("form.name")} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t("form.email")} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                {t("form.subject")} *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {t("form.message")} *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              {t("form.send")}
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Quick Contact */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">{t("info")}</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{t("info.address")}</h3>
                  <p className="text-gray-600">123 Avenue Mohammed V, Casablanca 20100</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{t("info.phone")}</h3>
                  <p className="text-gray-600">+212 522 123 456</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{t("info.email")}</h3>
                  <p className="text-gray-600">contact@parfumhouse.ma</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{t("info.hours")}</h3>
                  <p className="text-gray-600">
                    Lun-Sam: 9h-20h<br />
                    Dim: 10h-18h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <MessageCircle className="h-8 w-8 text-green-600" />
              <h3 className="text-lg font-semibold text-green-800">WhatsApp</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Contactez-nous directement via WhatsApp pour une réponse rapide!
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Chatter sur WhatsApp
            </Button>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/parfumhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Instagram className="h-6 w-6 text-gray-700" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <span className="text-gray-700 font-bold">f</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <span className="text-gray-700 font-bold">in</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Nous trouver</h2>
        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <MapPin className="h-16 w-16 mx-auto mb-4" />
            <p className="text-lg">Carte interactive</p>
            <p className="text-sm">123 Avenue Mohammed V, Casablanca</p>
          </div>
        </div>
      </div>
    </div>
  );
}
