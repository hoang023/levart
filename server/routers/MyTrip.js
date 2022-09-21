import express from "express";
import {
  createCollections,
  getMyTrip,
  createPlaceList,
} from "../controllers/MyTrip.js";

const router = express.Router();
//http://localhost:5000

router.get("/:UserID", getMyTrip);
router.patch("/:UserID", createCollections);
router.patch("/:UserID/:collectionID", createPlaceList);
export default router;
