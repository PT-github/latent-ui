<!--
 * @Author: PT
 * @Date: 2020-04-30 15:32:35
 * @LastEditors: PT
 * @LastEditTime: 2020-05-09 16:33:05
 * @Description: TableColumn组件
 -->
 
<template>
  <el-table-column v-bind="$attrs">
    <template slot-scope="scope">
      <template v-if="item.slotbool">
        <slot
          :name="item.value"
          :row="scope.row"
          :column="scope.column"
          :index="scope.$index"
        ></slot>
      </template>
      <template v-else>
        <span>{{ scope.row[item.value] }}</span>
      </template>
    </template>
    <template v-if="item.children && item.children.length > 0">
      <l-table-column
        v-for="(column, idx) in item.children"
        :key="'column_' + idx + '_' + item.value"
        :item="column"
        :type="item.type"
        :index="column.index"
        :column-key="column.columnKey"
        :label="column.label"
        :prop="column.prop"
        :width="column.width"
        :min-width="column.minWidth"
        :fixed="column.fixed"
        :render-header="column.renderHeader"
        :sortable="column.sortable"
        :sort-method="column.sortMethod"
        :sort-by="column.sortBy"
        :sort-orders="column.sortOrders"
        :resizable="column.resizable !== false"
        :formatter="column.formatter"
        :show-overflow-tooltip="column.showOverflowTooltip"
        :align="column.align"
        :header-align="column.headerAlign"
        :class-name="column.className"
        :label-class-name="column.labelClassName"
        :selectable="column.selectable"
        :reserve-selection="column.reserveSelection"
        :filters="column.filters"
        :filter-placement="column.filterPlacement"
        :filter-multiple="column.filterMultiple"
        :filter-method="column.filterMethod"
        :filtered-value="column.filteredValue"
      ></l-table-column>
    </template>
  </el-table-column>
</template>

<script>
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
  data () {
    return {}
  },

  components: {},

  computed: {},

  mounted () {
    console.log(this.$scopedSlots, 'xxxxxx')
  },

  methods: {},

  watch: {}
}
</script>
<style lang='less' scoped>
</style>