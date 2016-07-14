var router = require('express').Router();

router.get('/', function(req, res, next) {
	res.render('start');
});
router.get('/grid-demo', function(req, res, next) {
	res.render('demo/simpleGridDemo');
});
router.get('/tooltip-demo', function(req, res, next) {
	res.render('demo/simpleTooltipDemo');
});

module.exports = router;