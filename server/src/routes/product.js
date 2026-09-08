import express from 'express';
import {
  addProduct,
  deleteProduct,
  editProduct,
  getVendorsProducts,
} from '../controllers/product.js';
import { authenticate } from '../middleware/authentication.js';
const route = express.Router();

// route to retrieve all products that vendor created
route.get('/', authenticate, getVendorsProducts);

// route that will create product
route.post('/', authenticate, addProduct);

// route that will remove product
route.delete('/products/:productId', authenticate, deleteProduct);

// route that will edit product
route.patch('/products/:productId', authenticate, editProduct);

export default route;
