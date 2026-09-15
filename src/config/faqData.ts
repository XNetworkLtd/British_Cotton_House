export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    category: "General Booking & Delivery",
    items: [
      {
        question: "How do I book British Cotton House?",
        answer: "Booking is simple. Call us on [PHONE NUMBER]. Tell us what services you need and your collection address. Our team will confirm availability, collection arrangements and an estimated price."
      },
      {
        question: "Do you offer free collection and delivery?",
        answer: "Yes, free collection and delivery is available on qualifying orders within our service area. Please call us to confirm eligibility, availability and current terms."
      },
      {
        question: "Do I need an account?",
        answer: "No online account is required. Our service is designed around simple telephone booking."
      },
      {
        question: "Do you have a minimum order?",
        answer: "Our standard free collection and delivery service applies to qualifying orders. Please call us to confirm the current minimum order and any applicable collection or delivery charges."
      },
      {
        question: "How quickly will I get my clothes back?",
        answer: "Turnaround depends on the service, garment type and current workload. When you call, we will explain the expected turnaround for your order. Specialist garments may require additional time."
      },
      {
        question: "Do you operate on weekends?",
        answer: "Availability depends on your local collection and delivery schedule. Please call us for current opening and collection times."
      }
    ]
  },
  {
    category: "Laundry Care",
    items: [
      {
        question: "Do you wash whites and colours separately?",
        answer: "Where appropriate, laundry is sorted according to colour, fabric and care requirements. Customers should identify any garments that require special handling."
      },
      {
        question: "Can you wash delicate clothing?",
        answer: "Yes, we can accept many delicate garments, subject to the garment's care label and suitability for the requested service. Specialist items may require a quotation or specialist treatment."
      },
      {
        question: "Can you remove stains?",
        answer: "We can treat many common stains, but stain removal cannot be guaranteed. The outcome depends on the type of stain, fabric, age of the stain and previous treatment."
      },
      {
        question: "Can I request fragrance-free washing?",
        answer: "Please mention any fragrance or detergent preferences when booking. We will confirm what options are available for your order."
      },
      {
        question: "Do you wash bedding and duvets?",
        answer: "Yes. We offer cleaning and care for selected bedding and household textiles, including sheets, duvet covers, towels and other listed items. Specialist or oversized items should be discussed when booking."
      }
    ]
  },
  {
    category: "Dry Cleaning",
    items: [
      {
        question: "Do you dry clean suits?",
        answer: "Yes. We offer dry cleaning for suits, jackets, trousers, dresses, coats and other suitable garments."
      },
      {
        question: "Can you clean silk garments?",
        answer: "Silk and other delicate fabrics require appropriate care. Please tell us about the garment when booking so we can confirm the suitable treatment."
      },
      {
        question: "Can you clean wedding or evening dresses?",
        answer: "We can discuss specialist garments such as wedding and evening dresses on a case-by-case basis. Please call for an assessment and quotation before booking."
      },
      {
        question: "Can you clean leather or suede?",
        answer: "Leather and suede require specialist treatment. Please contact us before booking so we can confirm whether the item can be accepted and provide a quotation where required."
      }
    ]
  },
  {
    category: "Shoe & Trainer Care",
    items: [
      {
        question: "Do you clean trainers?",
        answer: "Yes. We offer cleaning for suitable trainers and footwear."
      },
      {
        question: "Do you clean leather shoes?",
        answer: "Yes. Leather footwear can be cleaned and cared for using an appropriate service."
      },
      {
        question: "Do you clean suede shoes?",
        answer: "Yes, subject to assessment and suitability. Suede requires specialist handling, so please mention the material when booking."
      },
      {
        question: "Do you clean designer footwear?",
        answer: "Premium and designer footwear can require specialist treatment. Please call us before booking so we can assess the item and provide the appropriate service and quotation."
      }
    ]
  },
  {
    category: "Alterations & Repairs",
    items: [
      {
        question: "Can you shorten trousers?",
        answer: "Yes. Trouser shortening is available from £17.99, subject to the garment and required finish."
      },
      {
        question: "Can you replace zips?",
        answer: "Yes. Zip replacement is available for selected garments. Pricing depends on the garment, zip and complexity."
      },
      {
        question: "Can you alter dresses?",
        answer: "Selected dress alterations are available. Please call us with details of the garment and required alteration for a quotation."
      },
      {
        question: "Can you alter jackets?",
        answer: "Yes, selected jacket alterations and repairs are available. Complex work may require assessment and quotation."
      }
    ]
  },
  {
    category: "Payment & Policies",
    items: [
      {
        question: "How can I pay?",
        answer: "We currently accept [CARD / CASH / BANK TRANSFER / OTHER ACTUAL METHODS]. Please confirm the available payment method when booking."
      },
      {
        question: "Do I pay before or after the service?",
        answer: "[INSERT ACTUAL PAYMENT POLICY]. Please check with our team when placing your booking."
      }
    ]
  }
];
