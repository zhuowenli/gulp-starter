/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

const path = require('path');

const config = require('../config');
const task = config.tasks.images;

const imagesTask = () => {
    const paths = {
        src: path.join(task.src, '/**/*.{' + task.extensions + '}'),
        dest: path.join(task.dest)
    };

    return gulp.src(paths.src)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(paths.dest));
};

gulp.task('images', imagesTask);
module.exports = imagesTask;