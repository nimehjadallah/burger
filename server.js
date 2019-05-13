var express = require('express');


var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));












app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });