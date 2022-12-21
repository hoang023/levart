import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "User",
      enum: ["Admin", "Supplier", "User"],
      
    },
  },
);

export const UserModel = mongoose.model("User", schema);
