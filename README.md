# codewithgem — Personal Portfolio

A modern, interactive portfolio website showcasing projects, experience, blog posts, and technical toolkit. Built with React, TypeScript, Vite, and Tailwind CSS.

**Live:** https://gemrey13.github.io/gemrey13.github.io

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | TypeScript check + Vite production build |
| `npm run lint` | Run ESLint on TypeScript/TSX files |
| `npm run preview` | Serve production build locally |

## Architecture

### Directory Structure

- **`src/pages/`** — Route components (Home, About, Work, Projects, etc.), all lazy-loaded for code splitting
- **`src/components/`** — Reusable components organized by type:
  - `layout/` — Page structure (RootLayout, MainLayout)
  - `sections/` — Content blocks (Hero, Experience, Projects, Contact)
  - `ui/` — UI primitives (Navbar, Footer, Loader, MusicToggle)
  - `three/` — Three.js scenes (HeroScene, StorytellingScene)
  - `seo/` — SEO and meta management (SEOHead, StructuredData)
- **`src/data/`** — Static data sources (projects, experience, events, blog, toolkit)
- **`src/hooks/`** — Custom hooks (useReducedMotion, useScrollProgress, useMediaQuery, useTypewriter)
- **`src/types/`** — TypeScript interfaces (Project, WorkExperience, Event, BlogPost, LabExperiment)
- **`src/utils/`** — Utility functions (toolkit filtering, helpers)
- **`src/config/`** — Configuration modules (EmailJS setup)

### Key Decisions

#### Why Vite?
Fast dev server, instant HMR, optimized production builds. Uses the `@/` alias for clean imports (`@/components/Header` instead of `../../../components/Header`).

#### Code Splitting Strategy
- Pages are lazy-loaded with `React.lazy()` and `Suspense` to split routes into separate chunks
- Three.js and @react-three/* are bundled into dedicated chunks in `vite.config.ts` to avoid blocking initial paint
- Result: ~60KB main bundle, Three.js only loaded when needed

#### Data Model
All content (projects, experience, blog posts, events) lives as static data in `src/data/*.ts` files, typed with interfaces from `src/types/index.ts`. This keeps the site simple, version-controlled, and deployable as a static site.

#### SEO Architecture
Uses `react-helmet-async` for dynamic meta tag management and `StructuredData.tsx` to render JSON-LD schemas (Organization, Person, Article). Every route exports SEO config via `SEOHead`.

#### Animations
- **Anime.js** for choreographed, timeline-based animations
- **Framer Motion (motion package)** for component transitions
- **useReducedMotion hook** respects `prefers-reduced-motion` for accessibility

#### Contact Form
**ContactForm.tsx** uses EmailJS to send messages directly from the browser. Configured in `src/config/emailjs.ts` with environment-specific Service ID, Template ID, and Public Key.

## Tech Stack

- **React 18.3** — UI library with hooks
- **TypeScript 5.8** — Type safety
- **Vite 7** — Fast build tool with HMR
- **Tailwind CSS 4** — Utility-first styling via Vite integration
- **React Router 7** — Client-side routing
- **Three.js 0.185** + **@react-three/fiber** & **@react-three/drei** — 3D graphics
- **Anime.js 4** — Timeline animations
- **Framer Motion (motion 12)** — Component transitions
- **react-helmet-async 2** — SEO meta tag management
- **EmailJS 4** — Serverless contact form
- **Prettier + ESLint** — Code quality

## Development Notes

### Adding Content

#### New Project
1. Add entry to `src/data/projects.ts` with the `Project` interface
2. Optionally include case study (problem, approach, architecture, challenges, result)
3. Link auto-generates in `ProjectsSection.tsx` and is routable via `/projects/:slug`

#### New Blog Post
1. Add entry to `src/data/blog.ts`
2. Add SEO config to `src/data/seo.ts`
3. Routable via `/blog/:slug`

#### New Experience / Event
1. Add to `src/data/experience.ts` or `src/data/events.ts`
2. Components auto-render the new entry

### Type Safety
- **Strict mode enabled** — no implicit any, unused locals/parameters caught by TypeScript
- **No any types** — all interfaces defined in `src/types/index.ts`
- **Path imports** — use `@/` alias for all internal imports

### Performance
- **Lazy-loaded routes** prevent initial bundle bloat
- **Three.js chunks** split separately so 3D is only fetched when needed
- **Tailwind JIT** compiles only used utilities
- **Image optimization** — Vite handles asset bundling

### Accessibility
- **prefers-reduced-motion** respected via useReducedMotion hook
- **Semantic HTML** in components
- **ARIA labels** where needed (work in progress)

## Deployment

Deployed on **GitHub Pages** at `gemrey13.github.io/gemrey13.github.io`. The `homepage` field in `package.json` is set to this URL so Vite handles the subpath correctly.

```bash
npm run build
# Commit and push — GitHub Actions deploy dist/ to gh-pages branch
```

## Contributing

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Make changes and run: `npm run lint -- --fix`
3. Build and verify: `npm run build && npm run preview`
4. Commit with clear messages and push
5. Open a PR with a summary of changes

For architectural decisions or significant changes, see **CLAUDE.md** for project conventions and internal documentation patterns.

## License

Personal portfolio — © Gem Rey
