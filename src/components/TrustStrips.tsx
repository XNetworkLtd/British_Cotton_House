import React from 'react';
import { DoorOpen, Shirt, PoundSterling, PhoneCall, ShieldCheck, HeartHandshake, Clock, Users, Home, Sparkles } from 'lucide-react';

export const HeroTrustStrip: React.FC = () => {
  const trustPoints = [
    {
      icon: <DoorOpen size={28} className="text-gold" />,
      title: "Doorstep Collection",
      desc: "We collect from your home at a convenient agreed time."
    },
    {
      icon: <Shirt size={28} className="text-gold" />,
      title: "Professional Care",
      desc: "Your items are handled according to the appropriate service."
    },
    {
      icon: <PoundSterling size={28} className="text-gold" />,
      title: "Transparent Pricing",
      desc: "Clear published prices with quotations where specialist work is required."
    },
    {
      icon: <PhoneCall size={28} className="text-gold" />,
      title: "Simple Booking",
      desc: "No complicated app. Just call us."
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--color-navy-dark)', color: 'var(--color-white)', padding: '2.5rem 0', borderBottom: '2px solid var(--color-gold)' }}>
      <div className="container">
        <div className="grid-4" style={{ gap: '1.5rem' }}>
          {trustPoints.map((pt, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '0.75rem', borderRadius: '50%', flexShrink: 0, border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                {pt.icon}
              </div>
              <div>
                <h4 style={{ color: 'var(--color-white)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                  {pt.title}
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhyUsGrid: React.FC = () => {
  const benefits = [
    {
      icon: <Home size={30} />,
      title: "Doorstep Convenience",
      desc: "No trips to the laundrette. We collect and deliver."
    },
    {
      icon: <PhoneCall size={30} />,
      title: "Simple Phone Booking",
      desc: "Speak to a real person and arrange your service directly."
    },
    {
      icon: <PoundSterling size={30} />,
      title: "Transparent Pricing",
      desc: "Our standard services have clear published prices."
    },
    {
      icon: <Shirt size={30} />,
      title: "Professional Garment Care",
      desc: "We select the appropriate service based on the garment and care requirements."
    },
    {
      icon: <Users size={30} />,
      title: "Family Friendly",
      desc: "From everyday clothing to bedding and towels, we help take care of the household laundry."
    },
    {
      icon: <HeartHandshake size={30} />,
      title: "Personal Service",
      desc: "We want customers to know who is caring for their clothes."
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-4">
          <span className="badge badge-gold">WHY BRITISH COTTON HOUSE?</span>
          <h2>CARE THAT FITS A BUSY LIFE.</h2>
          <p className="lead" style={{ maxWidth: '700px', margin: '0.75rem auto 0 auto' }}>
            We combine traditional garment care standards with effortless modern doorstep collection.
          </p>
        </div>

        <div className="grid-3" style={{ marginTop: '2.5rem' }}>
          {benefits.map((b, i) => (
            <div key={i} className="card">
              <div className="card-icon">
                {b.icon}
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem' }}>{b.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', margin: 0, lineHeight: '1.5' }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
