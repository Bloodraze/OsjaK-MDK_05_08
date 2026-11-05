const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const fileInclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const plumber = require('gulp-plumber');

function html() {
  return gulp.src('src/*.html')
    .pipe(plumber())
    .pipe(fileInclude({
      prefix: '@@',
      basepath: 'src/template/'
    }))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream());
}

function styles() {
  return gulp.src('src/scss/style.scss')
    .pipe(plumber())
    .pipe(sass({
      quietDeps: true,
      silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function']
    }).on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: 'build'
    }
  });

  gulp.watch('src/**/*.html', html);
  gulp.watch('src/scss/**/*.scss', styles);
}

exports.default = gulp.series(gulp.parallel(html, styles), watch);