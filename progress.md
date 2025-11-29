# FoodSci Authority Hub - Project Progress

> Last Updated: November 27, 2025

## Project Overview
FoodSci is an educational website (Authority Hub) focusing on food science, debunking myths, and nutritional facts. The goal is to establish the client (I Kadek Adi Indrawan) as a Subject Matter Expert (SME) in Food Science.

---

## ✅ Completed Tasks

### 1. Project Setup & Configuration
- [x] Initialized Next.js 16 with TypeScript and Tailwind CSS v4
- [x] Configured App Router with `src` directory structure
- [x] Set up ESLint for code quality
- [x] Created `.env.local.example` for environment variables

### 2. UI Foundation
- [x] Installed and configured **Shadcn UI** with components:
  - `button` - Primary actions
  - `card` - Content containers
  - `badge` - Category labels
  - `separator` - Visual dividers
  - `input` - Form inputs
- [x] Installed **Lucide React** for icons
- [x] Installed **Framer Motion** for animations

### 3. Design System ("The Modern Lab")
- [x] Configured Google Fonts:
  - **Inter** (sans-serif) - Body text via `--font-inter`
  - **Playfair Display** (serif) - Headings via `--font-playfair`
- [x] Set up color palette in `globals.css`:
  - Primary: Deep Emerald Green (emerald-800)
  - Background: Off-White/Paper (slate-50)
  - Text: Slate-900 (soft, not pure black)
  - Accent: Vibrant Lime
- [x] Global typography rules:
  - Body uses `font-sans` (Inter)
  - All headings (`h1-h6`) use `font-serif` (Playfair Display)

### 4. Sanity.io CMS Integration
- [x] Installed Sanity packages (`sanity`, `next-sanity`, `@sanity/image-url`, `@sanity/vision`)
- [x] Created Sanity configuration (`sanity.config.ts`)
- [x] Set up environment variables structure
- [x] Created Sanity client (`src/sanity/lib/client.ts`)
- [x] Created image URL builder (`src/sanity/lib/image.ts`)
- [x] Created GROQ queries (`src/sanity/lib/queries.ts`)
- [x] Defined schemas:
  - `post` - Blog articles with scientificVerdict field
  - `category` - Article categories
  - `glossary` - Food science terms
  - `author` - Author profiles
- [x] Set up embedded Sanity Studio at `/studio` route

### 5. Layout Components
- [x] **Navbar** (`components/layout/Navbar.tsx`)
  - Logo with serif font
  - Navigation links (Home, The Journal, Glossary, About)
  - Subscribe button
  - Glassmorphism effect with sticky positioning
  - Mobile responsive hamburger menu
- [x] **Footer** (`components/layout/Footer.tsx`)
  - Logo with motto "Bridging Science and Lifestyle"
  - Navigation links
  - Social media icons (Twitter, Instagram, LinkedIn, YouTube)
  - Copyright with dynamic year

### 6. Homepage (`/`)
- [x] **HeroSection** (`components/home/HeroSection.tsx`)
  - Two-column layout (text + visual)
  - Big serif headline: "The Science Behind Your Food"
  - Subtext with description
  - Two CTAs: "Read Latest Insights" + "About FoodSci"
  - Abstract scientific illustration placeholder with floating icons
  - Framer Motion fade-in animations
- [x] **FeaturedGrid** (`components/home/FeaturedGrid.tsx`)
  - "Trending Myths" section
  - Bento grid layout (first card spans 2x2)
  - 4 dummy myth cards with status badges (Myth/Fact/Debunked)
  - Staggered fade-in animations

### 7. Journal Page (`/journal`)
- [x] **JournalControls** (`components/journal/JournalControls.tsx`)
  - Search bar with debounced input (300ms)
  - Category filter buttons (All, Myth Busting, Ingredients, Nutrition)
  - URL-based state management (`?q=`, `?category=`)
- [x] **ArticleCard** (`components/journal/ArticleCard.tsx`)
  - Image placeholder with gradient
  - Category badge + publish date
  - Title and excerpt with line clamping
  - Hover effects
- [x] **Pagination** (`components/journal/Pagination.tsx`)
  - Previous/Next buttons
  - "Page X of Y" display
  - Disabled states on boundaries
- [x] **NoResults** (`components/journal/NoResults.tsx`)
  - SearchX icon
  - Context-aware empty state messages
- [x] Server-side filtering and pagination
  - 25 dummy articles
  - `ITEMS_PER_PAGE = 10`
  - Filter by category and search query
  - Results count display

### 8. Article Detail Page (`/journal/[slug]`)
- [x] Centered reading column layout (`max-w-3xl`)
- [x] Article header with:
  - Back navigation link
  - Category badge
  - Large serif title
  - Excerpt
  - Author info with avatar placeholder
  - Publish date
- [x] Main image placeholder (21:9 aspect ratio)
- [x] Content area with `text-lg` and `leading-relaxed`
- [x] **ScientificVerdict** (`components/journal/ScientificVerdict.tsx`)
  - Three verdict types:
    - `true` - Green border, CheckCircle icon
    - `false` - Red border, XCircle icon
    - `complex` - Gray border, HelpCircle icon
  - "The Verdict" header with conclusion text
- [x] Related Articles section

### 9. Glossary Page (`/glossary`)
- [x] **GlossarySearch** (`components/glossary/GlossarySearch.tsx`)
  - Large search input with icon
  - Real-time filtering
- [x] **FeaturedTerm** (`components/glossary/FeaturedTerm.tsx`)
  - Card with gradient background
  - Sparkles icon + badge
  - Featured term display
- [x] **GlossaryList** (`components/glossary/GlossaryList.tsx`)
  - A-Z grouped terms
  - Term (bold) + Definition layout
  - Separators between items
  - "No results" message
  - 10 dummy food science terms

### 10. About Page (`/about`)
- [x] **AboutHero** (`components/about/AboutHero.tsx`)
  - Split layout: Portrait placeholder + Content
  - Name: "I Kadek Adi Indrawan"
  - Bio intro with editorial typography
  - Decorative offset border frame
- [x] **Credentials** (`components/about/Credentials.tsx`)
  - Dark emerald (`bg-primary`) background
  - 4 stats with icons:
    - 5+ Years in R&D
    - 100+ Myths Busted
    - B.Sc Food Technology
    - M.Sc Nutritional Science
  - Staggered animations
- [x] **Philosophy** (`components/about/Philosophy.tsx`)
  - Centered reading column
  - Blockquote: "Chemicals are not enemies..."
  - Editorial typography with italic serif + bold sans mix
- [x] **Services** (`components/about/Services.tsx`)
  - 3-card grid: Speaking, Consulting, Brand Partnership
  - CTA: "Got a burning question or a project? Let's brew some ideas."
  - Slide-up animations on scroll

### 11. TypeScript Types
- [x] Created `src/types/sanity.ts` with interfaces:
  - `Category`
  - `Author`
  - `Post`
  - `GlossaryTerm`

### 12. Git & Deployment
- [x] Initialized Git repository
- [x] Added remote: `https://github.com/wayandarma/fosci.git`
- [x] Initial commit with all progress
- [x] Pushed to GitHub

---

## 🔄 Pending / Next Steps

### High Priority
- [ ] Create Sanity project at https://www.sanity.io/manage
- [ ] Add Sanity credentials to `.env.local`
- [ ] Connect real data from Sanity CMS
- [ ] Replace dummy data with actual CMS content
- [ ] Add actual images (portraits, article images)

### Features to Add
- [ ] Newsletter subscription functionality
- [ ] Contact form on About page
- [ ] Social sharing buttons on articles
- [ ] Reading time estimation
- [ ] Table of contents for long articles
- [ ] Related articles logic (by category)
- [ ] SEO metadata for all pages
- [ ] Open Graph images

### Enhancements
- [ ] Loading states (`loading.tsx` files)
- [ ] Error boundaries
- [ ] 404 page design
- [ ] Dark mode toggle (foundation is ready)
- [ ] Mobile navigation improvements
- [ ] Image optimization with next/image + Sanity

### Deployment
- [ ] Deploy to Vercel
- [ ] Configure custom domain
- [ ] Set up Sanity webhook for ISR

---

## 📁 Project Structure

```
fosci/
├── src/
│   ├── app/
│   │   ├── (site)/                 # Public pages with Navbar/Footer
│   │   │   ├── page.tsx            # Homepage
│   │   │   ├── layout.tsx          # Site layout
│   │   │   ├── journal/
│   │   │   │   ├── page.tsx        # Journal listing
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx    # Article detail
│   │   │   ├── glossary/
│   │   │   │   └── page.tsx        # Glossary
│   │   │   └── about/
│   │   │       └── page.tsx        # About
│   │   ├── studio/                 # Sanity Studio (no Navbar/Footer)
│   │   │   └── [[...tool]]/
│   │   │       └── page.tsx
│   │   ├── layout.tsx              # Root layout (fonts)
│   │   └── globals.css             # Global styles + CSS variables
│   ├── components/
│   │   ├── ui/                     # Shadcn components
│   │   ├── layout/                 # Navbar, Footer
│   │   ├── home/                   # HeroSection, FeaturedGrid
│   │   ├── journal/                # ArticleCard, Pagination, etc.
│   │   ├── glossary/               # GlossarySearch, FeaturedTerm, etc.
│   │   └── about/                  # AboutHero, Credentials, etc.
│   ├── sanity/
│   │   ├── env.ts                  # Environment config
│   │   ├── lib/
│   │   │   ├── client.ts           # Sanity client
│   │   │   ├── image.ts            # URL builder
│   │   │   └── queries.ts          # GROQ queries
│   │   └── schemaTypes/            # Sanity schemas
│   ├── lib/
│   │   └── utils.ts                # Tailwind merge utilities
│   └── types/
│       └── sanity.ts               # TypeScript interfaces
├── sanity.config.ts                # Sanity configuration
├── components.json                 # Shadcn config
├── instructions.md                 # Project requirements
├── progress.md                     # This file
└── .env.local.example              # Environment template
```

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (Strict) |
| Styling | Tailwind CSS v4 |
| UI Components | Shadcn UI |
| Icons | Lucide React |
| Animation | Framer Motion |
| CMS | Sanity.io |
| Query Language | GROQ |
| Deployment | Vercel (planned) |

---

## 🎨 Design Tokens

### Colors
- Primary: `oklch(0.432 0.095 166.11)` - Deep Emerald
- Background: `oklch(0.984 0.003 247.86)` - Off-White
- Foreground: `oklch(0.129 0.042 264.70)` - Slate-900
- Accent: `oklch(0.768 0.194 118.47)` - Lime

### Typography
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

---

## 📝 Notes

- All pages use Server Components by default, with `'use client'` only for interactive elements
- URL-based state management for Journal filtering/pagination (SEO-friendly)
- Dummy data is in place for all pages - ready to swap with Sanity
- Responsive design implemented (mobile-first approach)
- Editorial typography style with italic serif + bold sans mix on About page
