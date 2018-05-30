let gulp = require('gulp')
let sass = require('gulp-sass')
var uglify = require('gulp-uglify')
var cssnano = require('gulp-cssnano')
var imagemin = require('gulp-imagemin')
var autoprefixer = require('gulp-autoprefixer')
var htmlmin = require('gulp-htmlmin')
let browserSync = require('browser-sync').create()

gulp.task('default', ['css', 'compressjs'], function () {
    browserSync.init({
        server: "./app"
    })
    gulp.watch("./*.html", ["minificar"]);
    gulp.watch("app/js/*.js", ["compressjs"]).on('change', browserSync.reload);
    gulp.watch("scss/*.scss", ['css']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
})
gulp.task('compressimg', function () {
    gulp
        .src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./app/img'))
})
gulp.task('minificar', function () {
    gulp
        .src('./*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./app'))
})

gulp.task('compressjs', function () {
    gulp
        .src('./app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./app/js/dist'))
})

gulp.task('css', function () {
    gulp
        .src('./scss/main.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream())
})
