import mongoose from "mongoose";
import { PlaceListModel } from "./PlaceListModel.js";
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
  },
  placeList: { type: [PlaceListModel] , default: []},
});

export const CollectionModelModel = schema;
