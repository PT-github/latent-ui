# elem-extension-ui
基于elementUI的UI库

# npm run build
打包

# 第三方包描述
## rollup依赖包
* rollup-plugin-commonjs 该插件负责将Commonjs模块转化成ES6以便rollup打包。很多npm包都是commonjs模块，需要结合此插件一起使用
* rollup-plugin-node-resolve 该插件可以将三方模块包含在输出bundle中
* rollup-plugin-babel 在rollup项目中使用babel
* rollup-plugin-vue2 负责处理vue文件，相当于webpack的vue-loader（rollup-plugin-vue的子集）
* rollup-plugin-terser 负责压缩输出后js
* rollup-plugin-css-only 提取css到一个文件
* clean-css 负责压缩css
* rollup-plugin-postcss 负责集成rollup和postcss
* postcss-scss PostCSS的SCSS解析器，详见npmjs.org上解释
* postcss-import 解析@import规则
* precss PreCSS允许您在CSS中使用类似于saas的标记和分阶段的CSS特性。
* autoprefixer PostCSS插件解析CSS，用于给css添加兼容前缀

## webpack Unit Test 依赖包
* babel转码 @babel/core @babel/preset-env @babel/plugin-transform-runtime
* babel-loader
* expect@23.6.0
* jsdom@13.2.0
* jsdom-global@3.0.2
* mocha@5.2.0
* mocha-webpack@next
* vue-loader
* webpack@4.*.*
* webpack-node-externals@.7.2
* @vue/test-utils
* vue-loader
针对上述对应版本进行安装，否则可能会出现版本问题