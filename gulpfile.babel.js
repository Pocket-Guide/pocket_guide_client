var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();

gulp.task(
  'compile',
  [
    'clean',
    'compile-html',
    'compile-es6'
  ]
);

gulp.task(
  'clean',
  () => {
    del('./app/**/*');
  }
)

gulp.task(
  'compile-html',
  () => {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('app'));
  }
);

gulp.task(
  'compile-es6',
  () => {
    gulp.src('src/**/*.js')
        .pipe($.plumber())
        .pipe($.webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('app'));
  }
);

gulp.task(
  'watch',
  () => {
    gulp.watch('src/**/*', ['compile']);
  }
);
