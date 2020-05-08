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

var LTableColumn = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-table-column',_vm._b({scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(_vm.item.slotbool)?[_vm._t(_vm.item.value,null,{"row":scope.row,"column":scope.column,"index":scope.$index})]:[_c('span',[_vm._v(_vm._s(scope.row[_vm.item.value]))])]]}}],null,true)},'el-table-column',_vm.$attrs,false))},
staticRenderFns: [],
  name: 'LTableColumn',
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          slotbool: false
        }
      }
    }
  },
  data () {
    return {}
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {},

  watch: {}
};

/*
 * @Author: PT
 * @Date: 2020-05-07 09:46:42
 * @LastEditors: PT
 * @LastEditTime: 2020-05-07 12:02:37
 * @Description: dom帮助类
 */

/**
 * @description: dom监听
 * @param {type} 
 */
var domObserve = function domObserve(dom, option, callback) {
  option = option || {
    attributes: true,
    // 属性的变动
    // attributeFilter: ['class', 'style'], // 观察特定属性
    attributeOldValue: true,
    // 观察 attributes 变动时，是否需要记录变动前的属性值
    characterData: true,
    // 节点内容或节点文本的变动
    characterDataOldValue: true,
    // 观察 characterData 变动，是否需要记录变动前的值
    childList: true,
    // 子节点的变动（新增、删除或者更改）
    subtree: true // 是否将观察器应用于该节点的所有后代节点

  };

  if (!dom) {
    return Promise.reject('dom对象不能为空');
  }

  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  var observe = new MutationObserver(function (records) {
    records.map(function (record) {
      callback(record);
    });
  }).observe(dom, option);
  return observe;
};

var table = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"s-table"},[_c('el-table',_vm._g(_vm._b({directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"table",attrs:{"data":_vm.tableData,"height":_vm.tHeight}},'el-table',_vm.$attrs,false),_vm.$listeners),[_vm._l((_vm.columns),function(item,index){return [_c('l-table-column',{key:item.value + '_' + index,attrs:{"item":item,"type":item.type,"index":item.index,"column-key":item.columnKey,"label":item.label,"prop":item.prop,"width":item.width,"min-width":item.minWidth,"fixed":item.fixed,"render-header":item.renderHeader,"sortable":item.sortable,"sort-method":item.sortMethod,"sort-by":item.sortBy,"sort-orders":item.sortOrders,"resizable":item.resizable !== false,"formatter":item.formatter,"show-overflow-tooltip":item.showOverflowTooltip,"align":item.align,"header-align":item.headerAlign,"class-name":item.className,"label-class-name":item.labelClassName,"selectable":item.selectable,"reserve-selection":item.reserveSelection,"filters":item.filters,"filter-placement":item.filterPlacement,"filter-multiple":item.filterMultiple,"filter-method":item.filterMethod,"filtered-value":item.filteredValue}})]})],2),_vm._v(" "),_c('el-pagination',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPage),expression:"showPage"}],ref:"pagination",attrs:{"current-page":_vm.localPagination.pageNo,"total":_vm.localPagination.total,"page-sizes":[10,20,30,40,50],"page-size":_vm.localPagination.pageSize,"layout":"total, prev, pager, next, sizes, jumper"},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange,"update:currentPage":function($event){return _vm.$set(_vm.localPagination, "pageNo", $event)},"update:current-page":function($event){return _vm.$set(_vm.localPagination, "pageNo", $event)}}})],1)},
staticRenderFns: [],
  name: 'LTable',
  props: {
    // 表格列配置
    columns: Array,
    // 表格数据源 或 promise接口回调
    dataSource: {
      type: [Function, Array],
      required: true
    },
    // 创建组件完成后就开始同步数据
    loadDataAuto: {
      type: Boolean,
      default: true
    },
    // 表格固定高度
    height: [ String, Number ],
    // 高度自适应（适合容器高度不固定时，动态设置表格高度），组件默认会监听容器（可以通过parentSelector修改监听dom节点）的class/style属性，class/style发生变化，则重新设置table表格高度【window.onresize时也会重新设置高度】
    autoHeight: {
      type: Boolean,
      default: true
    },
    // 高度自适应时，被监听的容器dom节点
    parentSelector: String,
    // 分页参数key键值 eg: {pageNo: 'pageNum', pageSize: 'page'}
    attrProps: Object,
    // 是否显示分页组件
    showPage: {
      type: Boolean,
      default: true
    },
  },
  data () {
    return {
      tableData: [], // 表格数据
      tHeight: null, // 表格高度
      observeDom: null, // 被监听节点
      parentNode: null, // 父容器
      timer: null, // 用于函数防抖
      loading: false, // 表格loading
      localPagination: {
        pageNo: 1,
        total: null,
        pageSize: 10
      }, // 翻页数据
      paginationHeight: null, // 翻页组件高度



      localDataSource: [],
      tableHeight: 600, // 表格高度
      sortArr: [] //排序数组字段
    }
  },
  watch: {
    pageNum (val) {
      Object.assign(this.localPagination, {
        current: val
      });
    },
    pageSize (val) {
      Object.assign(this.localPagination, {
        pageSize: val
      });
    },
    showSizeChanger (val) {
      Object.assign(this.localPagination, {
        showSizeChanger: val
      });
    }
  },
  created () {
    if (this.loadDataAuto) {
      this.loadData();
    }
  },
  mounted () {
    this.tHeight = this.height || null;
    if (!this.height && this.autoHeight) {// 高度自适应
      // 父容器
      this.parentNode = this.$el.parentNode;
      // 被监听的节点
      this.observeDom = this.parentSelector ? (document.querySelector(this.parentSelector) || this.parentNode) : this.parentNode;
      // 设置父容器溢出隐藏
      this.parentNode.style.overflow = 'hidden';
      // 翻页组件高度
      console.log(this.$refs.pagination);
      this.showPage && (this.paginationHeight = window.getComputedStyle(this.$refs.pagination.$el).height);
      // 监听高度变化的容器class和style属性变化
      this.observe = domObserve(this.observeDom, {
        attributes: true,
        attributeFilter: [ 'class', 'style' ]
      }, this.handleTableHeight);
      // window resize监听
      window.addEventListener('resize', this.handleTableHeight);
      // 高度未设定时，计算表格高度
      this.handleTableHeight();
    }
  },
  destroyed () {
    // 组件销毁 删除window.onresize 和 父容器属性监听
    this.autoHeight && window.removeEventListener('resize', this.handleTableHeight) && this.observe.disconnect();
  },
  methods: {
    /**
     * @description 同步localPagination数据
     */
    asyncLocalPagination (pagination) {
      Object.assign(this.localPagination, {
        pageNo: pagination.pageNo || pagination[this.attrProps && this.attrProps.pageNo ? this.attrProps.pageNo : 'pageNo'], // 返回结果中的当前分页数
        total: pagination.total || pagination[this.attrProps && this.attrProps.total ? this.attrProps.total : 'total'], // 返回结果中的总记录数
      });
    },
    /**
     * @description 表格重新加载数据
     * @param {Boolean} bool 是否返回到第一页
     */
    reloadData (bool = false) {
      bool && Object.assign(this.localPagination, {
        pageNo: 1
      });
      this.loadData();
    },
    /**
     * @description 同步数据
     */
    loadData () {
      this.tableData.splice(0, this.tableData.length);
      if (this.dataSource instanceof Array) {
        this.tableData.push(...this.dataSource);
        this.asyncLocalPagination({
          pageNo: 1,
          total: this.dataSource.length
        });
      } else if (typeof this.dataSource === 'function') {
        this.loading = true;
        this.$emit('load-start');
        // 执行dataSource中的方法，传入{pageNo, pageSize}数据(传参的key值以attrProps中传了pageNo和pageSize对应字段为准)
        let queryParams = {
          [this.attrProps && this.attrProps.pageNo ? this.attrProps.pageNo : 'pageNo']: this.localPagination.pageNo,
          [this.attrProps && this.attrProps.pageSize ? this.attrProps.pageSize : 'pageSize']: this.localPagination.pageSize
        };
        let result = this.dataSource(queryParams);
        if (result && result.then) {
          result.then(r => {
            this.asyncLocalPagination(r);
            // 为防止删除数据后导致页面当前页面数据长度为 0 ,自动翻页到上一页
            this.tableData.push(...r.list);
            this.$emit('load-finished');
            this.$nextTick(() => {
              this.loading = false;
            });
          });
        }
      }
    },
    /**
     * @description 动态设置表格高度(暂不支持表格高度动画)函数防抖
     */
    handleTableHeight () {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        let height = window.getComputedStyle(this.parentNode).height; // 外部容器高度
        if (this.showPage) {
          try {
            height = (Number(height.substring(0, height.length - 2)) - Number(this.paginationHeight.substring(0, this.paginationHeight.length - 2))) + 'px';
          } catch (error) {
            console.error('table组件计算pagination高度发生错误', error);
          }
        }
        this.tHeight = height;
      }, 0);
    },
    /**
     * @description 监听翻页组件pageSize改变
     */
    handleSizeChange (val) {
      this.localPagination.pageSize = val;
      this.loadData();
    },
    /**
     * @description 监听翻页组件pageNo改变
     */
    handleCurrentChange (val) {
      this.localPagination.pageNo = val;
      this.loadData();
    }
  },
  components: {
    LTableColumn
  }
};

table.install = function (Vue) {
  Vue.component(table.name, table);
};

var LFormItemText = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"l-form-item-text"},[_vm._t("default")],2)},
staticRenderFns: [],
  name: 'LFormItemText',
  props: [ 'value' ]
};

var LFormItemInput = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-input',_vm._b({staticClass:"l-form-item-input",attrs:{"value":_vm.value},on:{"input":_vm.handleInput,"change":_vm.handleChange}},'el-input',_vm.$attrs,false))},
staticRenderFns: [],
  name: 'LFormItemInput',
  props: ['value', 'item'],
  methods: {
    handleInput (v) {
      this.$emit('input', v, this.item);
    },
    handleChange (v) {
      this.item.handle &&
        typeof this.item.handle &&
        this.item.handle(v, this.item);
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
      let optionKeys = this.attrProps.options;
      if (this.item && this.item[optionKeys] && this.item[optionKeys].length > 0) {
        return this.item.options
      }
      return []
    }
  },

  mounted () {},

  methods: {
    handleInput (v) {
      this.$emit('input', v, this.item);
      this.item.handle && typeof this.item.handle && this.item.handle(v, this.item);
    }
  },

  watch: {}
};

var LFormItemCheckbox = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-checkbox-group',_vm._b({model:{value:(_vm.currentValue),callback:function ($$v) {_vm.currentValue=$$v;},expression:"currentValue"}},'el-checkbox-group',_vm.$attrs,false),_vm._l((_vm.options),function(option,index){return _c('el-checkbox',{key:'checkbox_' + index,attrs:{"label":option[_vm.attrProps.value]}},[_vm._v(_vm._s(option[_vm.attrProps.label]))])}),1)},
staticRenderFns: [],
  name: 'LFormItemCheckbox',
  props: {
    // 绑定的值
    value: {
      required: true
    },
    // 配置
    item: {
      type: Object,
      default: () => {
        return {
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
    // 根据item配置中的valueFormat，回传对应类型的数据
    valueFormat () {
      return this.item.valueFormat
    },
    // 如果是value是字符串类型，该设置为选中项的连接标识，默认为英文逗号
    splitStr () {
      return this.item.split || ','
    },
    currentValue: {
      get () {
        if (this.valueFormat === 'string') {
          return typeof this.value === 'string' ? this.value.split(this.splitStr) : []
        } else {
          return this.value instanceof Array ? this.value : []
        }
      },
      set (val) {
        this.handleInput(this.valueFormat === 'string' ? val.join(this.splitStr) : val);
      }
    },
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
      let optionKeys = this.attrProps.options;
      if (this.item && this.item[optionKeys] && this.item[optionKeys].length > 0) {
        return this.item.options
      }
      return []
    }
  },

  mounted () {},

  methods: {
    handleInput (v) {
      this.$emit('input', v, this.item);
      this.item.handle && typeof this.item.handle && this.item.handle(v, this.item);
    }
  },

  watch: {}
};

var LFormItemRadio = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-radio-group',_vm._b({attrs:{"value":_vm.value},on:{"input":_vm.handleInput}},'el-radio-group',_vm.$attrs,false),_vm._l((_vm.options),function(option,index){return _c('el-radio',{key:'radio_' + index,attrs:{"label":option[_vm.attrProps.value]}},[_vm._v(_vm._s(option[_vm.attrProps.label]))])}),1)},
staticRenderFns: [],
  name: 'LFormItemRadio',
  props: {
    // 绑定的值
    value: {
      required: true
    },
    // 配置
    item: {
      type: Object,
      default: () => {
        return {
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
      this.item &&
        this.item.attrProps &&
        Object.assign(obj, this.item.attrProps);
      return obj
    },
    options () {
      let optionKeys = this.attrProps.options;
      if (
        this.item &&
        this.item[optionKeys] &&
        this.item[optionKeys].length > 0
      ) {
        return this.item.options
      }
      return []
    }
  },

  mounted () {},

  methods: {
    handleInput (v) {
      this.$emit('input', v, this.item);
      this.item.handle && typeof this.item.handle && this.item.handle(v, this.item);
    }
  },

  watch: {}
};

var LFormItemTime = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.item.eType === 'picker')?_c('el-time-picker',_vm._b({staticClass:"l-form-item-timepicker",on:{"change":_vm.handleChange},model:{value:(_vm.currentValue),callback:function ($$v) {_vm.currentValue=$$v;},expression:"currentValue"}},'el-time-picker',_vm.$attrs,false)):_c('el-time-select',_vm._b({staticClass:"l-form-item-timeselect",on:{"change":_vm.handleChange},model:{value:(_vm.currentValue),callback:function ($$v) {_vm.currentValue=$$v;},expression:"currentValue"}},'el-time-select',_vm.$attrs,false))},
staticRenderFns: [],
  name: 'LFormItemTime',
  props: {
    model: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // time组件选择的值/默认值
    value: {
      required: true
    },
    // 配置
    item: {
      type: Object,
      default: () => {
        return {
          eType: 'select',
          isRange: false
        }
      }
    }
  },
  computed: {
    isRange () {
      return this.item.eType === 'picker' && this.item.isRange
    },
    currentValue: {
      get () {
        let val;
        if (this.isRange) {
          try {
            let startKey = this.item.keySets[0];
            let endKey = this.item.keySets[1];
            val = this.model[startKey] && this.model[endKey] ?[ this.model[startKey], this.model[endKey]] : null;
          } catch (error) {
            val = this.value instanceof Array ? this.value : null;
          }
        } else {
          val = this.value;
        }
        return val
      },
      set (val) {
        if (this.isRange) {
          try {
            let startKey = this.item.keySets[0];
            let endKey = this.item.keySets[1];
            this.$set(this.model, startKey, val[0]);
            this.$set(this.model, endKey, val[1]);
          } catch (error) {
            console.info('keySets配置无效或未配置');
          }
        }
        this.$emit('input', val, this.item);
      }
    }
  },
  methods: {
    handleChange (v) {
      this.item.handle && typeof this.item.handle && this.item.handle(v, this.item);
    }
  }
};

var LFormItemDate = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-date-picker',_vm._b({staticClass:"l-form-item-date",attrs:{"type":_vm.item.eType,"format":_vm.format,"value-format":_vm.valueFormat},on:{"change":_vm.handleChange},model:{value:(_vm.currentValue),callback:function ($$v) {_vm.currentValue=$$v;},expression:"currentValue"}},'el-date-picker',_vm.$attrs,false))},
staticRenderFns: [],
  name: 'LFormItemDate',
  props: {
    model: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // time组件选择的值/默认值
    value: {
      required: true
    },
    // 配置
    item: {
      type: Object,
      default: () => {
        return {
          eType: 'date'
        }
      }
    }
  },
  computed: {
    format () {
      if (this.item.format) {
        return this.item.format
      }
      let formatStr = this.getFormat();
      return formatStr
    },
    valueFormat () {
      if (this.item.valueFormat) {
        return this.item.valueFormat
      }
      let formatStr = this.getFormat();
      return formatStr
    },
    isRange () {
      return /.range$/.test(this.item.eType)
    },
    currentValue: {
      get () {
        let val;
        if (this.isRange) {
          try {
            let startKey = this.item.keySets[0];
            let endKey = this.item.keySets[1];
            val = this.model[startKey] && this.model[endKey] ?[ this.model[startKey], this.model[endKey]] : null;
          } catch (error) {
            val = this.value instanceof Array ? this.value : null;
          }
        } else {
          val = this.value;
        }
        return val
      },
      set (val) {
        if (this.isRange) {
          try {
            let startKey = this.item.keySets[0];
            let endKey = this.item.keySets[1];
            this.$set(this.model, startKey, val[0]);
            this.$set(this.model, endKey, val[1]);
          } catch (error) {
            console.info('keySets配置无效或未配置');
          }
        }
        this.$emit('input', val, this.item);
      }
    }
  },
  methods: {
    getFormat () {
      let formatStr = '';
      // year/month/date/dates/week/datetime/datetimerange/daterange/monthrange
      switch (this.item.eType) {
        case 'year':
          formatStr = 'yyyy';
          break
        case 'month':
        case 'monthrange':
          formatStr = 'yyyy-MM';
          break
        case 'date':
        case 'dates':
        case 'daterange':
          formatStr = 'yyyy-MM-dd';
          break
        case 'week':
          formatStr = 'yyyy-MM WW周';
          break
        case 'datetime':
        case 'datetimerange':
          formatStr = 'yyyy-MM-dd HH:mm:ss';
          break
        default:
          formatStr = 'yyyy-MM-dd HH:mm:ss';
      }
      return formatStr
    },
    handleChange (v) {
      this.item.handle && typeof this.item.handle && this.item.handle(v, this.item);
    }
  }
};

var LFormItemNumber = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-input-number',_vm._b({staticClass:"l-form-item-number",attrs:{"controls-position":"right"},on:{"change":_vm.handleChange},model:{value:(_vm.currentValue),callback:function ($$v) {_vm.currentValue=$$v;},expression:"currentValue"}},'el-input-number',_vm.$attrs,false))},
staticRenderFns: [],
  name: 'LFormItemNumber',
  props: ['value', 'item'],
  data () {
    return {}
  },

  components: {},

  computed: {
    currentValue: {
      get () {
        let v = +this.value;
        return v ? v : 0
      },
      set (val) {
        this.$emit('input', val, this.item);
      }
    }
  },

  mounted () {},

  methods: {
    handleInput (v) {
      this.$emit('input', v, this.item);
    },
    handleChange (v) {
      this.item.handle &&
        typeof this.item.handle &&
        this.item.handle(v, this.item);
    }
  },

  watch: {}
};

var LFormItem = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.item && _vm.item.type)?_c('span',{staticClass:"l-form-item"},[(_vm.item.type === 'text')?_c('l-form-item-text',[_vm._v("\n    "+_vm._s(_vm.value)+"\n  ")]):(_vm.item.type === 'input')?_c('l-form-item-input',_vm._g({attrs:{"value":_vm.value,"item":_vm.item,"type":_vm.item.eType,"maxlength":_vm.item.maxlength,"minlength":_vm.item.minlength,"show-word-limit":_vm.item.showWordLimit,"placeholder":_vm.item.placeholder,"clearable":_vm.item.clearable,"show-password":_vm.item.showPassword,"disabled":_vm.item.disabled === false,"size":_vm.item.size,"prefix-icon":_vm.item.prefixIcon,"suffix-icon":_vm.item.suffixIcon,"autosize":_vm.item.autosize,"autocomplete":_vm.item.autocomplete,"name":_vm.item.name,"readonly":_vm.item.readonly,"max":_vm.item.max,"min":_vm.item.min,"step":_vm.item.step,"resize":_vm.item.resize,"autofocus":_vm.item.autofocus,"form":_vm.item.form,"label":_vm.item.label,"tabindex":_vm.item.tabindex,"validate-event":_vm.item.validateEvent !== false}},_vm.$listeners)):(_vm.item.type === 'select')?_c('l-form-item-select',_vm._g({attrs:{"value":_vm.value,"item":_vm.item,"multiple":_vm.item.multiple,"disabled":!!_vm.item.disabled,"value-key":_vm.item.valueKey || 'value',"size":_vm.item.size,"clearable":!!_vm.item.clearable,"collapse-tags":!!_vm.item.collapseTags,"multiple-limit":_vm.item.multipleLimit,"name":_vm.item.name,"autocomplete":_vm.item.autocomplete,"placeholder":_vm.item.placeholder,"filterable":_vm.item.filterable,"allow-create":_vm.item.allowCreate,"filter-method":_vm.item.filterMethod,"remote":_vm.item.remote,"loading":_vm.item.loading,"loading-text":_vm.item.loadingText,"no-match-text":_vm.item.noMatchText,"no-data-text":_vm.item.noDataText,"popper-class":_vm.item.popperClass,"reserve-keyword":_vm.item.reserveKeyword,"default-first-option":_vm.item.defaultFirstOption,"popper-append-to-body":_vm.item.popperAppendToBody !== false,"automatic-dropdown":_vm.item.automaticDropdown}},_vm.$listeners)):(_vm.item.type === 'checkbox')?_c('l-form-item-checkbox',_vm._g({attrs:{"value":_vm.value,"item":_vm.item,"size":_vm.item.size,"disabled":!!_vm.item.disabled,"min":_vm.item.min,"max":_vm.item.max,"text-color":_vm.item.textColor || '#FFFFFF',"fill":_vm.item.fill || '#409EFF'}},_vm.$listeners)):(_vm.item.type === 'radio')?_c('l-form-item-radio',_vm._g({attrs:{"value":_vm.value,"item":_vm.item,"size":_vm.item.size,"disabled":!!_vm.item.disabled,"text-color":_vm.item.textColor || '#FFFFFF',"fill":_vm.item.fill || '#409EFF'}},_vm.$listeners)):(_vm.item.type === 'time')?_c('l-form-item-time',_vm._g({attrs:{"value":_vm.value,"item":_vm.item,"readonly":_vm.item.readonly,"disabled":_vm.item.disabled,"editable":_vm.item.editable !== false,"clearable":_vm.item.clearable,"size":_vm.item.size,"placeholder":_vm.item.placeholder,"start-placeholder":_vm.item.startPlaceholder,"end-placeholder":_vm.item.endPlaceholder,"arrow-control":_vm.item.arrowControl,"align":_vm.item.align,"popper-class":_vm.item.popperClass,"picker-options":_vm.item.pickerOptions,"range-separator":_vm.item.rangeSeparator,"value-format":_vm.item.valueFormat || 'HH:mm:ss',"default-value":_vm.item.defaultValue,"name":_vm.item.name,"prefix-icon":_vm.item.prefixIcon,"clear-icon":_vm.item.clearIcon,"model":_vm.$attrs.model}},_vm.$listeners)):(_vm.item.type === 'date')?_c('l-form-item-date',_vm._g({attrs:{"value":_vm.value,"item":_vm.item,"readonly":_vm.item.readonly,"disabled":_vm.item.disabled,"editable":_vm.item.editable !== false,"clearable":_vm.item.clearable,"size":_vm.item.size,"placeholder":_vm.item.placeholder,"start-placeholder":_vm.item.startPlaceholder,"end-placeholder":_vm.item.endPlaceholder,"align":_vm.item.align,"popper-class":_vm.item.popperClass,"picker-options":_vm.item.pickerOptions,"range-separator":_vm.item.rangeSeparator,"default-value":_vm.item.defaultValue,"default-time":_vm.item.defaultTime,"value-format":_vm.item.valueFormat,"unlink-panels":_vm.item.unlinkPanels,"prefix-icon":_vm.item.prefixIcon,"clear-icon":_vm.item.clearIcon,"validate-event":_vm.item.validateEvent !== false,"model":_vm.$attrs.model}},_vm.$listeners)):(_vm.item.type === 'number')?_c('l-form-item-number',_vm._g({attrs:{"value":_vm.value,"item":_vm.item,"min":_vm.item.min,"max":_vm.item.max,"step":_vm.item.step,"step-strictly":_vm.item.stepStrictly,"precision":_vm.item.precision,"size":_vm.item.size,"disabled":_vm.item.disabled,"controls":_vm.item.controls !== false,"name":_vm.item.name,"label":_vm.item.label,"placeholder":_vm.item.placeholder}},_vm.$listeners)):_vm._e()],1):_vm._e()},
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
    LFormItemSelect,
    LFormItemCheckbox,
    LFormItemRadio,
    LFormItemTime,
    LFormItemDate,
    LFormItemNumber
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
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.fields && _vm.fields.length > 0)?_c('div',{staticClass:"l-form"},[_c('el-form',_vm._g(_vm._b({ref:"form",class:{ 'l-form--inline-group' : _vm.$attrs.inline },style:({ 'grid-template-columns': _vm.gridColumnWidth }),attrs:{"model":_vm.value}},'el-form',_vm.$attrs,false),_vm.$listeners),_vm._l((_vm.visibleFields),function(item,index){return _c('el-form-item',{key:'l-form-item_' + index,attrs:{"prop":item.prop,"label":item.label,"label-width":item.labelWidth,"required":!!item.required,"rules":item.rules,"error":item.error,"show-message":item.showMessage,"inline-message":item.inlineMessage,"size":item.size},scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t(item.prop)]},proxy:true},{key:"default",fn:function(){return [_c('LFormItem',{attrs:{"item":item,"model":_vm.value,"value":_vm.value[item.prop]},on:{"input":_vm.handleInput}})]},proxy:true}],null,true)})}),1)],1):_vm._e()},
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
    },
    // 一行显示formitem数目
    inlineNumber: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {}
  },

  components: {
		LFormItem
	},

  computed: {
    // 过滤后的fields配置
    visibleFields () {
      return this.fields.filter(item => item.show !== false)
    },
    gridColumnWidth () {
      if (this.$attrs.inline && this.inlineNumber) {
        return `repeat(${this.inlineNumber}, ${ 100 / this.inlineNumber }%)`
      }
      return 'none'
    }
  },

  mounted () {},

  methods: {
    // 监听子组件中的数据回填input事件
    handleInput (v, item) {
      // console.log('监听子组件中的数据回填input事件', v, item)
      // if (item.type === 'input') {
        console.log(v, item, 'form');
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

var toString = Object.prototype.toString;

var kindOf = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';

  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }

  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';

  switch (ctorName(val)) {
    case 'Symbol': return 'symbol';
    case 'Promise': return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap': return 'weakmap';
    case 'WeakSet': return 'weakset';
    case 'Map': return 'map';
    case 'Set': return 'set';

    // 8-bit typed arrays
    case 'Int8Array': return 'int8array';
    case 'Uint8Array': return 'uint8array';
    case 'Uint8ClampedArray': return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array': return 'int16array';
    case 'Uint16Array': return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array': return 'int32array';
    case 'Uint32Array': return 'uint32array';
    case 'Float32Array': return 'float32array';
    case 'Float64Array': return 'float64array';
  }

  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]': return 'object';
    // iterators
    case '[object Map Iterator]': return 'mapiterator';
    case '[object Set Iterator]': return 'setiterator';
    case '[object String Iterator]': return 'stringiterator';
    case '[object Array Iterator]': return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}

function isError(val) {
  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number');
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function'
    && typeof val.getDate === 'function'
    && typeof val.setDate === 'function';
}

function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string'
    && typeof val.ignoreCase === 'boolean'
    && typeof val.multiline === 'boolean'
    && typeof val.global === 'boolean';
}

function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val.throw === 'function'
    && typeof val.return === 'function'
    && typeof val.next === 'function';
}

function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}

var queryform = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"l-query-form"},[_c('div',{staticClass:"l-query-form_left"},[_c('l-form',_vm._b({attrs:{"value":_vm.value,"fields":_vm.fields,"inline":true},on:{"input":_vm.handleInput}},'l-form',_vm.$attrs,false))],1),_vm._v(" "),_c('div',{staticClass:"l-query-form_right"},[_vm._t("operation",[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleSearch}},[_vm._v(_vm._s(_vm.searchBarText))]),_vm._v(" "),(_vm.showReset)?_c('el-button',{on:{"click":_vm.handleReset}},[_vm._v(_vm._s(_vm.resetBarText))]):_vm._e()])],2)])},
staticRenderFns: [],
  name: 'LQueryform',
  props: {
    value: {
      type: Object
    },
    fields: {
      type: Array,
      default: () => []
    },
    // 是否显示【重置】按钮
    showReset: {
      type: Boolean,
      default: true
    },
    searchBarText: {
      type: String,
      default: '查询'
    },
    resetBarText: {
      type: String,
      default: '重置'
    }
  },
  data () {
    return {}
  },

  components: {
    LForm: form
  },

  computed: {},

  mounted () {},

  methods: {
    // 查询按钮点击事件
    handleSearch () {
      this.$emit('search', this.value);
    },
    // 重置查询条件
    handleReset () {
      if (this.$attrs.handleReset) {
        return (
          typeof this.$attrs.handleReset === 'function' &&
          this.$attrs.handleReset()
        )
      }
      let obj = {};
      for (let props in this.value) {
        let type = kindOf(this.value[props]);
        switch (type) {
          case 'string':
          case 'regexp':
            obj[props] = '';
            break
          case 'number':
            obj[props] = 0;
            break
          case 'object':
            obj[props] = {};
            break
          case 'array':
            obj[props] = [];
            break
          case 'function':
            obj[props] = this.value[props]; // 保持不变
            break
          default:
            obj[props] = null;
            break
        }
      }
      this.$emit('input', obj);
    },
    handleInput (v) {
      this.$emit('input', v);
    }
  },

  watch: {}
};

/*
 * @Author: PT
 * @Date: 2020-04-30 09:38:48
 * @LastEditors: PT
 * @LastEditTime: 2020-04-30 09:39:22
 * @Description: file content
 */

queryform.install = function (Vue) {
  Vue.component(queryform.name, queryform);
};

/*
 * @Author: PT
 * @Date: 2020-04-21 12:03:15
 * @LastEditors: PT
 * @LastEditTime: 2020-04-30 09:49:55
 * @Description: 
 */
var components = [button, table, icon, form, queryform];

var install = function install(Vue) {
  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
};

var index = {
  install: install
};

export default index;
