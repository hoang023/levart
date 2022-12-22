import express from "express";
import { getProvinces, createProvince } from "../controllers/Province.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getProvinces);
router.post("/create-province",createProvince)
export default router;
