
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
const WATCH = 'watch';

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

gulp.task(IMAGES, (next) => {
  const imageSizes = [320, 480, 800, 1920];

  let finished = 0;

  imageSizes.forEach((size, index) => {
      gulp.src([
          'assets/images/originals/**/*.png',
          'assets/images/originals/**/*.gif',
          'assets/images/originals/**/*.jpg',
          'assets/images/originals/**/*.jpeg'
      ])
        .pipe(imageResize({
          width: size
        }))
        .pipe(imagemin({
            optimizationLevel: 7,
            progressive: true
        }))
        .pipe(gulp.dest('assets/images/optimised/'+ size))
        .on('end', function() {
          finished++;
          if (finished === 2) {
            next();
          }
        })
        .on('error', function() {
          finished++;
          if (finished === 2) {
            next();
          }
        });
      });

    imageSizes.forEach((size, index) => {
        gulp.src([
            'assets/images/originals/**/*.png',
            'assets/images/originals/**/*.gif',
            'assets/images/originals/**/*.jpg',
            'assets/images/originals/**/*.jpeg'
        ])
          .pipe(imageResize({
            width: size,
            height: size,
            crop: true
          }))
          .pipe(imagemin({
              optimizationLevel: 7,
              progressive: true
          }))
          .pipe(gulp.dest('assets/images/optimised/thumbnails/'+ size))
          .on('end', function() {
            finished++;
            if (finished === 2) {
              next();
            }
          })
          .on('error', function() {
            finished++;
            if (finished === 2) {
              next();
            }
          });
        });
});

gulp.task(WATCH, [SCRIPTS, BUILD], () => {
  gulp.watch('javascript/*', [SCRIPTS]);
});
