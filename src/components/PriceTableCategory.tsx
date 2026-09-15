import React from 'react';
import { PriceCategory } from '../config/priceData';
import { Phone, Info } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface PriceTableCategoryProps {
  category: PriceCategory;
}

export const PriceTableCategory: React.FC<PriceTableCategoryProps> = ({ category }) => {
  return (
    <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
        <h3 style={{ fontSize: '1.6rem', color: 'var(--color-navy-dark)', margin: 0 }}>
          {category.title}
        </h3>
      </div>

      {category.description && (
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', marginBottom: '1.25rem' }}>
          {category.description}
        </p>
      )}

      <div style={{ overflowX: 'auto' }}>
        <table className="price-table">
          <thead>
            <tr>
              <th>Service Item</th>
              <th style={{ textAlign: 'right' }}>Standard Price</th>
            </tr>
          </thead>
          <tbody>
            {category.items.map((item, idx) => (
              <tr key={idx} className={item.highlighted ? 'highlight-row' : ''}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ fontWeight: item.highlighted ? 700 : 500 }}>
                      {item.name}
                    </span>
                    {item.note && (
                      <span className="badge badge-gold" style={{ margin: 0, padding: '0.15rem 0.6rem', fontSize: '0.7rem' }}>
                        {item.note}
                      </span>
                    )}
                  </div>
                </td>
                <td className="price-tag">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {category.footerNote && (
        <div style={{ marginTop: '1.2rem', padding: '0.8rem 1rem', backgroundColor: 'var(--color-cream-bg)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--color-gold)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Info size={16} className="text-gold" style={{ flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
            {category.footerNote}
          </p>
        </div>
      )}
    </div>
  );
};
