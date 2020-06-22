import express from 'express';
//import mysql2 from 'mysql2';

const app: express.Application = express();
const mysql = require('mysql2');

app.get('/', (req, res, __) =>
{
  console.log("URL : ", req.url, "\nMETHOD : ", req.method, "\nHEADERS : ", req.headers);
  res.send('<h1>Hello World!</h1>');
});

app.use('/', (_, res, __) =>
{
  res.status(404).send('<h1>404 - Page not found</h1>');
});

const hostname: string = process.env.HOST_ADDR || "0.0.0.0";
const port: string = process.env.PORT || "8080";
const nodeEnv: string = process.env.NODE_ENV || "development";
app.listen(parseInt(port), hostname, function ()
{
  console.log(`Server running at http://${hostname}:${port}/ in ${nodeEnv}`);
});
