import React from 'react';
import { ScanLine, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CtaBanner({ onLaunchApp, onOpenScanner }) {
  return (
    <section className="startup-cta-banner">
      <div className="startup-container">
        <div className="cta-banner-box">
          <h2>Ready to stop guessing what you’re eating?</h2>
          <p>
            Experience instant nutritional clarity on supermarket aisles, restaurant menus, and everyday home meals. No registration required.
          </p>

          <div className="cta-banner-actions">
            <a 
              href="https://nutriscan.kartikidambi.space" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-su-primary"
              style={{ textDecoration: 'none' }}
            >
              <span>Launch Live App (nutriscan.kartikidambi.space)</span>
              <ArrowRight size={16} />
            </a>

            <a 
              href="#sandbox" 
              className="btn-su-outline"
              style={{ textDecoration: 'none' }}
            >
              <ScanLine size={16} />
              <span>Test In-Page Simulator</span>
            </a>
          </div>

          <div style={{ marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', color: 'var(--su-text-muted)' }}>
            <ShieldCheck size={16} style={{ color: 'var(--su-brand-mint)' }} />
            <span>100% Free for Consumers • Zero Data Tracking • Backed by Open Food Facts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
