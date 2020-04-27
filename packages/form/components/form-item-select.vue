<!--
 * @Author: PT
 * @Date: 2020-04-27 11:34:17
 * @LastEditors: PT
 * @LastEditTime: 2020-04-27 12:17:31
 * @Description: file content
 -->
<template>
  <el-select
    :value="value"
    v-bind="$attrs"
    @input="handleInput"
  >
    <template v-if="!item.isGroup">
      <el-option
        v-for="(option, index) in options"
        :key="'l-option_' + index"
        :label="option[attrProps.label]"
        :value="option[attrProps.value]"
        :disabled="option.disabled"
      >
      </el-option>
    </template>
    <template v-else>
      <el-option-group
        v-for="(fa, index) in options"
        :key="'l-option-fa_' + index"
        :label="fa[attrProps.label]"
      >
        <el-option
          v-for="(sub, idx) in fa[attrProps.options]"
          :key="'l-option_sub' + index + '_' + idx"
          :label="sub[attrProps.label]"
          :value="sub[attrProps.value]"
          :disabled="sub.disabled"
        >
        </el-option>
      </el-option-group>
    </template>

  </el-select>
</template>

<script>
export default {
  name: 'LFormItemSelect',
  props: {
    // select的值
    value: {
      required: true
    },
    // 配置
    item: {
      type: Object,
      default: () => {
        return {
          isGroup: false,
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
      this.item && this.item.attrProps && Object.assign(obj, this.item.attrProps)
      return obj
    },
    options () {
      let keys = this.attrProps
      if (this.item && this.item.options && this.item.options.length > 0) {
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