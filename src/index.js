/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

import template from './tpl/template';
import tplList from './tpl/list';

$(() => {
    const $nav = $('#nav');
    const menu = [
        {
            name: '首页',
            url: '/'
        }, {
            name: '列表页',
            url: '/list'
        }, {
            name: '分类',
            url: '/category'
        }
    ];

    const html = tplList({ data: menu });
    $nav.append(html);
});
