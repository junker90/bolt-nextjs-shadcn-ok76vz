import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { categories } from "@/lib/categories";

export function ProductFilters() {
  return (
    <div className="space-y-6">
      <div>
        <Label>Search</Label>
        <Input placeholder="Search products..." className="mt-2" />
      </div>
      
      <div>
        <Label>Price Range</Label>
        <div className="pt-4">
          <Slider defaultValue={[0, 1000]} max={2000} step={10} />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>$0</span>
            <span>$2000</span>
          </div>
        </div>
      </div>

      <div>
        <Label>Categories</Label>
        <div className="space-y-2 mt-2">
          {categories.map((category) => (
            <Button
              key={category.slug}
              variant="ghost"
              className="w-full justify-start"
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}