/*
 * @Author: PT
 * @Date: 2020-04-23 09:33:57
 * @LastEditors: PT
 * @LastEditTime: 2020-04-26 11:40:54
 * @Description: 入口文件
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
import EleUi from '../lib'
import '../lib/index.css'
import 'highlight.js/styles/color-brewer.css'
import './asset/style/index.less'
import router from './router'
import DemoBlock from './components/demoBlock'
Vue.use(EleUi)
Vue.use(ElementUI)
Vue.component('demo-code', DemoBlock)


console.log(router)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})