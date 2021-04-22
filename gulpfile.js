const gulp = require("gulp");
const connect = require("gulp-connect");
const { watchHTML, buildHTML } = require("./task/html");
const { watchSCSS, buildSCSS } = require("./task/scss");
const{ watchJS, buildJS } = require("./task/js");
const { watchMEDIA, buildMEDIA } = require("./task/media");
const { watchIMAGE, buildIMAGE } = require("./task/image");

function dist (done){
    //Her kommer det vi gerne vil have tasken til at gøre
    watchHTML();
    watchSCSS();
    watchJS();
    watchMEDIA();
    watchIMAGE();
   connect.server({
       root: "./dist",
       livereload: true,
       port: 3000
   })
    done()
}

function build (done){
    buildHTML()
    buildSCSS()
    buildJS()
    buildMEDIA()
    buildIMAGE()
    done()
}
exports.default = dist;
exports.build = build;