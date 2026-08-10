import express from 'express';
import { addToCart, getCartItem, removeFromCart } from '../controllers/cartItems.js';
import { authenticate } from '../middleware/authentication.js';

const route = express.Router();

// route that will retrieve cart item
route.get('/:productId/item', authenticate, getCartItem);

// route that will add item to cart
route.post('/:cartId/item', authenticate, addToCart);

// route that will delete item from cart
route.delete('/:itemId', authenticate, removeFromCart);
export default route;
