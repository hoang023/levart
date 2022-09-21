import mongoose from "mongoose";

const Schema = mongoose.Schema;
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  phone: {
    type: String,
  },
  price: {
    type: Number,
  },
  openTime: {
    type: String,
  },
  closeTime: {
    type: String,
  },
  duration: {
    type: Number,
  },
  image: [],
  website: {
    type: String,
  },
  type: {
    landmark: {
      type: Boolean,
      default: false,
    },
    museum: {
      type: Boolean,
      default: false,
    },
    amusementPark: {
      type: Boolean,
      default: false,
    },
  },
  evaluatePoint: {
    type: Number,
  },
  placeID: {
    type: Schema.Types.ObjectId,
    ref: "Place",
  },
  provinceID: {
    type: Schema.Types.ObjectId,
    ref: "Province",
  },
  path: {
    type: String,
    default: "Attraction",
  },
});

export const AttractionModel = mongoose.model("Attraction", schema);
