//import/require orm.js into burger.js
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

    //Creating the burger
        create: (burger_name, cb) => {
        orm.create(burger_name, (response) => {
        cb(response)
    })
},
        update: (uniqueId, cb) => {
        orm.update(uniqueId, (response) => {
        cb(response)
    })
},
}
//Export at the end of the burger.js file.
module.exports=burger






