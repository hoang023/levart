import express from "express";
import { getPlaces,createPlace } from "../controllers/Place.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getPlaces);
 router.post("/create-place", createPlace);

export default router;
