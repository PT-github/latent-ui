<!--
 * @Author: PT
 * @Date: 2020-04-27 09:40:55
 * @LastEditors: PT
 * @LastEditTime: 2020-04-28 18:26:46
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
      :multiple="item.multiple"
      :disabled="!!item.disabled"
      :value-key="item.valueKey || 'value'"
      :size="item.size"
      :clearable="!!item.clearable"
      :collapse-tags="!!item.collapseTags"
      :multiple-limit="item.multipleLimit"
      :name="item.name"
      :autocomplete="item.autocomplete"
      :placeholder="item.placeholder"
      :filterable="item.filterable"
      :allow-create="item.allowCreate"
      :filter-method="item.filterMethod"
      :remote="item.remote"
      :loading="item.loading"
      :loading-text="item.loadingText"
      :no-match-text="item.noMatchText"
      :no-data-text="item.noDataText"
      :popper-class="item.popperClass"
      :reserve-keyword="item.reserveKeyword"
      :default-first-option="item.defaultFirstOption"
      :popper-append-to-body="item.popperAppendToBody === false"
      :automatic-dropdown="item.automaticDropdown"
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
    <l-form-item-time
      v-else-if="item.type === 'time'"
      :value="value"
      :item="item"
      :readonly="item.readonly"
      :disabled="item.disabled"
      :editable="item.editable === false"
      :clearable="item.clearable"
      :size="item.size"
      :placeholder="item.placeholder"
      :start-placeholder="item.startPlaceholder"
      :end-placeholder="item.endPlaceholder"
      :is-range="item.isRange"
      :arrow-control="item.arrowControl"
      :align="item.align"
      :popper-class="item.popperClass"
      :picker-options="item.pickerOptions"
      :range-separator="item.rangeSeparator"
      :value-format="item.valueFormat"
      :default-value="item.defaultValue"
      :name="item.name"
      :prefix-icon="item.prefixIcon"
      :clear-icon="item.clearIcon"
      :model="$attrs.model"
      v-on="$listeners"
    ></l-form-item-time>
  </span>
</template>

<script>
import { LFormItemText, LFormItemInput, LFormItemSelect, LFormItemCheckbox, LFormItemRadio, LFormItemTime } from './components'
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
    LFormItemRadio,
    LFormItemTime,
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