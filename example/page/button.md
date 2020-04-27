<!--
 * @Author: PT
 * @Date: 2020-04-23 10:16:17
 * @LastEditors: PT
 * @LastEditTime: 2020-04-26 17:23:06
 * @Description:
 -->

#### Button 组件

> 标签： `<l-button></l-button>`

**功能：** 配置按钮组。

:::demo

```html
<template>
  <l-button
    size="medium"
    :list="buttons.list"
    :attrProps="buttons.attrProps"
    moreTitle="更多操作"
    >
  </l-button>
</template>
<script>
  export default {
    data() {
      return {
        buttons: {
          list: [
            {
              label: "按钮1",
              icon: "iconshijian",
              handleClick: this.handleClick
            },
            {
              label: "按钮2",
              icon: "iconshijian",
              iconPosition: 'right'
            },
            {
              label: "按钮3",
              loading: true
            },
            {
              label: "按钮4",
            },
            {
              label: "按钮5",
              type: 'success'
            },
            {
              label: "按钮6",
            },
            {
              label: "按钮7",
            },
            {
              label: "按钮8",

            }
          ],
          attrProps: {
            "name": "label"
          }
        },
      };
    },
    methods: {
      // 按钮1点击回调事件
      handleClick (v) {
        console.log('我是按钮1')
      }
    },
  };
</script>
```

:::

**属性**

| 参数      |   说明   |   类型 | 默认值 |
| --------- | :------: | -----: | -----: |
|size|按钮大小|String|small|
|list|按钮数据列表 |Array|
|isFold| 是否显示更多|Boolean|true
|visible|isFold为true时，默认显示个数|Number|5
|attrProps|配置选项（具体看下表）|object|
|moreTitle|isFold为true时，更多操作按钮显示名称|String|更多操作

**attrProps**
| 参数      |   说明   |   类型 | 默认值 |
| --------- | :------: | -----: | -----: |
|name|按钮显示名称|String|-|-|