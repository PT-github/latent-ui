/*
 * @Author: PT
 * @Date: 2020-04-21 12:03:15
 * @LastEditors: PT
 * @LastEditTime: 2020-04-26 11:32:10
 * @Description: 
 */
import eleButton from './button'
import eleTab from './tab'
import lIcon from './icon'

const components = [
  eleButton,
  eleTab,
  lIcon
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export default {
  install
}