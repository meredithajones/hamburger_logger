//import the following:Express, burger.js

var burger = require ("../modals/burger.js")
var express= require ("express");
//Create the router for the app 
var router = express.Router();

router.get('/', (req, res) => {
    //Why will it not let me use the fat arrow here?
    burger.all(function(data) {
        var hbsObject = {
        burger : data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
        });
    });
    router.post("/api/burgers", (req, res) => {
        burger.create(["burger_name"], 
        [req.body.burger_name], (result) => {
          // Send back the ID of the new quote
          res.json({ id: result.insertId });
        });
      });

      router.put("/api/burgers/:id", (req, res) => {
        var condition = "id = " + req.params.id;
      
        console.log("condition", condition);
      
        burger.update({
          devoured: req.body.burger_name
        }, condition, (result) => {
          if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        });
      });

//export the router at the end of the file.
module.exports = router;