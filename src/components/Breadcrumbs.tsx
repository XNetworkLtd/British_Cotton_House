import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  pageTitle: string;
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ pageTitle, onNavigate }) => {
  return (
    <div style={{ backgroundColor: 'var(--color-cream-card)', borderBottom: '1px solid var(--color-cream-border)', padding: '0.8rem 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); onNavigate('/'); }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-navy-primary)' }}
        >
          <Home size={14} />
          <span>Home</span>
        </a>
        <ChevronRight size={14} style={{ color: 'var(--color-text-light)' }} />
        <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>{pageTitle}</span>
      </div>
    </div>
  );
};
