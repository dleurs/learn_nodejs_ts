"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express = require("express");
var fs_1 = __importDefault(require("fs"));
// Create a new express application instance
var app = express();
app.get('/', function (req, res) {
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    return res.end();
});
app.post('/message', function (req, res) {
    var body = [];
    req.on('data', function (chunk) {
        console.log(chunk);
        console.log(chunk.toString());
        body.push(chunk);
    });
    req.on('end', function () {
        var parsedBody = Buffer.concat(body).toString();
        var message = parsedBody.split('=')[1];
        fs_1.default.writeFileSync('message.txt', message); // Sync means synchronous, blocking 
        /*
        Non blocking
        fs.writeFile('message.txt', message, err => {
        })
        */
        // Only if return
        //res.write("<h1>Message " + message.toString() + " received ! Thank you</h1>");
        //return res.end();
    });
    res.write("<h1>Message received ! Thank you</h1>");
    return res.end();
});
var hostname = '127.0.0.1';
var port = 8000;
app.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
