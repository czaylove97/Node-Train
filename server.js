const http = require('http');
const app = require('./app');
const port = 8088;
const server = http.createServer(app);

server.listen(port,()=>{
    console.log('server listen port',+port);
})