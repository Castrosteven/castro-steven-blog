import BlogCard from "@/components/blog-card";
import { fetchPostsMetadataWithTableOfContents } from "@/utils/posts";
import Link from "next/link";
import { Footer } from "@/components/footer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default async function Home() {
  const posts = await fetchPostsMetadataWithTableOfContents({
    sortOrder: "desc",
  });
  const latestPost = posts[0];
  const restOfPosts = posts.slice(1);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between mx-auto">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-semibold">
              Castro Steven
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1  mx-auto">
        <section className="py-12 md:py-16">
          <div className="container text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              Software Engineering for the AI Era
            </h1>
            <p className="text-muted-foreground">
              Subscribe to learn about new product features, the latest in
              technology, and updates.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input type="email" placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>

        <section className="container py-8">
          <h2 className="text-xl font-semibold mb-6">Recent blog posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <BlogCard
              href={`/blog/${latestPost.slug}`}
              image={latestPost.image}
              title={latestPost.title}
              author="Steven Castro"
              date={new Date(latestPost.publishedAt).toLocaleDateString()}
              tags={["Design", "Research", "Interview"]}
              summary={latestPost.summary}
            />
            <div className="space-y-8 md:col-span-1">
              {restOfPosts.slice(0, 3).map((post) => (
                <BlogCard
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  image={post.image}
                  title={post.title}
                  author="Steven Castro"
                  date={new Date(post.publishedAt).toLocaleDateString()}
                  tags={["Design", "Research"]}
                  compact
                  summary={post.summary}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="container py-8">
          <h2 className="text-xl font-semibold mb-6">All blog posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                href={`/blog/${post.slug}`}
                image={post.image}
                title={post.title}
                author="Steven Castro"
                date={new Date(post.publishedAt).toLocaleDateString()}
                tags={["Design", "Research"]}
                summary={post.summary}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {[1, 2, 3, "...", 8, 9, 10].map((page, i) => (
              <Button
                key={i}
                variant={page === 1 ? "default" : "outline"}
                className={page === "..." ? "pointer-events-none" : ""}
              >
                {page}
              </Button>
            ))}
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
        <section className="bg-gray-50 py-12">
          <div className="container text-center space-y-4">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hi, I am Steven Castro, a Sr. Software engineer with a a decade of
              experience in building software products. I am passionate about
              software engineering, the guitar and the traveling.
            </p>
          </div>
        </section>
        <section className="border-t mt-16">
          <div className="container py-16">
            <div className="max-w-md mx-auto text-center space-y-4">
              <h2 className="text-2xl font-semibold">
                Sign up to my newsletter
              </h2>
              <p className="text-muted-foreground">
                Stay up to date with the latest news, announcements, and
                articles.
              </p>
              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
