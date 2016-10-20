/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

const gulp            = require('gulp');
const gulpSequence    = require('gulp-sequence');

const defaultTask = function(cb) {
    gulpSequence('clean', 'html', 'css', 'js', 'watch', cb);
};

gulp.task('default', defaultTask);
module.exports = defaultTask;