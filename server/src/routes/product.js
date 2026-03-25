import express from 'express';
import {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
  getVendorsProducts,
} from '../controllers/product.js';
const route = express.Router();

//route to retrieve all products
route.get('/products', getProducts);
// route to retrieve all products that vendor created
route.get('/vendors/:vendorId/products', getVendorsProducts);

// route that will create product
route.post('/vendors/:vendorId/product', addProduct);

// route that will remove product
route.delete('/products/:productId', deleteProduct);

// route that will edit product
route.put('/products/:productId', editProduct);

export default route;
