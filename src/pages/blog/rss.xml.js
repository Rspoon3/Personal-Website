import rss from "@astrojs/rss";
import { getPosts } from "../../lib/blog";

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: "Richard Witherspoon's Blog",
    description: "Writing about iOS development, side projects, and more.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
  });
}
