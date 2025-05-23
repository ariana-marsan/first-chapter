
const http = require('http');
const { findAvailablePort } = require('./freeports.js');

const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    res.end('Hello, World!');
})

findAvailablePort(3000).then (port=>{
    server.listen(port, ()=>{
        console.log(`Server is running on port ${port}`);
    })
})