// "use client";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/button";
import { Metadata } from "@/types/Post";
import Sidebar from "../table-of-content";
import React from "react";
import { slugify } from "@/utils/posts";
import rehypeHighlight from "rehype-highlight";
import "@/styles/github-dark.css";

function createHeading(level: string) {
  const Heading = ({ children }: { children: string }) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug, style: { scrollMarginTop: "6rem" } },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

export default function BlogPost({
  content,
  metadata,
  tableOfContents,
}: {
  metadata: Metadata;
  content: string;
  tableOfContents: {
    level: number;
    text: string;
  }[];
}) {
  const { summary, title, readingTime } = metadata;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-semibold">
              Castro Steven
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src="/space.jpg"
            alt="Blog hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 mix-blend-overlay" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto relative h-full flex items-end pb-12">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {title}
              </h1>
              <p className="text-lg text-white/80">{summary}</p>
              <p className="text-lg text-white/80">{readingTime} read</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 prose prose-gray max-w-none">
              <MDXRemote
                source={content}
                components={{
                  h1: createHeading("1"),
                  h2: createHeading("2"),
                  h3: createHeading("3"),
                  h4: createHeading("4"),
                  h5: createHeading("5"),
                  h6: createHeading("6"),
                }}
                options={{
                  mdxOptions: {
                    rehypePlugins: [rehypeHighlight],
                  },
                }}
              />
            </div>

            <Sidebar tableOfContents={tableOfContents} />
          </div>
        </div>

        {/* CTA Section */}
        <section className="border-t bg-gray-50">
          <div className="container mx-auto py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Ready to level up your business?
                </h2>
                <p className="text-muted-foreground">
                  Start your 30-day free trial. Cancel anytime.
                </p>
              </div>
              <Button size="lg">Get started</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-900 text-gray-400">
        <div className="container py-12 mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Link href="/" className="text-white font-semibold mb-4 block">
                Castro Steven
              </Link>
              <p className="text-sm">
                Software Engineering, AI, finance, and more. Learn to build
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm">
                © 2025 Castro Steven. All rights reserved.
              </div>
              <div className="flex gap-4">
                <Link href="/" className="hover:text-white">
                  Overview
                </Link>
                <Link href="/" className="hover:text-white">
                  Features
                </Link>
                <Link href="/" className="hover:text-white">
                  Pricing
                </Link>
                <Link href="/" className="hover:text-white">
                  Careers
                </Link>
                <Link href="/" className="hover:text-white">
                  Help
                </Link>
                <Link href="/" className="hover:text-white">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
