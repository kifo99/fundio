import express from 'express';
import { getUser } from '../controllers/user.js';
import { authenticate } from '../middleware/authentication.js';
const route = express.Router();

route.get('/', authenticate, getUser);

export default route;
