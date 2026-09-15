import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BusinessCTA } from '../components/BusinessCTA';

interface PolicyPageProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPage: React.FC<PolicyPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <Breadcrumbs pageTitle="Cookie Policy" onNavigate={onNavigate} />

      <section className="section section-cream" style={{ borderBottom: '1px solid var(--color-cream-border)' }}>
        <div className="container text-center" style={{ maxWidth: '850px' }}>
          <span className="badge badge-gold">COOKIES & TRACKING</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
            COOKIE POLICY
          </h1>
          <p className="lead" style={{ fontSize: '1.1rem' }}>
            Information about essential website cookies used by British Cotton House.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="card" style={{ padding: '2.5rem', lineHeight: '1.7' }}>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. What Are Cookies?</h3>
            <p>
              Cookies are small text files stored on your computer or mobile device when you browse websites. They help websites function efficiently and improve user experience.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>2. How We Use Cookies</h3>
            <p>
              The <strong>{siteConfig.brandName}</strong> website is purely informational. We use only strictly necessary session cookies required for core site performance, layout responsiveness, and accessibility navigation.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>3. No Third-Party Tracking or Ads</h3>
            <p>
              We do not use intrusive advertising cookies, behavioral profiling tools, or sale of user browser data.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>4. Managing Cookies</h3>
            <p>
              You can control or disable cookies via your browser settings. For questions, call us on <strong>{siteConfig.phoneDisplay}</strong>.
            </p>

          </div>
        </div>
      </section>

      <BusinessCTA />
    </main>
  );
};
