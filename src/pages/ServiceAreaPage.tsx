import React from 'react';
import { Phone, MapPin, CheckCircle, Info } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PostcodeChecker } from '../components/PostcodeChecker';
import { BusinessCTA } from '../components/BusinessCTA';

interface ServiceAreaPageProps {
  onNavigate: (path: string) => void;
}

export const ServiceAreaPage: React.FC<ServiceAreaPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <Breadcrumbs pageTitle="Service Area" onNavigate={onNavigate} />

      {/* Header */}
      <section className="section section-cream" style={{ borderBottom: '1px solid var(--color-cream-border)' }}>
        <div className="container text-center" style={{ maxWidth: '850px' }}>
          <span className="badge badge-gold">LOCAL COVERAGE</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            LOCAL COLLECTION. PROFESSIONAL CARE. DOORSTEP DELIVERY.
          </h1>
          <p className="lead" style={{ fontSize: '1.25rem' }}>
            We currently provide collection and delivery within selected local areas to ensure fast, reliable personal service.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a href={siteConfig.phoneHref} className="btn btn-gold">
              <Phone size={18} />
              <span>📞 CALL TO CHECK POSTCODE: {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas Grid & Postcode Checker */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '3rem' }}>
            
            <div>
              <div className="card" style={{ padding: '2.5rem', marginBottom: '1.5rem' }}>
                <div className="card-icon">
                  <MapPin size={28} />
                </div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Current Service Areas</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Our collection vans operate across scheduled routes in the following areas and postcodes:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                  {siteConfig.serviceAreas.map((area, idx) => (
                    <div key={idx} style={{ backgroundColor: 'var(--color-cream-bg)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-cream-border)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700 }}>
                      <CheckCircle size={18} className="text-sage" />
                      <span>{area}</span>
                    </div>
                  ))}
                  {siteConfig.postcodes.map((pc, idx) => (
                    <div key={`pc-${idx}`} style={{ backgroundColor: 'var(--color-sage-light)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-sage)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700 }}>
                      <CheckCircle size={18} className="text-gold" />
                      <span>{pc}</span>
                    </div>
                  ))}
                </div>

                <div style={{ backgroundColor: '#FFFDF5', padding: '1.2rem', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--color-gold)' }}>
                  <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-navy-dark)', fontSize: '0.98rem' }}>
                    Not sure whether we cover your postcode?
                  </p>
                  <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    📞 Call us on <strong>{siteConfig.phoneDisplay}</strong> and we will check immediate driver availability for your address.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <PostcodeChecker />
            </div>

          </div>
        </div>
      </section>

      <BusinessCTA />
    </main>
  );
};
