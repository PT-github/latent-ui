/*
 * @Author: PT
 * @Date: 2020-04-21 12:03:15
 * @LastEditors: fenzhou
 * @LastEditTime: 2020-04-28 16:02:52
 * @Description: 
 */
import Button from './button'
import EleTable from './table'
import Icon from './icon'
import Form from './form'

const components = [
    Button,
    EleTable,
    Icon,
    Form
]

const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}
export default {
    install
}