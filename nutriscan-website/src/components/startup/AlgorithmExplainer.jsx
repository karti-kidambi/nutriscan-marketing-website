import React from 'react';
import { Scale, ShieldAlert, Cpu, HeartPulse, Check, Info } from 'lucide-react';

export default function AlgorithmExplainer() {
  const steps = [
    {
      num: '60%',
      title: 'Nutritional Density Profile',
      desc: 'Assesses macronutrient balance per 100g/100ml aligned with WHO daily guidance. Caloric density, saturated fat ratios, total and free sugars, and sodium are penalized, while bioavailable protein and natural dietary fiber are rewarded.',
    },
    {
      num: '40%',
      title: 'Ingredient Purity & Additives',
      desc: 'Audits every listed compound against European EFSA, FDA, and international toxicology registries. Unmasks industrial preservatives, artificial sweeteners, bleaching agents, and toxic emulsifiers.',
    },
    {
      num: 'MAX 49',
      title: 'High-Risk Additive Safety Cap',
      desc: 'Food giants frequently "healthwash" products by fortifying sugary processed bars with synthetic vitamins. Our algorithm enforces a hard ceiling: if any high-concern or toxic additive is present, the final score cannot exceed 49/100.',
    },
  ];

  return (
    <section className="startup-algorithm" id="algorithm">
      <div className="startup-container">
        <div className="section-head-center">
          <div className="startup-badge">
            <Scale size={14} />
            <span>ALGORITHMIC TRANSPARENCY</span>
          </div>
          <h2>The science behind the 100-point score.</h2>
          <p>
            No black-box mystery numbers. NutriScan’s scoring model is rooted in published nutritional epidemiology and international food safety monographs.
          </p>
        </div>

        <div className="algo-diagram-grid">
          {/* Step Cards Column */}
          <div className="algo-cards-col">
            {steps.map((s, idx) => (
              <div className="algo-step-card" key={idx}>
                <div className="algo-step-badge">{s.num}</div>
                <div className="algo-step-info">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Visual Panel */}
          <div className="algo-visual-panel">
            <div className="formula-display">
              <div className="formula-math">
                Final Score = min(49*, 0.60 × Nutrition + 0.40 × Ingredients)
              </div>
              <span className="formula-sub">*Capped automatically when high-concern chemical additives are found</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ background: 'var(--su-surface-1)', padding: '16px', borderRadius: 12, border: '1px solid var(--su-border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <strong style={{ fontSize: '0.85rem' }}>Nutritional Component (0 - 60 pts)</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--su-brand-mint)' }}>WHO Standard</span>
                </div>
                <div style={{ height: 6, background: 'var(--su-surface-3)', borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{ width: '60%', height: '100%', background: 'linear-gradient(90deg, #10b981, #34d399)' }} />
                </div>
                <small style={{ color: 'var(--su-text-muted)', fontSize: '0.72rem', display: 'block', marginTop: 6 }}>
                  Protein, dietary fiber, sodium per 100g, saturated fats, free sugars.
                </small>
              </div>

              <div style={{ background: 'var(--su-surface-1)', padding: '16px', borderRadius: 12, border: '1px solid var(--su-border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <strong style={{ fontSize: '0.85rem' }}>Clean Label Component (0 - 40 pts)</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--su-accent-cyan)' }}>NOVA / EFSA Model</span>
                </div>
                <div style={{ height: 6, background: 'var(--su-surface-3)', borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{ width: '40%', height: '100%', background: 'linear-gradient(90deg, #06b6d4, #3b82f6)' }} />
                </div>
                <small style={{ color: 'var(--su-text-muted)', fontSize: '0.72rem', display: 'block', marginTop: 6 }}>
                  Additive hazards, emulsifiers, synthetic sweeteners, ultra-processing tier.
                </small>
              </div>

              <div style={{ background: 'rgba(244, 63, 94, 0.08)', padding: '14px 16px', borderRadius: 12, border: '1px solid rgba(244, 63, 94, 0.25)', display: 'flex', gap: 10, alignItems: 'center' }}>
                <ShieldAlert size={20} style={{ color: 'var(--su-accent-rose)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.78rem', color: '#fda4af' }}>
                  <strong>Anti-Healthwashing Guarantee:</strong> A product claiming "high protein" or "enriched with 12 vitamins" will still fail if formulated with risky chemical additives or palm oil.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
