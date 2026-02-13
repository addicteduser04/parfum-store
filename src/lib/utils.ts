import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'MAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function createWhatsAppMessage(productName: string, locale: string): string {
  const message = locale === 'ar' 
    ? `مرحباً، أود شراء هذا العطر: ${productName}`
    : `Bonjour, je souhaite acheter ce parfum: ${productName}`;
  
  return encodeURIComponent(message);
}

export function getLocalizedText(text: { fr: string; ar: string }, locale: string): string {
  return text[locale as keyof typeof text] || text.fr;
}
