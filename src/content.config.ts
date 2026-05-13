// src/content.config.ts
// Astro v6 requires this file at src/content.config.ts (not src/content/config.ts)
// and uses the new loader API instead of just a type + schema.

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // glob loader reads all .md files from src/content/blog/
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    description: z.string(),
  }),
});

export const collections = { blog };
