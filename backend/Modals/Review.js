import mongoose, { Schema } from 'mongoose';

const reviewSchema = new mongoose.Schema({
  movieId: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  review: {
    type: String,
    required: true,
  },

  rating: {

    type: Number,
    required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Review = mongoose.model('Review', reviewSchema, 'users_reviews');