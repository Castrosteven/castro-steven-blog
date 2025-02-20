import { slugify } from "@/utils/posts";
import Link from "next/link";

export default function Sidebar({
  tableOfContents,
}: {
  tableOfContents: { level: number; text: string }[];
}) {
  return (
    <div className="space-y-8">
      {/* Table of Contents */}
      {tableOfContents.length > 0 && (
        <div className="sticky top-24">
          <div className="space-y-8">
            <nav className="space-y-2">
              <h3 className="font-medium">Contents</h3>
              <ul className="space-y-2 text-sm">
                {tableOfContents.map(({ level, text }, index) => (
                  <li
                    key={index}
                    style={{ marginLeft: `${(level - 1) * 10}px` }}
                  >
                    <Link
                      href={`#${slugify(text)}`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Author Section */}
      {/* <div className="space-y-4">
        <h3 className="font-medium">Written by</h3>
        <div className="flex items-center gap-3">
          <Image
            src="/placeholder.svg"
            alt="Amelia Laurent"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">Amelia Laurent</p>
            <p className="text-sm text-muted-foreground">
              Designer, Craft+Clarity
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/placeholder.svg"
            alt="Olivia Rhye"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">Olivia Rhye</p>
            <p className="text-sm text-muted-foreground">
              Designer, Craft+Clarity
            </p>
          </div>
        </div>
      </div> */}

      {/* Newsletter Subscription */}
      {/* <div className="space-y-4">
        <h3 className="font-medium">Subscribe to our newsletter</h3>
        <div className="space-y-2">
          <Input placeholder="Enter your email" />
          <Button className="w-full">Subscribe</Button>
        </div>
      </div> */}
    </div>
  );
}
