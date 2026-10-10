import React from 'react';
import { User, Mail, Globe, Code2, MapPin, Calendar, Rocket, ShieldCheck, ExternalLink } from 'lucide-react';

export default function FounderSection() {
  return (
    <section className="startup-founder-section" id="founder">
      <div className="startup-container">
        <div className="section-head-center">
          <div className="startup-badge">
            <User size={14} />
            <span>FOUNDER & COMPANY PROFILE</span>
          </div>
          <h2>Built with conviction. Built in public.</h2>
          <p>
            NutriScan is an independent, founder-led startup focused on radical ingredient transparency and conversational food intelligence.
          </p>
        </div>

        <div className="founder-card-wrapper">
          <div className="founder-profile-grid">
            {/* Left Col: Founder Bio */}
            <div className="founder-bio-col">
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div className="founder-avatar-circle">
                  <span>KK</span>
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.4rem', fontFamily: 'Outfit, sans-serif' }}>Kartikeyan Kidambi</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--su-brand-mint)', fontWeight: 700 }}>
                    Founder & Lead Systems Engineer
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--su-text-body)', lineHeight: 1.7, marginBottom: 20 }}>
                "As someone passionate about nutrition, metabolic health, and applied artificial intelligence, I started NutriScan to solve a glaring problem: modern food packaging is intentionally engineered to deceive consumers with obscure chemical codes and false claims. Our mission is to make food intelligence instant, honest, and accessible to everyone."
              </p>

              <div className="founder-meta-pills">
                <div className="meta-pill">
                  <MapPin size={15} />
                  <span>India</span>
                </div>
                <div className="meta-pill">
                  <Calendar size={15} />
                  <span>Founded: 2025</span>
                </div>
                <div className="meta-pill">
                  <Rocket size={15} />
                  <span>Stage: Early MVP (Bootstrapped)</span>
                </div>
              </div>

              <div className="founder-links-row">
                <a 
                  href="https://kartikidambi.space" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-su-outline"
                  style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                >
                  <Globe size={15} />
                  <span>Founder Portfolio</span>
                  <ExternalLink size={13} />
                </a>

                <a 
                  href="https://github.com/kartikidambi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-su-outline"
                  style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                >
                  <Code2 size={15} />
                  <span>GitHub Profile</span>
                  <ExternalLink size={13} />
                </a>

                <a 
                  href="https://nutriscan.kartikidambi.space" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-su-primary"
                  style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                >
                  <span>nutriscan.kartikidambi.space</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Right Col: Startup Verification Snapshot */}
            <div className="founder-stats-col">
              <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.1rem', margin: '0 0 16px', color: 'var(--su-text-title)' }}>
                Startup Verification Profile
              </h4>

              <div className="verification-item">
                <span className="v-label">Company / Startup Name</span>
                <strong className="v-value">NutriScan</strong>
              </div>

              <div className="verification-item">
                <span className="v-label">Production App</span>
                <strong className="v-value">https://nutriscan.kartikidambi.space</strong>
              </div>

              <div className="verification-item">
                <span className="v-label">Founder Portfolio</span>
                <strong className="v-value">https://kartikidambi.space</strong>
              </div>

              <div className="verification-item">
                <span className="v-label">Current Development Stage</span>
                <strong className="v-value">Active Public MVP (Iterating & User Testing)</strong>
              </div>

              <div className="verification-item">
                <span className="v-label">Funding Status</span>
                <strong className="v-value">Bootstrapped / 100% Independent</strong>
              </div>

              <div style={{ marginTop: 18, padding: '12px 14px', background: 'rgba(16, 185, 129, 0.08)', borderRadius: 10, border: '1px solid rgba(16, 185, 129, 0.2)', display: 'flex', gap: 10, alignItems: 'center' }}>
                <ShieldCheck size={18} style={{ color: 'var(--su-brand-mint)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.76rem', color: 'var(--su-text-body)' }}>
                  Active participant in the global open-food ecosystem. Applying to the <strong>Claude Startups Program</strong> for computational scaling.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
