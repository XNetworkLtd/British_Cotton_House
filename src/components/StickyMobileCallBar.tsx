import React from 'react';
import { Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const StickyMobileCallBar: React.FC = () => {
  return (
    <div className="sticky-mobile-bar">
      <a href={siteConfig.phoneHref} className="mobile-call-btn">
        <Phone size={22} fill="currentColor" />
        <span>📞 CALL TO BOOK</span>
      </a>
    </div>
  );
};
