# InfinityBox Website

A premium, modern, elegant website for InfinityBox—a pan-India operator delivering integrated ecosystem across sustainable hygiene solutions, eco-friendly packaging, commercial kitchens, and workforce enablement.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion, GSAP
- **3D (Optional):** React Three Fiber
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd infinitybox-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
infinitybox-website/
├── app/                    # Next.js App Router pages
│   ├── about-us/          # About Us pages
│   ├── contact/           # Contact page
│   ├── insights/          # Blog, Case Studies, Industry Updates
│   ├── what-we-do/        # Solution pages
│   ├── who-we-serve/      # Industry pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # SEO robots.txt
├── components/
│   ├── forms/             # Form components
│   ├── layout/            # Header, Footer
│   ├── sections/          # Reusable section components
│   └── ui/                # UI components (Button, Card, etc.)
├── public/                # Static assets
└── package.json
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Contact Form API (when integrated)
CONTACT_FORM_API_URL=
CONTACT_FORM_API_KEY=

# Email Service (when integrated)
EMAIL_SERVICE_API_KEY=

# Analytics (optional)
NEXT_PUBLIC_GA_ID=
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure settings
4. Add environment variables in Vercel dashboard
5. Deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

Build command: `npm run build`
Start command: `npm start`

## Content Management

### Current Setup

Content is currently embedded in page components. To update content:

1. **Page Content:** Edit files in `app/[page]/page.tsx`
2. **Navigation:** Update `components/layout/Header.tsx` and `components/layout/Footer.tsx`
3. **Metadata:** Update metadata exports in each page file

### Future CMS Integration

To integrate a CMS (Sanity, Contentful, etc.):

1. Install CMS SDK
2. Create content models
3. Replace static content with CMS queries
4. Add ISR (Incremental Static Regeneration) for performance

## SEO Configuration

- **Metadata:** Configured in each page's metadata export
- **Sitemap:** Auto-generated at `/sitemap.xml`
- **Robots:** Configured at `/robots.txt`
- **Schema:** JSON-LD schema in root layout

## Performance Optimization

- **Images:** Use Next.js Image component with WebP/AVIF
- **Fonts:** Variable fonts with `next/font/google`
- **Code Splitting:** Automatic with Next.js App Router
- **Lazy Loading:** Implemented for non-critical components

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Reduced motion support
- WCAG AA compliance target

## Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)

## Development Notes

### Placeholders

The following contain placeholder content that should be replaced:

- **Leadership:** `app/about-us/leadership/page.tsx` - Replace with actual team members
- **Metrics:** `app/page.tsx` - Update with real numbers
- **Case Studies:** `app/insights/case-studies/page.tsx` - Add real case studies
- **Blog Posts:** `app/insights/blogs/page.tsx` - Add real blog content

### Contact Form

The contact form currently logs submissions to the console. To enable email sending:

1. Choose an email service (SendGrid, Resend, AWS SES, etc.)
2. Update `app/api/contact/route.ts` with your service integration
3. Add API keys to environment variables

### Performance Targets

- Lighthouse Performance: ≥ 90
- Lighthouse Accessibility: ≥ 95
- Lighthouse Best Practices: ≥ 95
- Lighthouse SEO: ≥ 95
- LCP: < 2.5s
- CLS: < 0.1

## License

Proprietary - InfinityBox

## Support

For questions or issues, contact the development team.
