/*
 * @Author: PT
 * @Date: 2020-04-21 09:28:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-24 17:58:01
 * @Description:
 */
import button from './button.vue'
button.install = function (Vue) {
  Vue.component(button.name, button)
}
export default button
