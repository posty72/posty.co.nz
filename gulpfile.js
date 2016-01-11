'use strict';

var fs = require('fs');

var gulp = require('gulp');
var concat = require('gulp-concat')
var shell = require('gulp-shell');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var awspublish = require('gulp-awspublish');
var imageop = require('gulp-image-optimization');

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
    // bower_dir('/underscore/underscore.js'),
    './javascript/main.js'
  ])
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./javascript/'))
    .pipe(gulp.dest('./_site/javascript/'));

});

gulp.task('dev:images', ['dev:build'], function(next){

    gulp.src([
      'assets/images/originals/**/*.png',
      'assets/images/originals/**/*.gif',
      'assets/images/originals/**/*.jpg',
      'assets/images/originals/**/*.jpeg'
      ])
      .pipe(imageop({
          optimizationLevel: 7,
          progressive: false,
          interlaced: true
      }))
      .pipe(gulp.dest('assets/images/Optomised'))
      .on('end', function(){
        gulp.run('dev:build');
        next();
      })
      .on('error', function(){
        next();
      });

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
    './_sass/**',
    './assets/**'
  ], [
    'dev:build'
  ]);

  gulp.watch(['./assets/image/Originals/**'], ['dev:images']);

  gulp.watch(['./javascript/**'], ['dev:scripts']);

});

gulp.task('deploy', function() {

  var awsparams = JSON.parse(fs.readFileSync('./aws.json'));
  var publisher = awspublish.create(awsparams);
  var headers = {};

  gulp.src('./_site/**')
    .pipe(awspublish.gzip())
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
});
