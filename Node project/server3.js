// handling different URLs or paths and
//making server to server request, basically combining our node server with request.js 

const http = require('http');    //for localhost
const https = require('https');  //for external server request

PORT = 3032;
HOST = 'localhost';

const server = http.createServer((req, res)=>{  //created localhost server
    //home page
    if(req.url == '/'){
        res.statusCode=200;
        res.setHeader("Content-type", "text/plain");
        res.end('server created by rhishi');
    } 
    //about page
    else if(req.url == '/about'){
        res.statusCode=200;
        res.setHeader("Content-type", "text/plain");
        res.end('about page');
    }
    //product page
    else if(req.url == '/products'){
        // res.statusCode=200;
        // res.setHeader("Content-type", "application/json");
        // res.end(JSON.stringify({productName: "product1"}));

        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        }
        
        const apiReq = https.request(options, (apiRes)=>{  //made external server request
            apiRes.on("data", (data)=>{
                res.statusCode=200;
                res.setHeader("Content-type", "application/json");
                res.end(data.toString());
            });
        });
        
        apiReq.on("error", (e)=>{
            console.log(e);
        });
        
        apiReq.end();
    }
    //contact page
    else if(req.url == '/contact') {
        res.statusCode=200;
        res.setHeader("Content-type", "text/plain");
        res.end('contact me!');
    } else{
        res.statusCode=500;
        res.setHeader("Content-type", "text/plain");
        res.end('server error!');
    }

});

server.listen(PORT, ()=>{
    console.log(`server running at ${HOST}:${PORT}`);
});