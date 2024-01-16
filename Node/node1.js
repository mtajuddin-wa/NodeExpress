const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    switch(req.url) {
        case "/users" :
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(fs.readFileSync('user.json', 'utf8'));
            break;

        case "/":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/HTML');
            res.end(fs.readFileSync('index.html', 'utf8'));
            break;
        default:
            res.statusCode = 404;
            res.end("Page Not Found!");
    };
}).listen(8080, 'localhost', () => {
    console.log("Server is running");
});