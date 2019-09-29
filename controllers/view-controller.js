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




// cms route loads cms.html
router.get("/register", function (req, res) {
  res.render('register');
});

router.get("/", function (req, res) {
  res.render('index');
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