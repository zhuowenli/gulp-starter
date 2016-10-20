/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

const gulp = require('gulp');
const gulpZtpl = require('gulp-ztpl');

const path = require('path');

const handleErrors = require('../lib/handleErrors');
const config = require('../config');
const task = config.tasks.html;

const htmlTask = () => {
    const paths = {
        src: path.join(task.src, `**/*.${task.extensions.join(',')}`),
        dest: path.join(task.dest)
    };

    Object.assign(task.entries, {
        base: (path.join(task.src)),
        output: (paths.dest),
    });

    return gulp.src(paths.src)
        .on('error', handleErrors)
        .pipe(gulpZtpl(task.entries));
};

gulp.task('html', htmlTask);
module.exports = htmlTask;