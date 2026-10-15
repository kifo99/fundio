import { X, CircleUser, Globe, Logs, ShoppingBasket } from 'lucide-react';
import { Link } from 'react-router';

export function MobileNavLinks({ onSetIsOpen, isOpen, isAuth }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full bg-white z-50 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="flex justify-end p-4">
        <button onClick={() => onSetIsOpen(false)}>
          <X size={24} />
        </button>
      </div>

      <ul className="flex flex-col gap-6 px-6 mt-4">
        <li className="flex items-center gap-3">
          <Globe
            className="transition-colors duration-300 ease-in hover:text-red-600 active:text-red-600"
            size={24}
          />
          <span>Language</span>
        </li>

        <li className="flex items-center gap-3">
          {!isAuth ? (
            <Link to="/auth" onClick={() => onSetIsOpen(false)}>
              <CircleUser
                className="transition-colors duration-300 ease-in hover:text-red-600 active:text-red-600"
                size={24}
              />
            </Link>
          ) : (
            <Link to="/auth" onClick={() => onSetIsOpen(false)}>
              <Logs
                className="transition-colors duration-300 ease-in hover:text-red-600 active:text-red-600"
                size={24}
              />
            </Link>
          )}
        </li>
        <li className="flex items-center gap-3">
          <Link to="cart" onClick={() => onSetIsOpen(false)}>
            <ShoppingBasket
              className="transition-colors duration-300 ease-in hover:text-red-600 active:text-red-600"
              size={24}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
