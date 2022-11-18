console.log("hola mundo")

const http = require('http');

const host = '0.0.0.0';

const port = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200
    res.setHeader('content-Type' ,  'Text/plain')
    res.end("hola mundo")
});


server.listen(port, host, () =>{
    console.log('server encendido en ' + host + "/" + port)
});