import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { Feed } from "feed";

export interface Post {
  slug: string;
  title: string;
  date: string;
  spoiler: string;
  youtube?: string;
  bluesky?: string;
}

export const metadata = {
  title: "moshekatz.dev — A blog by Moshe Katz",
  description: "A blog by Moshe Katz",
  openGraph: {
    title: "moshekatz.dev",
  },
  alternates: {
    types: {
      "application/atom+xml": "https://moshekatz.dev/atom.xml",
      "application/rss+xml": "https://moshekatz.dev/rss.xml",
    },
  },
};

export async function getPosts(): Promise<Post[]> {
  const entries = await readdir("./public/", { withFileTypes: true });
  const dirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  const fileContents = await Promise.all(
    dirs.map((dir) => readFile("./public/" + dir + "/index.md", "utf8"))
  );
  const posts = dirs.map((slug, i) => {
    const fileContent = fileContents[i];
    const { data } = matter(fileContent);
    return { slug, ...data };
  });
  posts.sort((a: any, b: any) => {
    return Date.parse(a.date) < Date.parse(b.date) ? 1 : -1;
  });
  return posts as Post[];
}

export async function generateFeed() {
  const posts = await getPosts();
  const site_url = "https://moshekatz.dev/";

  const feedOptions = {
    author: {
      name: "Moshe Katz",
      email: "me@moshekatz.dev",
      link: site_url,
    },
    description: metadata.description,
    favicon: `${site_url}/icon.png`,
    feedLinks: { atom: `${site_url}atom.xml`, rss: `${site_url}rss.xml` },
    generator: "Feed for Node.js",
    id: site_url,
    image: "https://github.com/gaearon.png",
    link: site_url,
    title: metadata.title,
  };

  const feed = new Feed(feedOptions as any);

  for (const post of posts) {
    feed.addItem({
      date: new Date(post.date),
      description: post.spoiler,
      id: `${site_url}${post.slug}/`,
      link: `${site_url}${post.slug}/`,
      title: post.title,
    });
  }

  return feed;
}
