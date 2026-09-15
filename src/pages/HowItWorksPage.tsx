import React from 'react';
import { Phone, Clock, Truck, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BusinessCTA } from '../components/BusinessCTA';

interface HowItWorksPageProps {
  onNavigate: (path: string) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <Breadcrumbs pageTitle="How It Works" onNavigate={onNavigate} />

      {/* Header */}
      <section className="section section-cream" style={{ borderBottom: '1px solid var(--color-cream-border)' }}>
        <div className="container text-center" style={{ maxWidth: '850px' }}>
          <span className="badge badge-gold">SIMPLE & STRESS-FREE</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            HOW IT WORKS
          </h1>
          <p className="lead" style={{ fontSize: '1.25rem' }}>
            No app to download. No complicated forms to fill out. Just one simple phone call and we take care of your laundry from doorstep to doorstep.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a href={siteConfig.phoneHref} className="btn btn-gold">
              <Phone size={18} />
              <span>📞 CALL TO BOOK: {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4-Step Timeline */}
      <section className="section">
        <div className="container">
          <div className="timeline">
            <div className="timeline-step">
              <div className="timeline-number">01</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>01 — CALL</h3>
              <p style={{ fontWeight: 700, color: 'var(--color-navy-primary)' }}>Tell us what you need.</p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                Call British Cotton House on <strong>{siteConfig.phoneDisplay}</strong> and tell us about your laundry, garments, footwear or household textiles.
              </p>
            </div>

            <div className="timeline-step">
              <div className="timeline-number">02</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>02 — COLLECT</h3>
              <p style={{ fontWeight: 700, color: 'var(--color-navy-primary)' }}>We arrange your collection.</p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                We collect your items directly from your home, apartment or workplace at an agreed time window.
              </p>
            </div>

            <div className="timeline-step">
              <div className="timeline-number">03</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>03 — CARE</h3>
              <p style={{ fontWeight: 700, color: 'var(--color-navy-primary)' }}>We take care of the rest.</p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                Your items are cleaned, dried, pressed, dry cleaned or altered according to your exact requirements.
              </p>
            </div>

            <div className="timeline-step">
              <div className="timeline-number">04</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>04 — DELIVER</h3>
              <p style={{ fontWeight: 700, color: 'var(--color-navy-primary)' }}>Freshly returned to your door.</p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                We arrange delivery back to your doorstep once your order is ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection & Delivery Breakdown */}
      <section className="section section-cream">
        <div className="container" style={{ maxWidth: '950px' }}>
          <div className="text-center mb-4">
            <span className="badge badge-gold">COLLECTION & DELIVERY DETAILS</span>
            <h2>WHAT TO EXPECT AT EVERY STAGE</h2>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <div className="card-icon">
                <Phone size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem' }}>1. Collection</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Call to arrange a collection time slot</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Confirm address & contact number</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Confirm requested care services</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Prepare items in bags ready for driver</span>
                </li>
              </ul>
            </div>

            <div className="card" style={{ padding: '2rem' }}>
              <div className="card-icon">
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem' }}>2. During Processing</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} className="text-sage" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Items sorted by color & fabric care label</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} className="text-sage" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Stain pre-treatment applied where appropriate</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} className="text-sage" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Hand pressed, dry cleaned, or tailored</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} className="text-sage" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Quality checked prior to packaging</span>
                </li>
              </ul>
            </div>

            <div className="card" style={{ padding: '2rem' }}>
              <div className="card-icon">
                <Truck size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem' }}>3. Delivery</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Contacted when order processing completes</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Delivery arranged at your convenience</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} className="text-gold" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Garments delivered crisp on hangers or folded</span>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', backgroundColor: 'var(--color-white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-cream-border)', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Clock size={24} className="text-gold" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ fontSize: '1.05rem', color: 'var(--color-navy-dark)' }}>Turnaround Time Information</strong>
              <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
                {siteConfig.turnaroundText}. Turnaround varies based on service selection, garment fabric, and current workload. When you call, we will confirm expected completion for your specific items.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BusinessCTA />
    </main>
  );
};
