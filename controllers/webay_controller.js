var express = require("express");


// var connection = require("./connection.js");

var router = express.Router();

// Import the model (pet.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.render("index");
});

router.get("/login", function(req, res){
res.render("login")
});

router.get("/register", function(req, res){
    res.render("register")
    });

// Export routes for server.js to use.
module.exports = router;
