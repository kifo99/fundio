import express from 'express';
import {
  addProduct,
  deleteProduct,
  editProduct,
  getVendorsProducts,
} from '../controllers/product.js';
const route = express.Router();

// TODO create route to retrieve all products that vendor created
route.get('/vendors/:vendorId/products', getVendorsProducts);

// TODO create route that will create product
route.post('/vendors/:vendorId/product', addProduct);

// TODO create route that will remove product
route.delete('/products/:productId', deleteProduct);

// TODO create route that will edit product
route.put('/products/:productId', editProduct);

export default route;
