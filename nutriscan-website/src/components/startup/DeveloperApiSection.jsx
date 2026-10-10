import React, { useState } from 'react';
import { Code2, Copy, Check, Terminal, ExternalLink, Sparkles } from 'lucide-react';

const SAMPLE_JSON = `{
  "status": "success",
  "barcode": "8901719134845",
  "product_name": "Parle-G Glucose Biscuits",
  "brand": "Parle Products",
  "scorecard": {
    "score": 49,
    "tone": "poor",
    "cap_applied": true,
    "cap_reason": "High-concern additive INS 503ii & refined invert syrup"
  },
  "clean_label": {
    "harmful_additives": [],
    "caution_additives": ["INS 503(ii)", "INS 500(ii)"],
    "hidden_sugars": ["Invert Sugar Syrup"],
    "refined_oils": ["Fractionated Palm Oil"]
  },
  "macros_per_100g": {
    "calories": 454,
    "protein": 6.7,
    "carbs": 78.2,
    "sugars": 26.5,
    "fat": 12.8,
    "sodium_mg": 290
  }
}`;

export default function DeveloperApiSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`curl -X GET "https://nutriscan.kartikidambi.space/api/v1/product/8901719134845" \\\n  -H "Authorization: Bearer YOUR_API_KEY"`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="startup-api-section" id="developers">
      <div className="startup-container">
        <div className="api-terminal-grid">
          {/* Left Column: API Copy & Value */}
          <div>
            <div className="startup-badge">
              <Code2 size={14} />
              <span>DEVELOPER & ENTERPRISE SDK</span>
            </div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', fontWeight: 700, margin: '0 0 16px', lineHeight: 1.15 }}>
              Embed food intelligence into your application.
            </h2>
            <p style={{ fontSize: '0.96rem', color: 'var(--su-text-body)', lineHeight: 1.7, marginBottom: 28 }}>
              Power quick-commerce grocery apps (Blinkit, Zepto, Instacart), health insurance risk models, and fitness trackers with NutriScan’s real-time GTIN barcode resolution and chemical additive audit API.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, marginBottom: 32 }}>
              <div style={{ background: 'var(--su-surface-1)', padding: '14px 18px', borderRadius: 12, border: '1px solid var(--su-border-subtle)' }}>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--su-brand-mint)' }}>&lt; 50ms Edge Latency</strong>
                <small style={{ color: 'var(--su-text-muted)', fontSize: '0.74rem' }}>Global CDN edge-cached barcode lookups</small>
              </div>
              <div style={{ background: 'var(--su-surface-1)', padding: '14px 18px', borderRadius: 12, border: '1px solid var(--su-border-subtle)' }}>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--su-accent-cyan)' }}>GS1 Verified Datasets</strong>
                <small style={{ color: 'var(--su-text-muted)', fontSize: '0.74rem' }}>Standardized GTIN-8/12/13/14 format</small>
              </div>
              <div style={{ background: 'var(--su-surface-1)', padding: '14px 18px', borderRadius: 12, border: '1px solid var(--su-border-subtle)' }}>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: '#f59e0b' }}>Batch Processing API</strong>
                <small style={{ color: 'var(--su-text-muted)', fontSize: '0.74rem' }}>Audit entire grocery inventories in minutes</small>
              </div>
              <div style={{ background: 'var(--su-surface-1)', padding: '14px 18px', borderRadius: 12, border: '1px solid var(--su-border-subtle)' }}>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: '#a7f3d0' }}>99.99% Enterprise SLA</strong>
                <small style={{ color: 'var(--su-text-muted)', fontSize: '0.74rem' }}>High-concurrency production reliability</small>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button type="button" className="btn-su-primary" onClick={handleCopy}>
                {copied ? <Check size={16} /> : <Terminal size={16} />}
                <span>{copied ? 'Command Copied!' : 'Copy cURL Request'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Code Terminal Preview */}
          <div className="terminal-mockup">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot dot-red" />
                <span className="terminal-dot dot-yellow" />
                <span className="terminal-dot dot-green" />
              </div>
              <span className="terminal-title">GET /v1/product/8901719134845 — 200 OK</span>
              <button type="button" className="terminal-copy-btn" onClick={handleCopy}>
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="terminal-code">
              <code>{SAMPLE_JSON}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
