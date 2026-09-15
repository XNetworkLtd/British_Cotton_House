import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-4" style={{ gap: '3rem' }}>
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <h3 style={{ color: 'var(--color-white)', fontSize: '1.6rem', marginBottom: '0.5rem' }}>
              BRITISH COTTON HOUSE
            </h3>
            <p style={{ color: 'var(--color-gold)', fontStyle: 'italic', marginBottom: '1rem', fontSize: '0.95rem' }}>
              Professional Laundry & Garment Care
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              {siteConfig.serviceLine}
            </p>
            <div className="mt-3" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                <Phone size={16} className="text-gold" />
                <a href={siteConfig.phoneHref} style={{ fontWeight: 700, color: 'var(--color-white)' }}>
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <Mail size={16} className="text-gold" />
                <span>{siteConfig.emailDisplay}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <MapPin size={16} className="text-gold" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>{siteConfig.serviceAreaSummary}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: 0 }}>
              <li><a href="/" onClick={(e) => handleNav(e, '/')}>Home</a></li>
              <li><a href="/services" onClick={(e) => handleNav(e, '/services')}>Services</a></li>
              <li><a href="/prices" onClick={(e) => handleNav(e, '/prices')}>Prices & Pricing List</a></li>
              <li><a href="/how-it-works" onClick={(e) => handleNav(e, '/how-it-works')}>How It Works</a></li>
              <li><a href="/about" onClick={(e) => handleNav(e, '/about')}>About Us</a></li>
              <li><a href="/service-area" onClick={(e) => handleNav(e, '/service-area')}>Service Area</a></li>
              <li><a href="/faq" onClick={(e) => handleNav(e, '/faq')}>FAQs</a></li>
              <li><a href="/contact" onClick={(e) => handleNav(e, '/contact')}>Contact Us</a></li>
            </ul>
          </div>

          {/* Services & B2B Links */}
          <div>
            <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Garment Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: 0 }}>
              <li><a href="/services#laundry" onClick={(e) => handleNav(e, '/services')}>Everyday Laundry</a></li>
              <li><a href="/services#wash-iron" onClick={(e) => handleNav(e, '/services')}>Wash & Iron</a></li>
              <li><a href="/services#ironing" onClick={(e) => handleNav(e, '/services')}>Hand Ironing</a></li>
              <li><a href="/services#dry-cleaning" onClick={(e) => handleNav(e, '/services')}>Dry Cleaning</a></li>
              <li><a href="/services#shoe-care" onClick={(e) => handleNav(e, '/services')}>Shoe & Trainer Care</a></li>
              <li><a href="/services#alterations" onClick={(e) => handleNav(e, '/services')}>Clothing Alterations</a></li>
              <li><a href="/commercial" onClick={(e) => handleNav(e, '/commercial')}>Commercial Laundry</a></li>
            </ul>
          </div>

          {/* Customer & Policy Information */}
          <div>
            <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Care & Legal Policies
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: 0, fontSize: '0.9rem' }}>
              <li><a href="/terms" onClick={(e) => handleNav(e, '/terms')}>Terms & Conditions</a></li>
              <li><a href="/privacy" onClick={(e) => handleNav(e, '/privacy')}>Privacy Policy</a></li>
              <li><a href="/cookie-policy" onClick={(e) => handleNav(e, '/cookie-policy')}>Cookie Policy</a></li>
              <li><a href="/laundry-care-policy" onClick={(e) => handleNav(e, '/laundry-care-policy')}>Laundry Care Policy</a></li>
              <li><a href="/lost-and-damaged" onClick={(e) => handleNav(e, '/lost-and-damaged')}>Lost & Damaged Garments</a></li>
              <li><a href="/cancellation-policy" onClick={(e) => handleNav(e, '/cancellation-policy')}>Cancellation & Refund Policy</a></li>
              <li><a href="/complaints-policy" onClick={(e) => handleNav(e, '/complaints-policy')}>Complaints Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p style={{ marginBottom: '0.4rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            © {siteConfig.copyrightYear} British Cotton House. All rights reserved.
          </p>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.5)' }}>
            {siteConfig.tradingName}. Professional care, collected from your door.
          </p>
        </div>
      </div>
    </footer>
  );
};
