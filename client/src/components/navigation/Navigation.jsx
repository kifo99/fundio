import { Globe, CircleUser, ShoppingBasket } from 'lucide-react';
import './navigation.css';

export function Navigation() {
  return (
    <div className="navbar">
      {/* Menu section */}
      <div className="navbar-menu">
        <p>menu</p>
      </div>
      {/* Web site title section */}
      <div className="navbar-brand">
        <h1>fundio</h1>
      </div>
      {/* Auth/Language/Cart section */}
      <div className="navbar-actions">
        <nav>
          <ul className="navbar-actions-list">
            <li className="navbar-action-item">
              <a href="#">
                <Globe className="navbar-action-item-icon" size={24} />
              </a>
            </li>

            <li className="navbar-action-item">
              <a href="#">
                <CircleUser className="navbar-action-item-icon" size={24} />
              </a>
            </li>
            <li className="navbar-action-item">
              <a href="#">
                <ShoppingBasket className="navbar-action-item-icon" size={24} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
