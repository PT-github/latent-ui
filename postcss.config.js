/*
 * @Author: PT
 * @Date: 2020-03-27 16:14:33
 * @LastEditors: PT
 * @LastEditTime: 2020-04-22 19:53:33
 * @Description: postcss配置
 */

module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: [
        '> 0.05%',
        'ie>=8',
        'last 4 version'
      ]
    })
  ]
}