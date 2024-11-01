import { ProductCard } from "@/components/ui/product-card";
import { ProductFilters } from "@/components/ui/product-filters";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <ProductFilters />
        </aside>
        
        <main className="flex-1">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
            <p className="text-lg text-muted-foreground">
              Browse our collection of high-quality products
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                category={product.category}
                slug={product.slug}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}