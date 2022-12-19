import { SupplierModel } from "../models/SupplierModel.js";
export const getSupplier = async(req,res) => {
    try{
        // const supplier = new SupplierModel({
        //     name:"ABC Hotel Supplier",
        //     phone: "0125 789 456",
        //     email:"abc@gmail.com",
        // })
        // supplier.save()

    }catch(err) {
        res.status(500).json({ error: err });
    }
}