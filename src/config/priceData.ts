export interface PriceItem {
  name: string;
  price: string;
  highlighted?: boolean;
  note?: string;
}

export interface PriceCategory {
  id: string;
  title: string;
  iconName: string;
  description?: string;
  items: PriceItem[];
  footerNote?: string;
}

export const popularPricesHomepage: PriceItem[] = [
  { name: "6 KG WASH, DRY & FOLD", price: "£17.99", highlighted: true },
  { name: "SHIRT — WASH & IRON", price: "£2.49" },
  { name: "SHIRT — IRON ONLY", price: "£2.25" },
  { name: "2-PIECE SUIT — DRY CLEAN", price: "£14.49" },
  { name: "BASIC SHOE CLEAN", price: "£14.99" },
  { name: "TROUSER SHORTENING", price: "£17.99" },
];

export const priceCategoriesData: PriceCategory[] = [
  {
    id: "wash-dry-fold",
    title: "1. Wash, Dry & Fold",
    iconName: "Shirt",
    description: "Everyday clothing, towels, and casual laundry cleaned, tumble-dried, and neatly folded.",
    items: [
      { name: "Wash, Dry & Fold — 3 kg", price: "£11.99" },
      { name: "Wash, Dry & Fold — 6 kg", price: "£17.99", highlighted: true, note: "MOST POPULAR" },
      { name: "Additional kg", price: "£3.25" },
    ],
    footerNote: "FREE collection & delivery on qualifying orders of £15+."
  },
  {
    id: "wash-iron",
    title: "2. Wash & Iron",
    iconName: "Sparkles",
    description: "Freshly cleaned and professionally hand-pressed garments delivered ready to wear.",
    items: [
      { name: "Shirt", price: "£2.49" },
      { name: "T-shirt", price: "£3.49" },
      { name: "Blouse", price: "£5.49" },
      { name: "Top", price: "£5.49" },
      { name: "Shorts", price: "£5.49" },
      { name: "Skirt", price: "£6.99" },
      { name: "Trousers", price: "£7.49" },
      { name: "Jeans", price: "£7.49" },
      { name: "Blazer", price: "£8.49" },
      { name: "Waistcoat", price: "£6.99" },
      { name: "Baby clothing", price: "£2.99" },
    ],
    footerNote: "Need several garments cleaned and pressed? Call us and we'll help you choose the most suitable service."
  },
  {
    id: "iron-only",
    title: "3. Iron / Press Only",
    iconName: "Flame",
    description: "Crisp, immaculate pressing for your already laundered items and household linens.",
    items: [
      { name: "Shirt", price: "£2.25" },
      { name: "T-shirt", price: "£2.75" },
      { name: "Top", price: "£4.49" },
      { name: "Shorts", price: "£4.25" },
      { name: "Skirt", price: "£5.49" },
      { name: "Trousers", price: "£5.49" },
      { name: "Blazer", price: "£6.99" },
      { name: "Bed sheet", price: "£6.49" },
      { name: "Duvet cover", price: "£8.49" },
      { name: "Pillowcase", price: "£1.99" },
      { name: "Tablecloth ≤2m", price: "£6.99" },
      { name: "Apron", price: "£1.99" },
      { name: "Tea towel", price: "£1.49" },
    ]
  },
  {
    id: "dry-cleaning",
    title: "4. Dry Cleaning",
    iconName: "Sparkles",
    description: "Gentle, expert dry cleaning for suits, coats, silk, wool, and structured garments.",
    items: [
      { name: "Shirt", price: "£3.49" },
      { name: "T-shirt", price: "£4.49" },
      { name: "Blouse", price: "£5.49" },
      { name: "Silk blouse", price: "£8.99" },
      { name: "Top", price: "£6.99" },
      { name: "Skirt", price: "£7.49" },
      { name: "Silk skirt", price: "£9.99" },
      { name: "Trousers", price: "£7.49" },
      { name: "Silk trousers", price: "£9.49" },
      { name: "Jacket / Blazer", price: "£8.99" },
      { name: "Waistcoat", price: "£6.49" },
      { name: "2-piece suit", price: "£14.49" },
      { name: "3-piece suit", price: "£19.49" },
      { name: "Overcoat", price: "£16.49" },
      { name: "Puffer jacket", price: "£21.99" },
      { name: "Premium / Designer puffer", price: "£49.99" },
      { name: "Shawl", price: "£8.99" },
    ],
    footerNote: "Specialist garments may require assessment and quotation before acceptance."
  },
  {
    id: "household-textiles",
    title: "5. Household Textiles",
    iconName: "Bed",
    description: "Deep care and refreshing for sheets, duvet covers, bath towels, tablecloths, and robes.",
    items: [
      { name: "Single bedsheet", price: "£4.99" },
      { name: "Double bedsheet", price: "£5.99" },
      { name: "Single duvet cover", price: "£5.99" },
      { name: "Double duvet cover", price: "£7.49" },
      { name: "Pillowcase", price: "£1.99" },
      { name: "Cushion cover", price: "£7.99" },
      { name: "Bath towel", price: "£3.99" },
      { name: "Hand towel", price: "£2.49" },
      { name: "Bath mat", price: "£4.99" },
      { name: "Bathrobe", price: "£11.99" },
      { name: "Tablecloth", price: "£8.49" },
      { name: "Apron", price: "£2.99" },
      { name: "Tea towel", price: "£1.49" },
    ]
  },
  {
    id: "shoe-care",
    title: "6. Shoe & Trainer Cleaning",
    iconName: "Footprints",
    description: "Professional cleaning, stain treatment, and polishing for footwear.",
    items: [
      { name: "Basic shoe clean", price: "£14.99" },
      { name: "Shoe clean + polish", price: "£16.99" },
      { name: "Leather shoe clean", price: "£19.99" },
      { name: "Suede shoe clean", price: "£24.99" },
      { name: "Basic trainer clean", price: "£24.99" },
      { name: "Premium trainer clean", price: "£34.99" },
      { name: "Designer / specialist footwear", price: "From £44.99" },
    ],
    footerNote: "Premium, designer, delicate or heavily soiled footwear may require assessment and quotation."
  },
  {
    id: "alterations",
    title: "7. Alterations & Repairs",
    iconName: "Scissors",
    description: "Precision tailoring, zip replacements, waist adjustments, and garment repairs.",
    items: [
      { name: "Button replacement", price: "£2.99" },
      { name: "Trouser shortening", price: "£17.99" },
      { name: "Trouser waist adjustment", price: "£19.99" },
      { name: "Trouser taper", price: "£22.99" },
      { name: "Trouser zip replacement", price: "£14.99" },
      { name: "Shirt sleeve shortening", price: "£12.99" },
      { name: "Shirt side alteration", price: "£14.99" },
      { name: "Skirt waist adjustment", price: "£19.99" },
      { name: "Jacket sleeve shortening", price: "£24.99" },
      { name: "Jacket zip replacement", price: "£29.99" },
      { name: "Jacket pocket repair", price: "£19.99" },
    ],
    footerNote: "Complex alterations from £XX / quotation required upon garment inspection."
  }
];

export const additionalQuotationServices = [
  "Duvet cleaning",
  "Mattress toppers",
  "Blankets",
  "Curtains",
  "Rugs",
  "Carpet cleaning",
  "Persian / Oriental rugs",
  "Jute / sisal rugs",
  "Specialist evening wear",
  "Wedding dresses",
  "Specialist leather garments"
];
