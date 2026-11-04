import { Drawer } from '../ui/Drawer';
import { CategoryList } from './CategoryList';
import { fakeData } from '../../../fakeData';

export function ProductsCategoriesDrawer({ isOpen, onClose }) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Categories" className="bg-[#c9c8c7]">
      <CategoryList categories={fakeData} />
    </Drawer>
  );
}
