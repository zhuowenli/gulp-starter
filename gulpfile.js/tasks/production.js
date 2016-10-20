/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

const productionTask = function(cb) {
    global.production = true;

    gulpSequence('clean', 'html', 'css', 'js', cb);
};

gulp.task('production', productionTask);
module.exports = productionTask;
