import gulp from 'gulp';
const { series, parallel, src, dest, task } = gulp;
import { exec } from 'node:child_process';
import prettier from 'gulp-prettier';
import gzip from 'gulp-gzip';

// Task to format JavaScript files using Prettier
gulp.task('format', () => {
  return gulp.src(['src/app/**/*.ts'])
    .pipe(prettier({}))
    .pipe(gulp.dest((file) => file.base));
});

// Task to gzip compress all JS files within the dist directory
gulp.task('gzip', () => {
  return gulp.src('dist/*.js') // Update the source file pattern according to your build output
    .pipe(gzip())
    .pipe(gulp.dest('dist'));
});

// Task to run the build after formatting and then gzip
gulp.task('build-after-format', gulp.series('format', 'gzip'));

// Default task (format, build, gzip, and potentially other tasks)
gulp.task('default', gulp.series('build-after-format'));

// Watch task to automatically run format, build, and gzip when JavaScript files change
gulp.task('watch', () => {
  gulp.watch(['app/**/*.js', 'test/**/*.js'], series('build-after-format'));
});
