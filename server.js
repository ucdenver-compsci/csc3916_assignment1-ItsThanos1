var express = require('express');
var server = express();

// Middleware to parse text/plain requests
server.use(express.text());

server.post("/", function(req, res) {
    console.log("I got: " + req.body);
    res.send(req.body); // Echo back the plain text
});

server.listen(3000, function() {
    console.log("Express echo server is listening on port 3000");
});
