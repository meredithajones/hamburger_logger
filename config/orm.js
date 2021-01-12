//Import (require) connection.js into orm.js
var connection = require("../config/connection.js");

//In the orm.js file, create the methods that will execute the
//necessary MySQL commands in the controllers.
//These are the methods you will need to use in order to retrieve and store data in your database.

let orm = {
  //selectAll()–(Abbreviating callback to 'cb')
  all: (tableInput, cb) => {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //insertOne()
  create: (newBurger, cb) => {
    var queryStr = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(queryStr, newBurger, (err, result) => {
      if (err) {
        throw err;
      }
      // run the callback function from burgers_controller.js
      cb(result);
    });
  },

  //updateOne()
  update: (uniqueId, cb) => {
    var queryString = "UPDATE burgers SET devoured = NOT devoured WHERE id = ?";
    connection.query(queryString, uniqueId, (err, result) => {
      if (err) {
        throw err;
      }
      // run the callback function from burgers_controller.js
      // with result as argument for response.json({id: result.insertId})
      cb(result);
    });
  },
};

//Export the ORM object in module.exports for burger.js.
module.exports = orm;
