<!--
 * @Author: PT
 * @Date: 2020-04-26 11:27:51
 * @LastEditors: PT
 * @LastEditTime: 2020-04-26 16:08:25
 * @Description: Icon组件
 -->
<template>
  <span class="l-iconfont" :class="name"></span>
</template>

<script>
export default {
  name: 'LIcon',
  props: {
    name: String
  }
}
</script>
<style lang='less' scoped>
@import url(../../src/styles/iconfont.css);
</style>