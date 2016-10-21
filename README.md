# gulp-starter

本仓库整合了前端开发常用的：JS编译、前端模板、SASS编译、代码压缩、图片压缩等命令。

在项目开始阶段，可以直接 clone 该仓库作为项目基础结构。

## 快速开始

### 安装依赖
    cnpm i

### 编译代码（开发环境，包含watch）
    npm run dev

### 编译压缩代码（生产环境）
    npm run production

## 目录结构

```bash
.
├── LICENSE
├── README.md
├── index.html
├── package.json
├── css/                     # 编译后的css文件
├── js/                      # 编译后的js文件
├── gulpfile.js/             # Gulp 配置目录
│   ├── config.json          # 配置文件
│   ├── index.js
│   ├── lib/                 # 一些公共方法
│   │   └── handleErrors.js
│   └── tasks/               # Gulp Tasks
│       ├── browserSync.js
│       ├── clean.js
│       ├── css.js
│       ├── default.js
│       ├── html.js
│       ├── images.js
│       ├── js.js
│       ├── production.js
│       └── watch.js
├── sass                     # SASS 开发文件夹
│   └── index.scss
├── src                      # JS 开发文件夹
│   ├── index.js
│   └── tpl                  # 编译后的模板文件
│       ├── list.js
│       └── template.js
└── ztpl                     # 模板目录
    └── list.html
```