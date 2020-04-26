/*
 * @Author: PT
 * @Date: 2020-04-26 11:30:05
 * @LastEditors: PT
 * @LastEditTime: 2020-04-26 11:30:39
 * @Description: file content
 */

import icon from './icon.vue'
icon.install = function (Vue) {
  Vue.component(icon.name, icon)
}
export default icon
