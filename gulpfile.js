'use strict';

var gulp = require('gulp');
var bcoreTasks = require('bcore-build');

bcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
