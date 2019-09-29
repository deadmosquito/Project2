const db = require("../models");
const express = require('express');
const router = express.Router();

// Find all Authors and return them to the user with res.json
router.get("/api/customers", function (req, res) {
  db.Customer.findAll({
    include: [db.Post]
  }).then(function (dbAuthor) {
    res.json(dbAuthor);
  });
});

router.get("/api/customers/:id", function (req, res) {
  // Find one Author with the id in req.params.id and return them to the user with res.json
  db.Customer.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbAuthor) {
    res.json(dbAuthor);
  });
});

router.post("/api/customers", function (req, res) {
  // Create an Author with the data available to us in req.body
  console.log(req.body);
  db.Customer.create(req.body).then(function (dbAuthor) {
    res.json(dbAuthor);
  });
});

router.delete("/api/customers/:id", function (req, res) {
  // Delete the Author with the id available to us in req.params.id
  db.Customer.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbAuthor) {
    res.json(dbAuthor);
  });
});

module.exports = router;