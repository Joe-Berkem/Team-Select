// 'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

//compile
gulp.task('sass', function () {
    return gulp.src('./src/styles/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/css/main.css'));
});

//compile and watch
gulp.task('sass:watch', function() {
    gulp.watch('./src/styles/sass/main.scss', ['sass']);
   });