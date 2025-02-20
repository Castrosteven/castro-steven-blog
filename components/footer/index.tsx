import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Dribbble,
  Rss,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t  mx-auto">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Link href="/" className="font-semibold mb-4 block">
              Untitled UI
            </Link>
            <p className="text-sm text-muted-foreground">
              Design amazing digital experiences that create more happy in the
              world
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Product</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Overview
              </Link>
              <Link href="/" className="hover:text-foreground">
                Features
              </Link>
              <Link href="/" className="hover:text-foreground">
                Solutions
              </Link>
              <Link href="/" className="hover:text-foreground">
                Tutorials
              </Link>
              <Link href="/" className="hover:text-foreground">
                Pricing
              </Link>
              <Link href="/" className="hover:text-foreground">
                Releases
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Company</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                About us
              </Link>
              <Link href="/" className="hover:text-foreground">
                Careers
              </Link>
              <Link href="/" className="hover:text-foreground">
                Press
              </Link>
              <Link href="/" className="hover:text-foreground">
                News
              </Link>
              <Link href="/" className="hover:text-foreground">
                Media kit
              </Link>
              <Link href="/" className="hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Resources</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Blog
              </Link>
              <Link href="/" className="hover:text-foreground">
                Newsletter
              </Link>
              <Link href="/" className="hover:text-foreground">
                Events
              </Link>
              <Link href="/" className="hover:text-foreground">
                Help centre
              </Link>
              <Link href="/" className="hover:text-foreground">
                Tutorials
              </Link>
              <Link href="/" className="hover:text-foreground">
                Support
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Legal</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Terms
              </Link>
              <Link href="/" className="hover:text-foreground">
                Privacy
              </Link>
              <Link href="/" className="hover:text-foreground">
                Cookies
              </Link>
              <Link href="/" className="hover:text-foreground">
                Licenses
              </Link>
              <Link href="/" className="hover:text-foreground">
                Settings
              </Link>
              <Link href="/" className="hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Untitled UI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                <Dribbble className="h-5 w-5" />
              </Link>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                <Rss className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
