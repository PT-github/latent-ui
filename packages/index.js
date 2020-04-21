/*
 * @Author: PT
 * @Date: 2020-04-21 12:03:15
 * @LastEditors: PT
 * @LastEditTime: 2020-04-21 15:38:33
 * @Description: 
 */
import eleButton from './button'
import eleTab from './tab'

const components = [
  eleButton,
  eleTab
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export default {
  install
}