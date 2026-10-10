import React from 'react';
import { ScanLine, ArrowRight } from 'lucide-react';

export default function StartupNavbar({ onLaunchApp, onOpenScanner }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="startup-nav-fixed">
      <div className="startup-nav-content">
        <div className="startup-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="startup-brand-icon">
            <ScanLine size={24} strokeWidth={2.4} />
          </div>
          <div className="startup-brand-text">
            <span className="startup-brand-title">NutriScan</span>
            <span className="startup-brand-tagline">Food Intelligence</span>
          </div>
        </div>

        <nav className="startup-nav-links" aria-label="Main Navigation">
          <button type="button" className="startup-nav-link" onClick={() => scrollTo('features')}>Features</button>
          <button type="button" className="startup-nav-link" onClick={() => scrollTo('use-app')}>Live App</button>
          <button type="button" className="startup-nav-link" onClick={() => scrollTo('claude-ai')}>Claude AI</button>
          <button type="button" className="startup-nav-link" onClick={() => scrollTo('founder')}>Founder</button>
        </nav>

        <div className="startup-nav-actions">
          <a 
            href="https://nutriscan.kartikidambi.space"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-su-primary"
            style={{ textDecoration: 'none', padding: '9px 18px', fontSize: '0.84rem' }}
          >
            <span>Open Web App</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}
