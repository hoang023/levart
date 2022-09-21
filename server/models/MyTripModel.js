import mongoose from "mongoose";
import {CollectionModelModel}  from "./CollectionModel.js";
const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  collections: {
    type:[
      CollectionModelModel
    ],
    default: []
  },
  // collections: {
  //   type: [
  //     {
  //       name: {
  //         type: String,
  //       },
  //       placeList: [
  //         {
  //           placeList_id: {
  //             type: Schema.Types.ObjectId,
  //             refPath: "collections.placeList.externalModelType",
  //           },
  //           externalModelType: {
  //             type: String,
  //             required: true,
  //             enum: [
  //               "Province",
  //               "Place",
  //               "Hotel",
  //               "Attraction",
  //               "FoodAndDrink",
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  UserID: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const MyTripModel = mongoose.model("MyTrip", schema);
