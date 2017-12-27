const express = require("express");
const path = require("path");

const templateController = new express.Router();

// an array of the static page names I'm going to serve up
const staticPages = [
  "signup",
  "login",
];

// serve the HTML fragments from server/templates/[name].html
staticPages.forEach(page => {
  templateController.get(`/${page}`, (req, res) => {
    res
      .status(200)
      .sendFile(path.join(__dirname, "..", "templates", `${page}.html`));
  });
});

// I don't know if this is useful, but I want to throw a server error for
// requests to a non-configured endpoint
templateController.get("*", (req, res) => {
  res.status(500).json({
    message: "This is not a working API endpoint"
  });
});

module.exports = templateController;
