---
inclusion: always
---

# Routing — codewithgem Portfolio

## Router

- **React Router** is the routing solution
- Use the latest React Router conventions and patterns

## Main Routes

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, story arc, key sections |
| `/about` | About / "More Than Just a Developer" |
| `/work` | Work Experience (career story) |
| `/projects` | Projects overview |
| `/projects/:slug` | Individual project case study |
| `/events` | "Where I've Shown Up" |
| `/blog` | Blog listing |
| `/blog/:slug` | Individual blog post |
| `/lab` | The Lab — experiments |
| `/contact` | Contact |

Route structure may evolve as the portfolio is built. These are the expected primary routes.

## Navigation

Navigation items:
- Home
- About
- Work
- Projects
- Events
- Blog
- Lab
- Contact

### Navigation Principles
- Modern navigation experience with subtle animation and interaction
- Must remain usable and accessible at all times
- Clear active state indication
- Keyboard navigable
- Works on both desktop and mobile (consider mobile menu pattern)
- Navigation should not obstruct content

## Project Detail Routes

When a visitor navigates to a project (`/projects/:slug`):
- The experience should feel like entering a case study
- Transition into the project should feel cinematic/intentional
- Each project page is its own immersive experience
- Provide clear navigation back to projects overview

## Blog Post Routes

When a visitor navigates to a blog post (`/blog/:slug`):
- Clean reading experience
- Easy navigation between posts or back to blog listing
- Blog should feel editorial

## Route Transitions

- Page transitions should be cinematic and purposeful
- Transitions maintain spatial context (the visitor understands where they're going)
- Keep transitions snappy — never slow
- Respect reduced-motion preferences (instant transitions for those users)
- Use exit animations before route change and enter animations after

## Deep Linking

- All routes should be directly linkable (shareable URLs)
- Navigation state should be reflected in the URL
- Browser back/forward should work naturally

## Scroll Behavior

- Scroll to top on route change (unless navigating within a section)
- Preserve scroll position when navigating back where appropriate
- Hash-based navigation for jumping to sections within a page if needed
