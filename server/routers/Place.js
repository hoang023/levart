import express from "express";
import { getPlaces,createPlace, deletePlace, updatePalace } from "../controllers/Place.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getPlaces);
router.post("/create-place", createPlace);
router.delete("/delete/:id", deletePlace)
router.patch("/update/:id")

export default router;
