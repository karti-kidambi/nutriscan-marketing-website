import React from 'react';
import { Sparkles, Brain, Cpu, ShieldCheck, Zap, Layers, CheckCircle2 } from 'lucide-react';

export default function ClaudeArchitecture() {
  const features = [
    {
      icon: Brain,
      title: 'Multimodal Vision with Claude 3.5 Sonnet',
      desc: 'NutriScan utilizes Claude 3.5 Sonnet’s industry-leading vision capabilities to transcribe crumpled, low-contrast, and multilingual packaged ingredient labels that traditional OCR packages fail to parse.',
      badge: 'Claude 3.5 Sonnet',
    },
    {
      icon: Cpu,
      title: 'Deterministic Structured Extraction',
      desc: 'Through Claude’s JSON schema constraints and tool calling, raw nutritional facts are parsed into validated numerical macros per 100g, eliminating hallucinations and ensuring GS1 data fidelity.',
      badge: 'JSON Tool Calling',
    },
    {
      icon: Zap,
      title: 'Sub-Second Edge Nutrition Reasoning',
      desc: 'Claude 3.5 Haiku is deployed for rapid additive categorization, instantly cross-referencing INS codes against EFSA and WHO toxicity benchmarks in under 400ms.',
      badge: 'Claude 3.5 Haiku',
    },
    {
      icon: ShieldCheck,
      title: 'Zero-Retention Health Privacy Architecture',
      desc: 'Aligned with Anthropic’s strict commercial data privacy standards: user meal photos and dietary logs are never used to train frontier models and remain local to the user’s device.',
      badge: 'Privacy Compliant',
    },
  ];

  return (
    <section className="startup-claude-section" id="claude-ai">
      <div className="startup-container">
        <div className="section-head-center">
          <div className="startup-badge" style={{ background: 'rgba(217, 119, 87, 0.12)', borderColor: 'rgba(217, 119, 87, 0.35)', color: '#f59e0b' }}>
            <Sparkles size={14} />
            <span>BUILT WITH ANTHROPIC CLAUDE</span>
          </div>
          <h2>Our Next-Gen AI Architecture.</h2>
          <p>
            NutriScan is built on Anthropic Claude to deliver clinically responsible, hallucination-free nutrition intelligence. Here is how we leverage Claude across our pipeline:
          </p>
        </div>

        <div className="claude-arch-grid">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div className="claude-feature-card" key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                  <div className="claude-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <span className="claude-pill">{item.badge}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="claude-quote-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div className="claude-logo-badge">
              <span>Claude</span>
            </div>
            <div>
              <strong>Why We Chose Anthropic Claude for NutriScan</strong>
              <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--su-text-body)' }}>
                "Nutritional analysis requires zero tolerance for hallucinated ingredients or fabricated macros. Claude’s superior reasoning nuance and safety alignment make it the only model family we trust for health-critical consumer food decisions."
              </p>
              <small style={{ color: 'var(--su-brand-mint)', display: 'block', marginTop: 6, fontWeight: 700 }}>
                — Kartikeyan Kidambi, Founder of NutriScan
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
