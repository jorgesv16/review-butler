const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;


/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  phone: 'phone',
  username: 'username',
  password: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    first_name: req.body.first_name.trim(),
    last_name: req.body.last_name.trim(),
    phone: req.body.phone.trim(),
    username: req.body.username.trim(),
  };

  const newUser = new User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});
