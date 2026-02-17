---
title: "Building My Personal Website with Astro"
description: "A look at the technical decisions behind this website — why I chose Astro, how it's structured, and what I learned along the way."
date: 2026-02-17
tags: ["astro", "web development", "tailwind"]
---

I recently rebuilt my personal website from scratch using Astro. Here's a breakdown of the decisions I made and why.

## Why Astro?

After evaluating several options — Next.js, Hugo, plain HTML — I landed on **Astro** for a few key reasons:

1. **Zero JavaScript by default** — pages ship as pure HTML unless I explicitly opt in
2. **Content Collections** — type-safe Markdown with Zod schemas, perfect for a blog
3. **Island Architecture** — I can add interactive components only where needed
4. **Built-in image optimization** — responsive images out of the box

## The Stack

- **Astro 5** — static site generator
- **Tailwind CSS v4** — utility-first styling via the Vite plugin
- **TypeScript** — type safety throughout
- **GitHub Pages** — free hosting with GitHub Actions deployment

## Content Management

Astro's Content Collections API makes managing blog posts and projects straightforward. Each collection has a Zod schema that validates frontmatter at build time:

```typescript
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});
```

This gives me autocompletion and type checking when working with post data — a huge improvement over untyped frontmatter.

## Key Takeaways

- **Start simple** — a static site generator is the right tool for a personal website
- **Content-first** — choose tools that make writing and publishing easy
- **Performance matters** — Astro's zero-JS approach means fast page loads without effort

The source code for this site is available on [GitHub](https://github.com/mar123zaj/mar123zaj.github.io).
