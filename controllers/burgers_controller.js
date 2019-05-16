var express = require("express");

var router = express.Router();
//grab burger.js
var burgers = require("../models/burger.js");

//route collects all information in burgers table and places it where stated in index.handlebars
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// route that grabs the id of the burger devoured and updates devoured col to true
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  //console.log("current id: " + condition);

  // connected to devoured: true in burger_javascript.js
  burgers.updateOne(
    {
      devoured: req.body.devoured 
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

//takes information from textbox and creates new burger in database with devoured default false
router.post("/api/burger", function(req, res) {
  burgers.insertOne(["burger_name"], [req.body.burger_name], function(result) {
    res.json({ id: result.insertID });
  });
});

module.exports = router;