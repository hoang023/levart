import express from "express";
import { getProfile, updateProfile } from "../controllers/Profile.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getProfile);
router.patch("/update/:id", updateProfile)


export default router;
