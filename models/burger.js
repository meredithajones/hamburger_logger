//import/require orm.js into burger.js
const { response } = require("express");
var orm = require("../config/orm.js")

//create the code that will call the ORM functions using burger 
//specific input for the ORM.
const burger = {
    //Need to render the burger to the index.handlebars file
    //setting up the callback function for all burgers
    all: (cb) => {
        orm.all("burgers", (response) => {
            cb(response);
        }) 
    },

// The variables cols and vals are arrays.
// we need to call the orm passing name of the table, 
// array with the attributes, array with the values, cb function

create: (name, cb) => {
  orm.create("burgers", [
   "burger_name", "devoured" 
 ], [
   name, false
 ], cb);
},

  // create: (cols, vals, cb) => {
  //   orm.create("burgers", cols, vals, (response) => {
  //     cb(response);
  //   });
  // },
  update:(objColVals, condition, cb) => {
    orm.update("burgers", objColVals, condition, (response) => {
      cb(response);
    });
  },

    //Creating the burger
//         create: (burger_name, cb) => {
//         orm.create("burgers","burger_name", burger_name, (response) => {
//         cb(response)
//     })
// },
//         update: (colToUpdate, condition, cb) => {
//         orm.update("burgers", colToUpdate, condition, (response) => {
//         cb(response)
//     })
// },

    //Devouring the burger– delete
        delete: (condition, cb) => {
        orm.delete(condition, (response) => {
      cb(response)
    });
  },
};


//Export at the end of the burger.js file.
module.exports=burger






