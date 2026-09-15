import React from 'react';
import { Phone, Shirt, Sparkles, Flame, Footprints, Scissors, Bed, Info, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BusinessCTA } from '../components/BusinessCTA';
import { additionalQuotationServices } from '../config/priceData';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <Breadcrumbs pageTitle="Services" onNavigate={onNavigate} />

      {/* Header */}
      <section className="section section-cream" style={{ borderBottom: '1px solid var(--color-cream-border)' }}>
        <div className="container text-center" style={{ maxWidth: '850px' }}>
          <span className="badge badge-gold">GARMENT & TEXTILE CARE</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            OUR SERVICES
          </h1>
          <p className="lead" style={{ fontSize: '1.25rem' }}>
            From everyday family laundry to tailored suits, footwear, delicate fabrics and precision alterations — British Cotton House provides comprehensive doorstep garment care.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a href={siteConfig.phoneHref} className="btn btn-gold">
              <Phone size={18} />
              <span>📞 CALL TO BOOK: {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '2.5rem' }}>
            
            {/* 1. Everyday Laundry */}
            <div id="laundry" className="card" style={{ padding: '2.2rem' }}>
              <div className="card-icon">
                <Shirt size={28} />
              </div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>🧺 Everyday Laundry (Wash, Dry & Fold)</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.2rem' }}>
                Ideal for everyday family clothing, underwear, socks, pyjamas, gym kit, towels, and casual linens. Clothes are washed using gentle, high-quality detergents, tumble-dried, and neatly folded ready to put straight into your wardrobe.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>3 kg & 6 kg standard wash bags</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>Color & fabric segregation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>Neatly folded and wrapped</span>
                </div>
              </div>
              <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-cream-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: 'var(--color-navy-dark)' }}>From £11.99 (3 kg)</span>
                <a href={siteConfig.phoneHref} className="btn btn-outline" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>Call to Book</a>
              </div>
            </div>

            {/* 2. Wash & Iron */}
            <div id="wash-iron" className="card" style={{ padding: '2.2rem' }}>
              <div className="card-icon">
                <Sparkles size={28} />
              </div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>👔 Wash & Iron</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.2rem' }}>
                Freshly laundered and hand-pressed for a sharp, flawless finish. Recommended for business shirts, work blouses, formal trousers, dresses, and items requiring immaculate presentation.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>Crisp collar and cuff pressing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>Returned on hangers or neatly folded</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>Shirts from £2.49</span>
                </div>
              </div>
              <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-cream-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: 'var(--color-navy-dark)' }}>Shirts from £2.49</span>
                <a href={siteConfig.phoneHref} className="btn btn-outline" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>Call to Book</a>
              </div>
            </div>

            {/* 3. Ironing Only */}
            <div id="ironing" className="card" style={{ padding: '2.2rem' }}>
              <div className="card-icon">
                <Flame size={28} />
              </div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>✨ Ironing / Pressing Only</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.2rem' }}>
                Already done your wash at home? Save hours at the ironing board. Send your freshly washed clothing and household linens to us for expert steaming and hand pressing.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>Shirts press only: £2.25</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>Bedsheets & duvet covers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>Tablecloths & kitchen textiles</span>
                </div>
              </div>
              <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-cream-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: 'var(--color-navy-dark)' }}>From £1.49 / item</span>
                <a href={siteConfig.phoneHref} className="btn btn-outline" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>Call to Book</a>
              </div>
            </div>

            {/* 4. Dry Cleaning */}
            <div id="dry-cleaning" className="card" style={{ padding: '2.2rem' }}>
              <div className="card-icon">
                <Sparkles size={28} />
              </div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>🧥 Professional Dry Cleaning</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.2rem' }}>
                Specialist dry cleaning care for wool suits, tailored jackets, silk blouses, evening wear, structured coats, and delicate fabrics requiring non-water solvent cleaning.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>2-piece suits: £14.49</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>Overcoats & puffers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>Silk & delicate silk garments</span>
                </div>
              </div>
              <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-cream-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: 'var(--color-navy-dark)' }}>Suits from £14.49</span>
                <a href={siteConfig.phoneHref} className="btn btn-outline" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>Call to Book</a>
              </div>
            </div>

            {/* 5. Shoe Care */}
            <div id="shoe-care" className="card" style={{ padding: '2.2rem' }}>
              <div className="card-icon">
                <Footprints size={28} />
              </div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>👟 Shoe & Trainer Care</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.2rem' }}>
                Dedicated cleaning and reviving for leather shoes, suede boots, canvas sneakers, and premium trainers. Keeps your footwear fresh and well-maintained.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>Basic shoe clean: £14.99</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>Leather polish & suede treatment</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>Premium trainer deep clean</span>
                </div>
              </div>
              <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-cream-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: 'var(--color-navy-dark)' }}>From £14.99</span>
                <a href={siteConfig.phoneHref} className="btn btn-outline" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>Call to Book</a>
              </div>
            </div>

            {/* 6. Alterations & Repairs */}
            <div id="alterations" className="card" style={{ padding: '2.2rem' }}>
              <div className="card-icon">
                <Scissors size={28} />
              </div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>✂️ Alterations & Repairs</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.2rem' }}>
                Precision clothing repairs and tailoring. From shortening trousers and tapering legs to zip replacements, button stitching, and jacket sleeve adjustments.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>Trouser shortening: £17.99</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>Zip replacement & button repair</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} className="text-sage" />
                  <span>Waist & sleeve tailoring</span>
                </div>
              </div>
              <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-cream-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: 'var(--color-navy-dark)' }}>From £2.99</span>
                <a href={siteConfig.phoneHref} className="btn btn-outline" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>Call to Book</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Additional Quotation Services */}
      <section className="section section-cream">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-4">
            <span className="badge badge-gold">SPECIALIST ITEMS</span>
            <h2>ADDITIONAL SERVICES BY QUOTATION</h2>
            <p className="lead">
              For specialist, oversized, or luxury items, we assess each piece individually to provide an accurate quotation.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '1rem' }}>
            {additionalQuotationServices.map((item, idx) => (
              <div key={idx} className="card" style={{ padding: '1.25rem', flexDirection: 'row', alignItems: 'center', gap: '0.75rem' }}>
                <Info size={18} className="text-gold" style={{ flexShrink: 0 }} />
                <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-navy-dark)' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', backgroundColor: 'var(--color-white)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-cream-border)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Need a quotation for a specialist item?</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.2rem' }}>
              Call our team with details of your garment or household item, and we will confirm suitability and pricing.
            </p>
            <a href={siteConfig.phoneHref} className="btn btn-primary">
              <Phone size={18} />
              <span>📞 CALL FOR QUOTATION: {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      <BusinessCTA />
    </main>
  );
};
