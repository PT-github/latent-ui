<!--
 * @Author: PT
 * @Date: 2020-04-27 09:45:31
 * @LastEditors: PT
 * @LastEditTime: 2020-04-27 12:17:46
 * @Description: file content
 -->

#### Form 组件

> 标签： `<l-form></l-form>`

**功能：** 配置按钮组。

:::demo

```html
<template>
  <l-form :fields="fields" v-model="form">
    <!-- <template #username>
      <span >AAAA</span>
    </template> -->
    
  </l-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: "x湖南xxx活动",
          topic: "自由活动",
          option: ""
        },
        fields: [
          {
            label: "活动名称",
            prop: "name",
            type: 'text'
          },
          {
            label: "活动主题",
            prop: "topic",
            type: 'input'
          },
          {
            label: "活动选项",
            prop: "option",
            type: 'select',
            isGroup: false,
            options: [
              {
                name: '选项一',
                value: '01',
                options: [
                  {
                    name: 'A方案',
                    value: '01-01'
                  },
                  {
                    name: 'B方案',
                    value: '01-02'
                  }
                ]
              },
              {
                name: '选项二',
                value: '02'
              }
            ],
            attrProps: {
              label: 'name'
            }
          },
        ],
      };
    },
    methods: {
      // 按钮1点击回调事件
      handleClick(v) {
        console.log("我是按钮1");
      },
    },
  };
</script>
```

:::

**属性**

| 参数      |                  说明                   |    类型 |   默认值 |
| --------- | :-------------------------------------: | ------: | -------: |
| size      |                按钮大小                 |  String |    small |
| list      |              按钮数据列表               |   Array |
| isFold    |              是否显示更多               | Boolean |     true |
| visible   |     isFold 为 true 时，默认显示个数     |  Number |        5 |
| attrProps |         配置选项（具体看下表）          |  object |
| moreTitle | isFold 为 true 时，更多操作按钮显示名称 |  String | 更多操作 |

**attrProps**
| 参数 | 说明 | 类型 | 默认值 |
| --------- | :------: | -----: | -----: |
|name|按钮显示名称|String|-|-|
