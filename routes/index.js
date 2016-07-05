module.exports = function(app){
	app.get('/', function(req, res, next) {
	  res.render('index', { title:'Main page' });
	});
	app.get('/about', function(req, res, next) {
	  res.render('about',{headerActive:"about"});
	});
	app.get('/potrfolio', function(req, res, next) {
	  res.render('potrfolio',{headerActive:"portfolio"});
	});
	app.get('/demo/grid/option', function(req, res, next) {
	  res.render('demo/gridOption',{headerActive:"grid",gridSideActive:'option'});
	});
	app.get('/demo/grid/full', function(req, res, next) {
	  res.render('demo/gridFull',{headerActive:"grid",gridSideActive:'full'});
	});
}