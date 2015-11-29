'use strict';

var fs = require('fs');

var gulp = require('gulp');
var concat = require('gulp-concat')
var shell = require('gulp-shell');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
// var sass = require('gulp-sass');
var s3 = require("gulp-s3");

var bower_dir = function(component) {
  return './assets/components/' + component;
}


gulp.task('dev:serve', function() {
  connect.server({
    root: '_site',
    port: '8081',
    livereload: true
  });
});

gulp.task('dev:build', shell.task([
  'jekyll build'
  ], {
    ignoreErrors: true
}));


// gulp.task('dev:sass', function(){
  
//   gulp.src('./css/main.scss')
//     .pipe(sass({
//       outputStyle: 'compressed'
//     }).on('error', sass.logError))
//     .pipe(concat('mina.css'))
//     .pipe(gulp.dest('./_site/css'));

// });

gulp.task('dev:scripts', function(){

  gulp.src([
    bower_dir('/underscore/underscore.js'),
    './javascript/main.js'
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./javascript/'))
    .pipe(uglify())
    .pipe(gulp.dest('./_site/javascript/'));

});

gulp.task('default', ['dev:serve', 'dev:scripts', 'dev:build'], function() {
  gulp.watch([
    './*.md',
    './_posts/**',
    './_layouts/**',
    './_websites/**',
    './_includes/**',
    './_sass/**'
  ], [
    'dev:build'
  ]);

  gulp.watch(['./javascript/**'], ['dev:scripts']);

});

var aws = JSON.parse(fs.readFileSync('./aws.json'));
gulp.task('deploy', function() {

  gulp.src('./_site/**')
  .pipe(s3(aws));

});
