import table from './table.vue'

table.install = function(Vue) {
    Vue.component(table.name, table)
}
export default table