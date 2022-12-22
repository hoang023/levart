import express from "express";
import { getProvinces } from "../controllers/Province.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getProvinces);
export default router;
