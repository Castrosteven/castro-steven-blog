import path from "path";
import fs from "fs";
import { Metadata } from "@/types/Post";
import matter from "gray-matter";
const postDir = path.join(process.cwd(), "posts");

function parseFrontmatter(fileContent: string) {
  const { data: metadata, content } = matter(fileContent);
  const tableOfContents = extractHeadings(content);
  return { metadata: metadata as Metadata, content, tableOfContents };
}

/**
 * Extracts headings from MDX content.
 */
function extractHeadings(content: string) {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  let matches;
  let headings: { level: number; text: string }[] = [];

  while ((matches = headingRegex.exec(content)) !== null) {
    const level = matches[1].length; // Number of # determines level
    const text = matches[2].trim();
    headings.push({ level, text });
  }

  return headings;
}

const fetchSlugs = async (): Promise<string[]> => {
  return fs
    .readdirSync(postDir)
    .filter((file) => fs.statSync(path.join(postDir, file)).isDirectory());
};

const fetchPostsMetadataWithTableOfContents = async ({
  sortOrder,
}: {
  sortOrder?: "asc" | "desc";
}) => {
  const slugs = await fetchSlugs();
  const metadataData = slugs.map((slug) => {
    const filePath = path.join(postDir, slug, "content.mdx");
    let rawContent = fs.readFileSync(filePath, "utf-8");
    const { metadata, tableOfContents } = parseFrontmatter(rawContent);
    const { title, publishedAt, summary, image, category, readingTime, tags } =
      metadata;

    if (
      !title ||
      !publishedAt ||
      !summary ||
      !image ||
      !category ||
      !readingTime ||
      !tags
    ) {
      throw new Error(`Missing required metadata fields in post: ${slug}`);
    }

    return {
      slug,
      title,
      publishedAt,
      summary,
      image,
      tableOfContents,
      category,
      readingTime,
      tags,
    };
  });

  return metadataData.sort((a, b) => {
    return sortOrder === "asc"
      ? new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
      : new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
};

const fetchPostMetadataWithContentBySlug = (
  slug: string
): {
  metadata: Metadata;
  content: string;
  tableOfContents: { level: number; text: string }[];
} => {
  const path = `${postDir}/${slug}`;
  let rawContent = fs.readFileSync(`${path}/content.mdx`, "utf-8");
  return parseFrontmatter(rawContent);
};

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}
export {
  fetchSlugs,
  fetchPostsMetadataWithTableOfContents,
  fetchPostMetadataWithContentBySlug,
  slugify,
};
