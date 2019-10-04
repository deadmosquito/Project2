var db = require("../models");
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var parseString = require('xml2js').parseString;
const saltRounds = 12;
var fs = require("fs");

/////////////////////////Routing For Product APIs////////////////////////////////////////
router.get("/", function (req, res) {
  db.product.findAll({})
    .then(function (dbProduct) {
      //console.log(dbProduct)
      var hbsObject = {
        products: dbProduct
      };
      // console.log(hbsObject.products)
      res.render("index", hbsObject);
    });
});
router.get("/cart/:id", function (req, res) {
  db.product.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbProduct) {
    var hbsObject = {
      product: dbProduct
    };
    //console.log(hbsObject.product)
    res.render("cart", hbsObject);
  }).catch(function (err) {
    //console.log(err)
  })
})
/////////////////////////SHIPING/////////////////////////////////////
router.post("/api/shipping",function(req,res){
  var xml = req.body.RateV4Response
  console.log(xml)
  console.log('---------------SHIPPING')
 /*  parseString(xml, function (err, result) {

      console.dir(result);
  }); */
  
})
/////////////////////////Routing For Customer APIs////////////////////////////////////////
router.get("/api/customers/:id", function (req, res) {
  db.customer.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbCustomer) {
    res.json(dbCustomer);
  });
});

router.get("/api/customers", function (req, res) {
  console.log('-----')
  console.log(req.body);
  
  bcrypt.hash(req.body.userpassword, saltRounds, function (err,   hash) {

  db.customer.create({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      zip: req.body.zip,
      country: req.body.country,
      userpassword: hash,
      phone: req.body.phone
    }).then(function (dbCustomer) {
      if (dbCustomer)

    res.redirect("/");

  }).catch(function(err)
  {
    console.log(err)
  });
});
});
router.post('/api/customers/login', function (req, res) {
  db.customer.findOne({
       where: {
           email: req.body.email
              }
  }).then(function (customer) {
      if (!customer) {
         res.redirect('/');
      } else {
bcrypt.compare(req.body.userpassword, customer.userpassword, function (err, result) {
     if (result == true) {
       console.log("success")
         res.send('/register');
     } else {
      res.redirect('/register');
      console.log("failed")

     }
   });
  }
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