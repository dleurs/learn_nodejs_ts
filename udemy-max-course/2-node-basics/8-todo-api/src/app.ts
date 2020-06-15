import express from 'express';
import bodyParser from 'body-parser';
import todosRoutes from '../routes/todos';

// Create a new express application instance
const app: express.Application = express();

app.use(bodyParser.json());
app.use(todosRoutes);

const hostname: string = '127.0.0.1';
const port: number = 8000;
app.listen(port, hostname, function ()
{
    console.log(`Server running at http://${hostname}:${port}/`);
});