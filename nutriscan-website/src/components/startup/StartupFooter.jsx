import React from 'react';
import { ScanLine, Heart, ExternalLink, ShieldCheck } from 'lucide-react';

export default function StartupFooter({ onLaunchApp, onOpenScanner, onOpenLegal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="startup-footer">
      <div className="startup-container">
        <div className="footer-top-grid">
          {/* Brand & Founder Column */}
          <div className="footer-brand-col">
            <div className="startup-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="startup-brand-icon">
                <ScanLine size={24} strokeWidth={2.4} />
              </div>
              <div className="startup-brand-text">
                <span className="startup-brand-title">NutriScan</span>
                <span className="startup-brand-tagline">Food Intelligence</span>
              </div>
            </div>

            <p>
              Next-generation food intelligence engineered for radical ingredient transparency. Founded by Kartikeyan Kidambi. Built on Anthropic Claude.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.8rem', color: 'var(--su-text-muted)', marginBottom: 18 }}>
              <div><strong>Founder:</strong> <a href="https://kartikidambi.space" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--su-brand-mint)', textDecoration: 'none' }}>Kartikeyan Kidambi</a></div>
              <div><strong>App URL:</strong> <a href="https://nutriscan.kartikidambi.space" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--su-brand-mint)', textDecoration: 'none' }}>nutriscan.kartikidambi.space</a></div>
              <div><strong>Status:</strong> Active MVP • Bootstrapped 2025</div>
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <a 
                href="https://nutriscan.kartikidambi.space" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-su-primary" 
                style={{ padding: '6px 14px', fontSize: '0.74rem', textDecoration: 'none' }}
              >
                Launch Web App ↗
              </a>
              <a 
                href="#use-app" 
                className="btn-su-outline" 
                style={{ padding: '6px 12px', fontSize: '0.74rem', textDecoration: 'none' }}
              >
                App Overview
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="footer-links-col">
            <h5>Product</h5>
            <div className="footer-links-list">
              <a href="https://nutriscan.kartikidambi.space" target="_blank" rel="noopener noreferrer">GTIN Barcode Scanner ↗</a>
              <a href="https://nutriscan.kartikidambi.space" target="_blank" rel="noopener noreferrer">Restaurant Menu Ranker ↗</a>
              <a href="https://nutriscan.kartikidambi.space" target="_blank" rel="noopener noreferrer">Plate Vision AI ↗</a>
              <button type="button" onClick={() => scrollTo('sandbox')}>Interactive Simulator</button>
              <button type="button" onClick={() => scrollTo('use-app')}>Live Web App Suite</button>
              <button type="button" onClick={() => scrollTo('claude-ai')}>Claude AI Architecture</button>
            </div>
          </div>

          {/* The Science */}
          <div className="footer-links-col">
            <h5>The Science</h5>
            <div className="footer-links-list">
              <button type="button" onClick={() => scrollTo('algorithm')}>100-Point Algorithm</button>
              <a href="https://world.openfoodfacts.org/" target="_blank" rel="noopener noreferrer">Open Food Facts Data</a>
              <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank" rel="noopener noreferrer">WHO Dietary Standards</a>
              <a href="https://www.nin.res.in/" target="_blank" rel="noopener noreferrer">ICMR-NIN Databank</a>
              <button type="button" onClick={() => scrollTo('features')}>E-Number Safety Caps</button>
              <button type="button" onClick={() => scrollTo('faq')}>Frequently Asked Questions (FAQ)</button>
              <button type="button" onClick={() => scrollTo('founder')}>Founder Profile</button>
            </div>
          </div>

          {/* Enterprise & Legal */}
          <div className="footer-links-col">
            <h5>Company & Legal</h5>
            <div className="footer-links-list">
              <button type="button" onClick={() => scrollTo('founder')}>About Kartikeyan Kidambi</button>
              <a href="https://kartikidambi.space" target="_blank" rel="noopener noreferrer">Founder Portfolio ↗</a>
              <button type="button" onClick={() => scrollTo('developers')}>Developer REST API</button>
              <button type="button" onClick={() => onOpenLegal('privacy')}>Privacy Policy</button>
              <button type="button" onClick={() => onOpenLegal('terms')}>Terms of Service</button>
              <button type="button" onClick={() => onOpenLegal('disclaimer')}>Medical Disclaimer</button>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} NutriScan (by Kartikeyan Kidambi). All rights reserved.
          </div>
          <div style={{ maxWidth: 540, textAlign: 'right', fontSize: '0.72rem', color: 'var(--su-text-muted)' }}>
            Disclaimer: Scores and assessments are general educational guides based on available packaging records and scientific heuristics, not clinical medical advice.
          </div>
        </div>
      </div>
    </footer>
  );
}
