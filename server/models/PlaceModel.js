import mongoose from "mongoose";
const Schema = mongoose.Schema
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
    provinceID:{
      type: Schema.Types.ObjectId,
      ref: "Province",
    },
    path: {
      type: String,
      default: "Place",
    },
  },
);

export const PlaceModel = mongoose.model("Place", schema);
