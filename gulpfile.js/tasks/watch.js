/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

const config = require('../config');
const path   = require('path');
const gulp   = require('gulp');
const gulpWatch  = require('gulp-watch');

const watchTask = () => {
    const watchableTasks = ['css', 'html', 'js'];

    watchableTasks.forEach((taskName) => {
        const task = config.tasks[taskName];

        if(task) {
            const glob = path.join(task.src, `**/*.{${task.extensions.join(',')}}`);

            gulpWatch(glob, () => {
                require('./' + taskName)();
            });
        }
    });
};

gulp.task('watch', ['browserSync'], watchTask);

module.exports = watchTask;