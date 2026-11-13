# Eden Li Yitian · Personal portfolio

An artistic-first portfolio at the meeting point of language, photography and technology.

**Design provenance:** This fork is based on [Faris Aziz's portfolio](https://github.com/farisaziz12/portfolio-website). It deliberately retains the original site's design language: the five-second opener, skewed yellow/blue photographic hero, Figtree typography, numbered poster cards, animated mobile drawer, theme-switch reveal and Astro view transitions. The copy, public navigation and linked photographs have been adapted for Eden Li Yitian. The upstream code remains in the untouched `main` branch.

## Preview locally

Use Node.js 22.12+ and pnpm **9.14.4**, pinned by the repository.

```sh
pnpm install --frozen-lockfile
pnpm --filter web dev
```

Open http://localhost:4321/. Replay the intro at http://localhost:4321/?intro=replay, or use **Replay intro** in the header. It normally plays only once per browser.

If your Mac invokes an outdated Corepack shim:

```sh
/opt/homebrew/bin/corepack pnpm install --frozen-lockfile
/opt/homebrew/bin/corepack pnpm --filter web dev
```

Build: `pnpm --filter web build`.

## Content

Public pages: Home, Photography, Projects, Writing, About and Contact. Personal data and photo URLs live in `apps/web/src/data/eden.ts`. Photos link to their original Flickr pages. Direct Flickr CDN URLs may change: replace them with owner-approved local exports before production.

The public site is static and no longer depends on the upstream owner's Sanity account, email integration, analytics or Vercel ISR. Original source components and design styles remain in the repository for fidelity. The upstream-only routes are not published.

This adaptation is not affiliated with the upstream author's professional activities. Check the upstream project's reuse terms before republishing design or media assets.
