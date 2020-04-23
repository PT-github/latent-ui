/*
 * @Author: PT
 * @Date: 2020-04-23 10:30:29
 * @LastEditors: PT
 * @LastEditTime: 2020-04-23 11:38:27
 * @Description: 路由
 */

import Vue from 'vue'
import Router from 'vue-router'
import Button from "./page/button.md"

console.log(Button)

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/button',
    component: Button
  }]
})