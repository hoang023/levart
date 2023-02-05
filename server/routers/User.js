import express from "express";
import { login, createUsers, verifyToken, isUserLoggedIn, getUser, deleteUsers, updateUsers } from "../controllers/User.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/Auth", verifyToken, isUserLoggedIn);
router.post("/login", login);
router.get("/", getUser);
router.post("/register", createUsers);
router.delete("/delete/:id",deleteUsers)
router.patch("/update/:id",updateUsers)

export default router;
