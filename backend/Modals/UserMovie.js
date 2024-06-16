import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      ratings: {
        type: Number,
        required: true
      },
      genre: {
        type: String,
        required: true
      },
      language: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },

     userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});

export const UserMovie = mongoose.model("Post", postSchema, "User_movie");