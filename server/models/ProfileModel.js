import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default:
      "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f709d82fa4f131fa2114a74%2F0x0.jpg",
  },
  background: {
    type: String,
    default:
      "https://thumbs.dreamstime.com/b/travel-accessories-light-blue-background-getting-ready-summer-vacation-d-rendering-150871769.jpg",
  },
  UserID: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const ProfileModel = mongoose.model("Profile", schema);
