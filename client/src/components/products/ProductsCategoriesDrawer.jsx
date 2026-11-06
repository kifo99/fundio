import { Drawer } from '../ui/Drawer';
import { CategoryList } from './CategoryList';
import { useCategoryProducts } from '../../queries/product.queries.js';

export function ProductsCategoriesDrawer({ isOpen, onClose }) {
  const { data: categories, isLoading, isError } = useCategoryProducts();

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Categories" className="bg-[#c9c8c7]">
      <CategoryList categories={categories.products} />
    </Drawer>
  );
}
