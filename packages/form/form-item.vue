<!--
 * @Author: PT
 * @Date: 2020-04-27 09:40:55
 * @LastEditors: PT
 * @LastEditTime: 2020-04-28 11:53:00
 * @Description: file content
 -->
<template>
  <span
    class="l-form-item"
    v-if="item && item.type"
  >
    <l-form-item-text v-if="item.type === 'text'">
      {{ value }}
    </l-form-item-text>
    <l-form-item-input
      v-else-if="item.type === 'input'"
      :value="value"
      :item="item"
      :type="item.eType"
      :maxlength="item.maxlength"
      :minlength="item.minlength"
      :show-word-limit="item.showWordLimit"
      :placeholder="item.placeholder"
      :clearable="item.clearable"
      :show-password="item.showPassword"
      :disabled="item.disabled === false"
      :size="item.size"
      :prefix-icon="item.prefixIcon"
      :suffix-icon="item.suffixIcon"
      :autosize="item.autosize"
      :autocomplete="item.autocomplete"
      :name="item.name"
      :readonly="item.readonly"
      :max="item.max"
      :min="item.min"
      :step="item.step"
      :resize="item.resize"
      :autofocus="item.autofocus"
      :form="item.form"
      :label="item.label"
      :tabindex="item.tabindex"
      :validate-event="item.validateEvent === false"
      v-on="$listeners"
    ></l-form-item-input>
    <l-form-item-select
      v-else-if="item.type === 'select'"
      :value="value"
      :item="item"
      v-on="$listeners"
    ></l-form-item-select>
    <l-form-item-checkbox
      v-else-if="item.type === 'checkbox'"
      :value="value"
      :item="item"
      :size="item.size"
      :disabled="!!item.disabled"
      :min="item.min"
      :max="item.max"
      :text-color="item.textColor || '#FFFFFF'"
      :fill="item.fill || '#409EFF'"
      v-on="$listeners"
    ></l-form-item-checkbox>
    <l-form-item-radio
      v-else-if="item.type === 'radio'"
      :value="value"
      :item="item"
      :size="item.size"
      :disabled="!!item.disabled"
      :text-color="item.textColor || '#FFFFFF'"
      :fill="item.fill || '#409EFF'"
      v-on="$listeners"
    ></l-form-item-radio>
  </span>
</template>

<script>
import { LFormItemText, LFormItemInput, LFormItemSelect, LFormItemCheckbox, LFormItemRadio } from './components'
export default {
  name: 'LFormItem',
  props: {
    // field配置信息
    item: {
      type: Object
    },
    // 当前值
    value: {
      required: true
    }
  },
  data () {
    return {}
  },

  components: {
    LFormItemText,
    LFormItemInput,
    LFormItemSelect,
    LFormItemCheckbox,
    LFormItemRadio
  },

  computed: {},

  mounted () {},

  methods: {
    /**【type:input】的input监听 */
    handleInput (v) {
      console.log(v, '=====')
    }
  },

  watch: {}
}
</script>
<style lang='less' scoped>
.l-form-item {
}
</style>