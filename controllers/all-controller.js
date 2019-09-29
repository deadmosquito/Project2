var db = require("../models");
var express = require('express');
var router = express.Router();

router.get("/api/customers", function (req, res) {
  db.customer.findAll({
    include: [db.Post]
  }).then(function (dbCustomer) {
    res.json(dbCustomer);
  });
});

router.get("/api/customers/:id", function (req, res) {
  db.customer.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbCustomer) {
    res.json(dbCustomer);
  });
});

router.post("/api/customers", function (req, res) {
  console.log(req.body);
  db.customer.create({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      zip: req.body.zip,
      country: req.body.country,
      userpassword: req.body.userpassword,
      phone: req.body.phone
    }).then(function (dbCustomer) {
    res.json(dbCustomer);
  }).catch(function(err)
  {
    console.log(err)
  });
});

router.delete("/api/customers/:id", function (req, res) {
  db.customer.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbCustomer) {
    res.json(dbCustomer);
  });
});

module.exports = router;