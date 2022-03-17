const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

gulp.task('server', function() {

    // browserSync({ Тут убрал
    browserSync.init({
        // server: {
            // baseDir: "dist" Тут убрал
            proxy: "assosiation.dev",
            notify: false
        // }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch(['./src/*.html','./src/*.php']).on("change", gulp.parallel('html'));
    // gulp.watch("src/*.php").on("change", gulp.parallel('html'));
    gulp.watch("src/img/**/*", gulp.parallel('images'));
    gulp.watch("src/js/**/*.js").on("change", gulp.parallel('scripts'));
    gulp.watch("src/json/**/*.json").on("change", gulp.parallel('json'));
});

// gulp.task('html', function () {
//     return gulp.src("src/*.html")
//         .pipe(htmlmin({collapseWhitespace: true}))
//         .pipe(gulp.dest("dist/"));
// })
// Тут объединил с php
gulp.task('html', function () {
    return gulp.src(['./src/*.html','./src/*.php'])
        .pipe(htmlmin({collapseWhitespace: true,
            ignoreCustomFragments: [ /<%[\s\S]*?%>/, /<\?[=|php]?[\s\S]*?\?>/ ]
        }))
        
        .pipe(gulp.dest("dist/"));
});
 
gulp.task('languages', function () {
    return gulp.src("src/languages/**/*")
        .pipe(gulp.dest("dist/languages"));
});

gulp.task('mailer', function () {
    return gulp.src("src/mailer/**/*")
        .pipe(gulp.dest("dist/mailer"));
});

gulp.task('scripts', function () {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"));
});

gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/icons"));
});

gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"));
});

gulp.task('json', function () {
    return gulp.src("src/json/**/*")
        .pipe(gulp.dest("dist/json"));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'languages', 'mailer', 'scripts', 'icons', 'images', 'html', 'json'));