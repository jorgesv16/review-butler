require('babel-register');
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const path = require("path");
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.babel');
const passport = require('passport');

// Routes
const index = require('./routes/index');
const api = require('./routes/api/index');
const users = require('./routes/api/users');
const reviews = require('./routes/api/reviews')
const authentication = require('./routes/api/authentication');
const authCheckMiddleware = require('./routes/api/auth-check');

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
// load passport strategies
const localSignupStrategy = require('./controllers/passport/local-signup');
const localLoginStrategy = require('./controllers/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("client/build"))

app.use('/api', api);
app.use('/api/users', users);
app.use('/api/reviews', reviews);
app.use('/api/authentication', authentication);
app.use('/api', authCheckMiddleware); // <-- should be /api not api/authcheck
app.use('/*', index);

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
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
