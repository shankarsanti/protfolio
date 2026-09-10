# Portfolio Website

A clean, modern portfolio website built with Next.js 15, React 19, and Tailwind CSS.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── sections/          # Page sections (Hero, About, etc.)
│   ├── ui/                # Reusable UI components
│   └── providers/         # Context providers
├── lib/
│   ├── data.ts            # Portfolio data
│   ├── types.ts           # TypeScript types
│   ├── constants.ts       # App constants
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Customization

Edit `lib/data.ts` to update your portfolio information including:
- Personal info
- Work experience
- Education
- Skills/Tools
- Contact details

## SEO Features

This portfolio includes comprehensive SEO optimization:

### Implemented SEO Features

- **Sitemap**: Auto-generated XML sitemap at `/sitemap.xml`
- **Robots.txt**: Configured at `/robots.txt` for search engine crawlers
- **Meta Tags**: Comprehensive meta tags including title, description, and keywords
- **Open Graph**: Full Open Graph protocol support for social media sharing
- **Twitter Cards**: Twitter card metadata for better link previews
- **Structured Data**: JSON-LD schema markup for Person, WebSite, and ProfilePage
- **Canonical URLs**: Proper canonical URL configuration
- **PWA Manifest**: Web app manifest for progressive web app support
- **Responsive Images**: Optimized images with proper alt text
- **Semantic HTML**: Proper HTML5 semantic structure

### SEO Configuration

1. Update the base URL in:
   - `app/layout.tsx` (metadataBase)
   - `app/sitemap.ts` (baseUrl)
   - `app/robots.ts` (baseUrl)
   - `components/StructuredData.tsx` (url fields)

2. Add Google Search Console verification:
   - Get your verification code from Google Search Console
   - Update `verification.google` in `app/layout.tsx`

3. Submit your sitemap:
   - Google Search Console: `https://yourdomain.com/sitemap.xml`
   - Bing Webmaster Tools: `https://yourdomain.com/sitemap.xml`

### Keywords Included

The site is optimized for:
- Full Stack Developer
- React.js, Node.js, MongoDB, Django
- Web Development
- Portfolio
- Location-based keywords (Belagavi, Karnataka, India)
