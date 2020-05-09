/*
 * @Author: PT
 * @Date: 2020-04-29 10:08:57
 * @LastEditors: PT
 * @LastEditTime: 2020-05-09 11:58:35
 * @Description: file content
 */
import table from './table.js'
// import table from './table.vue'

table.install = function (Vue) {
    Vue.component(table.name, table)
}
export default table