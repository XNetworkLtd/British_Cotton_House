import React from 'react';
import { Phone, ArrowRight, CheckCircle, Clock, Sparkles, Shirt, Footprints, Scissors, Bed, Flame } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { HeroTrustStrip, WhyUsGrid } from '../components/TrustStrips';
import { ServiceCard } from '../components/ServiceCard';
import { popularPricesHomepage } from '../config/priceData';
import { PostcodeChecker } from '../components/PostcodeChecker';
import { BusinessCTA } from '../components/BusinessCTA';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const servicePreviews = [
    {
      icon: <Shirt size={24} />,
      title: "🧺 Laundry",
      desc: "Wash, dry and fold everyday clothing and household laundry."
    },
    {
      icon: <Sparkles size={24} />,
      title: "👔 Wash & Iron",
      desc: "Freshly cleaned and professionally pressed garments."
    },
    {
      icon: <Flame size={24} />,
      title: "✨ Ironing",
      desc: "Crisp, neat pressing for shirts, trousers, dresses and household textiles."
    },
    {
      icon: <Sparkles size={24} />,
      title: "🧥 Dry Cleaning",
      desc: "Professional care for suits, jackets, dresses, delicate garments and more."
    },
    {
      icon: <Footprints size={24} />,
      title: "👟 Shoe Care",
      desc: "Cleaning and care for leather, suede and everyday footwear."
    },
    {
      icon: <Scissors size={24} />,
      title: "✂️ Alterations",
      desc: "Practical clothing alterations and repairs."
    }
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-bg" style={{ backgroundColor: 'var(--color-navy-dark)', color: 'var(--color-white)', position: 'relative' }}>
        <div className="hero-overlay">
          <div className="container" style={{ maxWidth: '950px', textAlign: 'center' }}>
            <span className="badge badge-gold" style={{ fontSize: '0.85rem' }}>
              BRITISH GARMENT CARE & DOORSTEP LAUNDRY
            </span>
            <h1 style={{ color: 'var(--color-white)', fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginBottom: '1.25rem', lineHeight: '1.15' }}>
              YOU RELAX.<br />
              <span className="text-gold">WE DO THE LAUNDRY.</span>
            </h1>
            <p style={{ fontSize: '1.3rem', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 500, marginBottom: '1rem', maxWidth: '750px', margin: '0 auto 1rem auto' }}>
              {siteConfig.subHeadline}
            </p>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '2.25rem', maxWidth: '700px', margin: '0 auto 2.25rem auto' }}>
              From everyday family laundry to shirts, suits, bedding, shoes and alterations — British Cotton House makes garment care simple.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href={siteConfig.phoneHref} className="btn btn-gold" style={{ fontSize: '1.1rem', padding: '1rem 2.2rem' }}>
                <Phone size={20} />
                <span>📞 CALL TO BOOK</span>
              </a>
              <button 
                onClick={() => onNavigate('/prices')} 
                className="btn btn-outline-light" 
                style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
              >
                <span>VIEW PRICES</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', color: 'var(--color-gold)', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap' }}>
              <span>• Doorstep Collection</span>
              <span>• Professional Care</span>
              <span>• Transparent Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* HERO TRUST STRIP */}
      <HeroTrustStrip />

      {/* LESS LAUNDRY. MORE LIFE. */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream-card)', borderBottom: '1px solid var(--color-cream-border)' }}>
        <div className="container" style={{ maxWidth: '850px', textAlign: 'center' }}>
          <span className="badge badge-gold">A LITTLE MORE TIME FOR LIFE</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1.25rem' }}>
            LESS LAUNDRY. MORE LIFE.
          </h2>
          <p className="lead" style={{ fontSize: '1.25rem', lineHeight: '1.7', marginBottom: '2rem' }}>
            Laundry should not take over your evenings or weekends. British Cotton House takes care of the cleaning, drying, pressing and garment care so you can spend your time on the things that matter.
          </p>
          <a href={siteConfig.phoneHref} className="btn btn-primary" style={{ fontSize: '1.05rem' }}>
            <Phone size={18} />
            <span>📞 CALL TO BOOK: {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge badge-gold">OUR SERVICES</span>
            <h2>EVERYDAY & SPECIALIST GARMENT CARE</h2>
            <p className="lead" style={{ maxWidth: '650px', margin: '0.5rem auto 0 auto' }}>
              Thoughtful cleaning and pressing tailored to every textile in your wardrobe and home.
            </p>
          </div>

          <div className="grid-3">
            {servicePreviews.map((s, idx) => (
              <ServiceCard
                key={idx}
                icon={s.icon}
                title={s.title}
                description={s.desc}
                onExplore={() => onNavigate('/services')}
              />
            ))}
          </div>

          <div className="text-center mt-4">
            <button onClick={() => onNavigate('/services')} className="btn btn-outline" style={{ fontSize: '1rem' }}>
              <span>EXPLORE ALL SERVICES</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* POPULAR PRICES */}
      <section className="section section-cream">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-4">
            <span className="badge badge-gold">POPULAR PRICING</span>
            <h2>TRANSPARENT VALUE. NO HIDDEN FEES.</h2>
            <p className="lead">Here are a few of our most popular starting prices.</p>
          </div>

          <div className="grid-2" style={{ gap: '1.25rem' }}>
            {popularPricesHomepage.map((item, i) => (
              <div 
                key={i} 
                className="card" 
                style={{ 
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  padding: '1.4rem 1.75rem',
                  borderLeft: item.highlighted ? '4px solid var(--color-gold)' : '1px solid var(--color-cream-border)',
                  backgroundColor: item.highlighted ? '#FFFDF5' : 'var(--color-white)'
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--color-navy-dark)' }}>
                    {item.name}
                  </h4>
                  {item.highlighted && (
                    <span className="badge badge-gold" style={{ margin: '0.3rem 0 0 0', padding: '0.1rem 0.5rem', fontSize: '0.65rem' }}>
                      MOST POPULAR
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-navy-primary)' }}>
                  {item.price}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-cream-border)', textAlign: 'center' }}>
            <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-sage)' }}>
              🎁 FREE collection & delivery on qualifying orders of £15+.
            </p>
          </div>

          <div className="text-center mt-4">
            <button onClick={() => onNavigate('/prices')} className="btn btn-primary">
              <span>VIEW FULL PRICE LIST</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS TIMELINE */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge badge-gold">FOUR SIMPLE STEPS</span>
            <h2>HOW BRITISH COTTON HOUSE WORKS</h2>
            <p className="lead">No apps. No complicated forms. Just a friendly phone call.</p>
          </div>

          <div className="timeline">
            <div className="timeline-step">
              <div className="timeline-number">01</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>CALL</h3>
              <p style={{ fontWeight: 600, color: 'var(--color-navy-primary)', fontSize: '0.95rem' }}>Tell us what you need.</p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Call British Cotton House and tell us about your laundry, garments or household textiles.
              </p>
            </div>

            <div className="timeline-step">
              <div className="timeline-number">02</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>COLLECT</h3>
              <p style={{ fontWeight: 600, color: 'var(--color-navy-primary)', fontSize: '0.95rem' }}>We arrange your collection.</p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>
                We collect your items from your home or agreed location within our service area.
              </p>
            </div>

            <div className="timeline-step">
              <div className="timeline-number">03</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>CARE</h3>
              <p style={{ fontWeight: 600, color: 'var(--color-navy-primary)', fontSize: '0.95rem' }}>We take care of the rest.</p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Your items are cleaned, dried, pressed, dry cleaned or treated according to your service.
              </p>
            </div>

            <div className="timeline-step">
              <div className="timeline-number">04</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>DELIVER</h3>
              <p style={{ fontWeight: 600, color: 'var(--color-navy-primary)', fontSize: '0.95rem' }}>Freshly returned to your door.</p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>
                We arrange delivery back to your doorstep once your order is ready.
              </p>
            </div>
          </div>

          <div className="text-center mt-4" style={{ backgroundColor: 'var(--color-cream-card)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-cream-border)' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-navy-dark)', marginBottom: '0.75rem' }}>
              No app. No complicated forms. Just call.
            </h3>
            <a href={siteConfig.phoneHref} className="btn btn-gold" style={{ fontSize: '1.05rem' }}>
              <Phone size={18} />
              <span>📞 CALL TO BOOK: {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* WHY US BENEFIT GRID */}
      <WhyUsGrid />

      {/* SERVICE AREA SECTION */}
      <section className="section section-cream">
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge badge-gold">LOCAL COVERAGE</span>
            <h2>LOCAL COLLECTION. PROFESSIONAL CARE. DOORSTEP DELIVERY.</h2>
            <p className="lead" style={{ maxWidth: '650px', margin: '0.5rem auto 0 auto' }}>
              We currently provide collection and delivery within selected areas.
            </p>
          </div>

          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Covered Service Areas</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                We collect directly from households, apartments, and businesses across:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.8rem', marginBottom: '1.5rem' }}>
                {siteConfig.serviceAreas.map((area, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--color-navy-dark)' }}>
                    <CheckCircle size={18} className="text-sage" />
                    <span>{area}</span>
                  </div>
                ))}
                {siteConfig.postcodes.map((pc, i) => (
                  <div key={`pc-${i}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--color-navy-dark)' }}>
                    <CheckCircle size={18} className="text-gold" />
                    <span>{pc}</span>
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: 'var(--color-white)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-cream-border)' }}>
                <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>
                  Not sure whether we cover your postcode?
                </p>
                <p style={{ margin: '0.4rem 0 0 0', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  📞 Call us on <a href={siteConfig.phoneHref} style={{ fontWeight: 700 }}>{siteConfig.phoneDisplay}</a> and we'll check for you.
                </p>
              </div>
            </div>

            <PostcodeChecker />
          </div>
        </div>
      </section>

      {/* TRUST & TESTIMONIALS */}
      <section className="section text-center">
        <div className="container" style={{ maxWidth: '750px' }}>
          <span className="badge badge-gold">OUR PROMISE</span>
          <h2>YOUR TRUST MATTERS</h2>
          <p className="lead" style={{ marginTop: '1rem', lineHeight: '1.7' }}>
            We're building British Cotton House one customer at a time. As our customers experience the service, we'll share their genuine feedback here.
          </p>
        </div>
      </section>

      {/* PROMOTIONS */}
      <section className="section" style={{ backgroundColor: 'var(--color-sage-light)', borderTop: '1px solid var(--color-sage)', borderBottom: '1px solid var(--color-sage)' }}>
        <div className="container text-center" style={{ maxWidth: '700px' }}>
          <span className="badge badge-gold" style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-navy-dark)' }}>
            SPECIAL OFFER
          </span>
          <h3 style={{ fontSize: '2rem', color: 'var(--color-navy-dark)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            NEW CUSTOMER OFFER
          </h3>
          <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-sage)', marginBottom: '1.5rem' }}>
            {siteConfig.newCustomerOffer}
          </p>
          <a href={siteConfig.phoneHref} className="btn btn-gold">
            <Phone size={18} />
            <span>📞 CALL TO BOOK & CLAIM OFFER</span>
          </a>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <BusinessCTA />
    </main>
  );
};
