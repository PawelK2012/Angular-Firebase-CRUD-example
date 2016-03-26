'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('styles', function() {
  return gulp.src('app/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./app/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('app/sass/**/*.scss',['styles']);
});

