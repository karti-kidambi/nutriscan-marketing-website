import React from 'react';
import { ScanLine, FlaskConical, ListOrdered, Utensils, ShieldAlert, Sparkles, Eye, CheckCircle2 } from 'lucide-react';

export default function FeaturesBento({ onLaunchApp }) {
  const cards = [
    {
      wide: true,
      icon: ScanLine,
      title: 'GS1 Barcode Intelligence & Computer Vision',
      desc: 'Point your camera at any packaged food in India or globally. NutriScan validates GS1 GTIN check digits, queries Open Food Facts with secondary fallback registries, and extracts full nutritional facts and ingredients with zero latency.',
      tags: ['GS1 GTIN-13/14', 'Open Food Facts', 'Dual-Pass Vision OCR', 'Fallback Datasets'],
      tab: 'barcode',
    },
    {
      wide: false,
      icon: FlaskConical,
      title: 'Chemical Additive & E-Number Engine',
      desc: 'Decodes every INS code and E-number printed on ingredient lists. Understand what emulsifiers, artificial colorants, and chemical preservatives actually do inside your body.',
      tags: ['INS / E-Codes', 'EFSA & FDA Standards', 'Toxicological Risk Cap'],
      tab: 'barcode',
    },
    {
      wide: false,
      icon: ListOrdered,
      title: 'AI Restaurant Menu Ranker',
      desc: 'Dining out? Photograph any printed or blackboard restaurant menu. Our multimodal vision models rank visible dishes by your personal health focus (fat loss, clean bulk, diabetic safe).',
      tags: ['Multimodal Vision', 'Contextual Sorting', 'Zero Menu Guesswork'],
      tab: 'menu',
    },
    {
      wide: false,
      icon: Utensils,
      title: 'Plate & Meal Vision Decomposition',
      desc: 'Photograph a mixed plate or Indian thali. NutriScan identifies visible dishes, cross-references ICMR-NIN nutrient databanks, and lets you adjust serving portions interactively.',
      tags: ['ICMR-NIN Data', 'Multi-Dish Segmentation', 'Interactive Portions'],
      tab: 'plate',
    },
    {
      wide: false,
      icon: ShieldAlert,
      title: 'Hidden Sugar & Seed Oil Detector',
      desc: 'Unmasks over 50 deceptive industrial sugar aliases (maltodextrin, dextrose, invert syrup, high-fructose corn syrup) and flags fractionated palm oils and ultra-processed additives.',
      tags: ['50+ Sugar Aliases', 'Refined Palm Oil Warning', 'NOVA 4 Alert'],
      tab: 'barcode',
    },
    {
      wide: true,
      icon: Eye,
      title: 'Radical Ethical Independence & Open Science',
      desc: 'Most nutrition apps take money from food conglomerates to boost their product scores. NutriScan is strictly conflict-free: zero corporate sponsorships, zero sponsored rankings, and 100% open-access scientific methodology.',
      tags: ['Zero Sponsored Rankings', 'No Brand Kickbacks', 'Open-Source Datasets', 'Privacy-Preserving'],
      tab: 'barcode',
    },
  ];

  return (
    <section className="startup-features" id="features">
      <div className="startup-container">
        <div className="section-head-center">
          <div className="startup-badge">
            <Sparkles size={14} />
            <span>PLATFORM CAPABILITIES</span>
          </div>
          <h2>Engineered for radical food transparency.</h2>
          <p>
            Whether you are shopping down supermarket aisles, dining in a crowded bistro, or sitting down to home-cooked meals, NutriScan puts lab-grade nutritional intelligence into your pocket.
          </p>
        </div>

        <div className="features-bento-grid">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                className={`bento-card ${card.wide ? 'bento-wide' : ''}`} 
                key={idx}
                onClick={() => window.open('https://nutriscan.kartikidambi.space', '_blank')}
                style={{ cursor: 'pointer' }}
                title="Click to explore live feature at nutriscan.kartikidambi.space"
              >
                <div className="bento-icon-pill">
                  <Icon size={24} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <div className="bento-tags">
                  {card.tags.map((tag, tIdx) => (
                    <span className="bento-tag" key={tIdx}>{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
