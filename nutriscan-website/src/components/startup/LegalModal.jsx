import React, { useState } from 'react';
import { X, ShieldCheck, FileText, AlertTriangle, Lock } from 'lucide-react';

export default function LegalModal({ isOpen, initialTab = 'privacy', onClose }) {
  const [tab, setTab] = useState(initialTab);

  if (!isOpen) return null;

  return (
    <div className="legal-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="legal-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="legal-modal-header">
          <div className="legal-tab-triggers">
            <button
              type="button"
              className={`legal-tab-btn ${tab === 'privacy' ? 'active' : ''}`}
              onClick={() => setTab('privacy')}
            >
              <Lock size={15} />
              <span>Privacy Policy</span>
            </button>
            <button
              type="button"
              className={`legal-tab-btn ${tab === 'terms' ? 'active' : ''}`}
              onClick={() => setTab('terms')}
            >
              <FileText size={15} />
              <span>Terms of Service</span>
            </button>
            <button
              type="button"
              className={`legal-tab-btn ${tab === 'disclaimer' ? 'active' : ''}`}
              onClick={() => setTab('disclaimer')}
            >
              <AlertTriangle size={15} />
              <span>Medical Disclaimer</span>
            </button>
          </div>

          <button type="button" className="legal-modal-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Body Content */}
        <div className="legal-modal-body">
          {tab === 'privacy' && (
            <div>
              <h3>NutriScan Privacy Policy</h3>
              <p className="legal-effective">Last updated: October 2026 • Effective immediately</p>

              <h4>1. Core Philosophy: Radical Privacy</h4>
              <p>
                At NutriScan (operated by NutriScan Technologies and founder Kartikeyan Kidambi), we treat your dietary and metabolic data with utmost confidentiality. We believe what you eat is private, personal, and sensitive.
              </p>

              <h4>2. Data Storage & Local Retention</h4>
              <p>
                NutriScan is built with a local-first philosophy. Your recent scans, saved barcodes, and dietary profile preferences are stored exclusively on your device using browser <code>localStorage</code>. We do not maintain server-side user tracking profiles, and you can erase your scan history at any time with a single click.
              </p>

              <h4>3. Image & Photo Processing</h4>
              <p>
                When you photograph a packaged barcode, restaurant menu, or food plate, the image is transmitted over encrypted HTTPS to our analysis engine solely for the duration required to extract nutritional facts and identify dishes. Images are not archived, sold, or used to build marketing profiles.
              </p>

              <h4>4. Zero Commercial Data Monetization</h4>
              <p>
                NutriScan does not sell, license, or broker your personal eating patterns, scan queries, or health preferences to insurance providers, advertising networks, or consumer packaged goods companies.
              </p>

              <h4>5. Contact & Inquiries</h4>
              <p>
                For any privacy questions or data inquiries, reach out via the founder's site at <a href="https://kartikidambi.space" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--su-brand-mint)', textDecoration: 'underline' }}>kartikidambi.space</a> or through the web application at <a href="https://nutriscan.kartikidambi.space" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--su-brand-mint)', textDecoration: 'underline' }}>nutriscan.kartikidambi.space</a>.
              </p>
            </div>
          )}

          {tab === 'terms' && (
            <div>
              <h3>NutriScan Terms of Service</h3>
              <p className="legal-effective">Last updated: October 2026 • Effective immediately</p>

              <h4>1. Acceptance of Terms</h4>
              <p>
                By accessing or using the NutriScan web application and services at <code>https://nutriscan.kartikidambi.space</code>, you agree to comply with and be bound by these Terms of Service.
              </p>

              <h4>2. Nature of the Product</h4>
              <p>
                NutriScan is an independent, early-stage food intelligence technology prototype. It provides algorithmic interpretations of publicly declared nutritional values and chemical ingredient listings.
              </p>

              <h4>3. Open Data Attribution</h4>
              <p>
                Packaged food ingredient lists and baseline nutritional values are sourced from the Open Food Facts community database and verified GS1 check digit registries. NutriScan does not claim proprietary ownership over third-party brand packaging information.
              </p>

              <h4>4. Permitted Use</h4>
              <p>
                Users are granted a personal, non-exclusive license to scan and review food products. Automated scraping, reverse engineering of backend inference endpoints, or denial-of-service attempts against our infrastructure are strictly prohibited.
              </p>

              <h4>5. Governing Law</h4>
              <p>
                These terms are governed by the laws of India, under the jurisdiction of the founder's principal place of operation.
              </p>
            </div>
          )}

          {tab === 'disclaimer' && (
            <div>
              <h3>Nutritional & Medical Disclaimer</h3>
              <p className="legal-effective">Important Health Safety Notice</p>

              <div style={{ padding: '14px 18px', background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.3)', borderRadius: 10, marginBottom: 20 }}>
                <strong style={{ color: '#fb7185', display: 'block', marginBottom: 4 }}>NutriScan Is Not a Substitute for Medical Advice</strong>
                <span style={{ fontSize: '0.85rem', color: '#f1f7f5' }}>
                  The 100-point score, additive risk warnings, and macro estimates are automated educational heuristics, not individual diagnostic evaluations.
                </span>
              </div>

              <h4>1. Educational Purpose Only</h4>
              <p>
                All assessments provided by NutriScan—including nutritional grades, ingredient toxicity warnings, and restaurant dish rankings—are computed using algorithmic models benchmarked against WHO guidelines, ICMR-NIN databanks, and published toxicology literature. They do not constitute clinical dietary prescriptions or medical advice.
              </p>

              <h4>2. Severe Allergies & Health Conditions</h4>
              <p>
                If you suffer from life-threatening food allergies (such as anaphylactic reactions to peanuts, shellfish, or tree nuts) or complex metabolic disorders (such as Type 1 Diabetes or Celiac Disease), you must always inspect the physical printed packaging label and consult a certified medical practitioner before consumption.
              </p>

              <h4>3. Computer Vision Estimates</h4>
              <p>
                Photographs of restaurant menus and mixed meal plates are subject to natural visual limitations: computer vision models cannot determine hidden cooking oils, exact sodium levels, or unseen culinary preparations. Any AI-generated calorie and macro numbers are designated as planning approximations.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="legal-modal-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', color: 'var(--su-text-muted)' }}>
            <ShieldCheck size={16} style={{ color: 'var(--su-brand-mint)' }} />
            <span>NutriScan Technologies • Transparency by Design</span>
          </div>
          <button type="button" className="btn-su-primary" style={{ padding: '6px 18px', fontSize: '0.8rem' }} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
