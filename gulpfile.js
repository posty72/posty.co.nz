
const gulp = require('gulp');
const concat = require('gulp-concat');
const shell = require('gulp-shell');
const connect = require('gulp-connect');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const imageResize = require('gulp-image-resize');

const BUILD = 'build';
const SERVE = 'serve';
const SCRIPTS = 'scripts';
const IMAGES = 'images';

gulp.task(SERVE, function() {
    connect.server({
        root: '_site',
        port: '8081'
    });
});

gulp.task(BUILD, shell.task([
    'jekyll build'
], {
    ignoreErrors: true
}));

gulp.task(SCRIPTS, function() {
    gulp.src([
        './javascript/main.js'
    ])
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./javascript/'))
    .pipe(gulp.dest('./_site/javascript/'));
});

gulp.task(IMAGES, function(next) {
    gulp.src([
        'assets/images/originals/**/*.png',
        'assets/images/originals/**/*.gif',
        'assets/images/originals/**/*.jpg',
        'assets/images/originals/**/*.jpeg'
    ])
        // .pipe(imageResize())
      .pipe(imagemin({
          optimizationLevel: 7,
          progressive: false,
          interlaced: true
      }))
      .pipe(gulp.dest('assets/images/optimised'))
      .on('end', function() {
          gulp.run(BUILD);
          next();
      })
      .on('error', function() {
          next();
      });
});

gulp.task('default', [SCRIPTS, BUILD]);
