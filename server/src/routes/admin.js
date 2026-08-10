import express from 'express';
import { getVendor, verifyVendor } from '../controllers/admin.js';
import { authenticate } from '../middleware/authentication.js';

const route = express.Router();

route.get('/vendor/:id', authenticate, getVendor);
route.patch('/verify/vendor/:id', authenticate, verifyVendor);

export default route;
