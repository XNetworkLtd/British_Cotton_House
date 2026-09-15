import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BusinessCTA } from '../components/BusinessCTA';

interface PolicyPageProps {
  onNavigate: (path: string) => void;
}

export const LostDamagedPolicyPage: React.FC<PolicyPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <Breadcrumbs pageTitle="Lost & Damaged Garments Policy" onNavigate={onNavigate} />

      <section className="section section-cream" style={{ borderBottom: '1px solid var(--color-cream-border)' }}>
        <div className="container text-center" style={{ maxWidth: '850px' }}>
          <span className="badge badge-gold">GARMENT PROTECTION</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
            LOST & DAMAGED GARMENTS POLICY
          </h1>
          <p className="lead" style={{ fontSize: '1.1rem' }}>
            Our fair, transparent policy regarding garment inspection, reporting, and claim procedures.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="card" style={{ padding: '2.5rem', lineHeight: '1.7' }}>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. Pre-existing Conditions</h3>
            <p>
              Garments arriving with pre-existing tears, worn seams, missing buttons, color bleeding from previous washes, or sun bleaching will be noted during intake inspection. We cannot accept liability for pre-existing wear.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>2. Reporting Missing or Damaged Items</h3>
            <p>
              In the unlikely event that an item is missing or damaged, please notify British Cotton House within <strong>48 hours</strong> of delivery by calling <strong>{siteConfig.phoneDisplay}</strong> or emailing <strong>{siteConfig.emailDisplay}</strong>.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>3. Fair Compensation Procedure</h3>
            <p>
              Where an item is proven to have been damaged or misplaced due to our direct negligence during processing, compensation will be calculated in accordance with UK industry standard guidelines (taking into account garment age, original value, and residual wear).
            </p>

          </div>
        </div>
      </section>

      <BusinessCTA />
    </main>
  );
};
