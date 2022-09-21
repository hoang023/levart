import express from "express";
import { getPlaces } from "../controllers/Place.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getPlaces);
// router.post("/", createPlaces);

export default router;
