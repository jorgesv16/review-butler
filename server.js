const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');
const User = require('./models/user');
const path = require("path");
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

// Routes
const index = require('./routes/index');
const api = require('./routes/api/index');
const users = require('./routes/api/users');
const reviews = require('./routes/api/reviews')
const authentication = require('./routes/api/authentication');

const app = express();

const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//set up sessions and passport
app.use(require('express-session')({
  secret: 'this can be any random string can be here',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("client/build")); <-- INVESTIGATE THIS

app.use('/api', api);
app.use('/api/users', users);
app.use('/api/reviews', reviews);
app.use('/api/authentication', authentication);
app.use('/*', index);

// Configure passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reviewbutler",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
