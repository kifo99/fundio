import { Menu, Globe, CircleUser, ShoppingBasket } from 'lucide-react';
import { Link } from 'react-router';

export function Navigation() {
  return (
    <div className="fixed top-0 z-50 w-full min-h-20 bg-transparent text-[#807e7e] grid grid-cols-[auto_auto_auto] justify-around items-center transition-colors duration-500 ease-in hover:bg-white">
      {/* Menu section */}
      <div className="text-inherit">
        <Menu className="transition-colors duration-300 ease-in hover:text-red-600" size={24} />
      </div>
      {/* Web site title section */}
      <div>
        <h1>fundio</h1>
      </div>
      {/* Auth/Language/Cart section */}
      <div>
        <nav>
          <ul className="grid justify-around grid-cols-[auto_auto_auto] items-center">
            <li className="list-none p-2.5">
              <Globe
                className="transition-colors duration-300 ease-in hover:text-red-600"
                size={24}
              />
            </li>

            <li className="list-none p-2.5">
              <Link to="/login">
                <CircleUser
                  className="transition-colors duration-300 ease-in hover:text-red-600"
                  size={24}
                />
              </Link>
            </li>
            <li className="list-none p-2.5">
              <Link to="cart">
                <ShoppingBasket
                  className="transition-colors duration-300 ease-in hover:text-red-600"
                  size={24}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
