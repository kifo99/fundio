import express from 'express';
import { getVendor, verifyVendor } from '../controllers/admin.js';

const route = express.Router();

route.get('/vendor/:id', getVendor);
route.patch('/verify/vendor/:id', verifyVendor);

export default route;
