var gulp = require('gulp');
var cssmin =require('gulp-cssmin');
var jsmin = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
// 1、首先要创建一个任务  
// gulp.task('事件的名字','回调函数')
gulp.task('css',()=>{
    gulp.src('./css/main.css')
     .pipe(cssmin())
     .pipe(gulp.dest('./dist'))
 })
 // 第二步：
 gulp.task('js',()=>{
   gulp.src('./js/*.js')
   .pipe(concat('all.js'))
   .pipe(jsmin())
   .pipe(gulp.dest('./dist'))
 
 
 })
 
 
 gulp.task('image',()=>{
   gulp.src('./images/*.*')
   .pipe(imagemin())
   .pipe(gulp.dest('./image'))
 
 })