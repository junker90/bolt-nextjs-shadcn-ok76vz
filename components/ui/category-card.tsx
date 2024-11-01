import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
  productCount: number;
}

export function CategoryCard({ title, description, icon: Icon, slug, productCount }: CategoryCardProps) {
  return (
    <Link href={`/categories/${slug}`}>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon className="h-6 w-6" />
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <p className="text-sm font-medium">{productCount} Products</p>
        </CardContent>
      </Card>
    </Link>
  );
}