# Project Context

## Purpose
TaskPulse, a lightweight project-tracking dashboard that helps visualize epics, tasks, and blockers. The goal is to quickly prototype UI ideas for OpenSpec-driven workflows and validate how specs translate to user-facing experiences.

## Tech Stack
- Svelte 5 with the runes API for UI composition (built via SvelteKit on Deno)
- Deno for dev server, bundling, and task runner (deno.json config)
- TypeScript with strict mode
- Tailwind CSS for utility styling
- Vitest-equivalent via `deno test` + `@testing-library/svelte` + Playwright for automated tests

## Project Conventions

### Code Style
- Prettier defaults (2 spaces, semicolons on, single quotes)
- ESLint with the Svelte + TypeScript presets; prefer explicit types for exports/stores
- Components live under `src/lib/components`, camelCase files, and PascalCase exported components
- Stores and utilities use named exports only; avoid default exports

### Architecture Patterns
- Treat the app as a pure SPA; no server-side rendering needed (SvelteKit adapter-deno)
- Organize by feature: `src/routes/(app)/[feature]/+page.svelte` backed by stores in `src/lib/stores/[feature].ts`
- Global state handled through Svelte stores; prefer derived stores over prop-drilling
- Reusable UI primitives live under `src/lib/components/ui`

### Testing Strategy
- `deno test --allow-read` for unit/integration tests (stores, helpers, isolated components)
- `@testing-library/svelte` for DOM-focused component tests
- Playwright smoke suite for critical flows (create task, update status, mark blocker)
- Every change should include at least one test touching the affected behavior

### Git Workflow
- Trunk-based: branch from `main`, open small PRs, rebase before merge
- Branch naming: `feature/<short-description>` or `fix/<issue>`
- Conventional Commits (`feat:`, `fix:`, `chore:`, etc.) for commit messages
- Keep PRs under ~300 lines and link relevant OpenSpec change IDs

## Domain Context
A "project" is a collection of epics, each epic has tasks, and tasks can have blockers. Tasks move through `todo → in-progress → review → done`. Blockers are either `internal` (depends on another task) or `external` (waiting on stakeholder). The UI focuses on surfacing blockers and status aging.

## Important Constraints
- Must use Svelte 5 for all UI work and run on Deno (dev + deploy)
- Keep bundle size slim (avoid large UI kits; Tailwind only)
- No backend yet—mock data fetched from local JSON files or temporary in-memory stores
- All specs and proposals live in OpenSpec; treat them as the single source of truth

## External Dependencies
- OpenSpec CLI for planning/spec validation
- (Future) Lightweight mock API served via Deno HTTP handlers or `deno serve`-hosted JSON mocks
