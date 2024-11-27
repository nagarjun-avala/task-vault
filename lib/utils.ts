import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to format currency
export function formatCurrency(amount: number, currency: string = "INR", locale: string = "en-IN"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}

// Utility function to format date
export function formatDate(dateString: string, locale: string = "en-IN", options?: Intl.DateTimeFormatOptions): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, options).format(date);
}