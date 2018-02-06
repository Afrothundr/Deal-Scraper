// Routes
const express = require('express');
const router = express.Router();
const db = require("../models");

module.exports = function(app) {
  // Route for getting all Articles from the db
  app.get("/", function(req, res) {
    res.render("index");
  });
  app.get("/articles", function(req, res) {
    // TODO: Finish the route so it grabs all of the articles
  });
  
  // Route for grabbing a specific Article by id, populate it with it's note
  app.get("/articles/:id", function(req, res) {
    // TODO
    // ====
    // Finish the route so it finds one article using the req.params.id,
    // and run the populate method with "note",
    // then responds with the article with the note included
  });
}  
