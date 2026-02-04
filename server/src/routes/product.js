import express from 'express';

const route = express.Router();

// TODO create route to retrieve all products that vendor created
route.get('/:id/products');

// TODO create route that will create product
route.post('/product');

// TODO create route that will remove product
route.delete('/:id');

// TODO create route that will edit product
route.put('/:id');
