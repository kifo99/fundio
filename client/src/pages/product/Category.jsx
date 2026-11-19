// This is category page. The role of this page is to show user a category. For example user pressed food in category drawer it will take him to category page but category page will display its contents based on what is the selected category. So in short every category uses same page but the content is displayed based on it. Set of components that will dynamically display content

import { useLocation } from 'react-router';
import { CategoryHeader } from '../../components/products/CategoryHeader';
export function Category() {
  const location = useLocation();

  const { category } = location.state || {};
  const { products } = category || {};

  const categoryBg = {
    food: 'bg-food',
    diy: 'bg-diy',
    crafts: 'bg-crafts',
    arts: 'bg-arts',
    homeDecor: 'bg-homeDecore',
    jewelry: 'bg-jewelry',
    clothing: 'bg-clothing',
    toys: 'bg-toys',
    beauty: 'bg-beauty',
    garden: 'bg-garden',
    carpentry: 'bg-carpentry',
  };

  const key = category?.category?.toString().trim().toLowerCase();
  const bgClass = categoryBg[key];
  return (
    <>
      <div className="pt-20 w-full min-h-screen">
        <CategoryHeader title={category.category} bg={bgClass} />
      </div>
    </>
  );
}
