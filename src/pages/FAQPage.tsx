import React, { useState } from 'react';
import { Phone, Search, HelpCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { faqData } from '../config/faqData';
import { FAQAccordion } from '../components/FAQAccordion';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BusinessCTA } from '../components/BusinessCTA';

interface FAQPageProps {
  onNavigate: (path: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFaqData = faqData.map(cat => ({
    ...cat,
    items: cat.items.filter(item => {
      const matchSearch = !searchTerm.trim() || 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = selectedCategory === 'all' || cat.category === selectedCategory;
      return matchSearch && matchCategory;
    })
  })).filter(cat => cat.items.length > 0);

  return (
    <main>
      <Breadcrumbs pageTitle="Frequently Asked Questions" onNavigate={onNavigate} />

      {/* Header */}
      <section className="section section-cream" style={{ borderBottom: '1px solid var(--color-cream-border)' }}>
        <div className="container text-center" style={{ maxWidth: '850px' }}>
          <span className="badge badge-gold">HELP & INFORMATION</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="lead" style={{ fontSize: '1.25rem' }}>
            Everything you need to know about our doorstep laundry, dry cleaning, shoe care, and clothing alteration services.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a href={siteConfig.phoneHref} className="btn btn-gold">
              <Phone size={18} />
              <span>📞 CALL US DIRECTLY: {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Search & Filter */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ position: 'relative', maxWidth: '550px', margin: '0 auto 1.5rem auto' }}>
              <input
                type="text"
                placeholder="Search questions (e.g. stains, suits, payment, turnaround...)"
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

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedCategory('all')}
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              >
                All FAQs
              </button>
              {faqData.map((cat, idx) => (
                <button
                  key={idx}
                  className={`btn ${selectedCategory === cat.category ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setSelectedCategory(cat.category)}
                  style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>

          {/* Render Accordion List */}
          {filteredFaqData.length > 0 ? (
            filteredFaqData.map((catGroup, idx) => (
              <div key={idx} style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--color-gold)', paddingBottom: '0.4rem', display: 'inline-block' }}>
                  {catGroup.category}
                </h3>
                {catGroup.items.map((faq, itemIdx) => (
                  <FAQAccordion key={itemIdx} item={faq} defaultOpen={idx === 0 && itemIdx === 0} />
                ))}
              </div>
            ))
          ) : (
            <div className="card text-center" style={{ padding: '3rem' }}>
              <HelpCircle size={36} className="text-gold" style={{ margin: '0 auto 1rem auto' }} />
              <h3>No questions matched "{searchTerm}"</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Have a specific question not answered here? Call our friendly team directly on {siteConfig.phoneDisplay}.
              </p>
              <a href={siteConfig.phoneHref} className="btn btn-gold mt-2">
                <Phone size={18} />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          )}

        </div>
      </section>

      <BusinessCTA />
    </main>
  );
};
