# Project Shelter

Project Shelter is an Astro site for listing Purdue Hackers projects that need a new maintainer. It renders a corkboard-style directory of available projects and a server-rendered detail page for each one.

The app fetches project data from the Purdue Hackers CMS at `https://cms.purduehackers.com/api/shelter`.

## Stack

- Astro 5
- Tailwind CSS 4
- Vercel adapter for Astro server output
- Nix development shell
- Bun as the primary package manager/runtime

## Local Development

This repository uses Nix for its build environment.

```sh
nix develop
bun install
bun dev
```

The Astro dev server runs at [http://localhost:4321](http://localhost:4321) by default.

If you are not using Nix, the equivalent flow is:

```sh
bun install
bun dev
```

## Available Commands

Run these from the project root:

| Command | Purpose |
| --- | --- |
| `nix develop` | Enter the project shell with Bun and frontend tooling available |
| `bun install` | Install dependencies |
| `bun dev` | Start the local dev server |
| `bun build` | Build the production server bundle |
| `bun preview` | Preview the production build locally |
| `bun astro ...` | Run Astro CLI commands |

## How It Works

- `/` fetches the full Shelter project list from the CMS and renders each project as a corkboard card.
- `/project/[id]` is server-rendered and fetches a single project by ID from the CMS.
- Project images can be absolute CMS URLs or relative asset paths; the UI normalizes both.
- The detail page includes a shareable URL and a Discord call to action for claiming a project.

## Project Structure

```text
src/
  components/
    Footer.astro
    Pin.astro
    ProjectCard.astro
  layouts/
    Layout.astro
  pages/
    index.astro
    project/[id].astro
  styles/
    global.css
  types/
    shelter.ts
astro.config.mjs
shell.nix
vercel.json
```

## Deployment Notes

- Astro is configured with `output: "server"`.
- The app uses `@astrojs/vercel` for deployment on Vercel.
- `vercel.json` adds long-lived cache headers for built assets.
- The project detail route disables prerendering with `export const prerender = false;` so project pages are fetched on demand.

## Data Shape

The frontend expects CMS responses to include:

- `id`
- `name`
- `last_division`
- `last_owner`
- `description`
- `image.url`
- `image.alt` (optional)

These types live in [`src/types/shelter.ts`](/Users/ray/Projects/hackers/shelter/src/types/shelter.ts).
