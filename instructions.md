# Project Context: FoodSci Authority Hub

## 1. Project Overview
**FoodSci** is an educational website (Authority Hub) focusing on food science, debunking myths, and nutritional facts.
- **Goal:** To establish the client as a Subject Matter Expert (SME) in Food Science.
- **Target Audience:** General public interested in health, nutrition, and scientific truth behind food trends.
- **Core Value:** "Bridging the gap between Academic Journals and Modern Lifestyle Magazines."

## 2. Design Philosophy: "The Modern Lab"
The visual language must communicate **Trust, Hygiene, and Intellect**.
- **Vibe:** Clean, Spacious, Scientific yet Accessible (Think *Vox* meets a high-end medical journal).
- **Color Palette:**
  - **Primary:** Deep Emerald Green (Trust/Nature) - e.g., `emerald-800`.
  - **Background:** Off-White / Paper (Reading comfort) - e.g., `slate-50`.
  - **Text:** Slate-900 (Not pure black) for softness.
  - **Accent:** Lime or Burnt Orange (Subtle highlights).
- **Typography:**
  - **Headings:** Serif (e.g., *Playfair Display* or *Merriweather*) -> Represents Authority & Tradition.
  - **Body:** Sans-Serif (e.g., *Inter* or *Geist Sans*) -> Represents Modernity & Readability.
- **Layout Style:** Bento Grids, Asymmetrical layouts, generous whitespace.

## 3. Tech Stack & Tools
- **Framework:** Next.js 15 (App Router).
- **Language:** TypeScript (Strict Mode).
- **Styling:** Tailwind CSS.
- **UI Components:** Shadcn UI (Radix Primitives).
- **Icons:** Lucide React.
- **Animation:** Framer Motion (Subtle fade-ins, hover states).
- **CMS (Backend):** Sanity.io (Headless CMS).
- **Data Fetching:** GROQ (Sanity Query Language).
- **Deployment:** Vercel.

## 4. Functional Requirements
### A. Public Pages (Frontend)
1.  **Home:** Hero section, Bento Grid for "Myth Busting", Latest Articles, Newsletter CTA.
2.  **The Journal (Blog):** Grid of articles with filters (Category).
3.  **Article Detail:** Clean reading interface, "Scientific Verdict" box at the end, Related Articles.
4.  **Food Glossary:** A-Z dictionary of food terms (SEO focus).
5.  **The Scientist (About):** Profile, Credentials, Philosophy.

### B. Admin Dashboard (Backend)
- Use **Embedded Sanity Studio** at route `/studio`.
- No custom auth required for the frontend.
- Admin access is handled via Sanity's built-in invite system.

## 5. Data Schema (Sanity)
The CMS must support these document types:
1.  **Post:**
    - `title` (string)
    - `slug` (slug)
    - `mainImage` (image + hotspot)
    - `categories` (array of reference)
    - `excerpt` (text)
    - `body` (Portable Text / Block Content)
    - `scientificVerdict` (string/text) - Special field for the conclusion.
2.  **Category:** `title`, `description`.
3.  **Glossary Term:** `term` (string), `definition` (text), `slug`.
4.  **Author:** `name`, `image`, `bio`.

## 6. Coding Constraints & Best Practices
- **Mobile First:** All designs must be responsive.
- **Server Components:** Use React Server Components (RSC) by default. Only use `'use client'` for interactive bits (buttons, animations).
- **Type Safety:** Always define Interfaces/Types for Sanity data responses.
- **Image Optimization:** Use `next/image` with `urlFor` helper from Sanity.
- **Clean Code:** Keep components small and modular.
- **Routing:** Use Next.js App Router conventions (`page.tsx`, `layout.tsx`, `loading.tsx`).

## 7. Step-by-Step Implementation Guide for AI
1.  **Setup:** Initialize Next.js 15 + Sanity (`npm create sanity@latest`).
2.  **UI Base:** Install Shadcn UI & essential components (`card`, `button`, `badge`, `separator`).
3.  **Schema:** Define Sanity schemas (`post`, `category`, `glossary`).
4.  **Data Fetching:** Create `sanity/lib/queries.ts` for GROQ queries.
5.  **Components:** Build reusable UI cards (`ArticleCard`, `GlossaryItem`).
6.  **Pages:** Assemble the pages using the components.