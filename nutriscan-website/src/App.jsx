import React from 'react';
import StartupLanding from './components/startup/StartupLanding';

const LIVE_APP_BASE = 'https://nutriscan.kartikidambi.space';

export default function App() {
  const handleLaunchApp = (tab) => {
    const url = tab ? `${LIVE_APP_BASE}#${tab}` : LIVE_APP_BASE;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenScanner = (mode) => {
    const url = mode && mode !== 'barcode' ? `${LIVE_APP_BASE}#${mode}` : LIVE_APP_BASE;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleScanBarcode = (barcode) => {
    const url = barcode ? `${LIVE_APP_BASE}?barcode=${encodeURIComponent(barcode)}` : LIVE_APP_BASE;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <StartupLanding
      onLaunchApp={handleLaunchApp}
      onOpenScanner={handleOpenScanner}
      onScanBarcode={handleScanBarcode}
    />
  );
}
