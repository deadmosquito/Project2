var express = require("express");


// var connection = require("./connection.js");

var router = express.Router();

// Import the model (pet.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/login", function (req, res) {
  res.render("login")
});

router.get("/account", function (req, res) {
  res.render("account")
});

router.get("/register", function (req, res) {
  res.render("register")
});

router.get("/cart", function (req, res) {
  res.render("cart")
});



// Export routes for server.js to use

var customer = require("../models/customer.js");

router.get("/", function (req, res) {

  res.render("index");

});

router.post("/api/customer", function (req, res) {
  customer.create(
    ["fname", "lname", "phone", "address", "zip", "city", "country", "userpassword"],
    [req.body.fname, req.body.lname, req.body.address, req.body.zip, req.body.city, req.body.country, req.body.password],
    function (result) {
      res.json({ id: result.insertId });
    });
});

router.put("/api/customer/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  customer.update(
    {
      fname: req.body.fname,
      lname: req.body.lname,
      phone: req.body.phone,
      address: req.body.address,
      zip: req.body.zip,
      city: req.body.city,
      country: req.body.country,
      userpassword: req.body.userpassword
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

module.exports = router;


