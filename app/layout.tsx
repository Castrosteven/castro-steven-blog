import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Castro Steven | Software Engineering Blog",
  description: "Code and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
