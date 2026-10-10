import React from 'react';
import { ExternalLink, Smartphone, Sparkles, ScanLine, Utensils, ListOrdered, CheckCircle2, ArrowRight } from 'lucide-react';

const APP_URL = 'https://nutriscan.kartikidambi.space';

export default function UseAppSection() {
  return (
    <section className="startup-use-app-section" id="use-app">
      <div className="startup-container">
        <div className="use-app-banner">
          <div className="use-app-grid">
            {/* Left Copy */}
            <div className="use-app-copy">
              <div className="startup-badge" style={{ background: 'rgba(16, 185, 129, 0.12)', borderColor: 'rgba(52, 211, 153, 0.35)' }}>
                <Sparkles size={14} />
                <span>LIVE APPLICATION SUITE</span>
              </div>

              <h2>Experience the NutriScan Web App live.</h2>
              <p>
                Our production web application is live and accessible without any sign-up or paywalls. Point your smartphone camera or upload photos to analyze packaged barcodes, restaurant menus, and home plates.
              </p>

              <div className="use-app-url-pill">
                <span className="live-pulse-dot" />
                <span className="url-label">Production App URL:</span>
                <code>{APP_URL}</code>
              </div>

              <div className="use-app-features-mini">
                <div className="app-feat-pill">
                  <ScanLine size={16} />
                  <span>GTIN Barcode Scanner</span>
                </div>
                <div className="app-feat-pill">
                  <ListOrdered size={16} />
                  <span>Menu Goal Ranker</span>
                </div>
                <div className="app-feat-pill">
                  <Utensils size={16} />
                  <span>Plate Vision AI</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 28 }}>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-su-primary"
                  style={{ textDecoration: 'none' }}
                >
                  <span>Launch Web App (nutriscan.kartikidambi.space)</span>
                  <ExternalLink size={16} />
                </a>

                <a
                  href="#sandbox"
                  className="btn-su-outline"
                  style={{ textDecoration: 'none' }}
                >
                  <span>Test In-Page Simulator</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="use-app-visual">
              <div className="app-preview-card">
                <div className="app-preview-browser-bar">
                  <div className="browser-dots">
                    <span className="b-dot red" />
                    <span className="b-dot yellow" />
                    <span className="b-dot green" />
                  </div>
                  <div className="browser-address">
                    nutriscan.kartikidambi.space
                  </div>
                </div>

                <div className="app-preview-body">
                  <div className="preview-top-status">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span className="startup-status-dot" />
                      <strong style={{ fontSize: '0.84rem' }}>NutriScan Web App Active</strong>
                    </div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--su-brand-mint)', fontWeight: 700 }}>v2.4 Production</span>
                  </div>

                  <div className="preview-app-actions">
                    <div className="preview-action-card">
                      <ScanLine size={24} style={{ color: 'var(--su-brand-mint)' }} />
                      <strong>Scan Barcode</strong>
                      <small>Open Food Facts + GS1 Checksum</small>
                    </div>
                    <div className="preview-action-card">
                      <ListOrdered size={24} style={{ color: 'var(--su-accent-cyan)' }} />
                      <strong>Menu Guide</strong>
                      <small>Goal-ranked dishes from photo</small>
                    </div>
                    <div className="preview-action-card">
                      <Utensils size={24} style={{ color: '#fbbf24' }} />
                      <strong>Meal Plate</strong>
                      <small>Multi-dish ICMR-NIN databank</small>
                    </div>
                  </div>

                  <div className="preview-note">
                    <CheckCircle2 size={16} style={{ color: 'var(--su-brand-mint)', flexShrink: 0 }} />
                    <span>Works directly on mobile Safari, Chrome, and desktop browsers with camera access.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
