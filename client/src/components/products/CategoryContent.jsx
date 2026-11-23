import { ProductFilters } from './ProductFilters';
import { ProductGrid } from './ProductGrid';
export function CategoryContent() {
  return (
    <div className="w-full grid-cols-1 md:grid-cols-[3fr_7fr] gap-2">
      <ProductFilters />
      <ProductGrid />
    </div>
  );
}
