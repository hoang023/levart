import { ProfileModel } from "../models/ProfileModel.js";

export const getProfile = async (req, res) => {
  try {
    await ProfileModel.find()
      .populate({
        path: "UserID",
      })
      .exec()
      .then((profile) => {
        res.status(200).json(profile);
      });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const updateProfile = async (req,res) => {
  try {
    const profileData = req.body
    await ProfileModel.findOneAndUpdate(
      {_id: profileData._id},
      profileData,
      {new: true}
    )
    .populate({
      path:"UserID"
    })
    .exec()
    .then((profile)=>{
      res.status(200).json(profile)
    })
    
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
