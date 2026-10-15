import { Menu } from 'lucide-react';

export function NavMenuButton({ onSetIsOpen }) {
  return (
    <div className="text-inherit">
      <button className="md:hidden" onClick={() => onSetIsOpen(true)}>
        <Menu
          className="transition-colors duration-300 ease-in hover:text-red-600 active:text-red-600"
          size={24}
        />
      </button>
    </div>
  );
}
