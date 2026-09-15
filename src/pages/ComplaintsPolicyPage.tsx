import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BusinessCTA } from '../components/BusinessCTA';

interface PolicyPageProps {
  onNavigate: (path: string) => void;
}

export const ComplaintsPolicyPage: React.FC<PolicyPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <Breadcrumbs pageTitle="Complaints Policy" onNavigate={onNavigate} />

      <section className="section section-cream" style={{ borderBottom: '1px solid var(--color-cream-border)' }}>
        <div className="container text-center" style={{ maxWidth: '850px' }}>
          <span className="badge badge-gold">CUSTOMER SATISFACTION</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
            COMPLAINTS POLICY
          </h1>
          <p className="lead" style={{ fontSize: '1.1rem' }}>
            How British Cotton House resolves customer feedback promptly and fairly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="card" style={{ padding: '2.5rem', lineHeight: '1.7' }}>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. Our Commitment to Resolution</h3>
            <p>
              At <strong>British Cotton House</strong>, customer satisfaction is paramount. If any aspect of our service does not meet your expectations, we want to know immediately so we can make it right.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>2. How to Raise a Complaint</h3>
            <p>
              Please contact us by telephone on <strong>{siteConfig.phoneDisplay}</strong> or send an email detailing your order to <strong>{siteConfig.emailDisplay}</strong>.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>3. Escalation & Response Times</h3>
            <p>
              Telephone issues are addressed immediately by our operational team. Written emails are acknowledged within 24 business hours, and a full resolution plan or re-service will be proposed promptly.
            </p>

          </div>
        </div>
      </section>

      <BusinessCTA />
    </main>
  );
};
