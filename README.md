# mar123zaj.github.io

Personal brand website built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and deployed to [GitHub Pages](https://pages.github.com).

## Tech Stack

- **Astro 5** — static site generator with zero JS by default
- **Tailwind CSS v4** — utility-first styling via Vite plugin
- **TypeScript** — strict type checking
- **Content Collections** — type-safe Markdown with Zod schemas
- **GitHub Actions** — automated build and deploy pipeline

## Project Structure

```
src/
  components/     # Reusable Astro components
  content/        # Markdown content (blog posts, projects)
  layouts/        # Page layouts (BaseLayout, BlogLayout)
  pages/          # File-based routing
  styles/         # Global CSS
public/           # Static assets
```

## Development

```bash
# Install dependencies
npm install

# Start dev server at localhost:4321
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Content

### Blog Post

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Post Title"
description: "Brief description"
date: 2026-01-01
tags: ["tag1", "tag2"]
---

Post content in Markdown...
```

### Project

Create a new `.md` file in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "Brief description"
date: 2026-01-01
tags: ["tech1", "tech2"]
github: "https://github.com/..."
live: "https://..."
featured: true
---

Project details in Markdown...
```

## Deployment

Pushes to `main` automatically trigger a GitHub Actions workflow that builds and deploys to GitHub Pages. To enable:

1. Go to repository **Settings > Pages**
2. Set **Source** to **GitHub Actions**
