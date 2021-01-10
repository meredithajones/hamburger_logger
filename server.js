//Require Express
const express = require('express')
const app = express()

var PORT = process.env.PORT || 3000;


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });