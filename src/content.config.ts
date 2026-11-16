import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Every markdown file in src/content/blog becomes a post at /blog/<file-name>.
// Files whose name starts with "_" are ignored (handy for templates).
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      // Drafts show up in `npm run dev` but are left out of production builds.
      draft: z.boolean().default(false),
      // Optional cover image, relative to the post, e.g. ./images/cover.png
      cover: image().optional(),
      coverAlt: z.string().default(""),
    }),
});

export const collections = { blog };
