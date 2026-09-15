import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BusinessCTA } from '../components/BusinessCTA';

interface PolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<PolicyPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <Breadcrumbs pageTitle="Privacy Policy" onNavigate={onNavigate} />

      <section className="section section-cream" style={{ borderBottom: '1px solid var(--color-cream-border)' }}>
        <div className="container text-center" style={{ maxWidth: '850px' }}>
          <span className="badge badge-gold">DATA PROTECTION</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
            PRIVACY POLICY
          </h1>
          <p className="lead" style={{ fontSize: '1.1rem' }}>
            How British Cotton House respects and protects your personal data under UK GDPR.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="card" style={{ padding: '2.5rem', lineHeight: '1.7' }}>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. Overview</h3>
            <p>
              This Privacy Policy explains how <strong>{siteConfig.tradingName}</strong> collects, uses, and protects personal information when you contact us or use our doorstep collection services.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>2. Data We Collect</h3>
            <p>
              Because our website is informational only and bookings are taken via telephone, we collect:
            </p>
            <ul>
              <li>Your name, telephone number, and collection/delivery address when you call us.</li>
              <li>Order notes, detergent preferences, and garment specifications.</li>
            </ul>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>3. How We Use Your Data</h3>
            <p>
              We process personal data solely to fulfill your collection and delivery bookings, communicate driver arrival times, and provide customer support. We do not sell or rent your personal data to third parties.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>4. Data Security & Storage</h3>
            <p>
              We implement appropriate technical and organizational measures to safeguard your address and telephone details against unauthorized access, loss, or disclosure.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>5. Contact Our Privacy Officer</h3>
            <p>
              To request access to or deletion of your personal data, please contact us by telephone on <strong>{siteConfig.phoneDisplay}</strong> or email <strong>{siteConfig.emailDisplay}</strong>.
            </p>

          </div>
        </div>
      </section>

      <BusinessCTA />
    </main>
  );
};
