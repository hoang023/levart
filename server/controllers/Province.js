import { ProvinceModel } from "../models/ProvinceModel.js";

export const getProvinces = async (req, res) => {
  try {
 

    const provinces = await ProvinceModel.find();

    res.status(200).json(provinces);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};