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

var button = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.list && _vm.list.length > 0)?_c('div',{staticClass:"l-button"},[_vm._l((_vm.visibleButtons),function(item,index){return _c('el-button',{key:'visible_' + index,attrs:{"size":_vm.size,"type":item.type,"plain":item.plain,"round":item.round,"circle":item.circle,"loading":item.loading,"disabled":item.disabled,"icon":item.elIcon,"autofocus":item.autofocus},on:{"click":function($event){return _vm.handleClick(item)}}},[(item.icon && item.iconPosition !== 'right')?_c('l-icon',{attrs:{"name":item.icon}}):_vm._e(),_vm._v("\n    "+_vm._s(_vm.attrProps && _vm.attrProps.name ? item[_vm.attrProps.name] : item.name)+"\n    "),(item.icon && item.iconPosition === 'right')?_c('l-icon',{attrs:{"name":item.icon}}):_vm._e()],1)}),_vm._v(" "),(_vm.isFold && _vm.selectButtons && _vm.selectButtons.length > 0)?[_c('el-popover',{attrs:{"placement":"bottom-start","trigger":"hover","popper-class":"l-button-popper"}},[_c('el-button',{attrs:{"slot":"reference","size":_vm.size},slot:"reference"},[_c('span',[_vm._v(_vm._s(_vm.moreTitle)),_c('l-icon',{attrs:{"name":"iconxia"}})],1)]),_vm._v(" "),_c('ul',{staticClass:"l-button-more"},_vm._l((_vm.selectButtons),function(item,index){return _c('li',{key:'selectButtons_' + index,staticClass:"l-button-more-item",on:{"click":function($event){return _vm.handleClick(item)}}},[_vm._v("\n          "+_vm._s(_vm.attrProps && _vm.attrProps.name ? item[_vm.attrProps.name] : item.name)+"\n        ")])}),0)],1)]:_vm._e()],2):_vm._e()},
staticRenderFns: [],
  name: 'LButton',
  props: {
    size: {
      type: String,
      default: 'small'
    },
    // 是否折行
    isFold: {
      type: Boolean,
      default: true
    },
    /**
     * 配合isFold为true时，该设置有效
     * 可见数目 超过该设置默认隐藏在更多的下拉里
     * isFold为false，该设置无效
     */
    visible: {
      type: Number,
      default: 5
    },
    // 按钮数据
    list: {
      type: Array,
      default: () => []
    },
    // 属性匹配
    attrProps: {
      type: Object
    },
    moreTitle: {
      type: String,
      default: '更多操作'
    }
  },
  computed: {
    // 可见按钮数据
    visibleButtons () {
      let max = this.isFold ? this.visible : this.list.length;
      return this.list.slice(0, max)
    },
    // 下拉列表中按钮数据
    selectButtons () {
      let min = this.isFold ? this.visible : this.list.length;
      return this.list.slice(min)
    }
  },
  methods: {
    // 按钮点击事件
    handleClick (item) {
      item.handleClick && item.handleClick();
    }
  },
  components: {
    LIcon: icon
  }
};

/*
 * @Author: PT
 * @Date: 2020-04-21 09:28:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-24 17:58:01
 * @Description:
 */

button.install = function (Vue) {
  Vue.component(button.name, button);
};

var tab = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tab"},[_vm._v("\n  tab\n")])},
staticRenderFns: [],
    name:'EleTab',
    data () {
      return {

      }
    },

    components: {},

    computed: {},


    mounted () {},

    methods: {},

    watch: {}

  };

tab.install = function (Vue) {
  Vue.component(tab.name, tab);
};

/*
 * @Author: PT
 * @Date: 2020-04-21 12:03:15
 * @LastEditors: PT
 * @LastEditTime: 2020-04-26 11:32:10
 * @Description: 
 */
var components = [button, tab, icon];

var install = function install(Vue) {
  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
};

var index = {
  install: install
};

export default index;
