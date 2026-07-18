import express from 'express';
import { addCart, deleteCart, getCart, getItems } from '../controllers/cart.js';
const route = express.Router();

// route that will retrieve users cart
route.get('/:userId', getCart);

// rout that will retrieve all items inside the cart
route.get('/:cartId/items', getItems);

// route that will add cart for user
route.post('/:userId', addCart);

// route that will delete cart
route.delete('/:cartId', deleteCart);

export default route;
