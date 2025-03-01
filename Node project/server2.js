// added statusCode and header

const http = require('http');

PORT=3020;
HOST='localhost';

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-type", "text/plain");
    res.end('server created by rhishi');
});

server.listen(PORT, ()=>{
    console.log(`server running on ${HOST} : ${PORT}`);
})