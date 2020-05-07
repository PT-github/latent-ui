<!--
 * @Author: PT
 * @Date: 2020-04-30 12:04:10
 * @LastEditors: PT
 * @LastEditTime: 2020-05-07 17:49:43
 * @Description: 表格组件
 -->

<template>
  <div class="s-table">
    <el-table
      ref="table"
      v-loading="loading"
      :data="tableData"
      :height="tHeight"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template v-for="(item, index) in columns">
        <l-table-column
          :key="item.value + '_' + index"
          :item="item"
          :type="item.type"
          :index="item.index"
          :column-key="item.columnKey"
          :label="item.label"
          :prop="item.prop"
          :width="item.width"
          :min-width="item.minWidth"
          :fixed="item.fixed"
          :render-header="item.renderHeader"
          :sortable="item.sortable"
          :sort-method="item.sortMethod"
          :sort-by="item.sortBy"
          :sort-orders="item.sortOrders"
          :resizable="item.resizable !== false"
          :formatter="item.formatter"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :align="item.align"
          :header-align="item.headerAlign"
          :class-name="item.className"
          :label-class-name="item.labelClassName"
          :selectable="item.selectable"
          :reserve-selection="item.reserveSelection"
          :filters="item.filters"
          :filter-placement="item.filterPlacement"
          :filter-multiple="item.filterMultiple"
          :filter-method="item.filterMethod"
          :filtered-value="item.filteredValue"
        ></l-table-column>
      </template>
    </el-table>
    <el-pagination
      v-show="showPage"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="localPagination.pageNo"
      :total="localPagination.total"
      :page-sizes="[10,20,30,40,50]"
      :page-size="localPagination.pageSize"
      layout="total, prev, pager, next, sizes, jumper"
    />
  </div>
</template>

<script>
import LTableColumn from './table-column.vue'
import { domObserve } from '../../src/utils/dom-helper'
export default {
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
      tableData: [],
      tHeight: null,
      observeDom: null, // 被监听节点
      parentNode: null, // 父容器
      timer: null,
      loading: false, // 表格loading
      localPagination: {
        pageNo: 1,
        total: null,
        pageSize: 10
      }, // 翻页数据



      localDataSource: [],
      tableHeight: 600, // 表格高度
      sortArr: [] //排序数组字段
    }
  },
  watch: {
    pageNum (val) {
      Object.assign(this.localPagination, {
        current: val
      })
    },
    pageSize (val) {
      Object.assign(this.localPagination, {
        pageSize: val
      })
    },
    showSizeChanger (val) {
      Object.assign(this.localPagination, {
        showSizeChanger: val
      })
    }
  },
  created () {
    if (this.loadDataAuto) {
      this.loadData()
    }
  },
  mounted () {
    this.tHeight = this.height || null
    if (!this.height && this.autoHeight) {// 高度自适应
      // 父容器
      this.parentNode = this.$el.parentNode
      // 被监听的节点
      this.observeDom = this.parentSelector ? (document.querySelector(this.parentSelector) || this.parentNode) : this.parentNode
      // 设置父容器溢出隐藏
      this.parentNode.style.overflow = 'hidden'
      // 监听高度变化的容器class和style属性变化
      this.observe = domObserve(this.observeDom, {
        attributes: true,
        attributeFilter: [ 'class', 'style' ]
      }, this.handleTableHeight)
      // window resize监听
      window.addEventListener('resize', this.handleTableHeight)
      // 高度未设定时，计算表格高度
      this.handleTableHeight()
    }
  },
  destroyed () {
    // 组件销毁 删除window.onresize 和 父容器属性监听
    this.autoHeight && window.removeEventListener('resize', this.handleTableHeight) && this.observe.disconnect()
  },
  methods: {
    // 同步localPagination数据
    asyncLocalPagination (pagination) {
      Object.assign(this.localPagination, {
        pageNo: pagination.pageNo || pagination[this.attrProps && this.attrProps.pageNo ? this.attrProps.pageNo : 'pageNo'], // 返回结果中的当前分页数
        total: pagination.total || pagination[this.attrProps && this.attrProps.total ? this.attrProps.total : 'total'], // 返回结果中的总记录数
      })
    },
    /**
     * 同步数据
     * @param {Object} pagination 分页选项器
     * @param {Object} filters 过滤条件
     * @param {Object} sorter 排序条件
     */
    loadData () {
      this.tableData.splice(0, this.tableData.length)
      if (this.dataSource instanceof Array) {
        this.tableData.push(...this.dataSource)
        this.asyncLocalPagination({
          pageNo: 1,
          total: this.dataSource.length
        })
      } else if (typeof this.dataSource === 'function') {
        this.loading = true
        this.$emit('load-start')
        // 执行dataSource中的方法，传入{pageNo, pageSize}数据(传参的key值以attrProps中传了pageNo和pageSize对应字段为准)
        let queryParams = {
          [this.attrProps && this.attrProps.pageNo ? this.attrProps.pageNo : 'pageNo']: this.localPagination.pageNo,
          [this.attrProps && this.attrProps.pageSize ? this.attrProps.pageSize : 'pageSize']: this.localPagination.pageSize
        }
        let result = this.dataSource(queryParams)
        if (result && result.then) {
          result.then(r => {
            this.asyncLocalPagination(r)
            // 为防止删除数据后导致页面当前页面数据长度为 0 ,自动翻页到上一页
            this.tableData.push(...r.list)
            this.$emit('load-finished')
            this.$nextTick(() => {
              this.loading = false
            })
          })
        }
      }
    },
    /**
     * @description 动态设置表格高度(暂不支持表格高度动画)函数防抖
     */
    handleTableHeight () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        let height = window.getComputedStyle(this.parentNode).height
        this.tHeight = height
      }, 0)
    },
    handleSizeChange (val) {
      this.localPagination.pageSize = val
      this.loadData()
    },
    handleCurrentChange (val) {
      this.localPagination.pageNo = val
      this.loadData()
    },









    /**
     * 加载数据方法
     * @param {Object} pagination 分页选项器
     * @param {Object} filters 过滤条件
     * @param {Object} sorter 排序条件
     */
    _loadData (pagination, filters, sorter) {
      this.emitLoadStart()
      this.localLoading = true
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
      )
      if (this.data instanceof Object) {
        let d = this.data
        this.localDataSource = d.data
        this.localPagination = Object.assign({}, this.localPagination, {
          current: d.pageNo, // 返回结果中的当前分页数
          total: d.total, // 返回结果中的总记录数
          showSizeChanger: this.showSizeChanger,
          pageSize:
            (pagination && pagination.pageSize) || this.localPagination.pageSize
        })
        return
      }
      const result = this.data(parameter)
      // 对接自己的通用数据接口需要修改下方代码中的 r.pageNo, r.totalCount, r.data
      // eslint-disable-next-line
      if (
        (typeof result === 'object' || typeof result === 'function') &&
        typeof result.then === 'function'
      ) {
        result.then(r => {
          this.localPagination = Object.assign({}, this.localPagination, {
            current: r.pageNo, // 返回结果中的当前分页数
            total: r.total, // 返回结果中的总记录数
            showSizeChanger: this.showSizeChanger,
            pageSize:
              (pagination && pagination.pageSize) ||
              this.localPagination.pageSize
          })
          // 为防止删除数据后导致页面当前页面数据长度为 0 ,自动翻页到上一页
          if (r.list.length === 0 && this.localPagination.current > 1) {
            this.localPagination.current--
            this.loadData()
            return
          }

          // 这里用于判断接口是否有返回 r.totalCount 或 this.showPagination = false
          // 当情况满足时，表示数据不满足分页大小，关闭 table 分页功能
          (!this.showPagination ||
            (!r.totalCount && this.showPagination === 'auto')) &&
            (this.localPagination.hideOnSinglePage = true)
          this.localDataSource = r.list // 返回结果中的数组数据
          this.localLoading = false
          // loading.close();
          this.emitLoadFinished()
        })
      } else if (typeof result === 'object' && !result.then) {
        this.localPagination = Object.assign({}, this.localPagination, {
          current: result.pageNo, // 返回结果中的当前分页数
          total: result.total, // 返回结果中的总记录数
          showSizeChanger: this.showSizeChanger,
          pageSize:
            (pagination && pagination.pageSize) || this.localPagination.pageSize
        })
        this.localDataSource = result.list // 返回结果中的数组数据
        // loading.close();
        this.localLoading = false
        this.emitLoadFinished()
      }
      // loading.close();
    },





    handlerResize () {
      this.$nextTick(() => {
        if (this.showPage) {
          this.tHeight = this.$el.offsetHeight - this.paginationHeight
        } else {
          this.tHeight = this.$el.offsetHeight
        }
        // console.log('分页:', this.paginationHeight)
        this.$refs.table.$el.style.height = this.tHeight + 'px'
      })
    },
    /**
     * 表格重新加载方法
     * 如果参数为 true, 则强制刷新到第一页
     * @param Boolean bool
     */
    refresh (bool = false) {
      bool &&
        (this.localPagination = Object.assign(
          {},
          {
            current: 1,
            pageSize: this.pageSize
          }
        ))
      this.loadData()
    },
    
    emitLoadStart () {
      this.$nextTick(() => {
        this.$emit('load-start')
      })
    },
    emitLoadFinished () {
      this.$nextTick(() => {
        this.$emit('load-finished')
      })
    },
    
  },
  components: {
    LTableColumn
  }
}
</script>
