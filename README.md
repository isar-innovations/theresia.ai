# Theresia.ai

**Autonomous Research by Isar Innovations**

Theresia.ai is the new public home and product foundation for our autonomous research tool. The existing technical version is live at [`rsrx.de`](https://rsrx.de); this repository turns that capability into a polished brand, a strong landing page, and eventually the production application.

## What We Are Building

The immediate priority is a focused one-screen hero landing page for the Theresia.ai rebrand. It should explain the product clearly, make autonomous research feel credible and useful, and convert visitors into early users or calls.

The longer-term product foundation should support research workflows, user-facing product surfaces, and Postgres-backed data persistence.

## Design Direction

We like the theme and structure of [`search-party-next.vercel.app`](https://search-party-next.vercel.app/). Use it as inspiration for the landing page mood and information architecture:

- confident SaaS hero with a direct value proposition and visible CTA
- centered Theresia branding instead of a full navigation bar
- strong first-screen clarity without additional homepage sections
- product storytelling through hero copy, visual system, and CTAs
- premium, editorial product feel with crisp copy and generous spacing
- content or proof sections that make the product feel active and credible

Do not copy Search Party branding, copy, images, or layout one-to-one. Theresia should feel like a distinct research product from Isar Innovations.

## Stack

- Node.js
- Next.js
- TypeScript
- Postgres
- Vercel deployment

Prefer the Next.js App Router, typed server boundaries, and a structure that can grow from landing page to full product.

## Initial Implementation Plan

1. Scaffold the Next.js app with TypeScript.
2. Build the first hero-only landing page under `src/app/`.
3. Add reusable UI visuals under `src/components/`.
4. Store brand assets, screenshots, and Open Graph images in `public/`.
5. Add Postgres integration when the product surface needs persistence.
6. Add tests, linting, and type checks before production deployment.

## Expected Commands

Once `package.json` exists, keep these commands available:

- `npm run dev`: start local development.
- `npm run build`: create a production build.
- `npm run start`: run the production build locally.
- `npm run lint`: run lint checks.
- `npm run typecheck`: validate TypeScript.
- `npm test`: run the test suite.

The production site is deployed on Vercel. Vercel should use the default Next.js settings: install with `npm install`, build with `npm run build`, and leave the output directory empty so Vercel handles the Next.js build output natively.

## Repository Notes

Contributor and agent guidance lives in [`AGENTS.md`](./AGENTS.md). Keep product direction, stack decisions, and implementation conventions updated there as the repository matures.
