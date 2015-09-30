'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');

gulp.task('istanbul', function(done) {
    gulp.src(['src/**/*.js'])
        .pipe(istanbul()) // Covering files
        .pipe(istanbul.hookRequire()) // Force `require` to return covered files
        .on('finish', function () {
            gulp.src(['test/**/*.js'])
                .pipe(mocha())
                .pipe(istanbul.writeReports()) // Creating the reports after tests ran
                .on('end', done);
        });
});

gulp.task('lint', function () {
    gulp.src(['src/**/*.js'])
        .pipe(eslint({
            rules: {
                'quotes': [1, "single"],
                'global-strict': 0,
                'no-underscore-dangle': 0,
                'new-cap': 0
            },
            envs: [
                'node'
            ]
        }))
        .pipe(eslint.formatEach('compact', process.stderr))
        .pipe(eslint.failOnError());
});

gulp.task('test', ['istanbul']);
