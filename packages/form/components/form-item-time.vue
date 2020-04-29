<!--
 * @Author: PT
 * @Date: 2020-04-27 10:59:38
 * @LastEditors: PT
 * @LastEditTime: 2020-04-28 18:24:35
 * @Description: file content
 -->
<template>
  <el-time-picker
    class="l-form-item-timepicker"
    v-model="currentValue"
    v-bind="$attrs"
    v-if="item.subType === 'picker'"
  >
  </el-time-picker>
  <el-time-select
    class="l-form-item-timeselect"
    v-model="currentValue"
    v-bind="$attrs"
    v-else
  >
  </el-time-select>
</template>

<script>
export default {
  name: 'LFormItemTime',
  props: {
    model: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // time组件选择的值/默认值
    value: {
      required: true
    },
    // 配置
    item: {
      type: Object,
      default: () => {
        return {
          subType: 'select',
          isRange: false
        }
      }
    }
  },
  computed: {
    isRange () {
      return this.item.subType === 'picker' && this.item.isRange
    },
    currentValue: {
      get () {
        let val
        debugger
        if (this.isRange) {
          try {
            let startKey = this.item.keySets[0]
            let endKey = this.item.keySets[1]
            val = [ this.model[startKey], this.model[endKey]]
          } catch (error) {
            val = this.value instanceof Array ? this.value : []
          }
        } else {
          val = this.value
        }
        return val
      },
      set (val) {
        if (this.isRange) {
          debugger
          try {
            let startKey = this.item.keySets[0]
            let endKey = this.item.keySets[1]
            this.$set(this.model, startKey, val[0])
            this.$set(this.model, endKey, val[1])
          } catch (_) {
            console.info(_)
          }
        } else {
          val = this.value
        }
        this.$emit('input', val, this.item)
      }
    }
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.l-form-item-input {
}
</style>