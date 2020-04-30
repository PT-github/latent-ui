<!--
 * @Author: PT
 * @Date: 2020-04-29 15:48:57
 * @LastEditors: PT
 * @LastEditTime: 2020-04-29 16:18:32
 * @Description: file content
 -->
<template>
  <el-input-number
    class="l-form-item-number"
    v-model="currentValue"
    controls-position="right"
    v-bind="$attrs"
    @change="handleChange"
  ></el-input-number>
</template>

<script>
export default {
  name: 'LFormItemNumber',
  props: ['value', 'item'],
  data () {
    return {}
  },

  components: {},

  computed: {
    currentValue: {
      get () {
        let v = +this.value
        return v ? v : 0
      },
      set (val) {
        this.$emit('input', val, this.item)
      }
    }
  },

  mounted () {},

  methods: {
    handleInput (v) {
      this.$emit('input', v, this.item)
    },
    handleChange (v) {
      this.item.handle &&
        typeof this.item.handle &&
        this.item.handle(v, this.item)
    }
  },

  watch: {}
}
</script>
<style lang='less' scoped>
</style>