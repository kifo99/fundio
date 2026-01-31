import './productCard.scss';

// TODO Add proper animation on this component
export function ProductCard({ imgUrl, productName, price }) {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={`${imgUrl}`} alt="Image of product" />
      </div>
      <div className="product-card__name">
        <h3>{productName}</h3>
      </div>
      <div className="product-card__price">
        <p>{price}$ kg</p>
      </div>
    </div>
  );
}
