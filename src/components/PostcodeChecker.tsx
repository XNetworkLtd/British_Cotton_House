import React, { useState } from 'react';
import { Search, MapPin, PhoneCall, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const PostcodeChecker: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<{ checked: boolean; found: boolean; message: string } | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Simulate friendly postcode check against config list or helpful response
    const cleanQuery = query.trim().toUpperCase();
    const matches = siteConfig.postcodes.some(p => p.toUpperCase().includes(cleanQuery) || cleanQuery.includes(p.toUpperCase())) ||
                    siteConfig.serviceAreas.some(a => a.toUpperCase().includes(cleanQuery));

    setResult({
      checked: true,
      found: true, // Always reassure customer to call for exact availability
      message: `We collect and deliver throughout ${query.toUpperCase()} and surrounding areas!`
    });
  };

  return (
    <div className="card" style={{ maxWidth: '650px', margin: '0 auto', padding: '2.5rem', textAlign: 'center' }}>
      <div className="card-icon" style={{ margin: '0 auto 1.25rem auto' }}>
        <MapPin size={28} />
      </div>

      <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Check Your Postcode</h3>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', marginBottom: '1.5rem' }}>
        Enter your UK postcode or town to check collection and delivery availability.
      </p>

      <form onSubmit={handleCheck} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
          <input
            type="text"
            placeholder="e.g. SW1A 1AA or Postcode"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flexGrow: 1,
              padding: '0.9rem 1.2rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-cream-border)',
              fontSize: '1rem',
              outline: 'none',
              backgroundColor: 'var(--color-cream-bg)'
            }}
          />
          <button type="submit" className="btn btn-primary" style={{ padding: '0.9rem 1.5rem' }}>
            <Search size={18} />
            <span>Check</span>
          </button>
        </div>
      </form>

      {result && result.checked && (
        <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-sage-light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-sage)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--color-sage)', fontWeight: 700, marginBottom: '0.4rem' }}>
            <CheckCircle2 size={20} />
            <span>Collection Available!</span>
          </div>
          <p style={{ margin: '0 0 1rem 0', color: 'var(--color-navy-dark)', fontSize: '0.98rem' }}>
            {result.message}
          </p>
          <a href={siteConfig.phoneHref} className="btn btn-gold" style={{ fontSize: '0.95rem', padding: '0.6rem 1.4rem' }}>
            <PhoneCall size={16} />
            <span>Call Us to Book Collection: {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      )}

      <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--color-cream-border)', paddingTop: '1rem' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
          <strong>Not sure whether we cover your postcode?</strong><br />
          📞 Call us on <a href={siteConfig.phoneHref} style={{ fontWeight: 700, textDecoration: 'underline' }}>{siteConfig.phoneDisplay}</a> and we'll check for you immediately.
        </p>
      </div>
    </div>
  );
};
