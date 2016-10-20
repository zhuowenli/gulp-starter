/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

const notify = require("gulp-notify");

const handleErrors = (errorObject) => {
    notify.onError(errorObject.toString().split(': ').join(':\n'))
          .apply(this, arguments);

    // Keep gulp from hanging on this task
    if (typeof this.emit === 'function'){
        this.emit('end');
    }
};

module.exports = handleErrors;