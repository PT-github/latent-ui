var icon = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"l-iconfont",class:_vm.name})},
staticRenderFns: [],
  name: 'LIcon',
  props: {
    name: String
  }
};

/*
 * @Author: PT
 * @Date: 2020-04-26 11:30:05
 * @LastEditors: PT
 * @LastEditTime: 2020-04-26 11:30:39
 * @Description: file content
 */

icon.install = function (Vue) {
  Vue.component(icon.name, icon);
};

export default icon;
