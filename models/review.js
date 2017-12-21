var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  tags:  Array,
  word_count: Number,
  sentiment_score: Number,
  text: {type: String, required: true },
  sentences_object: Array,
  review_date: { Date, required: true },
  response_date: { type: Date, default: null },
  photos: { type: Number, default: null },
  rating: { type: Number, default: null },
  user_name: { type: String, default: null },
  platform: { type: String, default: 'Yelp' },
  response_text: { type: String, default: null },
  review_read: { type: Date, default: null },
  review_title: { type: String, default: null },
  business_id: { type: Number, required: true },
  date_stored: {typel: Date, default: Date.now()}
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
