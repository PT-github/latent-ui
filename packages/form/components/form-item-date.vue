<!--
 * @Author: PT
 * @Date: 2020-04-29 10:36:02
 * @LastEditors: PT
 * @LastEditTime: 2020-04-29 15:41:40
 * @Description: file content
 -->

<template>
  <el-date-picker
    class="l-form-item-date"
    v-model="currentValue"
    :type="item.eType"
    :format="format"
    :value-format="valueFormat"
    v-bind="$attrs"
    @change="handleChange"
    >
  </el-date-picker>
</template>

<script>
export default {
  name: 'LFormItemDate',
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
          eType: 'date'
        }
      }
    }
  },
  computed: {
    format () {
      if (this.item.format) {
        return this.item.format
      }
      let formatStr = this.getFormat()
      return formatStr
    },
    valueFormat () {
      if (this.item.valueFormat) {
        return this.item.valueFormat
      }
      let formatStr = this.getFormat()
      return formatStr
    },
    isRange () {
      return /.range$/.test(this.item.eType)
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
    getFormat () {
      let formatStr = ''
      // year/month/date/dates/week/datetime/datetimerange/daterange/monthrange
      switch (this.item.eType) {
        case 'year':
          formatStr = 'yyyy'
          break
        case 'month':
        case 'monthrange':
          formatStr = 'yyyy-MM'
          break
        case 'date':
        case 'dates':
        case 'daterange':
          formatStr = 'yyyy-MM-dd'
          break
        case 'week':
          formatStr = 'yyyy-MM WW周'
          break
        case 'datetime':
        case 'datetimerange':
          formatStr = 'yyyy-MM-dd HH:mm:ss'
          break
        default:
          formatStr = 'yyyy-MM-dd HH:mm:ss'
      }
      return formatStr
    },
    handleChange (v) {
      this.item.handle && typeof this.item.handle && this.item.handle(v, this.item)
    }
  }
}
</script>
<style lang='less' scoped>
.l-form-item-date {}
</style>