import express from "express";
import { getHotels,createHotel } from "../controllers/Hotel.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getHotels);
 router.post("/create-hotel", createHotel);

export default router;
