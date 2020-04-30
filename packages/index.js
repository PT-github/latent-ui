/*
 * @Author: PT
 * @Date: 2020-04-21 12:03:15
 * @LastEditors: PT
 * @LastEditTime: 2020-04-30 09:49:55
 * @Description: 
 */
import Button from './button'
import EleTable from './table'
import Icon from './icon'
import Form from './form'
import QueryForm from './queryform'

const components = [
    Button,
    EleTable,
    Icon,
    Form,
    QueryForm
]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}
export default {
    install
}