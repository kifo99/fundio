import { Link, useLocation } from 'react-router';

export function CategoryItem({ category }) {
  const { pathname, state } = useLocation();

  const isActive = pathname === '/category' && state?.category?.category === category.category;

  return (
    <Link
      className={`w-full p-4 hover:text-red-500 ${isActive ? 'text-red-500 font-semibold' : ''}`}
      to="/category"
      state={{ category, message: 'Category data' }}
    >
      {category.category}
    </Link>
  );
}
