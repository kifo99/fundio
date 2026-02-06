import express from 'express';
import {
  addToCart,
  getCartItem,
  removeFromCart,
} from '../controllers/cartItems.js';

const route = express.Router();

// route that will retrieve cart item
route.get('/:productId/item', getCartItem);

// route that will add item to cart
route.post('/:cartId/item', addToCart);

// route that will delete item from cart
route.delete('/:itemId', removeFromCart);
export default route;
