var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('startServer', function() {
	$.nodemon({
		script: 'server.js',
		ext: 'html js',
		env: {
			'NODE_PATH': '.',
			'NODE_ENV': 'development'
		},
		ignore: [
			'node_modules/',
			'bower_components/',
			'logs/',
			'packages/*/*/public/assets/lib/',
			'packages/*/*/node_modules/',
			'.DS_Store', '**/.DS_Store',
			'.bower-*',
			'**/.bower-*',
			'**/tests'
		],
		nodeArgs: ['--debug'],
		stdout: false
	}).on('readable', function() {
		this.stdout.on('data', function(chunk) {
			if (/Mean app started/.test(chunk)) {
				setTimeout(function() {
					plugins.livereload.reload();
				}, 500);
			}
			process.stdout.write(chunk);
		});
		this.stderr.pipe(process.stderr);
	});
});

gulp.task('default', gulp.series(
	"startServer"
));