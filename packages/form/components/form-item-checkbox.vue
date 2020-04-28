<!--
 * @Author: PT
 * @Date: 2020-04-28 10:38:14
 * @LastEditors: PT
 * @LastEditTime: 2020-04-28 11:46:12
 * @Description: file content
 -->
<template>
  <el-checkbox-group v-model="currentValue" v-bind="$attrs">
    <el-checkbox
      v-for="(option, index) in options"
      :key="'checkbox_' + index"
      :label="option[attrProps.value]"
    >{{ option[attrProps.label] }}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  name: 'LFormItemCheckbox',
  props: {
    // 绑定的值
    value: {
      required: true
    },
    // 配置
    item: {
      type: Object,
      default: () => {
        return {
          options: []
        }
      }
    }
  },
  data () {
    return {}
  },

  components: {},

  computed: {
    // 根据item配置中的valueFormat，回传对应类型的数据
    valueFormat () {
      return this.item.valueFormat
    },
    // 如果是value是字符串类型，该设置为选中项的连接标识，默认为英文逗号
    splitStr () {
      return this.item.split || ','
    },
    currentValue: {
      get () {
        if (this.valueFormat === 'string') {
          return typeof this.value === 'string' ? this.value.split(this.splitStr) : []
        } else {
          return this.value instanceof Array ? this.value : []
        }
      },
      set (val) {
        this.handleInput(this.valueFormat === 'string' ? val.join(this.splitStr) : val)
      }
    },
    attrProps () {
      let obj = {
        label: 'label',
        value: 'value',
        options: 'options'
      }
      this.item && this.item.attrProps && Object.assign(obj, this.item.attrProps)
      return obj
    },
    options () {
      let optionKeys = this.attrProps.options
      if (this.item && this.item[optionKeys] && this.item[optionKeys].length > 0) {
        return this.item.options
      }
      return []
    }
  },

  mounted () {},

  methods: {
    handleInput (v) {
      this.$emit('input', v, this.item)
    }
  },

  watch: {}
}
</script>
<style lang='less' scoped>
</style>