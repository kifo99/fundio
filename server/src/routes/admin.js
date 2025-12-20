import express from 'express';
import { verifyVendor } from '../controllers/admin.js';

const route = express.Router();

route.patch('/verify/vendor/:id', verifyVendor);

export default route;
