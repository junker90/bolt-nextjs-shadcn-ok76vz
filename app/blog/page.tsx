import { blogPosts } from "@/lib/blog-data";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Blog | WebNextGen",
  description: "Latest insights on SEO, marketing strategies, and digital solutions",
};

export default function BlogPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    {post.date}
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}