import express from 'express';
import { addCart, deleteCart, getCart } from '../controllers/cart.js';
const route = express.Router();

// TODO Create route that will retrieve users cart
route.get('/:userId', getCart);

// TODO Create route that will add cart for user
route.post('/:userId', addCart);

// TODO Create route that will delete cart
route.delete('/:cartId', deleteCart);

export default route;
