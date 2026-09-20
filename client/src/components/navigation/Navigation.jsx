import { Menu, Globe, CircleUser, ShoppingBasket, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:fixed md:top-0 md:left-0 z-50 w-full min-h-20 bg-white sm:bg-white md:bg-white lg:bg-transparent text-[#807e7e] grid grid-cols-[auto_auto_auto] justify-around items-center transition-colors duration-500 ease-in hover:bg-white">
      {/* Menu section */}
      <div className="text-inherit">
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu
            className="transition-colors duration-300 ease-in hover:text-red-600 active:text-red-600"
            size={24}
          />
        </button>
      </div>
      {/* Web site title section */}
      <div>
        <h1>fundio</h1>
      </div>
      {/* Auth/Language/Cart section */}
      <div className="hidden md:block">
        <ul className="grid justify-around grid-cols-[auto_auto_auto] items-center">
          <li className="list-none p-2.5">
            <Globe
              className="transition-colors duration-300 ease-in hover:text-red-600 active:text-red-600"
              size={24}
            />
          </li>

          <li className="list-none p-2.5">
            <Link to="/login">
              <CircleUser
                className="transition-colors duration-300 ease-in hover:text-red-600 active:text-red-600"
                size={24}
              />
            </Link>
          </li>
          <li className="list-none p-2.5">
            <Link to="cart">
              <ShoppingBasket
                className="transition-colors duration-300 ease-in hover:text-red-600 active:text-red-600"
                size={24}
              />
            </Link>
          </li>
        </ul>
      </div>
      {/* Backdrop overlay*/}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
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
            <Link to="/auth" onClick={() => setIsOpen(false)}>
              <CircleUser
                className="transition-colors duration-300 ease-in hover:text-red-600 active:text-red-600"
                size={24}
              />
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <Link to="cart" onClick={() => setIsOpen(false)}>
              <ShoppingBasket
                className="transition-colors duration-300 ease-in hover:text-red-600 active:text-red-600"
                size={24}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
