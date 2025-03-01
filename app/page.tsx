import { fetchPostsMetadataWithTableOfContents } from "@/utils/posts";
import Link from "next/link";
import "@/styles/devicon.min.css";
import Image from "next/image";
import VideoHero from "@/components/video-hero";
import { Footer } from "@/components/footer";

const Card = ({
  image,
  publishedAt,
  slug,
  summary,
  title,
  tags,
}: {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
  tableOfContents: {
    level: number;
    text: string;
  }[];
  category: string;
  readingTime: number;
  tags: string[];
}) => {
  return (
    <div className="border rounded-xl p-6 flex flex-col gap-4 hover:shadow-md ">
      <Link href={`/blog/${slug}`}>
        <div className="flex justify-center hover:opacity-80 transition-opacity duration-300">
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            className="rounded-2xl"
          />
        </div>
      </Link>
      <Link
        href={`/blog/${slug}`}
        className="text-lg font-semibold text-center hover:font-bold "
      >
        {title}
      </Link>
      <div className="text-sm font-light  text-center">{summary}</div>
      <div className="flex gap-2 justify-center">
        {tags.map((tag) => {
          return (
            <div className="bg-gray-100 p-1 text-sm" key={tag}>
              {tag}
            </div>
          );
        })}
      </div>
      <hr />
      <div className="flex justify-end ">
        <div className="flex flex-col text-right text-sm font-thin">
          <p>Steven Castro</p>
          {new Date(publishedAt).toLocaleString("default", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default async function Home() {
  const posts = await fetchPostsMetadataWithTableOfContents({
    sortOrder: "desc",
  });

  return (
    <div className="">
      <section>
        <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b pr-4 pl-4 md:pl-0 md:pr-0">
          <div className="container mx-auto flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/" className="font-semibold">
                Castro Steven
              </Link>
            </div>
          </div>
        </header>
      </section>
      <VideoHero />
      <section className="mt-12">
        <div className="container mx-auto md:pl-24 md:pr-24 pl-4 pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => {
              return <Card key={post.slug} {...post} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
