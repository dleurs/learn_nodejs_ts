import express from 'express';
import bodyParser from 'body-parser';
import crypto from 'crypto';

const app: express.Application = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/:msg', (req, res, _) => // _ = next
{
  const msg: string = req.params.msg;
  const msgMd5: string = crypto.createHash('md5').update(msg).digest("hex");
  res.json({message: msgMd5});
});

//const hostname: string = process.env.HOST_ADDR || "0.0.0.0";
const port: string = process.env.PORT || "8080";
const nodeEnv: string = process.env.NODE_ENV || "development";
app.listen(parseInt(port), function () 
{
  console.log(`Server running at http://localhost:${port}/ in ${nodeEnv}`);
});
