import { CategoryItem } from './CategoryItem';

export function CategoryList({ categories }) {
  return (
    <div className="w-full flex flex-col gap-1 justify-center align-middle">
      {categories.map((category) => (
        <CategoryItem key={category.category} category={category.category} />
      ))}
    </div>
  );
}
