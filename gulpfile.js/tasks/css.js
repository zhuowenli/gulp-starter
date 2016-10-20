/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

const gulp = require('gulp');
const gulpIf = require('gulp-if');
const gulpSass = require('gulp-sass');
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpCssnano = require('gulp-cssnano');
const browserSync = require('browser-sync');

const path = require('path');

const handleErrors = require('../lib/handleErrors');
const config = require('../config');
const task = config.tasks.css;

const cssTask = () => {
    const paths = {
        src: path.join(task.src, `*.{${task.extensions.join(',')}}`),
        dest: path.join(task.dest)
    };

    return gulp.src(paths.src)
        .pipe(gulpIf(!global.production, gulpSourcemaps.init()))
        .pipe(gulpSass(task.sass))
        .on('error', handleErrors)
        .pipe(gulpIf(global.production, gulpCssnano({autoprefixer: false})))
        .pipe(gulpIf(!global.production, gulpSourcemaps.write()))
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream());
};

gulp.task('css', cssTask);
module.exports = cssTask;
