import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = new Schema({
  placeList_id: {
    type: Schema.Types.ObjectId,
    refPath: "collections.placeList.externalModelType",
  },
  externalModelType: {
    type: String,
    enum: ["Province", "Place", "Hotel", "Attraction", "FoodAndDrink"],
  },
});

export const PlaceListModel = schema;
