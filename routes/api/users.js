const express = require('express');

const router = express.Router();

// Import our User model
const User = require('../../models/user');

// GET User List.
router.get('/list', (req, res, next) => {
  // Find all matching users, which in this case is all of them
  User.find((err, users) => {
    if (err) {
      // if something's broken, send an error
      return res.send(err);
    }
    // Otherwise, send the array of users.
    return res.json(users);
  });
});

router.get('/:id', (req, res) => {
  User.findById(id, function (err, user) {
  	if (err) {
      // if something's broken, send an error
      return res.send(err);
    }
    return res.json(user);
  });
});

router.get('')

module.exports = router;
