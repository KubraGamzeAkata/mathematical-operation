var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var del = require('del');

gulp.task('clean', function () {
  del.sync(['dist/app.js'])
});

gulp.task('js', function () {
  gulp.src(['src/angular.min.js',
            'src/angular-ui-router.min.js',
            'src/app.js',
            'src/controllers.js',
            'src/factories.js'])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['clean', 'js']);
});
