import express from "express";
import { getFoodAndDrinks } from "../controllers/FoodAndDrink.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getFoodAndDrinks);
// router.post("/", createPlaces);

export default router;
