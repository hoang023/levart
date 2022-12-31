import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = new mongoose.Schema (
    {
        ProfileID: {
            type: Schema.Types.ObjectId,
            ref: "Profile",
          },
        HotelID: {
            type: Schema.Types.ObjectId,
            ref: "Hotel"
          },
        noticeTitle: {
            type: String,
            required: true,
          },
        checkIn: {
          type: Date,
          required: true,
        },
        checkOut: {
          type: Date,
          required: true,
        },
        statusRequest: {
          type: String,
          required: true,
          default: 'Not Approved',
          enum : ['Approved','Not Approved'],
        }
    }
)
export const RequestModel = mongoose.model("Request", schema);
// aaa