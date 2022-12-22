import  express  from "express";
import { getSupplier } from "../controllers/Supplier.js"

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getSupplier);
export default router;
