// npm install mongodb; npm install @types/mongodb;
import express from 'express';
import { mongoConnect } from './utils/database';
import { Todo } from './models/todo';

const app: express.Application = express();

app.get('/', (req, res, _) => // _ = next
{
  console.log("URL : ", req.url, "\nMETHOD : ", req.method, "\nHEADERS : ", req.headers);
  res.send('<h1>Hello World!</h1>');
});

const hostname: string = process.env.HOST_ADDR || "0.0.0.0";
const port: string = process.env.PORT || "8080";
const nodeEnv: string = process.env.NODE_ENV || "development";
const password: string = process.env.PASSWORD || "not set";

app.listen(parseInt(port), hostname, async function ()
{
  console.log(`Server running at http://${hostname}:${port}/ in ${nodeEnv}`);
  console.log(`Connecting to mongoDB using password ${password}`);
  const firstTodo: Todo = new Todo({title: "Do sport"});
  await mongoConnect("todos");
  await firstTodo.save();
});

