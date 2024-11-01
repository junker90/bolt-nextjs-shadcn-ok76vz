"use client";

import Link from "next/link";
import { Code2 } from "lucide-react";

export default function MainNav() {
  return (
    <div className="flex w-full items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <Code2 className="h-6 w-6" />
        <span className="font-bold">WebNextGen</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}