// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const router = require('express').Router();
const db = require("../models");

// Routes
// =============================================================


// Each of the below routes just handles the HTML page that the user gets sent to.

router.get("/", function (req, res) {
  res.render('index');
});

router.get("/collection", function (req, res) {
  res.render('collection');
});

router.get("/contact", function (req, res) {
  res.render('contact');
});

router.get("/register", function (req, res) {
  res.render('register');
});

router.get("/cart", function (req, res) {
  res.render('cart');
});


// helper for / and blog routes
function renderBlog(req, res) {
  var query = {};
  if (req.query.author_id) {
    query.AuthorId = req.query.author_id;
  }
  db.Post.findAll({
    where: query,
    include: [db.Author]
  }).then(function (posts) {
    res.render('blog', { posts: posts })
  });
}

module.exports = router;