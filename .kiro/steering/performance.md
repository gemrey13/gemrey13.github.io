---
inclusion: always
---

# Performance — codewithgem Portfolio

## Core Principle

The portfolio must feel fast.

Visual experience should not sacrifice performance. Performance should not sacrifice the visual experience. Find the balance — heavy experiences load only when needed, and lightweight paths stay lightweight.

## Lazy Loading

- Lazy load routes — each page loads its own code on demand
- Lazy load 3D scenes — Three.js and scene code only loads on pages that use it
- Lazy load heavy animation sequences until they are near the viewport
- Lazy load images below the fold
- Use `React.lazy()` and `Suspense` for code-split components
- Provide meaningful loading states (not blank screens)

## Code Splitting

- Split by route — each route is its own chunk
- Split heavy libraries (Three.js, Anime.js) so they don't bloat the initial bundle
- The initial page load should be lean: HTML, critical CSS, core React, hero content
- Non-critical features (Developer Mode, Lab experiments, blog content) load on demand

## Image Optimization

- Use modern formats (WebP, AVIF) with fallbacks
- Responsive images with srcset/sizes for different viewports
- Compress images appropriately — quality without excess file size
- Lazy load images that are not in the initial viewport
- Consider blur-up or skeleton placeholders for loading images
- Profile photo and project images should be optimized for their display size

## 3D Optimization

- Load Three.js only on routes/components that use it
- Limit scene complexity: keep polygon counts reasonable
- Use instancing for repeated geometry
- Compress textures, use appropriate resolution
- Dispose of GPU resources (materials, geometries, textures) on unmount
- Reduce or disable 3D on mobile/low-power devices
- Target 60fps on mid-range desktop hardware
- Use `requestAnimationFrame` and pause rendering when the scene is off-screen

## Animation Performance

- Animate only GPU-friendly properties: `transform` and `opacity` where possible
- Avoid animating layout-triggering properties (width, height, top, left, margin)
- Use `will-change` sparingly — only on elements about to animate, remove after
- Pause or stop animations that are off-screen
- Keep animation frame budgets tight (< 16ms per frame for 60fps)
- Batch DOM reads and writes to avoid layout thrashing
- Cancel running animations on unmount to prevent memory leaks

## Mobile Performance

- Reduce 3D complexity or replace with 2D alternatives
- Simplify animations — fewer staggered elements, shorter durations
- Reduce the number of simultaneously animated elements
- Optimize touch interactions for responsiveness
- Be mindful of battery consumption — avoid unnecessary GPU work
- Test on real mid-range devices, not just high-end hardware

## General Best Practices

- Minimize bundle size — tree-shake, remove dead code
- Use production builds with minification
- Preload critical fonts
- Avoid render-blocking resources
- Use efficient state management — avoid unnecessary re-renders
- Memoize expensive computations and components where appropriate
- Monitor Core Web Vitals: LCP, FID/INP, CLS
- Avoid loading heavy experiences (Lab experiments, complex animations) on routes that don't need them

## Loading Strategy

Priority order for initial page load:
1. Critical CSS + layout
2. Core React bundle + router
3. Hero content (text, basic layout)
4. Hero 3D/animation (progressive enhancement)
5. Below-fold content (lazy, intersection-based)
6. Non-critical features (Developer Mode, analytics)

The visitor should see meaningful content within 1-2 seconds. Interactive 3D can take a moment to load as long as the page is not blank while waiting.
