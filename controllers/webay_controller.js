var express = require("express");

var router = express.Router();

var customer = require("../models/webay.js");

router.get("/", function(req, res) {
  cusro.all(function(data) {
    var hbsObject = {
        customer: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
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
  