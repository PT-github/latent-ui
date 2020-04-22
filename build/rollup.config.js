/*
 * @Author: PT
 * @Date: 2020-04-21 10:33:10
 * @LastEditors: PT
 * @LastEditTime: 2020-04-22 19:18:13
 * @Description: 
 */
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue2'
// import { terser } from 'rollup-plugin-terser' // 压缩js
// import css from 'rollup-plugin-css-only' // 提取css到一个文件
// import CleanCSS from 'clean-css'   // 压缩css
import postcss from 'rollup-plugin-postcss'
import postcssScss from 'postcss-scss'
import postImport from 'postcss-import'
import precss from 'precss'
import autoprefixer from 'autoprefixer'
const path = require('path')
const fs = require('fs')
const pkg = require('../package.json')

function isDir (dir) {
  return fs.lstatSync(dir).isDirectory()
}

const packages = {}

const dir = path.join(__dirname, "../packages")
const files = fs.readdirSync(dir)

files.forEach(file => {
  const filepath = path.join(dir, file)
  if (isDir(filepath) && file !== 'styles') {
    packages[file] = `packages/${file}/index.js`
  }
})
const formats = {
  umd: 'index.umd.js',
  es: 'index.js',
  amd: 'index.amd.js',
  // iife: 'index.iife.js',
  // cjs: 'index.cjs.js'
}
function getOutput (name) {
  let output = []
  for (let prop in formats) {
    output.push({
      file: name === allScript ? `lib/${formats[prop]}` : `lib/${name}/${formats[prop]}`,
      format: prop,
      name: name,
      sourcemap: false
    })
  }
  return output
}

const allScript = `${pkg.name}.all`
packages[allScript] = `packages/index.js`

function createConfig (file, name) {
  const config = {
    input: file,
    output: getOutput(name),
    plugins: [
      // css({output: 'dist/eleExtendsionUi.css'}),
      vue(),
      postcss({
        extract: true,
        parser: postcssScss,
        // minimize: true,
        plugins: [
          precss(),
          postImport(),
          autoprefixer()
        ]
      }),
      // terser(),
      resolve(),
      babel({
        exclude: ['node_modules/**'],
        runtimeHelpers: true
      }),
      commonjs()
    ],
    external: [ // 不被打包的库
      'vue'
    ]
  }
  return config
}

const buildPackages = []
for (let name in packages) {
  const file = packages[name]
  console.log(file, name)
  buildPackages.push(createConfig(file, name))
}

export default buildPackages