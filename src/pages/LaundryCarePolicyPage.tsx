import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BusinessCTA } from '../components/BusinessCTA';

interface PolicyPageProps {
  onNavigate: (path: string) => void;
}

export const LaundryCarePolicyPage: React.FC<PolicyPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <Breadcrumbs pageTitle="Laundry Care Policy" onNavigate={onNavigate} />

      <section className="section section-cream" style={{ borderBottom: '1px solid var(--color-cream-border)' }}>
        <div className="container text-center" style={{ maxWidth: '850px' }}>
          <span className="badge badge-gold">GARMENT CARE STANDARDS</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
            LAUNDRY CARE POLICY
          </h1>
          <p className="lead" style={{ fontSize: '1.1rem' }}>
            Our professional standards for sorting, washing, stain handling, and pressing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="card" style={{ padding: '2.5rem', lineHeight: '1.7' }}>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. Sorting & Fabric Care Labels</h3>
            <p>
              Where appropriate, laundry is sorted according to color temperature, fabric weight, and garment care instructions. Customers are requested to inform our team of any garments requiring special care upon booking.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>2. Delicate Items & Silk</h3>
            <p>
              Delicate items, silks, fine woolens, and embellished garments will be processed using low-temperature or dry cleaning treatments appropriate to their care labels.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>3. Stain Pre-treatment Policy</h3>
            <p>
              We apply professional pre-treatments to treat common stains (such as coffee, wine, oil, and mud). However, complete stain removal cannot be 100% guaranteed, as results depend on fabric type, stain age, and prior home treatments.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>4. Detergents & Fragrance Options</h3>
            <p>
              We use premium dermatologically tested UK laundry products. If you or a family member require hypoallergenic or fragrance-free detergent, please inform us when calling on <strong>{siteConfig.phoneDisplay}</strong>.
            </p>

          </div>
        </div>
      </section>

      <BusinessCTA />
    </main>
  );
};
