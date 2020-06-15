import express from 'express';

const app: express.Application = express();

app.get('/', function (req, res)
{
  console.log("URL : ", req.url, "\nMETHOD : ", req.method, "\nHEADERS : ", req.headers);
  res.send('<h1>Hello World!</h1>');
});

const hostname: string = '0.0.0.0';
const port: number = 8080;
app.listen(port, hostname, function ()
{
  console.log(`Server running at http://${hostname}:${port}/`);
});
