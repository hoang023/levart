import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,

    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image:[],
    path: {
      type: String,
      default: "Province",
    },
  },
);

export const ProvinceModel = mongoose.model("Province", schema);
