import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export default function ComparisonSection() {
  const rows = [
    {
      feature: 'Chemical Additive & E-Number Toxicity Audit',
      nutriscan: 'Yes (2,400+ INS codes analyzed with WHO/EFSA risk caps)',
      traditional: 'No (Ignores additives completely)',
      yuka: 'Partial (European data only, missing Indian FSSAI)',
    },
    {
      feature: 'Anti-Healthwashing Score Ceiling (Cap at 49)',
      nutriscan: 'Yes (Hard algorithmic ceiling prevents fake health claims)',
      traditional: 'No (High-sugar fortified junk gets high scores)',
      yuka: 'Partial (Static score penalty)',
    },
    {
      feature: 'Hidden Sugar & Palm Oil Alias Detector',
      nutriscan: 'Yes (Detects 50+ industrial sugar aliases & refined oils)',
      traditional: 'No (Only reads raw declared grams)',
      yuka: 'No (Does not unmask alias names)',
    },
    {
      feature: 'Camera-Based Restaurant Menu Ranker',
      nutriscan: 'Yes (Multimodal AI ranks dishes by metabolic goal)',
      traditional: 'No (Requires slow manual searching item by item)',
      yuka: 'No (Packaged foods only)',
    },
    {
      feature: 'Plate & Thali Photo Vision Segmentation',
      nutriscan: 'Yes (Segments mixed dishes with ICMR-NIN databanks)',
      traditional: 'No or Paid Paywall with basic generic guesses',
      yuka: 'No',
    },
    {
      feature: 'Conflict-Free & Zero Sponsored Brand Promotions',
      nutriscan: '100% Conflict-Free (Zero paid placements or ads)',
      traditional: 'Frequent sponsored ads from junk food brands',
      yuka: 'Subscription funded',
    },
    {
      feature: 'Indian & Global Barcode Dataset Coverage',
      nutriscan: 'Comprehensive (Open Food Facts + Indian GS1 Datasets)',
      traditional: 'User-submitted crowd junk data with massive errors',
      yuka: 'Sparse coverage for Asian / Indian packaged foods',
    },
  ];

  return (
    <section className="startup-comparison">
      <div className="startup-container">
        <div className="section-head-center">
          <div className="startup-badge">
            <Sparkles size={14} />
            <span>RADICAL DIFFERENCE</span>
          </div>
          <h2>Why NutriScan outperforms old calorie counters.</h2>
          <p>
            Traditional diet apps simply count calories while ignoring toxic ultra-processing, inflammatory seed oils, and carcinogenic food dyes. Here is how we compare.
          </p>
        </div>

        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th style={{ width: '32%' }}>Intelligence Feature</th>
                <th className="brand-col" style={{ width: '30%' }}>NutriScan</th>
                <th style={{ width: '20%' }}>MyFitnessPal / Healthify</th>
                <th style={{ width: '18%' }}>Yuka / Others</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>
                    <strong>{r.feature}</strong>
                  </td>
                  <td className="brand-col">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Check size={18} style={{ color: 'var(--su-brand-mint)', flexShrink: 0 }} />
                      <span>{r.nutriscan}</span>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--su-text-muted)' }}>
                      <X size={16} style={{ color: 'var(--su-accent-rose)', flexShrink: 0 }} />
                      <span>{r.traditional}</span>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--su-text-muted)' }}>
                      <X size={16} style={{ color: 'var(--su-accent-amber)', flexShrink: 0 }} />
                      <span>{r.yuka}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
