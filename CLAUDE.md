# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**codewithgem** is a personal portfolio website built with React, TypeScript, and Vite. It showcases projects, work experience, blog posts, events, and a tech toolkit. The site features advanced interactive components including Three.js 3D scenes, real-time forms via EmailJS, and comprehensive SEO metadata.

## Common Commands

```bash
# Development
npm run dev          # Start Vite dev server (HMR enabled)
npm run build        # Compile TypeScript and build for production
npm run lint         # Run ESLint on all TypeScript/TSX files
npm run preview      # Preview production build locally

# Single file linting
npm run lint -- src/path/to/file.tsx
```

## Project Structure

### Key Directories

- **`src/pages/`** — Top-level route components (Home, About, Work, Projects, etc.). Each page is lazy-loaded via React.lazy() in App.tsx for code splitting.
- **`src/components/`** — Reusable UI and feature components organized by category:
  - `layout/` — RootLayout, MainLayout, PageContainer (page structure)
  - `sections/` — Hero, Experience, Projects, Contact, About sections (page content blocks)
  - `ui/` — Navbar, Footer, MusicToggle, Loader, CertificateLightbox (reusable UI primitives)
  - `three/` — HeroScene, StorytellingScene (Three.js 3D components)
  - `seo/` — Head, SEOHead, StructuredData, ScrollToTop (SEO and meta management)
  - `list/` — ProjectItems, EventCard, AboutMeInfo (list item renderers)
- **`src/data/`** — Static data sources (projects, experience, events, blog posts, toolkit, SEO configs)
- **`src/hooks/`** — Custom React hooks (useReducedMotion, useScrollProgress, useMediaQuery, useTypewriter, useBackgroundMusic)
- **`src/utils/`** — Utility functions (toolkit filtering, general helpers)
- **`src/config/`** — Configuration modules (EmailJS setup)
- **`src/types/`** — Core TypeScript interfaces (Project, WorkExperience, Event, BlogPost, LabExperiment, etc.)

### Build Configuration

- **Vite with @ alias** — `@/` maps to `src/` for clean imports
- **Path-based code splitting** — Three.js and react-three packages split into separate chunks for faster initial load
- **Tailwind CSS v4** — Via Vite integration; CSS in `src/styles/index.css`
- **TypeScript strict mode** — noUnusedLocals, noUnusedParameters, noFallthroughCasesInSwitch, noUncheckedIndexedAccess all enforced
- **Deployed on GitHub Pages** — homepage in package.json points to `https://gemrey13.github.io/gemrey13.github.io`

## Architecture & Patterns

### Routing

App.tsx defines all routes using React Router v7. Pages are lazy-loaded with Suspense + Loader fallback:

```tsx
const Home = lazy(() => import("./pages/Home"));
<Route
  index
  element={
    <Suspense fallback={<Loader />}>
      <Home />
    </Suspense>
  }
/>
```

Dynamic routes use URL params (e.g., `projects/:slug`, `blog/:slug`) resolved in pages like ProjectDetail.tsx and BlogPost.tsx.

### Data Source Pattern

Static data lives in `src/data/*.ts` files and is exported as arrays/objects typed with interfaces from `src/types/index.ts`. Components import and consume this data directly. Example:

```tsx
import { projects } from "@/data/projects";
import type { Project } from "@/types";

// Use projects array directly
projects.map((p) => <ProjectCard key={p.id} project={p} />);
```

### SEO & Meta Management

- **HelmetAsync** wraps the app in `src/main.tsx` for dynamic meta tag management
- **SEOHead.tsx** renders Helmet tags (title, description, og:image, etc.) based on a SEOConfig object
- **StructuredData.tsx** generates JSON-LD for schema.org structured data (Organization, Person, Article, etc.)
- All pages export SEO config via `SEOHead` to set dynamic metadata per route

### Three.js Integration

- **HeroScene.tsx** and **StorytellingScene.tsx** use @react-three/fiber and @react-three/drei
- Modules are split into a dedicated chunk (`three`, `react-three`) in vite.config.ts to avoid blocking initial paint
- Scenes are conditionally rendered based on scroll position or media queries (useMediaQuery hook)

### Animations & Motion

- **Anime.js** for timeline-based, choreographed animations
- **Framer Motion** (via the motion package) for component-level transitions
- **useReducedMotion hook** respects prefers-reduced-motion media query for accessibility

### Forms

**ContactForm.tsx** uses EmailJS to send messages directly from the browser:

```tsx
import emailjs from "@emailjs/browser";

// Configured in src/config/emailjs.ts
// Service ID, Template ID, and Public Key are environment-dependent
emailjs.send(serviceId, templateId, { name, email, message });
```

## Type System

Core types in `src/types/index.ts`:

- **Project** — id, slug, title, tagline, description, technologies, links (live/github), featured flag, presentationType (default | phone-mockup), and optional caseStudy (problem, approach, architecture, challenges, result)
- **WorkExperience** — role, company, period, startDate, endDate, current, description, responsibilities, technologies, highlights
- **Event** — title, date, location, type (conference | meetup | hackathon | workshop | summit | assembly | competition | training | other), description, participation, photo, links, certificates
- **BlogPost** — slug, title, excerpt, date, readTime, tags, content, published
- **LabExperiment** — title, description, date, technologies, link, image, published
- **ToolkitItem** — name, category (frontend | backend | database | cloud | desktop | mobile | tools | os), icon
- **SEOConfig** — title, description, canonical, ogImage, ogType, noIndex, keywords, publishedTime, modifiedTime, articleAuthor, articleSection, articleTags

## Development Practices

### Imports

Use the `@/` alias for all internal imports:

```tsx
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { Navbar } from "@/components/layout/Navbar";
```

### Component Structure

- Prefer functional components with hooks
- Export named components when possible (React Fast Refresh works better)
- Use TypeScript interfaces for props; avoid prop spreading unless necessary
- Co-locate styles using Tailwind utility classes

### Media Queries & Responsive Design

Use the **useMediaQuery** hook for conditional rendering based on breakpoints:

```tsx
const isMobile = useMediaQuery("(max-width: 768px)");
return isMobile ? <MobileView /> : <DesktopView />;
```

Alternatively, use Tailwind responsive modifiers (e.g., `hidden md:block`).

### Performance Considerations

1. **Code splitting** — Pages are lazy-loaded; Three.js and react-three are split into separate chunks
2. **Route-based chunking** — Use dynamic imports only for route components; avoid splitting within components unless they are expensive
3. **Image optimization** — Import images and let Vite handle asset bundling; use React's keys to avoid unnecessary re-renders
4. **Hook dependencies** — Always include dependencies in useEffect, useCallback, useMemo to prevent stale closures

## Linting & Type Checking

**eslint.config.js** enforces:

- ESLint recommended rules + TypeScript ESLint recommended
- React Hooks rules (deps-exhaustive, rules-of-hooks)
- React Refresh rules (only-export-components with allowConstantExport)

**TypeScript strict mode** enforces:

- No implicit any
- No unused locals or parameters
- No unchecked indexed access
- Strict null checks

Run `npm run lint` before committing. Fix violations with: `npm run lint -- --fix` (or per-file: `npm run lint -- src/file.tsx`).

## Notable Features & Quirks

- **Phone Mockup Component** (PhoneMockup.tsx) — renders project previews in a device frame
- **Certificate Lightbox** (CertificateLightbox.tsx) — modal for viewing certification images
- **Music Toggle** (MusicToggle.tsx) — background music with browser persistence
- **Typewriter Hook** (useTypewriter.ts) — text animation effect for hero sections
- **Scroll Progress Hook** (useScrollProgress.ts) — tracks scroll position for page progress indicators
- **Toolkit Grid** (ToolkitGrid.tsx) — filterable grid of technologies organized by category, integrates toolkit data with projects

## Deployment

The site is deployed on GitHub Pages via `gemrey13.github.io/gemrey13.github.io`. The `homepage` field in package.json is set to this URL. Build artifacts go to `dist/` and are deployed automatically (or via Git Pages settings). Vite handles the subpath correctly via the homepage configuration.

## Adding New Content

### New Project

1. Add entry to `src/data/projects.ts` with Project interface
2. Optionally add case study details (problem, approach, architecture, challenges, result)
3. Link will auto-generate in ProjectsSection.tsx and be routable via `/projects/:slug`

### New Blog Post

1. Add entry to `src/data/blog.ts` with BlogPost interface (content field can hold markdown)
2. Add SEO config to `src/data/seo.ts` for that blog route
3. BlogPost.tsx will render the entry via `/blog/:slug`

### New Work Experience

1. Add entry to `src/data/experience.ts`
2. ExperienceSection.tsx and ExperienceTimeline.tsx automatically include it

### New Event

1. Add entry to `src/data/events.ts`
2. EventsGallery.tsx and EventCard.tsx automatically display it with type filtering

## Environment & Dependencies

- **Node** — v18+ recommended (check .nvmrc if present)
- **React** — 18.3.1 with React Router v7
- **Three.js** — 0.185.1 with @react-three/fiber & @react-three/drei
- **Tailwind CSS** — v4 with Vite integration
- **EmailJS** — for contact form submissions
- **Anime.js** — timeline animations
- **Framer Motion (motion)** — component transitions
- **react-helmet-async** — SEO meta tag management

Install dependencies with `npm install`.
