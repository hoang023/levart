import express from "express";
import { getHotels,createHotel, deleteHotel, updateHotel } from "../controllers/Hotel.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getHotels);
router.post("/create-hotel", createHotel);
router.delete("/delete/:id", deleteHotel)
router.patch("/update/:id", updateHotel)

export default router;
