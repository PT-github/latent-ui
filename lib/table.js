var table = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"s-table"},[_c('el-table',_vm._g(_vm._b({ref:"table",attrs:{"data":_vm.localDataSource,"height":_vm.tHeight}},'el-table',_vm.$attrs,false),_vm.$listeners),[_vm._l((_vm.columns),function(item,index){return [(!item.slotbool)?_c('el-table-column',{key:item.value+index,attrs:{"prop":item.value,"label":item.label,"width":item.width,"min-width":item.minWidth,"align":item.align ? item.align : 'left',"sortable":item.sortable,"sort-method":item.sortMethod},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.row[item.value]))])]}}],null,true)}):_c('el-table-column',{key:'column_' + index,attrs:{"prop":item.value,"label":item.label,"width":item.width,"min-width":item.minWidth,"align":item.align ? item.align : 'left',"sortable":item.sortable,"sort-method":item.sortMethod},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._t(item.value,null,{"row":scope.row,"column":scope.column,"index":scope.$index})]}}],null,true)})]})],2),_vm._v(" "),_c('el-pagination',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPage),expression:"showPage"}],attrs:{"current-page":_vm.localPagination.pageNo,"total":_vm.localPagination.total,"page-sizes":[10,20,30,40,50],"page-size":_vm.localPagination.pageSize,"layout":"total, prev, pager, next, sizes, jumper"},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange,"update:currentPage":function($event){return _vm.$set(_vm.localPagination, "pageNo", $event)},"update:current-page":function($event){return _vm.$set(_vm.localPagination, "pageNo", $event)}}})],1)},
staticRenderFns: [],
  name: "EleTable",
  props: {
    showPage: {
      type: Boolean,
      default: true
    },
    columns: Array,
    data: {
      type: [Function, Array],
      required: true
    },
    pageNum: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    showSizeChanger: {
      type: Boolean,
      default: true
    },
    showPagination: {
      type: String | Boolean,
      default: "auto"
    },
    currentChange: Function,
    loadDataAuto: {
      type: Boolean,
      default: true
    },
    autoHeight: {
      type: Boolean,
      default: true
    },
    height: {
      type: [String, Number],
      default: ""
    },
    paginationHeight: {
      type: Number,
      default: 66
    }
  },
  data() {
    return {
      tHeight: "445px",
      localPagination: {},
      localDataSource: [],
      tableHeight: 600, // 表格高度
      sortArr: [] //排序数组字段
    };
  },
  watch: {
    pageNum(val) {
      Object.assign(this.localPagination, {
        current: val
      });
    },
    pageSize(val) {
      Object.assign(this.localPagination, {
        pageSize: val
      });
    },
    showSizeChanger(val) {
      Object.assign(this.localPagination, {
        showSizeChanger: val
      });
    }
  },
  created() {
    this.height && (this.tHeight = this.height);
    const localPageNum = this.pageURI || this.pageNum;
    this.localPagination =
      ["auto", true].includes(this.showPagination) &&
      Object.assign({}, this.localPagination, {
        current: localPageNum,
        pageSize: this.pageSize,
        showSizeChanger: this.showSizeChanger
      });
    if (this.loadDataAuto) {
      this.loadData();
    }
  },
  mounted() {
    if (this.autoHeight) {
      window.addEventListener("resize", this.handlerResize);
      this.handlerResize();
    }
  },
  destroyed() {
    this.autoHeight && window.removeEventListener("resize", this.handlerResize);
  },
  methods: {
    handlerResize() {
      this.$nextTick(() => {
        if (this.showPage) {
          this.tHeight = this.$el.offsetHeight - this.paginationHeight;
        } else {
          this.tHeight = this.$el.offsetHeight;
        }
        // console.log('分页:', this.paginationHeight)
        this.$refs.table.$el.style.height = this.tHeight + "px";
      });
    },
    /**
     * 表格重新加载方法
     * 如果参数为 true, 则强制刷新到第一页
     * @param Boolean bool
     */
    refresh(bool = false) {
      bool &&
        (this.localPagination = Object.assign(
          {},
          {
            current: 1,
            pageSize: this.pageSize
          }
        ));
      this.loadData();
    },
    /**
     * 加载数据方法
     * @param {Object} pagination 分页选项器
     * @param {Object} filters 过滤条件
     * @param {Object} sorter 排序条件
     */
    loadData(pagination, filters, sorter) {
      this.emitLoadStart();
      this.localLoading = true;
      const parameter = Object.assign(
        {
          pageNo:
            (pagination && pagination.current) ||
            this.localPagination.current ||
            this.pageNum,
          pageSize:
            (pagination && pagination.pageSize) ||
            this.localPagination.pageSize ||
            this.pageSize
        },
        (sorter &&
          sorter.field && {
            sortField: sorter.field
          }) ||
          {},
        (sorter &&
          sorter.order && {
            sortOrder: sorter.order
          }) ||
          {},
        {
          ...filters
        }
      );
      if (this.data instanceof Array) {
        this.localDataSource = this.data;
        return;
      }
      const result = this.data(parameter);
      // 对接自己的通用数据接口需要修改下方代码中的 r.pageNo, r.totalCount, r.data
      // eslint-disable-next-line
      if (
        (typeof result === "object" || typeof result === "function") &&
        typeof result.then === "function"
      ) {
        result.then(r => {
          this.localPagination = Object.assign({}, this.localPagination, {
            current: r.pageNo, // 返回结果中的当前分页数
            total: r.total, // 返回结果中的总记录数
            showSizeChanger: this.showSizeChanger,
            pageSize:
              (pagination && pagination.pageSize) ||
              this.localPagination.pageSize
          });
          // 为防止删除数据后导致页面当前页面数据长度为 0 ,自动翻页到上一页
          if (r.list.length === 0 && this.localPagination.current > 1) {
            this.localPagination.current--;
            this.loadData();
            return;
          }

          // 这里用于判断接口是否有返回 r.totalCount 或 this.showPagination = false
          // 当情况满足时，表示数据不满足分页大小，关闭 table 分页功能
          (!this.showPagination ||
            (!r.totalCount && this.showPagination === "auto")) &&
            (this.localPagination.hideOnSinglePage = true);
          this.localDataSource = r.list; // 返回结果中的数组数据
          this.localLoading = false;
          // loading.close();
          this.emitLoadFinished();
        });
      } else if (typeof result === "object" && !result.then) {
        this.localPagination = Object.assign({}, this.localPagination, {
          current: result.pageNo, // 返回结果中的当前分页数
          total: result.total, // 返回结果中的总记录数
          showSizeChanger: this.showSizeChanger,
          pageSize:
            (pagination && pagination.pageSize) || this.localPagination.pageSize
        });
        this.localDataSource = result.list; // 返回结果中的数组数据
        // loading.close();
        this.localLoading = false;
        this.emitLoadFinished();
      }
      // loading.close();
    },
    emitLoadStart() {
      this.$nextTick(() => {
        this.$emit("load-start");
      });
    },
    emitLoadFinished() {
      this.$nextTick(() => {
        this.$emit("load-finished");
      });
    },
    handleSizeChange(val) {
      this.loadData({
        pageSize: val
      });
    },
    handleCurrentChange(val) {
      this.loadData({
        current: val
      });
    }
  }
};

table.install = function (Vue) {
  Vue.component(table.name, table);
};

export default table;