# Post-Credit

A static personal blog built with Astro, TypeScript, and Tailwind CSS. Deployed to GitHub Pages at [https://gellyrslls.github.io/post-credit](https://gellyrslls.github.io/post-credit).

## Tech Stack

- **Framework**: [Astro](https://astro.build) (v6)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) (v3)
- **Content**: Markdown with Astro content collections
- **Deployment**: GitHub Pages via GitHub Actions

## Local Development

### Prerequisites

- Node.js 18 or higher
- npm

### Getting started

```bash
# 1. Clone the repository
git clone https://github.com/gellyrslls/post-credit.git
cd post-credit

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The site runs at `http://localhost:4321/post-credit` (the `/post-credit` base path matches the GitHub Pages deployment).

### Other commands

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build static site to `./dist` |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
post-credit/
├── public/
│   └── post-credit-logo.png     # Site logo PNG
├── src/
│   ├── components/
│   │   ├── Navbar.astro         # Sticky navbar with dark mode toggle
│   │   ├── Footer.astro         # Footer with social links
│   │   └── PostCard.astro       # Reusable blog post card
│   ├── content/
│   │   ├── config.ts            # Content collection schema
│   │   └── blog/                # Markdown blog posts
│   ├── layouts/
│   │   └── BaseLayout.astro     # Root layout (Navbar + Footer)
│   ├── pages/
│   │   ├── index.astro          # Home page (/)
│   │   ├── about.astro          # About page (/about)
│   │   └── blog/
│   │       ├── index.astro      # Blog index (/blog)
│   │       └── [slug].astro     # Individual post (/blog/[slug])
│   └── styles/
│       └── global.css           # Google Fonts + Tailwind base
├── .github/workflows/
│   └── deploy.yml               # GitHub Actions deployment
├── astro.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Adding a New Blog Post

Create a new `.md` file in `src/content/blog/` with this frontmatter:

```markdown
---
title: "Your Post Title"
date: 2026-05-15
author: "Angelo Rosillosa"
description: "A short description shown in post cards."
---

Your post content here...
```

The filename (without `.md`) becomes the URL slug — e.g. `my-new-post.md` → `/post-credit/blog/my-new-post`.

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via the GitHub Actions workflow in `.github/workflows/deploy.yml`.

### First-time setup

1. Push this repo to GitHub as `post-credit`
2. Go to **Settings → Pages → Source** and select **GitHub Actions** (not "Deploy from a branch")
3. Push to `main` — the workflow builds and deploys automatically
4. Site will be live at `https://gellyrslls.github.io/post-credit`

## Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `pc-bg` | `#FAF9F6` | Page background (light) |
| `pc-text` | `#1a1a2e` | Primary text (light) |
| `pc-accent` | `#2d4a3e` | CTA buttons, links |
| `pc-border` | `#e5e5e5` | Dividers, card borders |
| `pc-muted` | `#6b7280` | Dates, metadata |
| `pc-dark-bg` | `#0f0f0f` | Page background (dark) |
| `pc-dark-text` | `#e8e8e8` | Primary text (dark) |
