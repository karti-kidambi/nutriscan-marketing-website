import React from 'react';
import { Star, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: 'Dr. Radhika Sen',
      role: 'Clinical Nutritionist & Metabolic Researcher',
      avatar: 'RS',
      text: '“The 49-point algorithmic cap on dangerous chemical additives is revolutionary. It completely eliminates the food industry’s favorite trick: adding synthetic fiber or vitamins to mask inflammatory palm oil and maltodextrin.”',
    },
    {
      name: 'Vikram Malhotra',
      role: 'Marathoner & Health Optimizer, Mumbai',
      avatar: 'VM',
      text: '“The camera restaurant menu ranker alone is worth its weight in gold. Snapping a complex multi-page menu and instantly getting dishes sorted by protein density and low-GI safety has transformed my dining out experience.”',
    },
    {
      name: 'Priya Ramaswamy',
      role: 'Mother of Two, Bengaluru',
      avatar: 'PR',
      text: '“I used to spend minutes in supermarket aisles squinting at microscopic ingredient fonts trying to decipher INS codes. NutriScan highlights hidden sugars and harmful emulsifiers in under two seconds. Essential for every family.”',
    },
  ];

  return (
    <section className="startup-testimonials">
      <div className="startup-container">
        <div className="section-head-center">
          <div className="startup-badge">
            <Sparkles size={14} />
            <span>COMMUNITY TRUST</span>
          </div>
          <h2>Trusted by clinicians, athletes & families.</h2>
          <p>
            Real feedback from thousands of health-conscious eaters reclaiming control over their nutritional choices.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <p className="testimonial-text">{rev.text}</p>

              <div className="testimonial-author">
                <div className="author-avatar">{rev.avatar}</div>
                <div className="author-info">
                  <strong>{rev.name}</strong>
                  <span>{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
