const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: { type: String, select: false },
  platform_id: String,
  phone: Number,
  email: String,
  address: String,
  url: String,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
