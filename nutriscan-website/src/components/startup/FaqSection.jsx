import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How does NutriScan calculate the 100-point product score?',
      a: 'Our algorithm weighs two distinct pillars: 60% Nutritional Density (caloric load, free sugars, sodium per 100g, and saturated fat ratios penalized; dietary fiber and protein rewarded) and 40% Clean Formulation (toxic additive penalties, NOVA ultra-processing categorization, and synthetic emulsifiers). If any high-concern or toxic additive is present, the score is capped at a maximum of 49/100.',
    },
    {
      q: 'Does NutriScan support Indian packaged products and regional brands?',
      a: 'Yes! NutriScan searches Open Food Facts and supplementary Indian packaged databases covering brands like Parle, Amul, Britannia, Nestlé India, Haldiram’s, Tata, and regional snacks. You can also photograph any product’s printed label to extract its exact nutrition in real time.',
    },
    {
      q: 'What happens if a scanned barcode has no existing record?',
      a: 'If a barcode has not yet been registered, NutriScan does not leave you hanging or substitute an unrelated product. You can immediately snap a photo of the printed ingredients and nutrition table. Our vision model parses the text, calculates the score, and saves it locally in your browser for future scans.',
    },
    {
      q: 'How does the AI Restaurant Menu Ranker work?',
      a: 'Take a clear photo of any printed, laminated, or chalkboard menu. Our multimodal vision models extract the visible dishes, filter out marketing buzzwords, and sort items in order of nutritional balance based on your active metabolic goal (Fat Loss, Muscle Gain, or Low Glycemic).',
    },
    {
      q: 'Are meal photo calorie and macro estimates exact?',
      a: 'No photo can measure hidden cooking fats or precise kitchen gram portions. NutriScan uses reference portion assumptions cross-referenced with the Indian Nutrient Databank (ICMR-NIN) and clearly labels values as planning estimates. You can interactively adjust serving counts (0.5x to 3x) to match what you actually ate.',
    },
    {
      q: 'Is my dietary data private? Do you sell scan histories to advertisers?',
      a: 'NutriScan is 100% privacy-first. Your scan history is stored entirely in your local browser storage (localStorage) and never uploaded to advertiser databases. We do not accept sponsored product promotions or brand kickbacks.',
    },
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="startup-faq" id="faq">
      <div className="startup-container">
        <div className="section-head-center">
          <div className="startup-badge">
            <HelpCircle size={14} />
            <span>CLARITY & HONESTY</span>
          </div>
          <h2>Frequently asked questions.</h2>
          <p>
            Everything you need to know about NutriScan’s methodology, data sources, and technology.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div className="faq-item" key={idx}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={18} style={{ color: 'var(--su-brand-mint)' }} /> : <ChevronDown size={18} />}
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p style={{ margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
