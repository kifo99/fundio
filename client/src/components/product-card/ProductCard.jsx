import './productCard.scss';
import { ShoppingBasket } from 'lucide-react';

// TODO Add proper animation on this component
export function ProductCard({ imgUrl, productName, price }) {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={`${imgUrl}`} alt="Image of product" />
      </div>
      <div className="product-card__body">
        <div className="product-card__header">
          <h3 className="header__title">{productName}</h3>
          <p>{price}$</p>
        </div>
        <div className="product-card__description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            nostrum nihil magni error qui, quaerat nemo alias vitae veniam,
            aspernatur tempore numquam, eius consequuntur sit praesentium
            necessitatibus debitis voluptates. Deleniti.
          </p>
        </div>
      </div>
      <div className="product-card__footer">
        <i>
          <ShoppingBasket />
        </i>
      </div>
    </div>
  );
}
