/*
 * @Author: PT
 * @Date: 2020-04-21 12:03:15
 * @LastEditors: PT
 * @LastEditTime: 2020-04-27 09:54:35
 * @Description: 
 */
import LButton from './button'
// import eleTab from './tab'
import LIcon from './icon'
import LForm from './form'

const components = [
  LButton,
  // eleTab,
  LIcon,
  LForm
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export default {
  install
}