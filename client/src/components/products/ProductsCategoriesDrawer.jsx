import { Drawer } from '../ui/Drawer';
import { CategoryList } from './CategoryList';

export function ProductsCategoriesDrawer({ isOpen, onClose }) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Categories" className="bg-[#c9c8c7]">
      <CategoryList className={'flex flex-col gap-1 justify-center align-middle'} />
    </Drawer>
  );
}
