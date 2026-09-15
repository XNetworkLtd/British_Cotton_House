import { siteConfig } from './siteConfig';

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  "name": siteConfig.brandName,
  "description": siteConfig.subHeadline,
  "url": "https://www.britishcottonhouse.co.uk",
  "telephone": siteConfig.phoneDisplay,
  "email": siteConfig.emailDisplay,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.businessAddress,
    "addressCountry": "GB"
  },
  "areaServed": siteConfig.serviceAreas,
  "priceRange": "££",
  "paymentAccepted": siteConfig.paymentMethodsText,
  "openingHours": siteConfig.openingHours,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Garment Care & Laundry Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wash, Dry & Fold Laundry"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Shirt Wash & Iron"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Suit Dry Cleaning"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Shoe & Trainer Cleaning"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Clothing Alterations & Repairs"
        }
      }
    ]
  }
};
