var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache');

gulp.task('sass', function(){
  gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});
gulp.task('browser-sync', function(){
  browserSync({
    server:{
      baseDir: 'app'
    },
    notify: false
  });
});
gulp.task('scripts', function(){
  return gulp.src([
    'app/libs/jquery/dist/jquery.min.js',
    'app/libs/slick/dist/slick.min.js',
    'app/libs/bootstrap/dist/js/bootstrap.min.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});
gulp.task('watch', ['browser-sync', 'sass'],function(){
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);
});
gulp.task('img', function() {
  return gulp.src('app/img/**/*')
    .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    })))
    .pipe(gulp.dest('dist/img'));
});
gulp.task('clean', function() {
  return del.sync('dist');
});
gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {
  var buildCss = gulp.src('app/css/*.css')
    .pipe(gulp.dest('dist/css'))
  var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
  var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))
  var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
});