import { Link } from 'react-router';

export function CategoryItem({ category }) {
  return (
    <Link className="w-full p-4 hover:text-red-500" to={`${category}`}>
      {category}
    </Link>
  );
}
