import express from "express";
import { getUser } from "../controllers/user.js";
const route = express.Router();

route.get("/user", getUser);

export default route;
