import React from 'react';
import { Phone, ShieldCheck, Heart, Home, Award } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BusinessCTA } from '../components/BusinessCTA';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <Breadcrumbs pageTitle="About Us" onNavigate={onNavigate} />

      {/* Header */}
      <section className="section section-cream" style={{ borderBottom: '1px solid var(--color-cream-border)' }}>
        <div className="container text-center" style={{ maxWidth: '850px' }}>
          <span className="badge badge-gold">OUR STORY & VALUES</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            ABOUT BRITISH COTTON HOUSE
          </h1>
          <p className="lead" style={{ fontSize: '1.25rem' }}>
            {siteConfig.tradingName} — bringing traditional garment care standards and effortless doorstep collection to modern UK households and businesses.
          </p>
        </div>
      </section>

      {/* Main Content (350-450 words) */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div className="card" style={{ padding: '3rem', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.25rem', color: 'var(--color-navy-dark)' }}>
              Garment Care Designed Around Family Life & Quality
            </h2>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
              <strong>British Cotton House</strong> is a trading name of <strong>XNetwork Online Ltd</strong>. We were established with a clear, straightforward mission: to take the stress and repetitive burden of laundry off your daily list, allowing families, busy professionals, and local households to enjoy more time for life.
            </p>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
              We believe every customer deserves convenient, reliable, and thoughtful garment care. Traditional laundrettes and dry cleaners often require inconvenient drop-offs, rigid opening hours, or confusing apps. British Cotton House bridges this gap by combining traditional, careful garment handling with modern doorstep collection and delivery.
            </p>

            {/* Founder Story Placeholder */}
            <div style={{ backgroundColor: 'var(--color-cream-card)', borderLeft: '4px solid var(--color-gold)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', margin: '1.8rem 0' }}>
              <h4 style={{ color: 'var(--color-gold)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>
                FOUNDER BACKGROUND
              </h4>
              <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-navy-dark)' }}>
                [FOUNDER STORY — REPLACE WITH ACTUAL STORY]
              </p>
            </div>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
              Our company values quality, transparency, and genuine customer satisfaction above all else. Whether handling an everyday wash-and-fold load, pressing crisp business shirts, dry cleaning fine suit tailoring, or repairing clothing, we treat every item with the exact attention it deserves.
            </p>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
              We aim to build trusted, long-term relationships with households and local commercial businesses across <strong>{siteConfig.serviceAreaSummary}</strong>. We want our customers to know who is caring for their clothes, to rely on clear published pricing, and to book easily without complicated software or accounts.
            </p>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.75', margin: 0 }}>
              If you ever have a question about garment care or wish to discuss a collection, simply phone our team on <strong>{siteConfig.phoneDisplay}</strong>. We will be delighted to assist you.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            <div className="card text-center" style={{ padding: '1.8rem' }}>
              <ShieldCheck size={32} className="text-gold" style={{ margin: '0 auto 0.75rem auto' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>Trust & Reliability</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Dependable collection windows and transparent published prices.
              </p>
            </div>

            <div className="card text-center" style={{ padding: '1.8rem' }}>
              <Heart size={32} className="text-gold" style={{ margin: '0 auto 0.75rem auto' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>Personal Care</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Attentive service tailored to family garments and delicate textiles.
              </p>
            </div>

            <div className="card text-center" style={{ padding: '1.8rem' }}>
              <Home size={32} className="text-gold" style={{ margin: '0 auto 0.75rem auto' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>Doorstep Ease</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', margin: 0 }}>
                We come directly to your home so you can spend your weekends relaxing.
              </p>
            </div>
          </div>

        </div>
      </section>

      <BusinessCTA />
    </main>
  );
};
