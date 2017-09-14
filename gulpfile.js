/* eslint-disable no-magic-numbers */

const gulp = require('gulp');
const concat = require('gulp-concat');
const shell = require('gulp-shell');
const connect = require('gulp-connect');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const imageResize = require('gulp-image-resize');
const postcss = require('gulp-postcss');

const BUILD = 'build';
const SERVE = 'serve';
const SCRIPTS = 'scripts';
const IMAGES = 'images';
const WATCH = 'watch';
const STYLES = 'styles';

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

gulp.task(STYLES, function() {
    gulp.src('./sass/index.scss')
    .pipe(postcss())
    .pipe(concat('layout.css'))
    .pipe(gulp.dest('./_includes/css'));
});

gulp.task(SCRIPTS, function() {
    gulp.src([
        './javascript/src/*.js'
    ])
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./javascript/'));
});

gulp.task(IMAGES, (next) => {
    const imageSizes = [50, 320, 480, 800, 1920]; // eslint-disable-line no-magic-numbers

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
        .pipe(gulp.dest(`assets/images/optimised/${size}`))
        .on('end', () => {
            console.log(`finished ${size}px image`);
            if (index === imageSizes.length + 1) {
                next();
            }
        })
        .on('error', () => {
            if (index === imageSizes.length + 1) {
                next();
            }
        });
    });
});

gulp.task(WATCH, [STYLES, SCRIPTS, BUILD], () => {
    gulp.watch('javascript/*', [SCRIPTS, BUILD]);
    gulp.watch('sass/*', [SCRIPTS, BUILD]);
});
