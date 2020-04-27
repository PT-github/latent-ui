var LFormItemText = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"l-form-item-text"},[_vm._t("default")],2)},
staticRenderFns: [],
  name: 'LFormItemText',
  props: [ 'value' ]
};

var LFormItemInput = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-input',_vm._b({staticClass:"l-form-item-input",attrs:{"value":_vm.value},on:{"input":_vm.handleInput}},'el-input',_vm.$attrs,false))},
staticRenderFns: [],
  name: 'LFormItemInput',
  props: [ 'value', 'item' ],
  methods: {
    handleInput (v) {
      this.$emit('input', v, this.item);
    }
  }
};

var LFormItemSelect = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-select',_vm._b({attrs:{"value":_vm.value},on:{"input":_vm.handleInput}},'el-select',_vm.$attrs,false),[(!_vm.item.isGroup)?_vm._l((_vm.options),function(option,index){return _c('el-option',{key:'l-option_' + index,attrs:{"label":option[_vm.attrProps.label],"value":option[_vm.attrProps.value],"disabled":option.disabled}})}):_vm._l((_vm.options),function(fa,index){return _c('el-option-group',{key:'l-option-fa_' + index,attrs:{"label":fa[_vm.attrProps.label]}},_vm._l((fa[_vm.attrProps.options]),function(sub,idx){return _c('el-option',{key:'l-option_sub' + index + '_' + idx,attrs:{"label":sub[_vm.attrProps.label],"value":sub[_vm.attrProps.value],"disabled":sub.disabled}})}),1)})],2)},
staticRenderFns: [],
  name: 'LFormItemSelect',
  props: {
    // select的值
    value: {
      required: true
    },
    // 配置
    item: {
      type: Object,
      default: () => {
        return {
          isGroup: false,
          options: []
        }
      }
    }
  },
  data () {
    return {}
  },

  components: {},

  computed: {
    attrProps () {
      let obj = {
        label: 'label',
        value: 'value',
        options: 'options'
      };
      this.item && this.item.attrProps && Object.assign(obj, this.item.attrProps);
      return obj
    },
    options () {
      let keys = this.attrProps;
      if (this.item && this.item.options && this.item.options.length > 0) {
        return this.item.options
      }
      return []
    }
  },

  mounted () {},

  methods: {
    handleInput (v) {
      this.$emit('input', v, this.item);
    }
  },

  watch: {}
};

var LFormItem = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.item && _vm.item.type)?_c('span',{staticClass:"l-form-item"},[(_vm.item.type === 'text')?_c('l-form-item-text',[_vm._v("\n    "+_vm._s(_vm.value)+"\n  ")]):(_vm.item.type === 'input')?_c('l-form-item-input',_vm._g({attrs:{"value":_vm.value,"item":_vm.item,"type":_vm.item.eType,"maxlength":_vm.item.maxlength,"minlength":_vm.item.minlength,"show-word-limit":_vm.item.showWordLimit,"placeholder":_vm.item.placeholder,"clearable":_vm.item.clearable,"show-password":_vm.item.showPassword,"disabled":_vm.item.disabled === false,"size":_vm.item.size,"prefix-icon":_vm.item.prefixIcon,"suffix-icon":_vm.item.suffixIcon,"autosize":_vm.item.autosize,"autocomplete":_vm.item.autocomplete,"name":_vm.item.name,"readonly":_vm.item.readonly,"max":_vm.item.max,"min":_vm.item.min,"step":_vm.item.step,"resize":_vm.item.resize,"autofocus":_vm.item.autofocus,"form":_vm.item.form,"label":_vm.item.label,"tabindex":_vm.item.tabindex,"validate-event":_vm.item.validateEvent === false}},_vm.$listeners)):(_vm.item.type === 'select')?_c('l-form-item-select',_vm._g({attrs:{"value":_vm.value,"item":_vm.item}},_vm.$listeners)):_vm._e()],1):_vm._e()},
staticRenderFns: [],
  name: 'LFormItem',
  props: {
    // field配置信息
    item: {
      type: Object
    },
    // 当前值
    value: {
      required: true
    }
  },
  data () {
    return {}
  },

  components: {
    LFormItemText,
    LFormItemInput,
    LFormItemSelect
  },

  computed: {},

  mounted () {},

  methods: {
    /**【type:input】的input监听 */
    handleInput (v) {
      console.log(v, '=====');
    }
  },

  watch: {}
};

var form = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.fields && _vm.fields.length > 0)?_c('div',{staticClass:"l-form"},[_c('el-form',_vm._g(_vm._b({ref:"form",attrs:{"model":_vm.value}},'el-form',_vm.$attrs,false),_vm.$listeners),_vm._l((_vm.visibleFields),function(item,index){return _c('el-form-item',{key:'l-form-item_' + index,attrs:{"prop":item.prop,"label":item.label,"label-width":item.labelWidth,"required":!!item.required,"rules":item.rules,"error":item.error,"show-message":item.showMessage,"inline-message":item.inlineMessage,"size":item.size},scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t(item.prop)]},proxy:true},{key:"default",fn:function(){return [_c('LFormItem',{attrs:{"item":item,"value":_vm.value[item.prop]},on:{"input":_vm.handleInput}})]},proxy:true}],null,true)})}),1)],1):_vm._e()},
staticRenderFns: [],
  name: 'LForm',
  props: {
		// form表单下的field配置
    fields: {
			type: Array,
			required: true,
      default: () => []
		},
		value: {
			type: Object,
			default: () => {
				return {}
			}
		}
  },
  data () {
    return {}
  },

  components: {
		LFormItem
	},

  computed: {
    visibleFields () {
      return this.fields.filter(item => item.show !== false)
    }
  },

  mounted () {},

  methods: {
    // 监听子组件中的数据回填input事件
    handleInput (v, item) {
      // console.log('监听子组件中的数据回填input事件', v, item)
      // if (item.type === 'input') {
        this.$emit('input', Object.assign({}, this.value, {
          [item.prop]: v
        }));
      // }
    }
  },

  watch: {}
};

/*
 * @Author: PT
 * @Date: 2020-04-21 09:28:26
 * @LastEditors: PT
 * @LastEditTime: 2020-04-27 09:49:24
 * @Description:
 */

form.install = function (Vue) {
  Vue.component(form.name, form);
};

export default form;
