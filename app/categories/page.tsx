import { CategoryCard } from "@/components/ui/category-card";
import { categories } from "@/lib/categories";

export default function CategoriesPage() {
  return (
    <div className="container py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-start gap-4 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
          <p className="text-lg text-muted-foreground">
            Browse our wide selection of products by category
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              title={category.title}
              description={category.description}
              icon={category.icon}
              slug={category.slug}
              productCount={category.productCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}