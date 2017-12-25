//Include gulp
const gulp = require('gulp');

//Our Plugins
const jshint = require('gulp-jshint');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const surge = require('gulp-surge');

//Lint Our Javascript
gulp.task('lint', ()=>{
	return gulp.src('src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

//Compile the SASS into CSS
gulp.task('sass', ()=>{
	return gulp.src('src/sass/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('src'));
});

//Concatenate and minify the JS for fewer http requests
gulp.task('scripts', ()=>{
	return gulp.src('js/*.js')
		.pipe(concat('all.js'))
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src'))
});

/*---You need to edit your site name before it deploys---*/
// gulp.task('deploy', [], ()=>{
// 	return surge({
// 		project: './src',
// 		domain: 'your-site-name-here.surge.sh'
// 	})
// });

//Watch Files for changes
gulp.task('watch', () => {
	gulp.watch('js/*.js', ['lint', 'scripts']);
	gulp.watch('src/sass/main.scss', ['sass']);
});

gulp.task('default', ['lint', 'sass', 'scripts', 'watch', /*'deploy'*/]);