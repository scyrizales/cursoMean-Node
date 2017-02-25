const http = require("http");
var router = require('./src/router');

const server = http.createServer(function (req, res) {
  req.on('data',function () {

  })
  req.on('end', function () {
    router.route(req, res);
  });

});

server.listen(8080);
