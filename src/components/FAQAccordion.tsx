import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQItem } from '../config/faqData';
import { siteConfig } from '../config/siteConfig';

interface FAQAccordionProps {
  item: FAQItem;
  defaultOpen?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ item, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Replace placeholders in answer text if needed
  const formattedAnswer = item.answer
    .replace(/\[PHONE NUMBER\]/g, siteConfig.phoneDisplay)
    .replace(/\[SERVICE AREA\]/g, siteConfig.serviceAreaSummary);

  return (
    <div className="faq-accordion">
      <div 
        className="faq-header"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <HelpCircle size={20} className="text-gold" style={{ flexShrink: 0 }} />
          <h4 className="faq-title">{item.question}</h4>
        </div>
        <div style={{ color: 'var(--color-navy-primary)' }}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      {isOpen && (
        <div className="faq-content">
          <p style={{ margin: 0, paddingTop: '1rem' }}>
            {formattedAnswer}
          </p>
        </div>
      )}
    </div>
  );
};
