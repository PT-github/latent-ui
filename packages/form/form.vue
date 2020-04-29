<!--
 * @Author: PT
 * @Date: 2020-04-27 09:15:37
 * @LastEditors: PT
 * @LastEditTime: 2020-04-28 17:31:54
 * @Description: file content
 -->
<template>
  <div
    class="l-form"
    v-if="fields && fields.length > 0"
  >
    <el-form
      ref="form"
      :model="value"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <el-form-item
        v-for="(item, index) in visibleFields"
        :key="'l-form-item_' + index"
				:prop="item.prop"
				:label="item.label"
				:label-width="item.labelWidth"
				:required="!!item.required"
				:rules="item.rules"
				:error="item.error"
				:show-message="item.showMessage"
				:inline-message="item.inlineMessage"
				:size="item.size"
      >
				<template #label>
					<slot :name="item.prop"></slot>
				</template>
				<template #default>
					<LFormItem :item="item" :model="value" :value="value[item.prop]" @input="handleInput"></LFormItem>
				</template>
			</el-form-item>
    </el-form>
  </div>
</template>

<script>
import LFormItem from './form-item.vue'
export default {
  name: 'LForm',
  props: {
		// form表单下的field配置
    fields: {
			type: Array,
			required: true,
      default: () => []
		},
		value: {
			type: Object,
			default: () => {
				return {}
			}
		}
  },
  data () {
    return {}
  },

  components: {
		LFormItem
	},

  computed: {
    visibleFields () {
      return this.fields.filter(item => item.show !== false)
    }
  },

  mounted () {},

  methods: {
    // 监听子组件中的数据回填input事件
    handleInput (v, item) {
      // console.log('监听子组件中的数据回填input事件', v, item)
      // if (item.type === 'input') {
        console.log(v, item, 'form')
        this.$emit('input', Object.assign({}, this.value, {
          [item.prop]: v
        }))
      // }
    }
  },

  watch: {}
}
</script>
<style lang='less' scoped>
.l-form {
}
</style>