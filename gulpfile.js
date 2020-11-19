const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const concat = require('gulp-concat');

//compile scss into css
function style() {
  return gulp
    .src("app/src/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("app/src/css"))
    .pipe(browserSync.stream());
}

//concatenate bootstrap.js, jquery.js, popper.js files to build.js file in js folder
function concatjs() {
  return gulp
    .src(["node_modules/jquery/dist/jquery.js", "node_modules/popper.js/dist/umd/popper.js", "node_modules/bootstrap/dist/js/bootstrap.js"])
    .pipe(concat("build.js"))
    .pipe(gulp.dest("app/src/js"));
}

// copy bootstrap. css to css folder
function copystyle() {
  return gulp
    .src([
      "node_modules/bootstrap/dist/css/bootstrap.css"
    ])
    .pipe(gulp.dest("app/src/css"));
}

//to monitor changes to the scss and js files
function watch() {
  browserSync.init({
    server: {
      baseDir: "./app",
      index: "/index.html"
    }
  });
  gulp.watch("app/src/**/*.scss", style);
  gulp.watch("./app/*.html").on("change", browserSync.reload);
  gulp.watch("app/src/components/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
exports.copystyle = copystyle;
exports.concatjs = concatjs;
