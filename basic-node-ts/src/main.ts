import express from 'express';
import bodyParser from 'body-parser';

const app: express.Application = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res, _) => // _ = next
{
  console.log("URL : ", req.url, "\nMETHOD : ", req.method, "\nHEADERS : ", req.headers);
  res.send('<h1>Hello World!</h1>');
});

//const hostname: string = process.env.HOST_ADDR || "0.0.0.0";
const port: string = process.env.PORT || "8080";
const nodeEnv: string = process.env.NODE_ENV || "development";
app.listen(parseInt(port), function () 
{
  console.log(`Server running at http://localhost:${port}/ in ${nodeEnv}`);
});
