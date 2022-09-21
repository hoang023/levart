import express from "express";
import { login, createUsers, verifyToken, isUserLoggedIn, getUser } from "../controllers/User.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/Auth", verifyToken, isUserLoggedIn);
router.post("/login", login);
router.get("/", getUser);
router.post("/register", createUsers);

export default router;
