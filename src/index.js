/*
 * @Author: PT
 * @Date: 2020-04-20 20:40:09
 * @LastEditors: PT
 * @LastEditTime: 2020-04-20 20:54:52
 * @Description: 
 */
import Button from './button/button.vue'
import Tab from './tab/tab.vue'

const components = [
  Button,
  Tab
];
// 全局注入组件
const install = function (Vue) {
  if (!Vue || install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component);
  })
}

if (typeof window != 'undefined' && window.Vue) {
  install(window.Vue)
}

// export {
//   Button
// }

export default {
  install
};