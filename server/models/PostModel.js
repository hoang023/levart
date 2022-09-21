import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      require: true,
      
    },
    attachment: String,
  },
);

export const PostModel = mongoose.model("Post", schema);
