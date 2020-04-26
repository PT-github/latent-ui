<!--
 * @Author: PT
 * @Date: 2020-04-20 20:39:25
 * @LastEditors: PT
 * @LastEditTime: 2020-04-26 17:18:35
 * @Description: 通过传参，动态显示所有按钮
 -->
<template>
  <div
    class="l-button"
    v-if="list && list.length > 0"
  >
    <el-button
      v-for="(item, index) in visibleButtons"
      :key="'visible_' + index"
      :size="size"
      :type="item.type"
      :plain="item.plain"
      :round="item.round"
      :circle="item.circle"
      :loading="item.loading"
      :disabled="item.disabled"
      :icon="item.elIcon"
      :autofocus="item.autofocus"
      @click="handleClick(item)"
    >
      <l-icon
        v-if="item.icon && item.iconPosition !== 'right'"
        :name="item.icon"
      ></l-icon>
      {{ attrProps && attrProps.name ? item[attrProps.name] : item.name }}
      <l-icon
        v-if="item.icon && item.iconPosition === 'right'"
        :name="item.icon"
      ></l-icon>
    </el-button>
    <template v-if="isFold && selectButtons && selectButtons.length > 0">
      <el-popover
        placement="bottom-start"
        trigger="hover"
        popper-class="l-button-popper"
      >
        <el-button
          slot="reference"
          :size="size"
        >
          <span>{{ moreTitle }}<l-icon name="iconxia"></l-icon></span>
        </el-button>
        <ul class="l-button-more">
          <li
            class="l-button-more-item"
            v-for="(item, index) in selectButtons"
            :key="'selectButtons_' + index"
            @click="handleClick(item)"
          >
            {{ attrProps && attrProps.name ? item[attrProps.name] : item.name }}
          </li>
        </ul>
      </el-popover>
    </template>
  </div>
</template>

<script>
import LIcon from '../icon'
export default {
  name: 'LButton',
  props: {
    size: {
      type: String,
      default: 'small'
    },
    // 是否折行
    isFold: {
      type: Boolean,
      default: true
    },
    /**
     * 配合isFold为true时，该设置有效
     * 可见数目 超过该设置默认隐藏在更多的下拉里
     * isFold为false，该设置无效
     */
    visible: {
      type: Number,
      default: 5
    },
    // 按钮数据
    list: {
      type: Array,
      default: () => []
    },
    // 属性匹配
    attrProps: {
      type: Object
    },
    moreTitle: {
      type: String,
      default: '更多操作'
    }
  },
  computed: {
    // 可见按钮数据
    visibleButtons () {
      let max = this.isFold ? this.visible : this.list.length
      return this.list.slice(0, max)
    },
    // 下拉列表中按钮数据
    selectButtons () {
      let min = this.isFold ? this.visible : this.list.length
      return this.list.slice(min)
    }
  },
  methods: {
    // 按钮点击事件
    handleClick (item) {
      item.handleClick && item.handleClick()
    }
  },
  components: {
    LIcon
  }
}
</script>
<style lang="scss" scoped>
@import url(./button.scss);
</style>
