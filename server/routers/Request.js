import  express  from "express";
import { getRequest, createRequest, updateRequest, deleteRequest } from "../controllers/Request.js"

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getRequest);
router.post("/create-request",createRequest)
router.delete("/delete/:id")
router.patch("/:id", updateRequest)
export default router;
