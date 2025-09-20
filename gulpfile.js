const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");

const minifyCSS = () => {
  return gulp
    .src("./src/main.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/"));
}

gulp.task("watch", () => {
    gulp.watch("./src/**/*.css", { ignoreInitial: false }, minifyCSS);
})

gulp.task("build", minifyCSS)
