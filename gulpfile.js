const gulp = require('gulp'),
	babel = require('gulp-babel');

gulp.task('compile', function() {
	gulp.src('./src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./lib'));
});
