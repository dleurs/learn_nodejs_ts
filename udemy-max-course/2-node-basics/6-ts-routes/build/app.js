"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./routes");
// Create a new express application instance
var app = express();
app.get('/', routes_1.requestHandler);
var hostname = '127.0.0.1';
var port = 8000;
app.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
