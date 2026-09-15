import React from 'react';
import { Phone, Building2, Utensils, Hotel, Scissors, Dumbbell, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BusinessCTA } from '../components/BusinessCTA';

interface CommercialPageProps {
  onNavigate: (path: string) => void;
}

export const CommercialPage: React.FC<CommercialPageProps> = ({ onNavigate }) => {
  const targetSectors = [
    { icon: <Utensils size={24} />, name: "Restaurants & Cafés", desc: "Tablecloths, napkins, chef whites, aprons & kitchen towels." },
    { icon: <Hotel size={24} />, name: "Hotels & Airbnb Hosts", desc: "Crisp bed sheets, duvet covers, pillowcases, bath towels & robes." },
    { icon: <Scissors size={24} />, name: "Salons & Spas", desc: "Freshly laundered & fluffy salon towels, gowns & headbands." },
    { icon: <Dumbbell size={24} />, name: "Gyms & Sports Clubs", desc: "Member sweat towels, team kit laundry & shower towels." },
    { icon: <Building2 size={24} />, name: "Clinics & Offices", desc: "Staff uniforms, scrubs, lab coats, and office washroom linens." },
    { icon: <Building2 size={24} />, name: "Property Managers", desc: "Tenancy changeover laundry & corporate apartment linen care." }
  ];

  const commercialServices = [
    "Workwear & Uniforms Cleaning",
    "Table Linen & Napkin Pressing",
    "Hotel & Guest Bedding",
    "High-Volume Towel Laundry",
    "Scheduled Weekly/Bi-Weekly Collection",
    "Dedicated B2B Account Handling",
    "Flexibility for Peak Seasons",
    "Reliable Doorstep Return"
  ];

  return (
    <main>
      <Breadcrumbs pageTitle="Commercial Laundry" onNavigate={onNavigate} />

      {/* Header */}
      <section className="section section-navy" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <div className="container text-center" style={{ maxWidth: '850px' }}>
          <span className="badge badge-gold">B2B GARMENT & LINEN SOLUTIONS</span>
          <h1 style={{ color: 'var(--color-white)', fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            LAUNDRY CARE FOR LOCAL BUSINESSES
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem' }}>
            Reliable, scheduled commercial laundry, uniform cleaning, and textile care for local businesses, hospitality providers, and clinics.
          </p>
          <a href={siteConfig.phoneHref} className="btn btn-gold" style={{ fontSize: '1.05rem' }}>
            <Phone size={20} />
            <span>📞 CALL FOR A BUSINESS QUOTATION</span>
          </a>
        </div>
      </section>

      {/* Target Sectors */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge badge-gold">SECTORS WE SERVE</span>
            <h2>TAILORED COMMERCIAL SERVICES</h2>
            <p className="lead" style={{ maxWidth: '650px', margin: '0.5rem auto 0 auto' }}>
              We understand that clean, fresh linens and spotless staff uniforms are essential to your brand reputation.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {targetSectors.map((sector, idx) => (
              <div key={idx} className="card">
                <div className="card-icon">
                  {sector.icon}
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>{sector.name}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', margin: 0 }}>
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Capabilities */}
      <section className="section section-cream">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="text-center mb-4">
            <span className="badge badge-gold">COMMERCIAL ADVANTAGES</span>
            <h2>WHY PARTNER WITH BRITISH COTTON HOUSE?</h2>
          </div>

          <div className="grid-2" style={{ gap: '1.25rem' }}>
            {commercialServices.map((service, idx) => (
              <div key={idx} className="card" style={{ padding: '1.25rem 1.5rem', flexDirection: 'row', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={22} className="text-gold" style={{ flexShrink: 0 }} />
                <span style={{ fontWeight: 600, fontSize: '1.02rem', color: 'var(--color-navy-dark)' }}>
                  {service}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', backgroundColor: 'var(--color-white)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-cream-border)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>Get a Custom Commercial Quotation</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '1rem' }}>
              Every business has unique laundry volume and turnaround requirements. Speak directly with our commercial team to discuss custom pricing and collection schedules.
            </p>
            <a href={siteConfig.phoneHref} className="btn btn-primary" style={{ fontSize: '1.05rem' }}>
              <Phone size={18} />
              <span>📞 CALL FOR A BUSINESS QUOTATION: {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      <BusinessCTA />
    </main>
  );
};
