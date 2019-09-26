// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var customer = {
  all: function(cb) {
    orm.all("customer", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("customer", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("customer", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = customer;
