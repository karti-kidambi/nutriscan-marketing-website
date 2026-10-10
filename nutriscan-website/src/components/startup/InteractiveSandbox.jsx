import React, { useState } from 'react';
import { Search, ScanLine, Camera, ArrowRight, AlertTriangle, CheckCircle2, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';

const SANDBOX_PRODUCTS = {
  '8901719134845': {
    name: 'Parle-G Original Glucose Biscuits',
    brand: 'Parle Products Pvt. Ltd.',
    barcode: '8901719134845',
    image: 'https://images.openfoodfacts.org/images/products/890/171/913/4845/front_en.11.400.jpg',
    score: 49,
    tone: 'poor',
    toneLabel: 'Additives to Limit',
    category: 'Biscuits and cookies',
    calories: '454 kcal',
    protein: '6.7 g',
    carbs: '78.2 g',
    sugars: '26.5 g',
    fat: '12.8 g',
    saturatedFat: '5.8 g',
    fiber: '2.0 g',
    sodium: '290 mg',
    negatives: [
      { name: 'Sugar', val: '26.5 g / 100g', tone: 'poor', desc: 'Over 26% sugar. Exceeds healthy daily free sugar allowance.' },
      { name: 'Saturated Fat', val: '5.8 g / 100g', tone: 'poor', desc: 'Refined palm oil base contains high saturated fatty acids.' },
      { name: 'Additives', val: '3 detected', tone: 'poor', desc: 'Contains leavening agents INS 503(ii), INS 500(ii) & Invert Sugar.' },
    ],
    positives: [
      { name: 'Protein', val: '6.7 g / 100g', tone: 'good', desc: 'Contains some wheat gluten protein.' },
      { name: 'Low Salt', val: '0.7 g salt', tone: 'excellent', desc: 'Within moderate sodium bounds.' },
    ],
    additives: [
      { code: 'INS 503(ii)', name: 'Ammonium Bicarbonate', purpose: 'Leavening Agent', risk: 'May cause digestive irritation in excessive quantities' },
      { code: 'INS 500(ii)', name: 'Sodium Bicarbonate', purpose: 'Baking Soda', risk: 'Generally safe when consumed in normal food amounts' },
      { code: 'Invert Sugar', name: 'Hydrolysed Sucrose Syrup', purpose: 'Sweetener & Moisture Retention', risk: 'Spikes glycemic index faster than regular cane sugar' },
    ],
    cleanLabelVerdict: 'Contains refined wheat flour (maida), fractionated palm oil and invert sugar syrup.',
  },
  '8901058851298': {
    name: 'Maggi 2-Minute Masala Instant Noodles',
    brand: 'Nestlé India',
    barcode: '8901058851298',
    image: 'https://images.openfoodfacts.org/images/products/890/105/885/1298/front_en.10.400.jpg',
    score: 38,
    tone: 'bad',
    toneLabel: 'High Risk Profile',
    category: 'Instant noodles',
    calories: '427 kcal',
    protein: '8.0 g',
    carbs: '63.5 g',
    sugars: '2.2 g',
    fat: '15.7 g',
    saturatedFat: '6.8 g',
    fiber: '3.6 g',
    sodium: '1040 mg',
    negatives: [
      { name: 'High Sodium', val: '1,040 mg / 100g', tone: 'bad', desc: 'Single pack provides ~45% of WHO daily recommended salt limit.' },
      { name: 'High Saturated Fat', val: '6.8 g / 100g', tone: 'bad', desc: 'Fried in refined palm oil.' },
      { name: 'Flavour Enhancers', val: 'INS 635 (Disodium 5′-ribonucleotides)', tone: 'bad', desc: 'Synthetic nucleotide flavour enhancer linked to allergic sensitivities.' },
    ],
    positives: [
      { name: 'Low Sugar', val: '2.2 g / 100g', tone: 'excellent', desc: 'Low in simple free sugars.' },
      { name: 'Fiber', val: '3.6 g / 100g', tone: 'good', desc: 'Contains added wheat fiber.' },
    ],
    additives: [
      { code: 'INS 635', name: 'Disodium 5′-ribonucleotides', purpose: 'Flavour Enhancer', risk: 'Synergistic MSG-potentiator; avoid if sensitive to purines' },
      { code: 'INS 451(i)', name: 'Pentasodium Triphosphate', purpose: 'Stabiliser & Emulsifier', risk: 'High phosphorus additive associated with calcium leaching' },
      { code: 'INS 508', name: 'Potassium Chloride', purpose: 'Salt substitute', risk: 'Generally recognized as safe' },
    ],
    cleanLabelVerdict: 'Refined wheat flour cake fried in palm oil with concentrated flavour chemicals.',
  },
  '8901063139329': {
    name: 'Britannia Bourbon Chocolate Creams',
    brand: 'Britannia Industries Ltd.',
    barcode: '8901063139329',
    image: 'https://images.openfoodfacts.org/images/products/890/106/313/9329/front_en.8.400.jpg',
    score: 44,
    tone: 'poor',
    toneLabel: 'Excessive Sugar & Fat',
    category: 'Chocolate biscuits',
    calories: '495 kcal',
    protein: '5.2 g',
    carbs: '71.0 g',
    sugars: '38.0 g',
    fat: '21.0 g',
    saturatedFat: '9.5 g',
    fiber: '2.2 g',
    sodium: '210 mg',
    negatives: [
      { name: 'Extreme Sugar', val: '38.0 g / 100g', tone: 'bad', desc: '38% pure sugar by weight. Rapid insulin spike.' },
      { name: 'High Saturated Fat', val: '9.5 g / 100g', tone: 'bad', desc: 'Interesterified vegetable fat and palm oil.' },
      { name: 'Caramel Color', val: 'INS 150c', tone: 'poor', desc: 'Ammonia caramel chemical coloring.' },
    ],
    positives: [
      { name: 'Low Sodium', val: '210 mg / 100g', tone: 'excellent', desc: 'Low in salt.' },
    ],
    additives: [
      { code: 'INS 150c', name: 'Ammonia Caramel', purpose: 'Food Colorant', risk: 'Class III caramel produced with ammonia compounds' },
      { code: 'INS 322', name: 'Soy Lecithin', purpose: 'Emulsifier', risk: 'Common allergen for individuals with severe soy sensitivity' },
      { code: 'INS 503(ii)', name: 'Ammonium Bicarbonate', purpose: 'Raising Agent', risk: 'Standard chemical raising agent' },
    ],
    cleanLabelVerdict: 'Ultra-processed confectionery. High sugar and hydrogenated vegetable oils.',
  },
  '8906070430012': {
    name: 'Epigamia Organic Greek Yogurt',
    brand: 'Drums Food International',
    barcode: '8906070430012',
    image: 'https://images.openfoodfacts.org/images/products/890/607/043/0012/front_en.4.400.jpg',
    score: 88,
    tone: 'excellent',
    toneLabel: 'Clean Nutrition',
    category: 'Dairy and Yogurts',
    calories: '98 kcal',
    protein: '10.5 g',
    carbs: '4.2 g',
    sugars: '3.8 g (Natural Lactose)',
    fat: '4.0 g',
    saturatedFat: '2.4 g',
    fiber: '0.0 g',
    sodium: '55 mg',
    negatives: [],
    positives: [
      { name: 'High Protein', val: '10.5 g / 100g', tone: 'excellent', desc: 'Strained natural Greek yogurt with triple normal protein density.' },
      { name: 'Zero Added Sugar', val: '0 g Added', tone: 'excellent', desc: 'Only natural dairy lactose present.' },
      { name: 'Clean Label', val: '0 Additives', tone: 'excellent', desc: 'No thickeners, no modified starch, no gelatin.' },
    ],
    additives: [],
    cleanLabelVerdict: '100% pure ingredient profile. Pasteurized double toned milk and live active cultures.',
  },
};

export default function InteractiveSandbox({ onScanBarcode, onOpenScanner, onLaunchApp }) {
  const [inputVal, setInputVal] = useState('8901719134845');
  const [selectedProduct, setSelectedProduct] = useState(SANDBOX_PRODUCTS['8901719134845']);
  const [loading, setLoading] = useState(false);

  const handleSelectCode = (code) => {
    setInputVal(code);
    if (SANDBOX_PRODUCTS[code]) {
      setSelectedProduct(SANDBOX_PRODUCTS[code]);
    } else {
      runSearch(code);
    }
  };

  const runSearch = (query) => {
    const clean = query.trim();
    if (!clean) return;
    if (SANDBOX_PRODUCTS[clean]) {
      setSelectedProduct(SANDBOX_PRODUCTS[clean]);
      return;
    }
    setLoading(true);
    // If not in local demo dict, pass to parent barcode runner
    if (onScanBarcode) {
      onScanBarcode(clean);
    }
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  const getScoreColor = (score) => {
    if (score >= 75) return '#34d399';
    if (score >= 50) return '#6ee7b7';
    if (score >= 40) return '#f59e0b';
    return '#f43f5e';
  };

  return (
    <section className="startup-sandbox" id="sandbox">
      <div className="startup-container">
        <div className="section-head-center">
          <div className="startup-badge">
            <Sparkles size={14} />
            <span>INTERACTIVE TECHNOLOGY TESTBED</span>
          </div>
          <h2>Test the food intelligence engine live.</h2>
          <p>
            Pick a packaged food below or enter any GTIN barcode to see NutriScan’s real-time 100-point algorithm, additive audit, and nutritional breakdown.
          </p>
        </div>

        <div className="sandbox-container">
          {/* Search Bar */}
          <form 
            className="sandbox-search-bar" 
            onSubmit={(e) => {
              e.preventDefault();
              runSearch(inputVal);
            }}
          >
            <Search size={20} style={{ color: 'var(--su-text-muted)' }} />
            <input 
              type="text" 
              className="sandbox-search-input" 
              placeholder="Enter GTIN barcode (e.g. 8901719134845) or product name..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button type="submit" className="btn-su-primary" style={{ padding: '8px 18px', fontSize: '0.8rem' }}>
              <span>Analyze</span>
            </button>
            <a 
              href="https://nutriscan.kartikidambi.space" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-su-outline" 
              style={{ padding: '8px 14px', fontSize: '0.8rem', textDecoration: 'none' }}
              title="Launch Camera Scanner in Web App"
            >
              <Camera size={16} />
              <span>Camera Scan</span>
            </a>
          </form>

          {/* Quick Preset Pills */}
          <div className="sandbox-quick-pills">
            <span>PRESETS:</span>
            {Object.entries(SANDBOX_PRODUCTS).map(([code, p]) => (
              <button
                type="button"
                key={code}
                className={`sandbox-pill-btn ${selectedProduct?.barcode === code ? 'active' : ''}`}
                onClick={() => handleSelectCode(code)}
              >
                <span>{p.name.split(' ')[0]}</span>
                <small style={{ opacity: 0.7 }}>({p.score}/100)</small>
              </button>
            ))}
          </div>

          {/* Live Card Preview */}
          {selectedProduct && (
            <div className="sandbox-card-preview">
              {/* Product Left Column */}
              <div className="sandbox-product-sidebar">
                <div className="sandbox-thumb-box">
                  <img src={selectedProduct.image} alt={selectedProduct.name} onError={(e) => { e.target.src = '/hero-visual.jpg'; }} />
                </div>

                <div className="sandbox-score-badge">
                  <div 
                    className="sandbox-score-circle" 
                    style={{ 
                      borderColor: getScoreColor(selectedProduct.score), 
                      color: getScoreColor(selectedProduct.score),
                      backgroundColor: `${getScoreColor(selectedProduct.score)}20` 
                    }}
                  >
                    {selectedProduct.score}
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem' }}>{selectedProduct.toneLabel}</strong>
                    <span style={{ fontSize: '0.74rem', color: 'var(--su-text-muted)' }}>Score out of 100</span>
                  </div>
                </div>

                <a 
                  href="https://nutriscan.kartikidambi.space" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-su-outline" 
                  style={{ width: '100%', textDecoration: 'none' }}
                >
                  <span>Open Full Analysis in App ↗</span>
                </a>
              </div>

              {/* Product Right Column: Details & Insights */}
              <div className="sandbox-details-main">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                  <div>
                    <h3>{selectedProduct.name}</h3>
                    <p className="brand-sub">{selectedProduct.brand} · Barcode: {selectedProduct.barcode}</p>
                  </div>
                  <span style={{ padding: '4px 10px', background: 'var(--su-surface-3)', borderRadius: 999, fontSize: '0.74rem', color: 'var(--su-brand-mint)', fontWeight: 600 }}>
                    {selectedProduct.category}
                  </span>
                </div>

                {/* Macro Highlights Strip */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 20 }}>
                  <div style={{ background: 'var(--su-surface-1)', padding: '10px', borderRadius: 8, textAlign: 'center' }}>
                    <small style={{ color: 'var(--su-text-muted)', fontSize: '0.68rem', display: 'block' }}>CALORIES</small>
                    <strong style={{ fontSize: '0.9rem' }}>{selectedProduct.calories}</strong>
                  </div>
                  <div style={{ background: 'var(--su-surface-1)', padding: '10px', borderRadius: 8, textAlign: 'center' }}>
                    <small style={{ color: 'var(--su-text-muted)', fontSize: '0.68rem', display: 'block' }}>SUGAR</small>
                    <strong style={{ fontSize: '0.9rem' }}>{selectedProduct.sugars}</strong>
                  </div>
                  <div style={{ background: 'var(--su-surface-1)', padding: '10px', borderRadius: 8, textAlign: 'center' }}>
                    <small style={{ color: 'var(--su-text-muted)', fontSize: '0.68rem', display: 'block' }}>PROTEIN</small>
                    <strong style={{ fontSize: '0.9rem' }}>{selectedProduct.protein}</strong>
                  </div>
                  <div style={{ background: 'var(--su-surface-1)', padding: '10px', borderRadius: 8, textAlign: 'center' }}>
                    <small style={{ color: 'var(--su-text-muted)', fontSize: '0.68rem', display: 'block' }}>SODIUM</small>
                    <strong style={{ fontSize: '0.9rem' }}>{selectedProduct.sodium}</strong>
                  </div>
                </div>

                {/* Negatives / Warnings */}
                <h5 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.85rem', color: 'var(--su-accent-rose)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 10px' }}>
                  Risk Factors & Negatives ({selectedProduct.negatives.length})
                </h5>
                <div className="sandbox-rows-list">
                  {selectedProduct.negatives.map((neg, idx) => (
                    <div className="sandbox-row-item" key={idx}>
                      <div className="label-group">
                        <AlertTriangle size={15} style={{ color: 'var(--su-accent-rose)' }} />
                        <strong>{neg.name}</strong>
                        <span style={{ color: 'var(--su-text-muted)', fontSize: '0.78rem' }}>{neg.desc}</span>
                      </div>
                      <span className={`tone-tag tone-${neg.tone}`}>{neg.val}</span>
                    </div>
                  ))}
                  {selectedProduct.negatives.length === 0 && (
                    <div style={{ fontSize: '0.82rem', color: 'var(--su-brand-mint)', padding: '8px 12px', background: 'rgba(16,185,129,0.08)', borderRadius: 8 }}>
                      No critical nutritional negative factors detected.
                    </div>
                  )}
                </div>

                {/* Additive Analysis */}
                <h5 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.85rem', color: 'var(--su-brand-light)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '18px 0 10px' }}>
                  Additive & Chemical Safety Audit ({selectedProduct.additives.length})
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                  {selectedProduct.additives.map((add, idx) => (
                    <div key={idx} style={{ background: 'var(--su-surface-1)', padding: '10px 14px', borderRadius: 8, border: '1px solid var(--su-border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <strong style={{ fontSize: '0.84rem', color: '#f1f7f5' }}>{add.code} — {add.name}</strong>
                        <small style={{ display: 'block', color: 'var(--su-text-muted)', fontSize: '0.74rem' }}>{add.purpose} · {add.risk}</small>
                      </div>
                    </div>
                  ))}
                  {selectedProduct.additives.length === 0 && (
                    <div style={{ fontSize: '0.82rem', color: 'var(--su-brand-mint)', padding: '8px 12px', background: 'rgba(16,185,129,0.08)', borderRadius: 8, display: 'flex', gap: 8, alignItems: 'center' }}>
                      <CheckCircle2 size={16} />
                      <span>Zero synthetic additive codes or chemical preservatives found in formulation.</span>
                    </div>
                  )}
                </div>

                {/* Clean Label Verdict Note */}
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px 16px', borderRadius: 10, borderLeft: '3px solid var(--su-brand-primary)', fontSize: '0.8rem', color: 'var(--su-text-body)' }}>
                  <strong style={{ color: 'var(--su-text-title)', display: 'block', marginBottom: 2 }}>Clean Label Intelligence:</strong>
                  {selectedProduct.cleanLabelVerdict}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
