import express from "express";
import { getProfile } from "../controllers/Profile.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getProfile);

export default router;
