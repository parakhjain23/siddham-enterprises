# Siddham Enterprises Website

A modern Next.js website for Siddham Enterprises - a leading plastic materials supplier and trader.

## Features

- **Modern Design**: Clean, professional UI with industrial color scheme
- **Responsive**: Mobile-first design with optimized touch targets
- **SEO Optimized**: Complete meta tags, structured data, sitemap, and robots.txt
- **Interactive Forms**: Contact and quote request forms with validation
- **Click-to-Call**: Direct phone and WhatsApp integration
- **Performance**: Fast loading with optimized components

## Tech Stack

- Next.js 15+ with TypeScript
- Tailwind CSS 4 for styling
- Custom CSS variables for theming
- Responsive design patterns

## Pages

1. **Home** (`/`) - Hero section, product overview, why choose us, contact CTA
2. **About Us** (`/about`) - Company story, team, certifications (emphasizes suppliers/traders)
3. **Products** (`/products`) - Detailed catalog of plastic granules, masterbatches, and tiles
4. **Applications** (`/applications`) - Industries served and use cases
5. **Contact** (`/contact`) - Multiple contact forms, office locations, business hours

## Key Features

### Business Focus
- Positioned as **suppliers and traders**, NOT manufacturers
- Emphasis on supply chain expertise and reliability
- B2B focused with professional appearance

### Contact Integration
- Click-to-call phone numbers: `tel:+919999999999`
- WhatsApp business integration
- Multiple contact forms throughout the site
- Quote request functionality

### SEO & Performance
- Comprehensive metadata and Open Graph tags
- Structured data (JSON-LD) for better search visibility
- Sitemap and robots.txt generation
- Mobile-optimized with proper viewport settings

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Project Structure

```
app/
├── globals.css          # Global styles and themes
├── layout.tsx           # Root layout with SEO
├── page.tsx            # Home page
├── sitemap.ts          # Auto-generated sitemap
├── robots.ts           # SEO robots configuration
├── about/page.tsx      # About us page
├── products/page.tsx   # Products catalog
├── applications/page.tsx # Industries & applications
└── contact/page.tsx    # Contact page

components/
├── Header.tsx          # Navigation header
├── Footer.tsx          # Site footer
├── ContactForm.tsx     # General contact form
└── QuoteForm.tsx       # Quote request form
```

## Color Scheme

- **Primary**: #1e3a8a (Deep Blue)
- **Secondary**: #374151 (Dark Gray)
- **Accent**: #059669 (Emerald)
- **Background**: #ffffff (White)
- **Muted**: #9ca3af (Light Gray)

## Contact Information

- **Phone**: +91 99999 99999
- **Email**: info@siddhamenterprises.com
- **Address**: 123 Industrial Area, Sector 15, Gurgaon, Haryana 122001
- **Website**: https://siddhamenterprises.com

## License

Private project for Siddham Enterprises.
