module.exports = function(module){
	var loggerName = module || "app";
	var intel = require('intel');
	intel.config({handlers:{}}); // reset default console logger
	var log = intel.getLogger(loggerName);
	var date = new Date();
	function fileHandler(){
		return new intel.handlers.File({ 
			file: './.log/'+date.toLocaleDateString()+"H"+date.getHours()+'.log',
			formatter: new intel.Formatter({
				format:"[%(date)s] %(name)s.%(levelname)s: %(message)s"
			})
		})
	}
	function consoleHandler(){
		return new intel.handlers.Console({ 
			formatter: new intel.Formatter({
				format:"[%(date)s] %(name)s.%(levelname)s: %(message)s",
				colorize: true
			}) 
		})
	}
	log.setLevel(intel.TRACE);
	log.addHandler(fileHandler());
	log.addHandler(consoleHandler());

	return log;
}