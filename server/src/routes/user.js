import express from "express";
import { getUser } from "../controllers/userController.js";
const route = express.Router();

route.get("/users", getUser);

export default route;
