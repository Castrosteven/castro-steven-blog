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
    <footer className="border-t bg-gray-900 text-gray-400 pl-4 pr-4">
      <div className="container py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Link href="/" className="text-white font-semibold mb-4 block">
              Castro Steven
            </Link>
            <p className="text-sm">
              AI, Web Development & Cloud – The Future of Software Engineering
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © 2025 Castro Steven. All rights reserved.
            </div>
            {/* <div className="flex gap-4">
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
              </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
