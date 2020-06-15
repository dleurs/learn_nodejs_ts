const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Hello world received a request.');
    console.log("URL : ", req.url, "\nMETHOD : ", req.method,"\nHEADERS : ", req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (req.url == "/home") {
        res.write('<h1>Home sweet home!</h1>');
    }
    else {
        res.write('<h1>Hello World!</h1>');
    }
    return res.end();
    //process.exit();
});

const port = 8000;
const hostname = "127.0.0.1";
server.listen(port, hostname, () =>
{
    console.log(`Server running at http://${hostname}:${port}/`);
});