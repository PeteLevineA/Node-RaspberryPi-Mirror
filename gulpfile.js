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
		jsx: './src/**/*.jsx',
		appJs: [
			'./src/app.jsx'
		],
		less: './src/assets/less/**/*.less',
		html: './src/**/*.html',
		dist: './dist'	
	}
}

// Compile React Components to JS
gulp.task('js', function() {
	browserify(config.paths.appJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'));
});

// Lint js files for JS coding quality
gulp.task('lint', function() {
	return gulp.src(config.paths.jsx)
		.pipe(lint.format());
});

// Automatically recompile the react components and relint the JS
gulp.task('watchjsx', function() {
	gulp.watch(config.paths.jsx, ['js','lint']);
});

gulp.task('watchjs', function() {
	gulp.watch(config.paths.js, ['js', 'lint']);
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

// Compile Less files whenever a css file is changed
gulp.task('watchcss', function() {
	gulp.watch(config.paths.less, ['less']);
});

// Move HTML files to the Dist folder
gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist));
});

// Move HTML files to Dist when written
gulp.task('watchhtml', function() {
	gulp.watch(config.paths.html, ['html']);
});

gulp.task('default', ['less','js','lint','watchjs', 'watchjsx', 'watchcss', 'html', 'watchhtml']);