import React, { useState, useEffect } from 'react';
import './styles/main.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyMobileCallBar } from './components/StickyMobileCallBar';
import { localBusinessJsonLd } from './config/seoData';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PricesPage } from './pages/PricesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutPage } from './pages/AboutPage';
import { ServiceAreaPage } from './pages/ServiceAreaPage';
import { FAQPage } from './pages/FAQPage';
import { CommercialPage } from './pages/CommercialPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { LaundryCarePolicyPage } from './pages/LaundryCarePolicyPage';
import { LostDamagedPolicyPage } from './pages/LostDamagedPolicyPage';
import { CancellationPolicyPage } from './pages/CancellationPolicyPage';
import { ComplaintsPolicyPage } from './pages/ComplaintsPolicyPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={navigateTo} />;
      case '/services':
        return <ServicesPage onNavigate={navigateTo} />;
      case '/prices':
        return <PricesPage onNavigate={navigateTo} />;
      case '/how-it-works':
        return <HowItWorksPage onNavigate={navigateTo} />;
      case '/about':
        return <AboutPage onNavigate={navigateTo} />;
      case '/service-area':
        return <ServiceAreaPage onNavigate={navigateTo} />;
      case '/faq':
        return <FAQPage onNavigate={navigateTo} />;
      case '/commercial':
        return <CommercialPage onNavigate={navigateTo} />;
      case '/contact':
        return <ContactPage onNavigate={navigateTo} />;
      case '/terms':
        return <TermsPage onNavigate={navigateTo} />;
      case '/privacy':
        return <PrivacyPage onNavigate={navigateTo} />;
      case '/cookie-policy':
        return <CookiePolicyPage onNavigate={navigateTo} />;
      case '/laundry-care-policy':
        return <LaundryCarePolicyPage onNavigate={navigateTo} />;
      case '/lost-and-damaged':
        return <LostDamagedPolicyPage onNavigate={navigateTo} />;
      case '/cancellation-policy':
        return <CancellationPolicyPage onNavigate={navigateTo} />;
      case '/complaints-policy':
        return <ComplaintsPolicyPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="app-container">
      {/* Inject LocalBusiness JSON-LD for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <Header currentPath={currentPath} onNavigate={navigateTo} />
      
      {renderPage()}

      <Footer onNavigate={navigateTo} />
      
      {/* Mobile Persistent Sticky Call Bar */}
      <StickyMobileCallBar />
    </div>
  );
};

export default App;
