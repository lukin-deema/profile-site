var nconf = require('nconf');
var path = require('path');
if(process.env.NODE_ENV == 'production'){
	nconf.argv()
		.env()
		.file({ file: path.join(__dirname, "../config/production.json")});
} else {
	nconf.argv()
		.env()
		.file({ file: path.join(__dirname, "../config/development.json")});	
}
module.exports = nconf;