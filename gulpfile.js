 var gulp = require("gulp");
gulp.task("hello",function(){
	console.log("已连接");
})

gulp.task("copy-html",function(){
	gulp.src("*.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})



var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
gulp.task("js",function(){
	gulp.src("js/**/*").pipe(gulp.dest("dist/js")).pipe(gulp.dest("dist/js")).pipe(connect.reload());
})


gulp.task("images",function(){
	gulp.src("images/**/*").pipe(gulp.dest("dist/images")).pipe(connect.reload());
})



gulp.task('data', function(){
	return gulp.src(["*.json", "*.txt","*.php", "!package.json", "!package-lock.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})


var scss = require("gulp-sass-china");
var minifyCSS = require("gulp-minify-css");
var rename = require("gulp-rename");
gulp.task("scss",function(){
	gulp.src("css/**/*")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

//监听
gulp.task("watch",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("images/**/*",["images"]);
	gulp.watch("css/**/*",["scss"]);
	gulp.watch("js/**/*",["js"]);
	gulp.watch(["*.json", "*.txt","*.php", "!package.json", "!package-lock.json"], ['data']);
})


//搭建服务器
var connect = require("gulp-connect")

gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true,
		port:9000
	})
})

gulp.task("default",["watch","server"])