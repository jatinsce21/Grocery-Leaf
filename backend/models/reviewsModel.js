const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must add name..."],
  },
  review: {
    type: String,
    required: [true, "Must write something...."],
  },
  imageUrl: {
    type: String,
    required: [true, "Image Url is required..."],
  },
  rating: {
    type: String,
    required: [true, "Must be between 0 and 5...."],
    min: 0.0,
    max: 5.0,
    default: 0,
  },
});

module.exports = mongoose.model("Reviews", ReviewSchema);
