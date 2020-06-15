// lib/app.ts
import express = require('express');
import fs from 'fs';

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res)
{
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    return res.end();
});

app.post('/message', function (req, res)
{
    const body: any[] = [];
    req.on('data', function (chunk) // Launched in async, after res.write("<h1>Message received ! Thank you</h1>"); return res.end();
    {
        console.log(chunk);
        console.log(chunk.toString());
        body.push(chunk);
    });
    req.on('end', function () // Launched in async, after res.write("<h1>Message received ! Thank you</h1>"); return res.end(); or use return
    //return req.on('end', function ()
    {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('message.txt', message); // Sync means synchronous, blocking 
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

const hostname = '127.0.0.1';
const port = 8000;
app.listen(port, hostname, function ()
{
    console.log(`Server running at http://${hostname}:${port}/`);
});