import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BusinessCTA } from '../components/BusinessCTA';

interface PolicyPageProps {
  onNavigate: (path: string) => void;
}

export const CancellationPolicyPage: React.FC<PolicyPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <Breadcrumbs pageTitle="Cancellation & Refund Policy" onNavigate={onNavigate} />

      <section className="section section-cream" style={{ borderBottom: '1px solid var(--color-cream-border)' }}>
        <div className="container text-center" style={{ maxWidth: '850px' }}>
          <span className="badge badge-gold">ORDER CANCELLATION</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
            CANCELLATION & REFUND POLICY
          </h1>
          <p className="lead" style={{ fontSize: '1.1rem' }}>
            Clear guidance on cancelling a scheduled collection or requesting price adjustments.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="card" style={{ padding: '2.5rem', lineHeight: '1.7' }}>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. Cancelling a Collection</h3>
            <p>
              You may cancel or reschedule your collection free of charge by calling us on <strong>{siteConfig.phoneDisplay}</strong> up to 2 hours prior to your agreed collection window.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>2. Cancellation After Driver Dispatch</h3>
            <p>
              If a driver arrives at your collection address during the agreed window and you are unavailable or decide to cancel at the door, a minor call-out fee may apply to cover driver transport costs.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>3. Refunds & Re-cleaning</h3>
            <p>
              If you are dissatisfied with the cleaning or pressing quality of any item upon delivery, please call us immediately. We will arrange to collect the item for a complimentary re-cleaning or review.
            </p>

          </div>
        </div>
      </section>

      <BusinessCTA />
    </main>
  );
};
