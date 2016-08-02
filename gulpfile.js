'use strict';

var fs = require('fs');
var gulp = require('gulp');
var concat = require('gulp-concat');
var shell = require('gulp-shell');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var awspublish = require('gulp-awspublish');
var awspublishRouter = require("gulp-awspublish-router");
var responsve = require('gulp-responsive');
var clean = require('gulp-clean');
// var sass = require('gulp-sass');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync').create();


// Take all images and convert them into responsive sizes
gulp.task('res-images', ['clean-images'], function() {

  return gulp.src('assets/images/originals/*')
    .pipe(responsve({
      '*': [{
        width: 300,
        rename: {
          suffix: '-300',
          extname: '.jpg'
        },
        format: 'jpeg'
      }, {
        width: 2 * 300,
        rename: {
          suffix: '-300x2',
          extname: '.jpg'
        },
        format: 'jpeg'
      }, {
        width: 480,
        rename: {
          suffix: '-480',
          extname: '.jpg'
        },
        format: 'jpeg'
      }, {
        width: 480 * 2,
        rename: {
          suffix: '-480x2',
          extname: '.jpg'
        },
        format: 'jpeg'
      }, {
        width: 800,
        rename: {
          suffix: '-800',
          extname: '.jpg'
        },
        format: 'jpeg',
        withoutEnlargement: true
      }, {
        width: 800 * 2,
        rename: {
          suffix: '-800x2',
          extname: '.jpg'
        },
        format: 'jpeg',
        withoutEnlargement: true
      }, {
        width: 1920,
        rename: {
          suffix: '-1920',
          extname: '.jpg'
        },
        format: 'jpeg',
        withoutEnlargement: true
      }, {
        width: 1920 * 2,
        rename: {
          suffix: '-1920x2',
          extname: '.jpg'
        },
        format: 'jpeg',
        withoutEnlargement: true
      }]
    }, {
      quality: 80,
      progressive: true,
      withMetadata: false,
      errorOnEnlargement: false
    }))
    .pipe(gulp.dest('assets/images/responsive'));
});

// Delete all images
gulp.task('clean-images', function() {
  return gulp.src('assets/images/responsive/*', { read: false })
    .pipe(clean());
});

// Combine and minify scripts
gulp.task('scripts', function() {

  gulp.src([
      // bower_dir('/underscore/underscore.js'),
      './javascript/src/**/*.js'
    ])
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./javascript/'))
    .pipe(gulp.dest('./_site/javascript/'));
});

// Turn SCSS files -> CSS
gulp.task('sass', function() {
  return sass('_sass/_index.scss', {
      style: 'compressed',
      sourcemap: true
    })
    .on('error', function(err) {
      console.log('Error!', err.message);
    })
    .pipe(concat('layout.css'))
    .pipe(gulp.dest('./_includes/css/'))
    .pipe(browserSync.stream());
});

// Run the Jeykll builder
gulp.task('build', shell.task([
  'jekyll build'
  ], {
  ignoreErrors: true
}));

// Run the SCSS, Javascript and Jekyll tasks
gulp.task('build-all', ['sass', 'scripts'], shell.task([
  'jekyll build'
  ], {
  ignoreErrors: true
}));

gulp.task('serve', ['sass', 'scripts', 'build'], function() {
  // connect.server({
  //   root: '_site',
  //   port: '8085'
  // });
  browserSync.init({
      port: 8088,
      open: false,
      ui: {
        port: 8087
      },
      server: {
        baseDir: "./_site"
      }
  });
});

gulp.task('default', ['sass', 'scripts', 'build', 'serve'], function() {
  // On content / html change
  gulp.watch([
    './_config.yml',
    './*.md',
    './**/*.html',
    './_*/**',
    '!./_site/**'
  ], [
    'build'
  ]).on('change', browserSync.reload);

  // On styling changes
  gulp.watch([
    './_sass/**',
    './**/*.scss'
  ], [
    'sass'
  ]);

  // On image changes
  gulp.watch(['./assets/image/originals/**'], ['res-images']);

  // On JS changes
  gulp.watch(['./javascript/src/**/*.js'], ['scripts']).on('change', browserSync.reload);
});


// Build everything and push to AWS S3 bucket
gulp.task('deploy', ['sass', 'scripts', 'build'], function() {

  var awsparams = JSON.parse(fs.readFileSync('./aws.json'));
  var publisher = awspublish.create(awsparams);

  gulp.src('./_site/**')
    // .pipe(awspublish.gzip())
    .pipe(awspublishRouter({
      cache: {
        // cache for 5 minutes by default 
        cacheTime: 300
      },

      routes: {
        "^.+\\.(?:js|css|svg|ttf|jpg|gif|png)$": {
          // don't modify original key. this is the default 
          key: "$&",
          // use gzip for assets that benefit from it 
          gzip: true,
          // cache static assets for 20 years 
          cacheTime: 630720000
        },

        "^.+\\.html": {
          // Cache HTML for one minute
          cacheTime: 60
        },

        // pass-through for anything that wasn't matched by routes above, to be uploaded with default options 
        "^.+$": "$&"
      }
    }))
    .pipe(publisher.publish())
    .pipe(publisher.cache())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
});
