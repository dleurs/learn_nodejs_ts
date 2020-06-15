"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Create a new express application instance
const app = express_1.default();
app.get('/', function (req, res) {
    res.send('<h1>Welcome to my super website !</h1>');
});
app.get('/users', function (req, res) {
    res.write('<h1>Users of the website</h1>');
    res.write('<ul><li>Bob</li><li>Jack</li><li>Francois le francais</li></ul>');
    res.write('<form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
    return res.end();
});
app.post('/create-user', function (req, res) {
    return req.on('data', (chunk) => {
        console.log(chunk.toString());
        res.statusCode = 302;
        res.setHeader('Location', '/users');
        return res.end();
    });
});
const hostname = '127.0.0.1';
const port = 8000;
app.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});
//# sourceMappingURL=app.js.map