# React View Transitions Demo

A Next.js photography gallery built to showcase the **React View Transitions** agent skill. The app provides a feature-rich surface area — sortable grids, search filtering, Suspense loading states, toggleable panels, and keyed content swaps — specifically designed so each feature maps to a view transition pattern from the skill.

## Branches

| Branch | Purpose |
|--------|---------|
| `main` | Feature set only — no `<ViewTransition>` animations |
| `with-animations` | Full implementation with all view transition patterns applied |

The `main` branch is intentionally animation-free. Install the [React View Transitions skill](https://github.com/vercel-labs/agent-skills) and ask your agent to "add view transitions" — the skill guides it to apply the right pattern to each feature.

## Features → View Transition Patterns

| Feature | Location | View Transition Pattern |
|---------|----------|------------------------|
| Sortable photo grid | Gallery (`/`) | List reorder with `startTransition` |
| Search with deferred filtering | Gallery (`/`) | `useDeferredValue` cross-fade |
| `useOptimistic` sort controls | Gallery (`/`) | Exclude controls from animation snapshot |
| Suspense skeleton → content | Photo detail (`/photo/[id]`) | Skeleton slides out, content slides in |
| Toggleable EXIF panel | Photo detail (`/photo/[id]`) | Enter/exit with `startTransition` toggle |
| Collection tab switching | Collections (`/collection/[slug]`) | Force re-enter with `key` |
| Photo thumbnail → hero | Gallery → Detail | Shared element morph |
| Forward/back navigation | All pages | Directional slides with `transitionTypes` |

## Tech Stack

- **Next.js 16** (App Router, Cache Components)
- **React 19** (`react@canary` for `<ViewTransition>`)
- **Tailwind CSS v4**
- **shadcn/ui** (base-nova)

## Architecture

- **`data/queries/`** — Data access layer with `"use cache"` + `cacheTag`/`cacheLife`, wrapped in React `cache()` for request deduplication
- **`lib/`** — Types, raw data, and client-side utilities
- **Pages as static shells** — Dynamic data fetching pushed into child server components with Suspense boundaries

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Using the Skill

Install the React View Transitions skill into your agent, then prompt it against this codebase:

```
Add view transitions to this app using the view transitions skill
```

The skill teaches the agent which pattern to apply where — shared elements for the photo morph, `default="none"` to prevent competing animations, directional slides for navigation, Suspense reveals for streaming content, and list reorder for the sortable grid.
