<!--
 * @Author: PT
 * @Date: 2020-04-23 18:07:16
 * @LastEditors: PT
 * @LastEditTime: 2020-04-24 11:31:19
 * @Description: 
 -->
<template>
  <div class="layout">
    <div class="layout-header">
      <div class="bt">latent-ui文档</div>
      <div class="link">
        <router-link :to="{ path: '/button' }" tag="a">指南</router-link><a href="https://github.com/PT-github/latent-ui" target="_blank">github</a>
      </div>
    </div>
    <div class="layout-body">
      <div class="left"><Menu/></div>
      <div class="right">
        <transition>
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu"
export default {
  name: "Layout",
  data() {
    return {};
  },

  components: {
    Menu
  },

  computed: {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='less' scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .layout-body {
    border-top: 1px solid #dcdfe6;
    flex: 1;
    width: 100%;
    overflow: hidden;
    display: flex;
    .right {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      padding: 20px;
    }
    .left {
      width: 200px;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      border-right: 1px solid #e6e6e6;
    }
  }
  .layout-header {
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    padding: 0 20px;
    color: #1989fa;
    display: flex;
    justify-content: space-between;
    .link {
      display: flex;
      a {
        font-size: 16px;
        padding: 0 10px;
      }
    }
  }
}
</style>
<style lang="less">
.layout {
  .left {
    .el-menu {
      border-right: 0;
    }
  }
}
</style>