import { CategoryItem } from './CategoryItem';
import { useCategoryProducts } from '../../queries/product.queries.js';

export function CategoryList({ className }) {
  const { data: categories, isLoading, isError } = useCategoryProducts();

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className={`w-full ${className}`}>
      {categories.map((category) => (
        <CategoryItem key={category.category} category={category} />
      ))}
    </div>
  );
}
