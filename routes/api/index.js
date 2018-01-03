const express = require('express');

const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

module.exports = router;



// const router = require("express").Router();
// const reviewRoutes = require("./reviews");
//
// // Book routes
// router.use("/reviews", reviewRoutes);
//
// module.exports = router;
