const express = require('express');
const http = require('http');
const path = require('path');
const proxy = require('http-proxy-middleware');
var apiProxy = proxy('/api', {target: 'http://localhost:3000'});
const app = express();
app.use(apiProxy);
const port = process.env.PORT || 3001;
app.use(express.static(__dirname = './dist/front/'));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server =http.createServer(app);

server.listen(port, () =>{ console.log('runing...'+ port)});
