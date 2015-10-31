var gulp = require('gulp');
var concat = require('gulp-concat');
var path = require('path');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var lint = require('gulp-eslint');
var less = require('gulp-less');

var config = {
	paths: {
		js: './src/**/*.js',
		less: './src/assets/less/**/*.less',
		dist: './dist'		
	}
}

// Compile React Components to JS
gulp.task('js', function() {
	browserify(config.paths.js)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'));
});

// Lint js files for JS coding quality
gulp.task('lint', function() {
	return gulp.src(config.paths.js)
		.pipe(lint.format());
})

// Automatically recompile the react components and relint the JS
gulp.task('watchjs', function() {
	gulp.watch(config.paths.js, ['js','lint']);
});

// Compile Less Files to a bundled Css File
gulp.task('less', function() {
	return gulp.src(config.paths.less)
		.pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ]
		}))
		.pipe(concat('site.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('watchcss', function() {
	gulp.watch(config.paths.less, ['less']);
})


gulp.task('default', ['less','js','lint','watchjs', 'watchcss']);