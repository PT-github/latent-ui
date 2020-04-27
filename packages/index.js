/*
 * @Author: PT
 * @Date: 2020-04-21 12:03:15
 * @LastEditors: PT
 * @LastEditTime: 2020-04-27 18:34:20
 * @Description: 
 */
import Button from './button'
// import eleTab from './tab'
import Icon from './icon'
import Form from './form'

const components = [
  Button,
  // eleTab,
  Icon,
  Form
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export default {
  install
}