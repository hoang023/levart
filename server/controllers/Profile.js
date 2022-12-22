import { ProfileModel } from "../models/ProfileModel.js";

export const getProfile = async (req, res) => {
  try {
    // const profile = new ProfileModel({
    //     firstName: "Dong Phu",
    //     lastName: "Vo",
    //     dateOfBirth: "2022-12-19",
    //     gender: "Male",
    //     avatar:"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f709d82fa4f131fa2114a74%2F0x0.jpg",
    //     background:"https://thumbs.dreamstime.com/b/travel-accessories-light-blue-background-getting-ready-summer-vacation-d-rendering-150871769.jpg",
    //     UserID: "639e7bbaef55c36c064752f7"
    // })
    // profile.save()
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
