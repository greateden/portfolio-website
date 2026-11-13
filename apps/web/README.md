# Personal portfolio · Astro

This fork reuses the original portfolio's visual system rather than replacing it with a minimal theme.

## Original components retained

- `src/components/home/Opener.astro`: the five-second animated introduction
- `src/components/home/HomeHero.astro`: original home hero
- `src/components/v3/SkewHero.astro`: yellow skew, blue edge and clipped photography
- `src/components/v3/PosterCard.astro`: numbered posters
- `src/components/layout/Header.astro`: drawer animation, command palette and theme switching
- `src/styles/{global,tokens,ds}.css`: original design system

## New content

- `src/data/eden.ts`: profile, research and selected photographs
- `src/pages/`: Eden's public pages

## Preview

From the repository root:

```sh
pnpm install --frozen-lockfile
pnpm --filter web dev
pnpm --filter web build
```

The original Sanity and Vercel-specific routes no longer publish the previous owner's professional content. The original design components remain in source.

Photo URLs point to Flickr. Host owner-approved exports locally before public launch for reliability.
