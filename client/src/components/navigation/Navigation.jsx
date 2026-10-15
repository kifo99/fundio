import { Menu, Globe, CircleUser, ShoppingBasket, X, Logs } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import { DesktopNavLinks } from './DesktopNavLinks';
import { BackdropOverlay } from './BackdropOverlay';
import { MobileNavLinks } from './MobileNavLinks';
import { NavMenuButton } from './NavMenuButton';
import { NavTitle } from './NavTitle';
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <div className="relative lg:fixed lg:top-0 lg:left-0 z-50 w-full min-h-20 bg-white sm:bg-white lg:bg-transparent text-[#807e7e] grid grid-cols-[auto_auto_auto] justify-around items-center transition-colors duration-500 ease-in hover:bg-white">
      <NavMenuButton onSetIsOpen={setIsOpen} />
      <NavTitle />
      <DesktopNavLinks onSetIsOpen={setIsOpen} isAuth={isAuth} />

      <BackdropOverlay onSetIsOpen={setIsOpen} isOpen={isOpen} />

      <MobileNavLinks onSetIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}
