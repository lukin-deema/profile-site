var http = require('http');
var config = require('libs/config');
var app = require("app");
var logger = require('libs/intel')("server");

var port = process.env.PORT || config.get('port');
var server = http.createServer(app);
server.listen(port, function(){
  logger.info('Listenings port ', port)
});
