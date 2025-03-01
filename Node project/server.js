// created a basic server

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.write('<h1>Home page</h1>');
    } else if(req.url == '/about') {
        res.write('<h1>About Us</h1>');
    }

    res.end();
})

server.listen(5001);
console.log("port 5001 running");