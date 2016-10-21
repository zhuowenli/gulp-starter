/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

if (global.production) return false;

const browserSync = require('browser-sync');
const gulp = require('gulp');

const config = require('../config');
const task = config.tasks.browserSync;

const browserSyncTask = () => {
    const proxyConfig = task.proxy || null;

    if (typeof(proxyConfig) === 'string') {
        task.proxy = {
            target : proxyConfig
        }
    }

    // const server = task.proxy || task.server;
    // server.middleware = [];

    browserSync.init(task)
};

gulp.task('browserSync', browserSyncTask);

module.exports = browserSyncTask;
