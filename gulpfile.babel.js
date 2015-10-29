var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();

gulp.task(
  'compile',
  [
    'clean',
    'compile-es6',
    'compile-html',
    'compile-scss'
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
  'compile-sass',
  () => {
    gulp.src('src/stylesheets/**/*')
        .pipe($.sourcemaps.init())
        .pipe($.sass())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('app/stylesheets'))
  }
)

gulp.task(
  'watch',
  () => {
    gulp.watch('src/**/*', ['compile']);
  }
);
