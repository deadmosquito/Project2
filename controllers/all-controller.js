var db = require("../models");
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const saltRounds = 12;

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

router.post("/api/customers", function (req, res) {
  console.log('-----')
  console.log(req.body);

  bcrypt.hash(req.body.userpassword, saltRounds, function (err, hash) {

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

    }).catch(function (err) {
      console.log(err)
    });
  });
});
router.post('/api/customers/login', function (req, res) {
  db.customer.findOne({
    where: {
      email: req.body.email
    }
  }).then(function (results) {
    if (!results) {

 console.log(results)
 
      return res.json({
       success: results
       })
      
    } else {
      bcrypt.compare(req.body.userpassword, results.userpassword, function (err, result) {
        return res.json({
          success: result
        })
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