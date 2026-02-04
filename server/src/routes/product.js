import express from 'express';

const route = express.Router();

// TODO create route to retrieve all products that vendor created
route.get('/vendors/:vendorId/products');

// TODO create route that will create product
route.post('/vendors/:vendorId/product');

// TODO create route that will remove product
route.delete('/products/:productId');

// TODO create route that will edit product
route.put('/products/:productsId');

export default route;
