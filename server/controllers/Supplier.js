import { SupplierModel } from "../models/SupplierModel.js";
export const getSupplier = async(req,res) => {
    try{
        // const supplier = new SupplierModel({
        //     name:"ABC Hotel Supplier",
        //     phone: "0125 789 456",
        //     email:"abc@gmail.com",
        // })
        // supplier.save()
        await SupplierModel.find()
        .populate({
            path: "UserID"
        })
        .exec()
        .then((requests)=>{
            res.status(200).json(requests)
        })
    }catch(err) {
        res.status(500).json({ error: err });
    }
}
export const createSupplier =  async(req,res) => {
    try{
        const dataSupplier = req.body
        const supplier = new SupplierModel(dataSupplier)
        await supplier.save().then((supplier)=>{
            SupplierModel.findById(supplier._id)
            .populate({
                path: "UserID"
            })
            .exec()
            .then((supplier)=>{
                res.status(200).json(supplier)
            })
        })
    }catch(err) {
        res.status(500).json({ error: err });
    }

}