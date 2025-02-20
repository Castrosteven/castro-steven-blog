import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  href: string;
  image: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  compact?: boolean;
  summary: string;
}

export default function BlogCard({
  title,
  image,
  author,
  date,
  href,
  tags,
  compact,
  summary,
}: BlogCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block space-y-4",
        compact ? "grid grid-cols-3 gap-4 space-y-0" : ""
      )}
    >
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden rounded-lg",
          compact ? "col-span-1" : ""
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className={cn("space-y-2", compact ? "col-span-2" : "")}>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
        <h3
          className={cn(
            "font-semibold group-hover:text-primary transition-colors",
            compact ? "text-lg" : "text-xl"
          )}
        >
          {title}
        </h3>
        {summary && <p className="text-sm text-muted-foreground">{summary}</p>}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
