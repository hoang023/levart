import  express  from "express";
import { getRequest, createRequest } from "../controllers/Request.js"

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getRequest);
router.post("/create-request",createRequest)
export default router;
