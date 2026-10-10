import React, { useState } from 'react';
import { ScanLine, ArrowRight, Sparkles, ShieldCheck, AlertTriangle, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

const PRESETS = [
  {
    id: 'parleg',
    name: 'Parle-G Glucose Biscuits',
    brand: 'Parle Products',
    code: '8901719134845',
    score: 49,
    tone: 'poor',
    toneLabel: 'Additives to Limit',
    calories: '454 kcal',
    sugar: '26.5 g',
    protein: '6.7 g',
    additivesCount: 3,
    additivesSummary: 'INS 503ii, INS 500ii, Invert Syrup',
    warning: 'Score capped at 49 due to high industrial sugars & leavening additives.',
  },
  {
    id: 'maggi',
    name: 'Maggi 2-Minute Masala Noodles',
    brand: 'Nestlé India',
    code: '8901058851298',
    score: 38,
    tone: 'bad',
    toneLabel: 'High Risk Profile',
    calories: '427 kcal',
    sugar: '2.2 g',
    protein: '8.0 g',
    additivesCount: 5,
    additivesSummary: 'INS 635 (Flavour Enhancer), Palm Oil, Refined Wheat',
    warning: 'Excessive sodium (1,040mg) and fractionated palm oil detected.',
  },
  {
    id: 'bourbon',
    name: 'Britannia Bourbon Chocolate',
    brand: 'Britannia Industries',
    code: '8901063139329',
    score: 44,
    tone: 'poor',
    toneLabel: 'High Sugar & Fat',
    calories: '495 kcal',
    sugar: '38.0 g',
    protein: '5.2 g',
    additivesCount: 4,
    additivesSummary: 'Caramel Color (INS 150c/d), Emulsifier 322',
    warning: '38% sugar by weight. WHO recommends under 25g daily free sugar.',
  },
  {
    id: 'yogurt',
    name: 'Organic Plain Greek Yogurt',
    brand: 'Epigamia / Artisan',
    code: '8906070430012',
    score: 88,
    tone: 'excellent',
    toneLabel: 'Clean Nutrition',
    calories: '98 kcal',
    sugar: '3.8 g',
    protein: '10.5 g',
    additivesCount: 0,
    additivesSummary: 'Pure Pasteurised Milk, Active Live Cultures',
    warning: 'Clean label verified. Excellent protein-to-calorie density.',
  },
  {
    id: 'bar',
    name: 'Raw Almond & Date Protein Bar',
    brand: 'The Whole Truth',
    code: '8908013284019',
    score: 92,
    tone: 'excellent',
    toneLabel: 'Whole Food Standard',
    calories: '360 kcal',
    sugar: '18.0 g (Natural)',
    protein: '15.0 g',
    additivesCount: 0,
    additivesSummary: 'Zero artificial sweeteners, no emulsifiers, no maltodextrin',
    warning: '100% whole food ingredients. High natural fiber slows sugar uptake.',
  },
];

export default function HeroSection({ onLaunchApp, onOpenScanner, onSelectPreset }) {
  const [activePreset, setActivePreset] = useState(PRESETS[0]);

  const handlePresetClick = (preset) => {
    setActivePreset(preset);
    if (onSelectPreset) {
      onSelectPreset(preset.code);
    }
  };

  const getScoreTierClass = (score) => {
    if (score >= 75) return 'score-tier-excellent';
    if (score >= 50) return 'score-tier-good';
    if (score >= 40) return 'score-tier-poor';
    return 'score-tier-bad';
  };

  return (
    <section className="startup-hero">
      <div className="startup-container">
        <div className="startup-hero-grid">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="startup-hero-copy">
            <div className="startup-badge">
              <Sparkles size={14} />
              <span>POWERED BY ANTHROPIC CLAUDE 3.5 • GS1 & MULTIMODAL VISION</span>
            </div>

            <h1 className="startup-hero-title">
              Decode every bite. <br />
              <span className="highlight">Before it becomes part of you.</span>
            </h1>

            <p className="startup-hero-desc">
              Scan any barcode, photograph restaurant menus, or snap your home meal plate. NutriScan exposes toxic additives, disguised sugars, and ultra-processing in under two seconds.
            </p>

            <div className="startup-hero-actions">
              <a 
                href="https://nutriscan.kartikidambi.space" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-su-primary" 
                style={{ textDecoration: 'none' }}
              >
                <span>Launch App (nutriscan.kartikidambi.space)</span>
                <ArrowRight size={16} />
              </a>

              <a 
                href="#claude-ai" 
                className="btn-su-outline" 
                style={{ textDecoration: 'none' }}
              >
                <Sparkles size={16} style={{ color: '#fbbf24' }} />
                <span>Claude AI Architecture</span>
              </a>

              <a 
                href="#sandbox" 
                className="btn-su-outline" 
                style={{ textDecoration: 'none' }}
              >
                <span>In-Page Simulator</span>
                <ChevronRight size={16} />
              </a>
            </div>

            <div className="startup-hero-proof">
              <div className="proof-metric">
                <span className="proof-number">3.2M+</span>
                <span className="proof-label">Packaged Products Indexed</span>
              </div>
              <div className="proof-divider" />
              <div className="proof-metric">
                <span className="proof-number">2,400+</span>
                <span className="proof-label">Chemical Additives Decoded</span>
              </div>
              <div className="proof-divider" />
              <div className="proof-metric">
                <span className="proof-number">100%</span>
                <span className="proof-label">Conflict-Free & Open Data</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Interactive Hologram Card */}
          <div className="startup-hero-visual-wrap">
            {/* Floating Telemetry Chips */}
            <div className="hero-float-chip chip-top">
              <div className="chip-icon warning">
                <AlertTriangle size={18} />
              </div>
              <div className="chip-text">
                <strong>{activePreset.additivesCount} Additives Identified</strong>
                <small>{activePreset.additivesSummary}</small>
              </div>
            </div>

            <div className="hero-float-chip chip-bottom">
              <div className="chip-icon success">
                <ShieldCheck size={18} />
              </div>
              <div className="chip-text">
                <strong>Algorithm Cap: 49/100</strong>
                <small>Toxic/High-Risk Additive Threshold</small>
              </div>
            </div>

            {/* Showcase Visual Card */}
            <div className="hero-visual-card">
              <div className="hero-visual-image-box">
                <img src="/hero-visual.jpg" alt="NutriScan Food Intelligence Holographic Scanner" />
                <div className="hero-visual-overlay" />
                <div className="hero-visual-live-badge">
                  <Activity size={14} className="animate-spin" />
                  <span>Interactive Live Hologram</span>
                </div>
              </div>

              {/* Dynamic Preset Switcher */}
              <div className="hero-preset-bar">
                <span className="hero-preset-label">Instant Test Presets:</span>
                <div className="hero-preset-chips">
                  {PRESETS.map((p) => (
                    <button
                      type="button"
                      key={p.id}
                      className={`hero-preset-chip ${activePreset.id === p.id ? 'active' : ''}`}
                      onClick={() => handlePresetClick(p)}
                    >
                      {p.name.split(' ')[0]} ({p.score})
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Live Snapshot Summary */}
              <div style={{ padding: '20px 24px', background: 'var(--su-surface-glass)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'Outfit, sans-serif' }}>{activePreset.name}</h4>
                    <span style={{ fontSize: '0.78rem', color: 'var(--su-text-muted)' }}>{activePreset.brand} · GTIN-{activePreset.code}</span>
                  </div>
                  <div className={`sandbox-score-circle ${getScoreTierClass(activePreset.score)}`}>
                    {activePreset.score}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 14 }}>
                  <div style={{ background: 'var(--su-surface-1)', padding: '8px 10px', borderRadius: 8, textAlign: 'center' }}>
                    <small style={{ color: 'var(--su-text-muted)', fontSize: '0.68rem', display: 'block' }}>CALORIES</small>
                    <strong style={{ fontSize: '0.85rem' }}>{activePreset.calories}</strong>
                  </div>
                  <div style={{ background: 'var(--su-surface-1)', padding: '8px 10px', borderRadius: 8, textAlign: 'center' }}>
                    <small style={{ color: 'var(--su-text-muted)', fontSize: '0.68rem', display: 'block' }}>SUGAR</small>
                    <strong style={{ fontSize: '0.85rem' }}>{activePreset.sugar}</strong>
                  </div>
                  <div style={{ background: 'var(--su-surface-1)', padding: '8px 10px', borderRadius: 8, textAlign: 'center' }}>
                    <small style={{ color: 'var(--su-text-muted)', fontSize: '0.68rem', display: 'block' }}>PROTEIN</small>
                    <strong style={{ fontSize: '0.85rem' }}>{activePreset.protein}</strong>
                  </div>
                </div>

                <div style={{ fontSize: '0.76rem', color: activePreset.score < 50 ? '#fb7185' : '#34d399', background: 'rgba(0,0,0,0.3)', padding: '8px 12px', borderRadius: 8, display: 'flex', gap: 6, alignItems: 'center' }}>
                  {activePreset.score < 50 ? <AlertTriangle size={14} /> : <CheckCircle2 size={14} />}
                  <span>{activePreset.warning}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
