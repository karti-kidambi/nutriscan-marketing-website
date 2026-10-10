import React, { useState } from 'react';
import { Camera, ListOrdered, Utensils, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function VisionShowcase({ onLaunchApp, onOpenScanner }) {
  const [activeTab, setActiveTab] = useState('menu');

  return (
    <section className="startup-vision-showcase" id="vision">
      <div className="startup-container">
        <div className="section-head-center">
          <div className="startup-badge">
            <Sparkles size={14} />
            <span>MULTIMODAL COMPUTER VISION</span>
          </div>
          <h2>Beyond packaged barcodes. Full meal intelligence.</h2>
          <p>
            Most nutrition apps stop at packaged groceries. NutriScan extends computer vision to dining out and home cooked plates.
          </p>
        </div>

        <div className="vision-showcase-box">
          {/* Tabs Bar */}
          <div className="vision-tabs-bar">
            <button
              type="button"
              className={`vision-tab-btn ${activeTab === 'menu' ? 'active' : ''}`}
              onClick={() => setActiveTab('menu')}
            >
              <ListOrdered size={18} />
              <span>Restaurant Menu Ranker</span>
            </button>
            <button
              type="button"
              className={`vision-tab-btn ${activeTab === 'plate' ? 'active' : ''}`}
              onClick={() => setActiveTab('plate')}
            >
              <Utensils size={18} />
              <span>Plate & Thali Vision AI</span>
            </button>
          </div>

          {/* Content Grid */}
          <div className="vision-content-grid">
            <div className="vision-image-panel">
              <img src="/meal-visual.jpg" alt="AI Meal Vision and Nutrition AR Overlay" />
            </div>

            <div className="vision-copy-panel">
              {activeTab === 'menu' ? (
                <>
                  <span style={{ fontSize: '0.72rem', color: 'var(--su-brand-mint)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 800, display: 'block', marginBottom: 8 }}>
                    DINING OUT MADE TRANSPARENT
                  </span>
                  <h3>Order with confidence. No menu guesswork.</h3>
                  <p>
                    Sitting in a bistro, cafe, or restaurant? Snap a photo of the printed menu. NutriScan transcribes the visible items, filters out deceptive marketing terms, and ranks dishes based on your metabolic goals.
                  </p>
                  <div className="vision-features-list">
                    <div className="vision-feature-bullet">
                      <CheckCircle2 size={18} />
                      <span><strong>Personal Goal Calibration:</strong> Ranks dishes specifically for Fat Loss, Clean Bulking, or Diabetic glycemic safety.</span>
                    </div>
                    <div className="vision-feature-bullet">
                      <CheckCircle2 size={18} />
                      <span><strong>Hidden Oil & Sodium Cautions:</strong> Flags deep-fried preparations, heavy cream bases, and sodium traps.</span>
                    </div>
                    <div className="vision-feature-bullet">
                      <CheckCircle2 size={18} />
                      <span><strong>Honest Estimates:</strong> Explicitly marks planning estimates so you know what was printed versus estimated.</span>
                    </div>
                  </div>
                  <a 
                    href="https://nutriscan.kartikidambi.space" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-su-primary"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Launch Menu Ranker in App ↗</span>
                    <ArrowRight size={16} />
                  </a>
                </>
              ) : (
                <>
                  <span style={{ fontSize: '0.72rem', color: 'var(--su-accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 800, display: 'block', marginBottom: 8 }}>
                    HOME & RESTAURANT PLATES
                  </span>
                  <h3>See your meal with nutritional clarity.</h3>
                  <p>
                    Photograph your home-cooked plate or Indian thali. NutriScan segments individual dishes, estimates reference macros using Indian Nutrient Databank (ICMR-NIN) records, and lets you fine-tune portion sizes interactively.
                  </p>
                  <div className="vision-features-list">
                    <div className="vision-feature-bullet">
                      <CheckCircle2 size={18} />
                      <span><strong>Multi-Dish Segmentation:</strong> Separates curries, breads, proteins, yogurts, and vegetables on a single plate.</span>
                    </div>
                    <div className="vision-feature-bullet">
                      <CheckCircle2 size={18} />
                      <span><strong>ICMR-NIN Scientific Databanks:</strong> Indian food recipes calibrated with Indian Council of Medical Research standards.</span>
                    </div>
                    <div className="vision-feature-bullet">
                      <CheckCircle2 size={18} />
                      <span><strong>Interactive Portion Adjuster:</strong> Tap to adjust serving counts from 0.5x to 3x with instant macro recalculation.</span>
                    </div>
                  </div>
                  <a 
                    href="https://nutriscan.kartikidambi.space" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-su-primary"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Launch Meal Vision in App ↗</span>
                    <ArrowRight size={16} />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
