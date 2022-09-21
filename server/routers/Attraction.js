import express from "express";
import { getAttractions } from "../controllers/Attraction.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getAttractions);
// router.post("/", createPlaces);

export default router;
