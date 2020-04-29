<!--
 * @Author: PT
 * @Date: 2020-04-27 10:59:38
 * @LastEditors: PT
 * @LastEditTime: 2020-04-29 15:58:37
 * @Description: file content
 -->
<template>
  <el-input
    class="l-form-item-input"
    :value="value"
    v-bind="$attrs"
    @input="handleInput"
    @change="handleChange"
  ></el-input>
</template>

<script>
export default {
  name: 'LFormItemInput',
  props: ['value', 'item'],
  methods: {
    handleInput (v) {
      this.$emit('input', v, this.item)
    },
    handleChange (v) {
      this.item.handle &&
        typeof this.item.handle &&
        this.item.handle(v, this.item)
    }
  }
}
</script>
<style lang='less' scoped>
.l-form-item-input {
}
</style>