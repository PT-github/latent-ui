/*
 * @Author: PT
 * @Date: 2020-05-09 11:18:22
 * @LastEditors: PT
 * @LastEditTime: 2020-05-09 17:27:49
 * @Description: 表格组件
 */
import LTableColumn from './table-column.js'
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
    // 查询的附属参数
    queryParams: {
      type: Object,
      default: () => {
        return {}
      }
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
    }
  },
  render () {
    console.log(this.$slots, this.$scopedSlots, '====')
    return (
      <div class="l-table">
        <el-table
          ref="table"
          vLoading={this.loading}
          data={this.tableData}
          height={this.tHeight}
          {
            ...{
              props: this.$attrs,
              on: this.$listeners
            }
          }
        >
          {
            this.columns.map((item, index) => {
              return <LTableColumn
                key={item.value + '_' + index}
                item={item}
                type={item.type}
                index={item.index}
                column-key={item.columnKey}
                label={item.label}
                prop={item.value}
                width={item.width}
                min-width={item.minWidth}
                fixed={item.fixed}
                render-header={item.renderHeader}
                sortable={item.sortable}
                sort-method={item.sortMethod}
                sort-by={item.sortBy}
                sort-orders={item.sortOrders}
                resizable={item.resizable !== false}
                formatter={item.formatter}
                show-overflow-tooltip={item.showOverflowTooltip}
                align={item.align}
                header-align={item.headerAlign}
                class-name={item.className}
                label-class-name={item.labelClassName}
                selectable={item.selectable}
                reserve-selection={item.reserveSelection}
                filters={item.filters}
                filter-placement={item.filterPlacement}
                filter-multiple={item.filterMultiple}
                filter-method={item.filterMethod}
                filtered-value={item.filteredValue}
                scopedSlots={{
                  ...this.$scopedSlots
                }}
              ></LTableColumn>
            })
          }
        </el-table>
        {
          this.paginationRender()
        }
      </div>
    )
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
      // 翻页组件高度
      console.log(this.$refs.pagination)
      this.showPage && (this.paginationHeight = window.getComputedStyle(this.$refs.pagination.$el).height)
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
    paginationRender () {
      if (this.showPage) {
        return <el-pagination
          ref="pagination"
          v-show="showPage"
          {
            ...{
              on: {
                'current-change': this.handleCurrentChange,
                'size-change': this.handleSizeChange
              }
            }
          }
          current-page={this.localPagination.pageNo}
          total={this.localPagination.total}
          pageSizes={[10,20,30,40,50]}
          pageSize={this.localPagination.pageSize}
          layout="total, prev, pager, next, sizes, jumper"
        />
      }
    },
    /**
     * @description 同步localPagination数据
     */
    asyncLocalPagination (pagination) {
      Object.assign(this.localPagination, {
        pageNo: pagination.pageNo || pagination[this.attrProps && this.attrProps.pageNo ? this.attrProps.pageNo : 'pageNo'], // 返回结果中的当前分页数
        total: pagination.total || pagination[this.attrProps && this.attrProps.total ? this.attrProps.total : 'total'], // 返回结果中的总记录数
      })
    },
    /**
     * @description 表格重新加载数据
     * @param {Boolean} bool 是否返回到第一页
     */
    reloadData (bool = false) {
      bool && Object.assign(this.localPagination, {
        pageNo: 1
      })
      this.loadData()
    },
    /**
     * @description 同步数据
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
          [this.attrProps && this.attrProps.pageSize ? this.attrProps.pageSize : 'pageSize']: this.localPagination.pageSize,
          ...this.queryParams
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
        let height = window.getComputedStyle(this.parentNode).height // 外部容器高度
        if (this.showPage) {
          try {
            height = (Number(height.substring(0, height.length - 2)) - Number(this.paginationHeight.substring(0, this.paginationHeight.length - 2))) + 'px'
          } catch (error) {
            console.error('table组件计算pagination高度发生错误', error)
          }
        }
        this.tHeight = height
      }, 0)
    },
    /**
     * @description 监听翻页组件pageSize改变
     */
    handleSizeChange (val) {
      this.localPagination.pageSize = val
      this.loadData()
    },
    /**
     * @description 监听翻页组件pageNo改变
     */
    handleCurrentChange (val) {
      console.log('111', val)
      this.localPagination.pageNo = val
      this.loadData()
    }
  }
}