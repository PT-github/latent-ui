<!--
 * @Author: PT
 * @Date: 2020-04-28 11:28:52
 * @LastEditors: PT
 * @LastEditTime: 2020-04-29 10:31:11
 * @Description: file content
 -->

<template>
  <el-radio-group
    :value="value"
    v-bind="$attrs"
    @input="handleInput"
  >
    <el-radio
      v-for="(option, index) in options"
      :key="'radio_' + index"
      :label="option[attrProps.value]"
    >{{ option[attrProps.label] }}</el-radio>
  </el-radio-group>
</template>

<script>
export default {
  name: 'LFormItemRadio',
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
    attrProps () {
      let obj = {
        label: 'label',
        value: 'value',
        options: 'options'
      }
      this.item &&
        this.item.attrProps &&
        Object.assign(obj, this.item.attrProps)
      return obj
    },
    options () {
      let optionKeys = this.attrProps.options
      if (
        this.item &&
        this.item[optionKeys] &&
        this.item[optionKeys].length > 0
      ) {
        return this.item.options
      }
      return []
    }
  },

  mounted () {},

  methods: {
    handleInput (v) {
      this.$emit('input', v, this.item)
      this.item.handle && typeof this.item.handle && this.item.handle(v, this.item)
    }
  },

  watch: {}
}
</script>
<style lang='less' scoped>
</style>