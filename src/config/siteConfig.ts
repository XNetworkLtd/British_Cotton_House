export interface SiteConfig {
  brandName: string;
  tradingName: string;
  tagline: string;
  subHeadline: string;
  serviceLine: string;
  phoneDisplay: string;
  phoneHref: string;
  emailDisplay: string;
  emailHref: string;
  serviceAreaSummary: string;
  serviceAreas: string[];
  postcodes: string[];
  openingHours: string;
  businessAddress: string;
  googleProfileUrl: string;
  paymentPolicyText: string;
  paymentMethodsText: string;
  turnaroundText: string;
  freeCollectionFootnote: string;
  newCustomerOffer: string;
  copyrightYear: number;
}

export const siteConfig: SiteConfig = {
  brandName: "British Cotton House",
  tradingName: "British Cotton House (Trading name of XNetwork Online Ltd)",
  tagline: "YOU RELAX. WE DO THE LAUNDRY.",
  subHeadline: "Professional laundry and garment care, collected and delivered to your doorstep.",
  serviceLine: "Laundry • Wash & Iron • Ironing • Dry Cleaning • Shoe Care • Alterations",
  phoneDisplay: "+44 7587 764215",
  phoneHref: "tel:+447587764215",
  emailDisplay: "info@xnetwork.online",
  emailHref: "mailto:info@xnetwork.online",
  serviceAreaSummary: "Harrow",
  serviceAreas: ["Harrow", "Wembley", "Pinner", "London"],
  postcodes: ["HA1", "HA2", "HA3", "HA5", "HA9", "NW9", "UB6"],
  openingHours: "[OPENING HOURS]",
  businessAddress: "[BUSINESS ADDRESS]",
  googleProfileUrl: "[GOOGLE BUSINESS PROFILE URL]",
  paymentPolicyText: "[INSERT ACTUAL PAYMENT POLICY]",
  paymentMethodsText: "We currently accept [CARD / CASH / BANK TRANSFER / OTHER ACTUAL METHODS]. Please confirm your preferred payment method when booking.",
  turnaroundText: "Typical turnaround: [INSERT ACTUAL TURNAROUND]",
  freeCollectionFootnote: "*Free collection and delivery on qualifying orders within our service area. Please call for availability and current terms.",
  newCustomerOffer: "[INSERT CURRENT OFFER]",
  copyrightYear: new Date().getFullYear(),
};
