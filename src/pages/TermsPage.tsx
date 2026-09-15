import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BusinessCTA } from '../components/BusinessCTA';

interface PolicyPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<PolicyPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <Breadcrumbs pageTitle="Terms & Conditions" onNavigate={onNavigate} />

      <section className="section section-cream" style={{ borderBottom: '1px solid var(--color-cream-border)' }}>
        <div className="container text-center" style={{ maxWidth: '850px' }}>
          <span className="badge badge-gold">LEGAL TERMS</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
            TERMS & CONDITIONS
          </h1>
          <p className="lead" style={{ fontSize: '1.1rem' }}>
            Please read these Terms and Conditions carefully before booking services with British Cotton House.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="card" style={{ padding: '2.5rem', lineHeight: '1.7' }}>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. Introduction & Trading Name</h3>
            <p>
              These Terms and Conditions govern the provision of garment care, laundry, dry cleaning, ironing, shoe care, and alteration services by <strong>{siteConfig.tradingName}</strong> ("British Cotton House", "we", "us", or "our"). By booking a collection via telephone or receiving our doorstep service, you agree to be bound by these terms.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>2. Booking & Service Scope</h3>
            <p>
              British Cotton House is an informational website. Bookings are accepted exclusively by telephone on <strong>{siteConfig.phoneDisplay}</strong>. A service agreement is formed when we confirm your collection address, required services, and collection time window.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>3. Customer Obligations</h3>
            <p>
              Customers must ensure that all items submitted for laundry or garment care are prepared safely:
            </p>
            <ul>
              <li>Pockets must be emptied of all personal property, money, pens, tissue, or sharp objects. We accept no liability for damage caused by items left inside pockets.</li>
              <li>Garments requiring special handling, fragrance allergies, or stain treatment must be clearly identified to our team upon telephone booking and collection.</li>
            </ul>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>4. Pricing & Payment</h3>
            <p>
              Standard services are charged at our published price list rates. Where specialist fabrics, heavy staining, or non-standard repairs are involved, a quotation will be provided. {siteConfig.paymentMethodsText} {siteConfig.paymentPolicyText}
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>5. Collection & Delivery</h3>
            <p>
              Free collection and delivery is subject to qualifying orders within our service area ({siteConfig.serviceAreaSummary}). We make every reasonable effort to collect and deliver within agreed time windows.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>6. Contact Information</h3>
            <p>
              If you have any questions regarding these terms, please contact us by phone on <strong>{siteConfig.phoneDisplay}</strong> or email <strong>{siteConfig.emailDisplay}</strong>.
            </p>

          </div>
        </div>
      </section>

      <BusinessCTA />
    </main>
  );
};
