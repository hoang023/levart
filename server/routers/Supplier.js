import  express  from "express";
import { getSupplier, createSupplier } from "../controllers/Supplier.js"

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getSupplier);
router.post("/create-supplier", createSupplier);
export default router;
