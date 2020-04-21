<!--
 * @Author: PT
 * @Date: 2020-04-20 20:39:25
 * @LastEditors: PT
 * @LastEditTime: 2020-04-21 14:39:10
 * @Description: 
 -->
<template>
  <div class="button">Button
    <aComp>北包包</aComp>
  </div>
</template>

<script>
import aComp from './a.vue'
export default {
  name: "EleButton",
  created() {
    console.log("hello world");
  },
  components: {
    aComp
  }
}
</script>
<style scoped>
@import url(./button.scss);
/* .button {
  width: 100px;
  display: flex;
} */
</style>