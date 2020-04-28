/*
 * @Author: PT
 * @Date: 2020-04-28 10:43:04
 * @LastEditors: PT
 * @LastEditTime: 2020-04-28 11:28:32
 * @Description: file content
 */
const mixin = {
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
export default mixin