import BlogPost from "@/components/blog-post";
import { fetchPostMetadataWithContentBySlug, fetchSlugs } from "@/utils/posts";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { content, metadata, tableOfContents } =
    fetchPostMetadataWithContentBySlug(slug);
  return (
    <BlogPost
      content={content}
      metadata={metadata}
      tableOfContents={tableOfContents}
    />
  );
}

export async function generateStaticParams() {
  const slugs = await fetchSlugs();
  return slugs.map((slug) => ({ slug: slug }));
}

export const dynamicParams = false;
