var aComp = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"a"},[_vm._v("\n  aaa\n")])},
staticRenderFns: [],
    name:'',
    data () {
      return {

      };
    },

    components: {},

    computed: {},


    mounted() {},

    methods: {},

    watch: {}

  };

var button = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"button"},[_vm._v("Button\n  "),_c('aComp',[_vm._v("北包包")])],1)},
staticRenderFns: [],
  name: "EleButton",
  created() {
    console.log("hello world");
  },
  components: {
    aComp
  }
};

/*
 * @Author: PT
 * @Date: 2020-04-21 09:28:26
 * @LastEditors: PT
 * @LastEditTime: 2020-04-21 11:40:47
 * @Description: 
 */

button.install = function (Vue) {
  Vue.component(button.name, button);
};

export default button;
