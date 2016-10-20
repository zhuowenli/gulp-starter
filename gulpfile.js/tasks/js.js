/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

const gulp = require('gulp');
const gulpIf = require('gulp-if');
const gulpTap = require('gulp-tap');
const gulpUglify = require('gulp-uglify');
const vinylBuffer = require('vinyl-buffer');
const babelify = require('babelify');
const browserify = require('browserify');
const browserSync = require('browser-sync');

const path = require('path');

const handleErrors = require('../lib/handleErrors');
const config = require('../config');
const task = config.tasks.js;

const jsTask = () => {
    const paths = {
        src: path.join(task.src, `*.{${task.extensions.join(',')}}`),
        dest: path.join(task.dest)
    };

    return gulp.src(paths.src, {read: false})
        .pipe(gulpTap((file) => {
            const b = browserify(file.path);

            b.transform(babelify, task.babel);

            file.contents = b.bundle();
        }))
        .on('error', handleErrors)
        .pipe(vinylBuffer())
        .pipe(gulpIf(global.production, gulpUglify({ mangle: true, compress: true })))
        .pipe(gulp.dest(paths.dest))
        .pipe(gulpIf(!global.production, browserSync.stream()));
};

gulp.task('js', jsTask);
module.exports = jsTask;
