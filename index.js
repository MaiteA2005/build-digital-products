const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    switch(req.url){
        case "/signup":
            res.end("This is the signup page!");
            break;
        default:
            res.end("Hello world!")
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
