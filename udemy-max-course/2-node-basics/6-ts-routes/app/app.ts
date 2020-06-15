import express = require('express');
import { requestHandler } from './routes';

// Create a new express application instance
const app: express.Application = express();

app.get('/', requestHandler);

const hostname = '127.0.0.1';
const port = 8000;
app.listen(port, hostname, function ()
{
    console.log(`Server running at http://${hostname}:${port}/`);
});