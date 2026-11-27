import { ProductFilters } from './ProductFilters';
import { ProductGrid } from './ProductGrid';

export function CategoryContent() {
  // TODO implement on apply
  function onApply() {}

  return (
    <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-[minmax(16rem,22rem)_1fr]">
      <ProductFilters onApply={onApply} />
      <ProductGrid />
    </div>
  );
}
