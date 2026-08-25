---
inclusion: always
---

# Animation Direction — codewithgem Portfolio

## Core Philosophy: Intentional Interaction

Do NOT make everything animated.
Do NOT make everything flashy.

Animation exists to communicate:
- Personality
- Hierarchy
- Storytelling
- Interaction feedback
- Depth
- Transitions

Every animation should have a reason. If removing an animation loses nothing, it should not exist.

## Tools

- **Motion** (Framer Motion) — primary animation library for React component animations, layout transitions, gestures, and scroll-driven effects
- **Anime.js** — for complex timeline animations, SVG animations, and sequences that benefit from its API
- **Coconut UI** — for UI component interactions and patterns

Choose the right tool for each situation. Do not force one library to do everything.

## Animation Principles

### Entrance & Exit
- Elements should enter and exit with purpose
- Stagger animations to create rhythm and hierarchy
- Avoid everything animating simultaneously

### Scroll-Driven Experiences
- Use scroll position to reveal content and tell stories
- The "More Than Just a Developer" section is a prime candidate for scroll storytelling
- Scroll animations should feel smooth and connected to the user's action
- Avoid scroll-jacking — the user should remain in control

### Page Transitions
- Cinematic transitions between routes/pages
- Transitions should maintain spatial context (where am I going?)
- Keep transitions snappy — impressive but never slow

### Micro-interactions
- Subtle feedback on hover, click, and focus
- Navigation interactions
- Button and link responses
- Loading states

### Restraint Rules
- Not every section needs animation
- Text content can simply be there — it does not need to fly in
- When in doubt, do less
- Static moments make animated moments more impactful

## Reduced Motion

Visitors who prefer reduced motion (via `prefers-reduced-motion: reduce`) must have a complete experience:
- Disable decorative animations
- Keep essential state transitions (e.g., page changes) but make them instant or minimal
- Content should never depend on animation to be understood
- Interactive elements remain functional
- The site should still feel intentional and designed without motion

## Performance Considerations

- Use CSS transforms and opacity for animations (GPU-accelerated properties)
- Avoid animating layout properties (width, height, top, left) where possible
- Use `will-change` sparingly and intentionally
- Cancel or pause off-screen animations
- Keep animation frame budgets tight — aim for 60fps
- Consider using `requestAnimationFrame` scheduling for complex sequences

## What NOT to Animate

- Every text block entering the page
- Background elements that serve no storytelling purpose
- Elements that users interact with frequently (don't slow them down)
- Decorative elements that add visual noise without meaning
