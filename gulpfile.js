"use strict";

var gulp = require('gulp')
var source = require('vinyl-source-stream')
var browserify = require('browserify')
var hbsfy = require("hbsfy")
var buffer = require('vinyl-buffer')

var file = require('./index.js')

gulp.task('default', function () {
  var b = browserify();

  hbsfy.configure({
    extensions: ['hbs']
  })
  b.transform(hbsfy)

  b.require(__dirname + '/index.js', {expose: 'module-gulp'});

  b.bundle()
    .on('error', function (err) {
      console.log(err)
    })
    .pipe(source('output-gulp.js'))
    .pipe(gulp.dest('./'))
});