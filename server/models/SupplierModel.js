import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = new mongoose.Schema (
{
  name : {
    type:String,
    required: true,
  },
  phone : {
    type:String,
    required: true,
  },
  email : {
    type:String,
    required: true,
  },
}
)
export const SupplierModel = mongoose.model("Supplier", schema);

//test