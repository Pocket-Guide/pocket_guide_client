var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task(
  'default',
  [
    'compile-html',
    'compile-es6'
  ]
);

gulp.task(
  'compile-html',
  () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('app'))
  }
);

gulp.task(
  'compile-es6',
  () => {
    gulp.src('src/*.js')
        .pipe($.plumber())
        .pipe($.babel())
        .pipe(gulp.dest('app'))
  }
);

gulp.task(
  'watch',
  () => {
    gulp.watch('src/*', ['default'])
  }
);
