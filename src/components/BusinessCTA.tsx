import React from 'react';
import { Phone, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const BusinessCTA: React.FC = () => {
  return (
    <section className="section section-navy text-center" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '850px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          <Sparkles size={18} />
          <span>THOUGHTFUL CARE MADE EASY</span>
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-white)', marginBottom: '1.25rem' }}>
          READY TO TAKE LAUNDRY OFF YOUR LIST?
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', lineHeight: '1.6' }}>
          From everyday laundry to professional garment care, British Cotton House is here to make life a little easier.
        </p>

        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-md)', padding: '1.8rem', border: '1px solid rgba(212, 175, 55, 0.3)', marginBottom: '2rem' }}>
          <h3 style={{ color: 'var(--color-gold)', fontSize: '1.6rem', marginBottom: '0.4rem' }}>
            📞 CALL {siteConfig.phoneDisplay}
          </h3>
          <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem' }}>
            Tell us what you need. We'll take care of the rest.
          </p>
        </div>

        <a href={siteConfig.phoneHref} className="btn btn-gold" style={{ fontSize: '1.1rem', padding: '1.1rem 2.4rem' }}>
          <Phone size={22} />
          <span>CALL TO BOOK</span>
        </a>

        <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.65)', margin: '1.5rem 0 0 0' }}>
          {siteConfig.freeCollectionFootnote}
        </p>
      </div>
    </section>
  );
};
