<!--
 * @Author: PT
 * @Date: 2020-04-30 15:32:35
 * @LastEditors: PT
 * @LastEditTime: 2020-05-06 17:46:49
 * @Description: file content
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

  mounted () {},

  methods: {},

  watch: {}
}
</script>
<style lang='less' scoped>
</style>