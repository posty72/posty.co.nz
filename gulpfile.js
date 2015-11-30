'use strict';

var fs = require('fs');

var gulp = require('gulp');
var concat = require('gulp-concat')
var shell = require('gulp-shell');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var awspublish = require('gulp-awspublish');

var bower_dir = function(component) {
  return './assets/components/' + component;
}


gulp.task('dev:serve', function() {
  connect.server({
    root: '_site',
    port: '8081'
  });
});

gulp.task('dev:build', shell.task([
  'jekyll build'
  ], {
    ignoreErrors: true
}));

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
    './_config.yml',
    './*.md',
    './*.html',
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

gulp.task('deploy', function() {

  var awsparams = JSON.parse(fs.readFileSync('./aws.json'));

  var publisher = awspublish.create(awsparams);

  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  return gulp.src('./_site/**')
    .pipe(awspublish.gzip())
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
});
