// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages

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

router.get("/contact", function (req, res) {
  res.render('contact');
});

router.get("/register", function (req, res) {
  res.render('register');
});

router.get("/profile/:id", function (req, res) {
  res.render('profile');
});

router.get("/cart", function (req, res) {
  res.render('cart');
});

router.get("/login", function (req, res) {
  res.render('login');
});


module.exports = router;