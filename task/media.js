const gulp = require("gulp");
const connect = require("gulp-connect");

function processMedia(){
    return gulp.src("./src/media/**/*.*")
    .pipe(gulp.dest("./dist/media"))
    .pipe(connect.reload());
}

function buildMEDIA(){
    return gulp.src("./src/media/**/*.*")
    .pipe(gulp.dest("./build/media"));
}

function watchMEDIA (){
    return gulp.watch("./src/media/**/*.*", {
        ignoreInitial: false
    }, processMedia)
}

module.exports = {
    watchMEDIA, buildMEDIA
}