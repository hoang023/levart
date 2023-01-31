import express from "express";
import { getProvinces, createProvince, deleteProvince, updateProvice } from "../controllers/Province.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getProvinces);
router.post("/create-province",createProvince)
router.post("/delete/:id", deleteProvince)
router.patch("/update/:id", updateProvice)

export default router;
