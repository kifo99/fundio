import { CircleUser, Globe, Logs, ShoppingBasket } from 'lucide-react';
import { Link } from 'react-router';

export function DesktopNavLinks({ onSetIsOpen, isAuth }) {
  return (
    <div className="hidden md:block">
      <ul className="grid justify-around grid-cols-[auto_auto_auto] items-center">
        <li className="list-none p-2.5">
          <Globe
            className="transition-colors duration-300 ease-in hover:text-red-600 active:text-red-600"
            size={24}
          />
        </li>

        <li className="list-none p-2.5">
          {!isAuth ? (
            <Link to="/auth" onClick={() => onSetIsOpen(false)}>
              <CircleUser
                className="transition-colors duration-300 ease-in hover:text-red-600 active:text-red-600"
                size={24}
              />
            </Link>
          ) : (
            <Link to="/profile" onClick={() => onSetIsOpen(false)}>
              <Logs
                className="transition-colors duration-300 ease-in hover:text-red-600 active:text-red-600"
                size={24}
              />
            </Link>
          )}
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
  );
}
