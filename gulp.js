const gulp = require('gulp');
const gzip = require('gulp-gzip');

// Task to gzip compress files
gulp.task('gzip', () => {
  return gulp.src('dist/*.js') // Update the source file pattern according to your build output
    .pipe(gzip())
    .pipe(gulp.dest('dist'));
});

// Default task to run when you execute 'gulp' in the terminal
gulp.task('default', gulp.series('gzip'));
