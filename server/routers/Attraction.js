import express from "express";
import { getAttractions, createAttraction } from "../controllers/Attraction.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getAttractions);
 router.post("/create-attraction", createAttraction);

export default router;
