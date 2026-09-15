import React, { useState } from 'react';
import { Phone, Search, Info, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { priceCategoriesData } from '../config/priceData';
import { PriceTableCategory } from '../components/PriceTableCategory';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BusinessCTA } from '../components/BusinessCTA';

interface PricesPageProps {
  onNavigate: (path: string) => void;
}

export const PricesPage: React.FC<PricesPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredCategories = priceCategoriesData.filter(cat => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) return false;
    if (!searchTerm.trim()) return true;
    
    // Check if category title or any item matches search
    const matchesTitle = cat.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesItem = cat.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesTitle || matchesItem;
  });

  return (
    <main>
      <Breadcrumbs pageTitle="Prices" onNavigate={onNavigate} />

      {/* Header */}
      <section className="section section-cream" style={{ borderBottom: '1px solid var(--color-cream-border)' }}>
        <div className="container text-center" style={{ maxWidth: '850px' }}>
          <span className="badge badge-gold">FAIR. CLEAR. UPFRONT.</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            PUBLISHED PRICE LIST
          </h1>
          <p className="lead" style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
            Our standard prices are published so you know what to expect. No unexpected surprises.
          </p>
          <div style={{ backgroundColor: 'var(--color-white)', padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-cream-border)', display: 'inline-block' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
              Specialist garments, unusual materials, heavy staining, exceptional sizes and complex alterations may require assessment or quotation.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <a href={siteConfig.phoneHref} className="btn btn-gold">
              <Phone size={18} />
              <span>📞 CALL TO BOOK: {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Price Controls & Category Filter */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          {/* Free Collection Promo */}
          <div style={{ backgroundColor: 'var(--color-sage-light)', border: '1px solid var(--color-sage)', borderRadius: 'var(--radius-md)', padding: '1.2rem 1.5rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle2 size={24} className="text-sage" />
              <div>
                <strong style={{ color: 'var(--color-navy-dark)', fontSize: '1.05rem' }}>FREE Collection & Delivery</strong>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  Available on qualifying orders of £15+ within our service area.
                </p>
              </div>
            </div>
            <a href={siteConfig.phoneHref} className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
              Call to Book
            </a>
          </div>

          {/* Search Bar & Category Filter Tabs */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ position: 'relative', maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
              <input
                type="text"
                placeholder="Search prices (e.g. shirt, suit, duvet, trainers...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.9rem 1.2rem 0.9rem 3rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--color-cream-border)',
                  fontSize: '1rem',
                  outline: 'none',
                  backgroundColor: 'var(--color-white)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              />
              <Search size={18} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
            </div>

            {/* Category Filter Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                className={`btn ${activeCategory === 'all' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setActiveCategory('all')}
                style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}
              >
                All Categories
              </button>
              {priceCategoriesData.map(cat => (
                <button
                  key={cat.id}
                  className={`btn ${activeCategory === cat.id ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}
                >
                  {cat.title.replace(/^\d+\.\s*/, '')}
                </button>
              ))}
            </div>
          </div>

          {/* Render Price Categories */}
          {filteredCategories.length > 0 ? (
            filteredCategories.map(cat => (
              <PriceTableCategory key={cat.id} category={cat} />
            ))
          ) : (
            <div className="card text-center" style={{ padding: '3rem' }}>
              <Info size={36} className="text-gold" style={{ margin: '0 auto 1rem auto' }} />
              <h3>No pricing items matched "{searchTerm}"</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Try searching for another term, or call us directly for immediate price assistance.
              </p>
              <a href={siteConfig.phoneHref} className="btn btn-gold mt-2">
                <Phone size={18} />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          )}

          {/* Pricing Disclaimer */}
          <div style={{ marginTop: '3rem', backgroundColor: 'var(--color-cream-card)', padding: '1.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-cream-border)' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Important Pricing Terms</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
              Prices shown are standard published starting prices. Garments containing delicate silks, heavy leather trim, intricate beadwork, extensive staining, or complex alterations will be assessed prior to treatment and a quotation provided.
            </p>
          </div>

        </div>
      </section>

      <BusinessCTA />
    </main>
  );
};
