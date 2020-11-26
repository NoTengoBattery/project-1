var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function (done) {
  gulp.src('css/**/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('post/css'));
  done();
});

gulp.task('watch', function () {
  gulp.watch('css/**/*.css', gulp.series('styles'));
});
