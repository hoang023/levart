import { ProfileModel } from "../models/ProfileModel.js";
import { SupplierModel } from "../models/SupplierModel.js";
import { UserModel } from "../models/UserModel.js";
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
export const deleteSupplier = async(req,res) => {
    try{
        const {id} = req.params
         const supplier = await SupplierModel.findByIdAndRemove(id)
         await UserModel.findOneAndRemove({_id:supplier.UserID})
         await ProfileModel.findOneAndRemove({UserID: supplier.UserID})
        res.status(200).json (
            {
                message: "Delete sucessfull"
            }
        )
    }catch(err) {
        res.status(500).json({ error: err })
    }
}
export const updateSupplier = async(req,res) => {
    try{
        const supplierData = req.body
        await SupplierModel.findOneAndUpdate(
            {_id: supplierData._id},
            supplierData,
            {new:true}
        )
        .populate({
            path:"UserID"
        })
        .exec()
        .then((supplier)=>{
            res.status(200).json (supplier)
        })
      
    }catch (err) {  
        res.status(500).json({ error: err })
    }
}