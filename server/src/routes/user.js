import express from 'express';
import { getUser } from '../controllers/userController.js';
const route = express.Router();

route.get('/', getUser);

export default route;
