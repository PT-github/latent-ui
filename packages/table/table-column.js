/*
 * @Author: PT
 * @Date: 2020-05-09 16:50:48
 * @LastEditors: PT
 * @LastEditTime: 2020-05-09 17:56:16
 * @Description: file content
 */
export default {
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
  render () {
    return (
      <el-table-column
        {
          ...{
            props: this.$attrs,
            on: this.$listeners
          }
        }
        scopedSlots={{
          default: this.$scopedSlots[this.item.value],
          header: this.$scopedSlots[this.item.value + 'Header']
        }}
      >
        {
          this.item.children && this.item.children.length > 0 && this.item.children.map((column, index) => {
            return <LTableColumn
              key={column.value + '_' + index}
              item={column}
              type={column.type}
              index={column.index}
              column-key={column.columnKey}
              label={column.label}
              prop={column.value}
              width={column.width}
              min-width={column.minWidth}
              fixed={column.fixed}
              render-header={column.renderHeader}
              sortable={column.sortable}
              sort-method={column.sortMethod}
              sort-by={column.sortBy}
              sort-orders={column.sortOrders}
              resizable={column.resizable !== false}
              formatter={column.formatter}
              show-overflow-tooltip={column.showOverflowTooltip}
              align={column.align}
              header-align={column.headerAlign}
              class-name={column.className}
              label-class-name={column.labelClassName}
              selectable={column.selectable}
              reserve-selection={column.reserveSelection}
              filters={column.filters}
              filter-placement={column.filterPlacement}
              filter-multiple={column.filterMultiple}
              filter-method={column.filterMethod}
              filtered-value={column.filteredValue}
              scopedSlots={{
                ...this.$scopedSlots
              }}
              >
            </LTableColumn>
          })
        }
      </el-table-column>
    )
  },
  data () {
    return {}
  },

  components: {},

  computed: {},

  mounted () {
    console.log(this.$scopedSlots, 'xxxxxx', this.$attrs)
  },

  methods: {},

  watch: {}
}