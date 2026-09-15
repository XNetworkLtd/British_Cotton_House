import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
  onExplore?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, imageSrc, onExplore }) => {
  return (
    <div className="card" style={{ padding: 0 }}>
      {imageSrc && (
        <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
          <img 
            src={imageSrc} 
            alt={title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          />
          <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'var(--color-navy-primary)', color: 'var(--color-gold)', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
            {icon}
          </div>
        </div>
      )}

      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {!imageSrc && (
          <div className="card-icon">
            {icon}
          </div>
        )}
        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.6rem' }}>{title}</h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.55' }}>
          {description}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--color-cream-border)', paddingTop: '1rem' }}>
          <a href={siteConfig.phoneHref} style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-navy-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Phone size={14} className="text-gold" />
            <span>Call to Book</span>
          </a>

          {onExplore && (
            <button 
              onClick={onExplore}
              style={{ background: 'none', border: 'none', color: 'var(--color-gold)', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <span>Details</span>
              <ArrowRight size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
