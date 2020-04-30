<!--
 * @Author: PT
 * @Date: 2020-04-30 09:38:43
 * @LastEditors: PT
 * @LastEditTime: 2020-04-30 11:25:14
 * @Description: file content
 -->
<template>
  <div class="l-query-form">
    <div class="l-query-form_left">
      <l-form
        :value="value"
        :fields="fields"
        :inline="true"
        v-bind="$attrs"
        @input="handleInput"
      ></l-form>
    </div>
    <div class="l-query-form_right">
      <slot name="operation">
        <el-button
          type="primary"
          @click="handleSearch"
        >{{ searchBarText }}</el-button>
        <el-button
          v-if="showReset"
          @click="handleReset"
        >{{ resetBarText }}</el-button>
      </slot>
    </div>
  </div>
</template>

<script>
import LForm from '../form'
import kindOf from 'kind-of'
export default {
  name: 'LQueryform',
  props: {
    value: {
      type: Object
    },
    fields: {
      type: Array,
      default: () => []
    },

    // 是否显示【重置】按钮
    showReset: {
      type: Boolean,
      default: true
    },
    searchBarText: {
      type: String,
      default: '查询'
    },
    resetBarText: {
      type: String,
      default: '重置'
    }
  },
  data () {
    return {}
  },

  components: {
    LForm
  },

  computed: {},

  mounted () {},

  methods: {
    // 查询按钮点击事件
    handleSearch () {
      this.$emit('search', this.value)
    },
    // 重置查询条件
    handleReset () {
      if (this.$attrs.handleReset) {
        return (
          typeof this.$attrs.handleReset === 'function' &&
          this.$attrs.handleReset()
        )
      }
      let obj = {}
      for (let props in this.value) {
        let type = kindOf(this.value[props])
        switch (type) {
          case 'string':
          case 'regexp':
            obj[props] = ''
            break
          case 'number':
            obj[props] = 0
            break
          case 'object':
            obj[props] = {}
            break
          case 'array':
            obj[props] = []
            break
          case 'function':
            obj[props] = this.value[props] // 保持不变
            break
          default:
            obj[props] = null
            break
        }
      }
      this.$emit('input', obj)
    },
    handleInput (v) {
      this.$emit('input', v)
    }
  },

  watch: {}
}
</script>
<style lang='less' scoped>
.l-query-form {
  width: 100%;
  display: flex;
  .l-query-form_left {
    flex: 1;
    display: grid;
  }
  .l-query-form_right {
    width: auto;
  }
}
</style>