function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * @Author: PT
 * @Date: 2020-05-09 16:50:48
 * @LastEditors: PT
 * @LastEditTime: 2020-05-09 17:56:16
 * @Description: file content
 */
var LTableColumn = {
  name: 'LTableColumn',
  props: {
    item: {
      type: Object,
      default: function _default() {
        return {
          slotbool: false
        };
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("el-table-column", {
      "props": _objectSpread({}, this.$attrs),
      "on": _objectSpread({}, this.$listeners),
      "scopedSlots": {
        default: this.$scopedSlots[this.item.value],
        header: this.$scopedSlots[this.item.value + 'Header']
      }
    }, [this.item.children && this.item.children.length > 0 && this.item.children.map(function (column, index) {
      return h("LTableColumn", {
        "key": column.value + '_' + index,
        "attrs": {
          "item": column,
          "type": column.type,
          "index": column.index,
          "column-key": column.columnKey,
          "label": column.label,
          "prop": column.value,
          "width": column.width,
          "min-width": column.minWidth,
          "fixed": column.fixed,
          "render-header": column.renderHeader,
          "sortable": column.sortable,
          "sort-method": column.sortMethod,
          "sort-by": column.sortBy,
          "sort-orders": column.sortOrders,
          "resizable": column.resizable !== false,
          "formatter": column.formatter,
          "show-overflow-tooltip": column.showOverflowTooltip,
          "align": column.align,
          "header-align": column.headerAlign,
          "class-name": column.className,
          "label-class-name": column.labelClassName,
          "selectable": column.selectable,
          "reserve-selection": column.reserveSelection,
          "filters": column.filters,
          "filter-placement": column.filterPlacement,
          "filter-multiple": column.filterMultiple,
          "filter-method": column.filterMethod,
          "filtered-value": column.filteredValue
        },
        "scopedSlots": _objectSpread({}, _this.$scopedSlots)
      });
    })]);
  },
  data: function data() {
    return {};
  },
  components: {},
  computed: {},
  mounted: function mounted() {
    console.log(this.$scopedSlots, 'xxxxxx', this.$attrs);
  },
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

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var table = {
  name: 'LTable',
  props: {
    // 表格列配置
    columns: Array,
    // 表格数据源 或 promise接口回调
    dataSource: {
      type: [Function, Array],
      required: true
    },
    // 查询的附属参数
    queryParams: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // 创建组件完成后就开始同步数据
    loadDataAuto: {
      type: Boolean,
      default: true
    },
    // 表格固定高度
    height: [String, Number],
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
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    console.log(this.$slots, this.$scopedSlots, '====');
    return h("div", {
      "class": "l-table"
    }, [h("el-table", {
      "ref": "table",
      "directives": [{
        name: "loading",
        value: this.loading
      }],
      "attrs": {
        "data": this.tableData,
        "height": this.tHeight
      },
      "props": _objectSpread$1({}, this.$attrs),
      "on": _objectSpread$1({}, this.$listeners)
    }, [this.columns.map(function (item, index) {
      return h(LTableColumn, {
        "key": item.value + '_' + index,
        "attrs": {
          "item": item,
          "type": item.type,
          "index": item.index,
          "column-key": item.columnKey,
          "label": item.label,
          "prop": item.value,
          "width": item.width,
          "min-width": item.minWidth,
          "fixed": item.fixed,
          "render-header": item.renderHeader,
          "sortable": item.sortable,
          "sort-method": item.sortMethod,
          "sort-by": item.sortBy,
          "sort-orders": item.sortOrders,
          "resizable": item.resizable !== false,
          "formatter": item.formatter,
          "show-overflow-tooltip": item.showOverflowTooltip,
          "align": item.align,
          "header-align": item.headerAlign,
          "class-name": item.className,
          "label-class-name": item.labelClassName,
          "selectable": item.selectable,
          "reserve-selection": item.reserveSelection,
          "filters": item.filters,
          "filter-placement": item.filterPlacement,
          "filter-multiple": item.filterMultiple,
          "filter-method": item.filterMethod,
          "filtered-value": item.filteredValue
        },
        "scopedSlots": _objectSpread$1({}, _this.$scopedSlots)
      });
    })]), this.paginationRender()]);
  },
  data: function data() {
    return {
      tableData: [],
      // 表格数据
      tHeight: null,
      // 表格高度
      observeDom: null,
      // 被监听节点
      parentNode: null,
      // 父容器
      timer: null,
      // 用于函数防抖
      loading: false,
      // 表格loading
      localPagination: {
        pageNo: 1,
        total: null,
        pageSize: 10
      },
      // 翻页数据
      paginationHeight: null // 翻页组件高度

    };
  },
  watch: {
    pageNum: function pageNum(val) {
      Object.assign(this.localPagination, {
        current: val
      });
    },
    pageSize: function pageSize(val) {
      Object.assign(this.localPagination, {
        pageSize: val
      });
    },
    showSizeChanger: function showSizeChanger(val) {
      Object.assign(this.localPagination, {
        showSizeChanger: val
      });
    }
  },
  created: function created() {
    if (this.loadDataAuto) {
      this.loadData();
    }
  },
  mounted: function mounted() {
    this.tHeight = this.height || null;

    if (!this.height && this.autoHeight) {
      // 高度自适应
      // 父容器
      this.parentNode = this.$el.parentNode; // 被监听的节点

      this.observeDom = this.parentSelector ? document.querySelector(this.parentSelector) || this.parentNode : this.parentNode; // 设置父容器溢出隐藏

      this.parentNode.style.overflow = 'hidden'; // 翻页组件高度

      console.log(this.$refs.pagination);
      this.showPage && (this.paginationHeight = window.getComputedStyle(this.$refs.pagination.$el).height); // 监听高度变化的容器class和style属性变化

      this.observe = domObserve(this.observeDom, {
        attributes: true,
        attributeFilter: ['class', 'style']
      }, this.handleTableHeight); // window resize监听

      window.addEventListener('resize', this.handleTableHeight); // 高度未设定时，计算表格高度

      this.handleTableHeight();
    }
  },
  destroyed: function destroyed() {
    // 组件销毁 删除window.onresize 和 父容器属性监听
    this.autoHeight && window.removeEventListener('resize', this.handleTableHeight) && this.observe.disconnect();
  },
  methods: {
    paginationRender: function paginationRender() {
      var h = this.$createElement;

      if (this.showPage) {
        return h("el-pagination", {
          "ref": "pagination",
          "directives": [{
            name: "show",
            value: "showPage"
          }],
          "on": _objectSpread$1({}, {
            'current-change': this.handleCurrentChange,
            'size-change': this.handleSizeChange
          }),
          "attrs": {
            "current-page": this.localPagination.pageNo,
            "total": this.localPagination.total,
            "pageSizes": [10, 20, 30, 40, 50],
            "pageSize": this.localPagination.pageSize,
            "layout": "total, prev, pager, next, sizes, jumper"
          }
        });
      }
    },

    /**
     * @description 同步localPagination数据
     */
    asyncLocalPagination: function asyncLocalPagination(pagination) {
      Object.assign(this.localPagination, {
        pageNo: pagination.pageNo || pagination[this.attrProps && this.attrProps.pageNo ? this.attrProps.pageNo : 'pageNo'],
        // 返回结果中的当前分页数
        total: pagination.total || pagination[this.attrProps && this.attrProps.total ? this.attrProps.total : 'total'] // 返回结果中的总记录数

      });
    },

    /**
     * @description 表格重新加载数据
     * @param {Boolean} bool 是否返回到第一页
     */
    reloadData: function reloadData() {
      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      bool && Object.assign(this.localPagination, {
        pageNo: 1
      });
      this.loadData();
    },

    /**
     * @description 同步数据
     */
    loadData: function loadData() {
      var _this2 = this;

      this.tableData.splice(0, this.tableData.length);

      if (this.dataSource instanceof Array) {
        var _this$tableData;

        (_this$tableData = this.tableData).push.apply(_this$tableData, toConsumableArray(this.dataSource));

        this.asyncLocalPagination({
          pageNo: 1,
          total: this.dataSource.length
        });
      } else if (typeof this.dataSource === 'function') {
        var _objectSpread2;

        this.loading = true;
        this.$emit('load-start'); // 执行dataSource中的方法，传入{pageNo, pageSize}数据(传参的key值以attrProps中传了pageNo和pageSize对应字段为准)

        var queryParams = _objectSpread$1((_objectSpread2 = {}, defineProperty(_objectSpread2, this.attrProps && this.attrProps.pageNo ? this.attrProps.pageNo : 'pageNo', this.localPagination.pageNo), defineProperty(_objectSpread2, this.attrProps && this.attrProps.pageSize ? this.attrProps.pageSize : 'pageSize', this.localPagination.pageSize), _objectSpread2), this.queryParams);

        var result = this.dataSource(queryParams);

        if (result && result.then) {
          result.then(function (r) {
            var _this2$tableData;

            _this2.asyncLocalPagination(r); // 为防止删除数据后导致页面当前页面数据长度为 0 ,自动翻页到上一页


            (_this2$tableData = _this2.tableData).push.apply(_this2$tableData, toConsumableArray(r.list));

            _this2.$emit('load-finished');

            _this2.$nextTick(function () {
              _this2.loading = false;
            });
          });
        }
      }
    },

    /**
     * @description 动态设置表格高度(暂不支持表格高度动画)函数防抖
     */
    handleTableHeight: function handleTableHeight() {
      var _this3 = this;

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        var height = window.getComputedStyle(_this3.parentNode).height; // 外部容器高度

        if (_this3.showPage) {
          try {
            height = Number(height.substring(0, height.length - 2)) - Number(_this3.paginationHeight.substring(0, _this3.paginationHeight.length - 2)) + 'px';
          } catch (error) {
            console.error('table组件计算pagination高度发生错误', error);
          }
        }

        _this3.tHeight = height;
      }, 0);
    },

    /**
     * @description 监听翻页组件pageSize改变
     */
    handleSizeChange: function handleSizeChange(val) {
      this.localPagination.pageSize = val;
      this.loadData();
    },

    /**
     * @description 监听翻页组件pageNo改变
     */
    handleCurrentChange: function handleCurrentChange(val) {
      console.log('111', val);
      this.localPagination.pageNo = val;
      this.loadData();
    }
  }
};

/*
 * @Author: PT
 * @Date: 2020-04-29 10:08:57
 * @LastEditors: PT
 * @LastEditTime: 2020-05-09 11:58:35
 * @Description: file content
 */

table.install = function (Vue) {
  Vue.component(table.name, table);
};

export default table;
