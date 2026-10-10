# NutriScan — Official Startup Marketing Website

A clean, high-performance marketing website designed for the **Claude for Startups (Anthropic)** review and deployed at **`nutriscanweb.kartikidambi.space`**.

---

## Architecture & Overview

- **Framework**: Vite + React 19 (Zero heavy server dependencies)
- **Design System**: Linear/Anthropic dark aesthetic with emerald and amber micro-glows
- **Production App**: All launch CTAs link directly to `https://nutriscan.kartikidambi.space`
- **Founder**: Kartikeyan Kidambi (`https://kartikidambi.space`)

---

## Deploy to Vercel

### Option 1: Vercel CLI (Fastest)

```bash
cd nutriscan-website
npx vercel
```

### Option 2: Push to GitHub & Import to Vercel

1. Create a repository on GitHub (e.g. `nutriscan-website`)
2. Push this folder to that repository
3. Import into Vercel:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Under **Project Settings → Domains**, add:
   `nutriscanweb.kartikidambi.space`
