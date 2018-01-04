const express = require('express');
const validator = require('validator');
const passport = require('passport');
const User = require('../../models/user')
const mongoose = require('mongoose');

const router = new express.Router();

mongoose.Promise = global.Promise;


// /**
//  * Validate the sign up form
//  *
//  * @param {object} payload - the HTTP body message
//  * @returns {object} The result of validation. Object contains a boolean validation result,
//  *                   errors tips, and a global message for the whole form.
//  */
// function validateSignupForm(payload) {
//   const errors = {};
//   let isFormValid = true;
//   let message = '';
//
//   if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
//     isFormValid = false;
//     errors.email = 'Please provide a correct email address.';
//   }
//
//   if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
//     isFormValid = false;
//     errors.password = 'Password must have at least 8 characters.';
//   }
//
//   if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
//     isFormValid = false;
//     errors.name = 'Please provide your name.';
//   }
//
//   if (!isFormValid) {
//     message = 'Check the form for errors.';
//   }
//
//   return {
//     success: isFormValid,
//     message,
//     errors
//   };
// }
//
// /**
//  * Validate the login form
//  *
//  * @param {object} payload - the HTTP body message
//  * @returns {object} The result of validation. Object contains a boolean validation result,
//  *                   errors tips, and a global message for the whole form.
//  */
// function validateLoginForm(payload) {
//   const errors = {};
//   let isFormValid = true;
//   let message = '';
//
//   if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
//     isFormValid = false;
//     errors.email = 'Please provide your email address.';
//   }
//
//   if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
//     isFormValid = false;
//     errors.password = 'Please provide your password.';
//   }
//
//   if (!isFormValid) {
//     message = 'Check the form for errors.';
//   }
//
//   return {
//     success: isFormValid,
//     message,
//     errors
//   };
// }

// router.post('/register', (req, res, next) => {
//   console.log(req.body);
//   const validationResult = validateSignupForm(req.body);
//   if (!validationResult.success) {
//     return res.status(400).json({
//       success: false,
//       message: validationResult.message,
//       errors: validationResult.errors
//     });
//   }
//
//   return passport.authenticate('local-signup', (err) => {
//     if (err) {
//       if (err.name === 'MongoError' && err.code === 11000) {
//         // the 11000 Mongo code is for a duplication email error
//         // the 409 HTTP status code is for conflict error
//         return res.status(409).json({
//           success: false,
//           message: 'Check the form for errors.',
//           errors: {
//             email: 'This email is already taken.'
//           }
//         });
//       }
//       return res.status(400).json({
//         success: false,
//         message: 'Could not process the form.'
//       });
//     }
//
//     return res.status(200).json({
//       success: true,
//       message: 'You have successfully signed up! Now you should be able to log in.'
//     });
//   })(req, res, next);
// });

router.post('/register', (req, res) => {
  // Create a user object to save, using values from incoming JSON
  const newUser = new User(req.body);
  console.log("New User: " + newUser);

  // Save, via passport's "register" method, the user
  User.register(newUser, req.body.password, (err, user) => {
    // If there's a problem, send back a JSON object with the error
    if (err) {
      console.log("err");
      console.log(err);
      return res.send(JSON.stringify({ error: err }));
    }
    else {
      console.log("success")
    // Otherwise, for now, send back a JSON object with the new user's info
    return res.send(JSON.stringify(user));
  }
  });
});


router.post('/login', async (req, res) => {
  // look up the user by their email
  const query = User.findOne({ email: req.body.email });
  const foundUser = await query.exec();
  // if they exist, they'll have a username, so add that to our body
  console.log("found user: ", foundUser);
  console.log("req.body: ", req.body);
  console.log("res: ", res);
  if (foundUser) {
    return res.send(JSON.stringify(foundUser));
  }
  // console.log(foundUser);
  // console.log(req.body);
  // passport.authenticate('local-login')(req, res, () => {
  //   // console.log("res", res);
  //   // If logged in, we should have user info to send back
  //   if (res) {
  //     console.log("success");
  //     return res.send(JSON.stringify(res.body));
  //   }
  //   else {
  //   // Otherwise return an error
  //   return res.send(JSON.stringify({ error: 'There was an error logging in' }));
  // }
  // });
});

router.get('/logout', (req, res) => {
  req.logout();
  return res.send(JSON.stringify(req.user));
});



module.exports = router;
