const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  tags:  Array,
  sentiment_score: Number,
  text: {type: String, required: true },
  word_count: Number,
  title: {type: String, required: true, default: null },
  sentences_object: Array,
  review_date: { type: Date, required: true },
  response_date: { type: Date, default: null },
  photos: { type: Number, default: null },
  rating: { type: Number, default: null },
  user_name: { type: String, default: null },
  platform: { type: String, default: 'Yelp' },
  response_text: { type: String, default: null },
  review_read: { type: Date, default: null },
  business_id: { type: String, required: true },
  timestamp: {type: Date, default: Date.now()},  //date time the entry was created
  external_id: {type: String, required: true}
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
