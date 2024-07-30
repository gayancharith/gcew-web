import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gayan Witharana",
  description: "Next.js application with TypeScript run the blog and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sports/cricket">Cricket</Link>
            </li>
            {/* <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/books">Books</Link>
            </li>
            <li>
              <Link href="/entertainment">Entertainment</Link>
            </li>
            <li>
              <Link href="/sports">Sports</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li> */}
          </ul>
        </nav>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
