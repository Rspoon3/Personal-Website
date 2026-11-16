import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

/** All posts, newest first. Drafts are only included while running the dev server. */
export async function getPosts(): Promise<BlogPost[]> {
  const posts = await getCollection(
    "blog",
    ({ data }) => import.meta.env.DEV || !data.draft
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date): string {
  // Dates in frontmatter are parsed as UTC, so format in UTC to avoid off-by-one days.
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function readingTime(markdown: string | undefined): string {
  const words = (markdown ?? "").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

export function tagSlug(tag: string): string {
  return tag.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
