var gulp = require('gulp');

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  gulp.src('projects/my-lib/src/assets/**')
  .pipe(gulp.dest('dist/my-lib/assets'));
  done();
}

