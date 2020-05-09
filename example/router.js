/*
 * @Author: PT
 * @Date: 2020-04-23 10:30:29
 * @LastEditors: PT
 * @LastEditTime: 2020-05-09 23:16:10
 * @Description: 路由
 */

import Vue from 'vue'
import Router from 'vue-router'
import Layout from './components/Layout'
import menuData from './data/menu.json'

function getRouter () {
  const routeList = []
  menuData.map((i) => {
    if (!i.children) {
      const item = {
        path: '/' + i.name,
        component: () => import('./page/' + i.name + '.md'),
        name: i.label
      }
      routeList.push(item)
    } else {
      if (i.childrenGroup) {
        // 子菜单分组
        i.children.map((ii) => {
          if (ii.children) {
            ii.children.map(iii => {
              const item = {
                path: '/' + iii.name,
                component: () => import('./page/' + iii.name + '.md'),
                name: iii.label
              }
              routeList.push(item)
            })
          }
        })
      } else {
        i.children.map((ii) => {
          if (ii.name) {
            const item = {
              path: '/' + ii.name,
              component: () => import('./page/' + ii.name + '.md'),
              name: ii.label
            }
            routeList.push(item)
          }
        })
      }
    }
  })
  return routeList
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: getRouter()
    }
  ]
})