import React, { useState } from 'react';
import { Phone, Menu, X, Shirt } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'SERVICES', path: '/services' },
    { label: 'PRICES', path: '/prices' },
    { label: 'HOW IT WORKS', path: '/how-it-works' },
    { label: 'ABOUT', path: '/about' },
    { label: 'FAQ', path: '/faq' },
    { label: 'COMMERCIAL', path: '/commercial' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <a 
          href="/" 
          className="logo-link" 
          onClick={(e) => { e.preventDefault(); handleNavClick('/'); }}
        >
          <div className="logo-emblem">
            <span>B</span>
          </div>
          <div className="logo-text-wrap">
            <span className="logo-title">BRITISH COTTON HOUSE</span>
            <span className="logo-subtitle">GARMENT CARE</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`nav-link ${currentPath === item.path ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.path);
              }}
            >
              {item.label}
            </a>
          ))}
          <a href={siteConfig.phoneHref} className="btn btn-gold" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}>
            <Phone size={16} />
            <span>CALL TO BOOK</span>
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`nav-link ${currentPath === item.path ? 'active' : ''}`}
              style={{ fontSize: '1.1rem', padding: '0.6rem 0' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.path);
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.phoneHref}
            className="btn btn-gold mt-2"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Phone size={18} />
            <span>CALL TO BOOK: {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      )}
    </header>
  );
};
