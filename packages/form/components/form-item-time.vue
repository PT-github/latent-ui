<!--
 * @Author: PT
 * @Date: 2020-04-27 10:59:38
 * @LastEditors: PT
 * @LastEditTime: 2020-04-29 10:22:48
 * @Description: file content
 -->
<template>
  <el-time-picker
    v-if="item.subType === 'picker'"
    class="l-form-item-timepicker"
    v-model="currentValue"
    v-bind="$attrs"
    @change="handleChange"
  >
  </el-time-picker>
  <el-time-select
    v-else
    class="l-form-item-timeselect"
    v-model="currentValue"
    v-bind="$attrs"
    @change="handleChange"
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
        if (this.isRange) {
          try {
            let startKey = this.item.keySets[0]
            let endKey = this.item.keySets[1]
            val = this.model[startKey] && this.model[endKey] ?[ this.model[startKey], this.model[endKey]] : null
          } catch (error) {
            val = this.value instanceof Array ? this.value : null
          }
        } else {
          val = this.value
        }
        return val
      },
      set (val) {
        if (this.isRange) {
          try {
            let startKey = this.item.keySets[0]
            let endKey = this.item.keySets[1]
            this.$set(this.model, startKey, val[0])
            this.$set(this.model, endKey, val[1])
          } catch (error) {
            console.info('keySets配置无效或未配置')
          }
        }
        this.$emit('input', val, this.item)
      }
    }
  },
  methods: {
    handleChange (v) {
      this.item.handle && typeof this.item.handle && this.item.handle(v, this.item)
    }
  }
}
</script>
<style lang='less' scoped>
.l-form-item-input {
}
</style>