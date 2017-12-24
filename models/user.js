const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  id:  Number,
  username: String,
  password: { type: String, select: false },  
  first_name: String,
  last_name: String,
  phone: Number,
  email: String,
  password: String,
  address: String,
  platform_url: String,
  display_name: String,
  url: String,
  display_occupation: String
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;