import type { APIRoute } from "astro";
import { getPosts } from "../../lib/blog";

// Plain-text version of the markdown so searches don't match syntax like image paths or ```.
function toPlainText(markdown: string): string {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ") // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // links -> link text
    .replace(/^```.*$/gm, " ") // code fence lines
    .replace(/^\s*[-+*]\s+/gm, " ") // list markers
    .replace(/[#>*_`~|]+/g, " ") // other markdown punctuation
    .replace(/\s+/g, " ")
    .trim();
}

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const index = posts.map((post) => ({
    id: post.id,
    title: post.data.title,
    description: post.data.description ?? "",
    tags: post.data.tags,
    text: toPlainText(post.body ?? ""),
  }));
  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
};
