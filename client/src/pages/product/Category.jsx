// This is category page. The role of this page is to show user a category. For example user pressed food in category drawer it will take him to category page but category page will display its contents based on what is the selected category. So in short every category uses same page but the content is displayed based on it. Set of components that will dynamically display content

import { useLocation } from 'react-router';
import { CategoryHeader } from '../../components/products/CategoryHeader';
import { Divider } from '../../components/ui/Divider';
import { CategoryContent } from '../../components/products/CategoryContent';
export function Category() {
  const location = useLocation();

  const { category } = location.state || {};
  return (
    <>
      <div className="pt-20 w-full min-h-screen">
        <CategoryHeader title={category.category} />
        <Divider />
        <CategoryContent />
      </div>
    </>
  );
}
