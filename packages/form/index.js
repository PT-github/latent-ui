/*
 * @Author: PT
 * @Date: 2020-04-21 09:28:26
 * @LastEditors: PT
 * @LastEditTime: 2020-04-27 09:49:24
 * @Description:
 */
import form from './form.vue'
form.install = function (Vue) {
  Vue.component(form.name, form)
}
export default form
