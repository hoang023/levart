import { ProvinceModel } from "../models/ProvinceModel.js";

export const getProvinces = async (req, res) => {
  try {
 

    const provinces = await ProvinceModel.find();

    res.status(200).json(provinces);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const createProvince = async (req, res) => {
  try{
    const dataProvince = req.body
    const province = new ProvinceModel(dataProvince)
    await province.save().then((province)=>{
      ProvinceModel.findById(province._id)
      .exec()
      .then((province)=>{
        res.status(200).json(province)
      })
    })
  } catch(err) {
    res.status(500).json({ error: err });
  }
}