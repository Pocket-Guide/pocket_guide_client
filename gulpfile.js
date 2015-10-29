var gulp = require('gulp');

gulp.task(
  'default',
  [
    'compile-html'
  ]
);

gulp.task(
  'compile-html',
  function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('app'))
  }
);

gulp.task(
  'watch',
  function(){
    gulp.watch('src/*', ['default'])
  }
);
