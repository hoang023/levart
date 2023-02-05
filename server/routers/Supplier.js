import  express  from "express";
import { getSupplier, createSupplier, deleteSupplier, updateSupplier } from "../controllers/Supplier.js"

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getSupplier);
router.post("/create-supplier", createSupplier);
router.delete("/delete/:id", deleteSupplier)
router.patch("/update/:id",updateSupplier)
export default router;
