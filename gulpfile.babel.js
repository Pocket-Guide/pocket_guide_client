var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var $ = require('gulp-load-plugins')();
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

gulp.task(
  'compile',
  [
    'clean',
    'compile-es6',
    'compile-html',
    'compile-sass'
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
    gulp.src('src/stylesheets/application.scss')
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass({
          includePaths: require('node-bourbon').includePaths
        }))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('app/stylesheets'))
  }
)

gulp.task('dev-server',
  (callback) => {
    new WebpackDevServer(webpack(config), {
      publicPath: config.output.publicPath,
      stats: {
        color:true
      }
    }).listen(8080, 'localhost', (err) => {
      if (err) throw new gutil.PluginError('webpack-dev-server', err);
      console.log("Listening at Localhost:8080")
    });
  }
);

gulp.task('watch-compile', () => {
  gulp.watch('src/**/*', ['compile']);
});


gulp.task('default', ['watch-compile', 'dev-server']);
