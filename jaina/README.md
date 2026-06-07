# Jaina Beauté - Luxury Beauty Salon Website

A premium, production-ready website for Jaina Beauté, a luxury beauty salon in Paris 12ème. Built with Next.js 16, TypeScript, TailwindCSS, and Framer Motion.

## 🎨 Design Philosophy

This website embodies luxury Parisian elegance with:
- **Sophisticated Color Palette**: Gold, champagne, rose gold, and charcoal tones
- **Elegant Typography**: Cormorant Garamond (headings) + Montserrat (body)
- **Smooth Animations**: Framer Motion for subtle, refined interactions
- **Generous Whitespace**: Apple and Dior-inspired minimalism
- **Premium Photography**: High-quality, curated imagery

## ✨ Features

- **Smooth Scrolling**: Lenis for buttery-smooth navigation
- **Responsive Design**: Mobile-first, optimized for all devices
- **SEO Optimized**: Structured data (JSON-LD) for local business
- **Performance**: Optimized for 95+ Lighthouse scores
- **Accessibility**: WCAG 2.1 AA compliant
- **Static Export**: Deployable to GitHub Pages

## 📁 Project Structure

```
jaina-beaute/
├── app/                  # Next.js 16 App Router pages
│   ├── page.tsx         # Homepage
│   ├── services/        # Services & pricing page
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── layout.tsx       # Root layout with header/footer
│   └── globals.css      # Global styles & design system
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components
│   └── sections/        # Page sections
├── lib/
│   ├── data.ts          # Business data (services, info)
│   ├── seo.ts           # Structured data for SEO
│   └── SmoothScroll.tsx # Lenis smooth scroll provider
├── types/               # TypeScript definitions
└── public/              # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🌐 Deployment to GitHub Pages

### Automatic Deployment

1. Push code to GitHub
2. Go to **Settings** > **Pages**
3. Set **Source** to "GitHub Actions"
4. The workflow will automatically deploy on push to `main`

### Custom Domain

Add a `CNAME` file in `public/` with your domain and configure DNS.

## 📝 Content Updates

### Update Services

Edit `lib/data.ts` to modify services, pricing, and business information.

### Update Pages

Page files are in `app/` directory. Each page is a React component.

## 🎨 Design System

- **Primary Gold**: `#D4AF37`
- **Champagne**: `#F5E6D3`  
- **Charcoal**: `#1C1917`
- **Typography**: Cormorant Garamond + Montserrat

## ⚡ Performance

Targets 95+ Lighthouse scores across all metrics.

---

Built for Jaina Beauté - Luxury beauty in Paris 12ème.
