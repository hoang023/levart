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
    description: {
      type: String,
    },
    phone: {
      type: String,
    },
    price: {
      type: Number,
    },
    star: {
      type: Number,
    },
    image: [],
    website: {
      type: String,
    },
    type: {
      hotel: {
        type: Boolean,
        default: false,
      },
      hostel: {
        type: Boolean,
        default: false,
      },
      resort: {
        type: Boolean,
        default: false,
      },
      motel: {
        type: Boolean,
        default: false,
      },
    },
    roomType: {
      oceanView: {
        type: Boolean,
        default: true,
      },
      NonSmokingRoom: {
        type: Boolean,
        default: true,
      },
      landmarkView: {
        type: Boolean,
        default: true,
      },
      suite: {
        type: Boolean,
        default: true,
      },
      poolView: {
        type: Boolean,
        default: true,
      },
    },
    roomFeatures: {
      airConditioning: {
        type: Boolean,
        default: true,
      },
      privateBalcony: {
        type: Boolean,
        default: true,
      },
      bar: {
        type: Boolean,
        default: true,
      },
      safe: {
        type: Boolean,
        default: true,
      },
      refrigerator: {
        type: Boolean,
        default: true,
      },
      flatScreen: {
        type: Boolean,
        default: true,
      },
    },
    property: {
      freeParking: {
        type: Boolean,
        default: true,
      },
      wifi: {
        type: Boolean,
        default: true,
      },
      pool: {
        type: Boolean,
        default: true,
      },
      fitnessCenterWithGym: {
        type: Boolean,
        default: true,
      },
      freeBreakfast: {
        type: Boolean,
        default: true,
      },
      beach: {
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
      default: "Hotel",
    },
  },
);

export const HotelModel = mongoose.model("Hotel", schema);
