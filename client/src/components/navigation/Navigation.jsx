import { Menu, Globe, CircleUser, ShoppingBasket } from 'lucide-react';
import { useNavigate, Link } from 'react-router';
import './navigation.scss';

export function Navigation() {
  let navigate = useNavigate();

  return (
    <div className="navbar">
      {/* Menu section */}
      <div className="navbar-menu">
        <Menu className="navbar-action-item-icon" size={24} />
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
              <Globe className="navbar-action-item-icon" size={24} />
            </li>

            <li className="navbar-action-item">
              <Link to="/login">
                <CircleUser className="navbar-action-item-icon" size={24} />
              </Link>
            </li>
            <li className="navbar-action-item">
              <Link to="cart">
                <ShoppingBasket className="navbar-action-item-icon" size={24} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
