import React, { useState } from 'react';
import StartupNavbar from './StartupNavbar';
import HeroSection from './HeroSection';
import TelemetryStrip from './TelemetryStrip';
import InteractiveSandbox from './InteractiveSandbox';
import ClaudeArchitecture from './ClaudeArchitecture';
import FeaturesBento from './FeaturesBento';
import AlgorithmExplainer from './AlgorithmExplainer';
import VisionShowcase from './VisionShowcase';
import FounderSection from './FounderSection';
import ComparisonSection from './ComparisonSection';
import DeveloperApiSection from './DeveloperApiSection';
import UseAppSection from './UseAppSection';
import TestimonialsSection from './TestimonialsSection';
import FaqSection from './FaqSection';
import CtaBanner from './CtaBanner';
import StartupFooter from './StartupFooter';
import LegalModal from './LegalModal';

export default function StartupLanding({
  onLaunchApp,
  onOpenScanner,
  onScanBarcode,
}) {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState('privacy');

  const handleOpenLegal = (tab = 'privacy') => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <div className="startup-wrapper animate-fade-in">
      <div className="startup-mesh-bg" />

      {/* 1. Fixed Startup Navbar */}
      <StartupNavbar 
        onLaunchApp={onLaunchApp} 
        onOpenScanner={onOpenScanner} 
      />

      {/* 2. Hero Section */}
      <HeroSection 
        onLaunchApp={onLaunchApp} 
        onOpenScanner={onOpenScanner} 
        onSelectPreset={(code) => {
          const el = document.getElementById('sandbox');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 3. Live Telemetry Strip */}
      <TelemetryStrip />

      {/* 4. Live Interactive Sandbox (Embedded Testing Engine) */}
      <InteractiveSandbox 
        onScanBarcode={onScanBarcode} 
        onOpenScanner={onOpenScanner} 
        onLaunchApp={onLaunchApp} 
      />

      {/* 5. Production Web App Launch Section */}
      <UseAppSection />

      {/* 6. Anthropic Claude AI Architecture */}
      <ClaudeArchitecture />

      {/* 7. Core Platform Capabilities (Bento Grid) */}
      <FeaturesBento 
        onLaunchApp={onLaunchApp} 
      />

      {/* 8. The Science & 100-Point Algorithm Explainer */}
      <AlgorithmExplainer />

      {/* 9. Multimodal Computer Vision (Menu & Plate AI) */}
      <VisionShowcase 
        onLaunchApp={onLaunchApp} 
        onOpenScanner={onOpenScanner} 
      />

      {/* 10. Founder & Company Profile */}
      <FounderSection />

      {/* 11. Comparison Matrix: NutriScan vs Legacy Calorie Trackers */}
      <ComparisonSection />

      {/* 12. Developer & Enterprise API Section */}
      <DeveloperApiSection />

      {/* 13. Testimonials & Clinician Endorsements */}
      <TestimonialsSection />

      {/* 14. Frequently Asked Questions */}
      <FaqSection />

      {/* 15. High-Converting Launch CTA Banner */}
      <CtaBanner 
        onLaunchApp={onLaunchApp} 
        onOpenScanner={onOpenScanner} 
      />

      {/* 16. Comprehensive Startup Footer */}
      <StartupFooter 
        onLaunchApp={onLaunchApp} 
        onOpenScanner={onOpenScanner}
        onOpenLegal={handleOpenLegal}
      />

      {/* 17. Legal & Compliance Modal (Privacy, Terms, Medical Disclaimer) */}
      <LegalModal
        key={`${legalModalOpen}-${legalModalTab}`}
        isOpen={legalModalOpen}
        initialTab={legalModalTab}
        onClose={() => setLegalModalOpen(false)}
      />
    </div>
  );
}
