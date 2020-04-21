/*
 * @Author: PT
 * @Date: 2020-04-21 09:28:26
 * @LastEditors: PT
 * @LastEditTime: 2020-04-21 11:40:47
 * @Description: 
 */
import button from './button.vue'
button.install = function (Vue) {
  Vue.component(button.name, button)
}
export default button