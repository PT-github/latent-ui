<!--
 * @Author: PT
 * @Date: 2020-04-27 10:51:16
 * @LastEditors: PT
 * @LastEditTime: 2020-04-27 11:00:09
 * @Description: file content
 -->
<template>
  <span class="l-form-item-text">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'LFormItemText',
  props: [ 'value' ]
}
</script>
<style lang='less' scoped>
.l-form-item-text {
}
</style>