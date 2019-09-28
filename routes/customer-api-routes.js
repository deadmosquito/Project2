var db = require("../models");

module.exports = function(app) {
  // Find all Customers and return them to the user with res.json
  app.get("/api/customers", function(req, res) {
    db.Customer.findAll({}).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.get("/api/customer/:id", function(req, res) {
    // Find one Customer with the id in req.params.id and return them to the user with res.json
    db.Customer.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.post("/api/customers", function(req, res) {
    // Create an Customer with the data available to us in req.body
    console.log(req.body);
    db.Customer.create(req.body).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  app.delete("/api/customers/:id", function(req, res) {
    // Delete the Customer with the id available to us in req.params.id
    db.Customer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

};