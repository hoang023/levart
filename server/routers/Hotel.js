import express from "express";
import { getHotels } from "../controllers/Hotel.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getHotels);
// router.post("/", createPlaces);

export default router;
