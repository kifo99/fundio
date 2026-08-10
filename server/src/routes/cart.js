import express from 'express';
import { addCart, deleteCart, getCart, getItems } from '../controllers/cart.js';
import { authenticate } from '../middleware/authentication.js';
const route = express.Router();

// route that will retrieve users cart
route.get('/:userId', authenticate, getCart);

// rout that will retrieve all items inside the cart
route.get('/:cartId/items', authenticate, getItems);

// route that will add cart for user
route.post('/:userId', authenticate, addCart);

// route that will delete cart
route.delete('/:cartId', authenticate, deleteCart);

export default route;
