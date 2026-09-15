import React from 'react';
import { Phone, Mail, MapPin, Clock, Globe, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PostcodeChecker } from '../components/PostcodeChecker';
import { BusinessCTA } from '../components/BusinessCTA';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <Breadcrumbs pageTitle="Contact & Book" onNavigate={onNavigate} />

      {/* Header */}
      <section className="section section-cream" style={{ borderBottom: '1px solid var(--color-cream-border)' }}>
        <div className="container text-center" style={{ maxWidth: '850px' }}>
          <span className="badge badge-gold">DIRECT TELEPHONE BOOKING</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            CONTACT BRITISH COTTON HOUSE
          </h1>
          <p className="lead" style={{ fontSize: '1.25rem' }}>
            To arrange a doorstep laundry, dry cleaning, or garment care collection, simply phone our friendly customer service team.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a href={siteConfig.phoneHref} className="btn btn-gold" style={{ fontSize: '1.1rem', padding: '1rem 2.2rem' }}>
              <Phone size={20} />
              <span>📞 CALL TO BOOK: {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Cards & Business Placeholders */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'flex-start' }}>
            
            <div className="card" style={{ padding: '2.5rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1.25rem', color: 'var(--color-navy-dark)' }}>
                Business & Contact Details
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="card-icon" style={{ width: '44px', height: '44px', margin: 0, flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.05rem' }}>Telephone Booking</h4>
                    <a href={siteConfig.phoneHref} style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy-primary)' }}>
                      {siteConfig.phoneDisplay}
                    </a>
                    <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      Call to schedule collection or ask any question.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="card-icon" style={{ width: '44px', height: '44px', margin: 0, flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.05rem' }}>Email Inquiries</h4>
                    <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-navy-dark)' }}>
                      {siteConfig.emailDisplay}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="card-icon" style={{ width: '44px', height: '44px', margin: 0, flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.05rem' }}>Opening & Collection Hours</h4>
                    <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-navy-dark)' }}>
                      {siteConfig.openingHours}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="card-icon" style={{ width: '44px', height: '44px', margin: 0, flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.05rem' }}>Business Address</h4>
                    <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-navy-dark)' }}>
                      {siteConfig.businessAddress}
                    </p>
                    <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      {siteConfig.tradingName}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="card-icon" style={{ width: '44px', height: '44px', margin: 0, flexShrink: 0 }}>
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.05rem' }}>Google Business Profile</h4>
                    <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-navy-dark)' }}>
                      {siteConfig.googleProfileUrl}
                    </p>
                  </div>
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
