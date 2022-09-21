import mongoose from "mongoose";

const Schema = mongoose.Schema;
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
    image: [],
    website: {
      type: String,
    },
    meal: {
      breakfast: {
        type: Boolean,
        default: false,
      },
      lunch: {
        type: Boolean,
        default: false,
      },
      dinner: {
        type: Boolean,
        default: false,
      },
    },
    type: {
      restaurant: {
        type: Boolean,
        default: false,
      },
      quickBites: {
        type: Boolean,
        default: false,
      },
      localFood: {
        type: Boolean,
        default: false,
      },
      barAndPub: {
        type: Boolean,
        default: false,
      },
      coffeeAndTea: {
        type: Boolean,
        default: false,
      },
    },
    specialDiet: {
      vegetarianFriendly: {
        type: Boolean,
        default: true,
      },
      veganOptions: {
        type: Boolean,
        default: true,
      },
      glutenFreeOptions: {
        type: Boolean,
        default: true,
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
      default: "FoodAndDrink",
    },
  },
);

export const FoodAndDrinkModel = mongoose.model("FoodAndDrink", schema);
