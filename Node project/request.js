//making server to server request

// const http = require('http');

// used https since api moved from http to https
const https = require('https');

const options = {
    hostname: 'fakestoreapi.com',
    path: '/products/1',
    method: 'GET'
}

const req = https.request(options, (res)=>{
    res.on("data", (data)=>{
        console.log(data.toString());
    });
});

req.on("error", (e)=>{
    console.log(e);
});

req.end();
