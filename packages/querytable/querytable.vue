<!--
 * @Author: PT
 * @Date: 2020-05-08 17:49:54
 * @LastEditors: PT
 * @LastEditTime: 2020-05-09 09:52:26
 * @Description: file content
 -->
<template>
  <div class="l-querytable">
    <l-queryform v-bind="$attrs" @input="handleInput" @search="handleSearch"></l-queryform>
    <div class="l-querytable_table">
      <l-table ref="table" v-bind="$attrs" :queryParams="$attrs.value"></l-table>
    </div>
  </div>
</template>

<script>
import LQueryform from '../queryform'
import LTable from '../table'
export default {
  name: 'LQuerytable',
  props: {},
  data () {
    return {}
  },

  components: {
    LQueryform,
    LTable
  },

  mounted () {},

  methods: {
    // queryform的搜索按钮点击监听
    handleSearch () {
      this.$refs.table.reloadData(true)
    },
    // queryform的input监听
    handleInput (v) {
      this.$emit('input', v)
    }
  },

  watch: {}
}
</script>
<style lang='less' scoped>
.l-querytable {
  width: 100%;
  height: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  .l-querytable_table {
    flex: 1;
  }
}
</style>