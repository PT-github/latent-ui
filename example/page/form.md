<!--
 * @Author: PT
 * @Date: 2020-04-27 09:45:31
 * @LastEditors: PT
 * @LastEditTime: 2020-04-28 11:52:01
 * @Description: file content
 -->

#### Form 组件

> 标签： `<l-form></l-form>`

**功能：** 配置按钮组。

:::demo

```html
<template>
  <span>
    <l-form :fields="fields" v-model="form"></l-form>
  form数据：{{ JSON.stringify(form) }}
  </span>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          textname: "x湖南xxx活动",
          inputname: "自由活动",
          inputname1: "",
          inputname2: "",
          option: "",
          option2: "",
          checkname: []
        },
        fields: [
          {
            label: "text类型",
            prop: "textname",
            type: 'text'
          },
          {
            label: "input类型",
            prop: "inputname",
            type: 'input'
          },
          {
            label: "input[password]类型",
            prop: "inputname1",
            type: 'input',
            eType: 'password'
          },
          {
            label: "input[textarea]类型",
            prop: "inputname2",
            type: 'input',
            eType: 'textarea'
          },
          {
            label: "select类型",
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
          {
            label: "select类型（下拉带分组）",
            prop: "option2",
            type: 'select',
            isGroup: true,
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
          {
            label: "checkbox类型",
            prop: "checkname",
            type: 'checkbox',
            options: [
              {
                name: '选项一',
                value: '01'
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
          {
            label: "checkbox类型(值为string类型)",
            prop: "checkname1",
            type: 'checkbox',
            valueFormat: 'string',
            disabled: false,
            size: 'medium',
            min: 1,
            max: 3,
            options: [
              {
                name: '选项一',
                value: '01'
              },
              {
                name: '选项二',
                value: '02'
              },
              {
                name: '选项三',
                value: '03'
              },
              {
                name: '选项四',
                value: '04'
              }
            ],
            attrProps: {
              label: 'name'
            }
          },
          {
            label: "radio类型",
            prop: "radioname",
            type: 'radio',
            options: [
              {
                label: '选项一',
                value: '01'
              },
              {
                label: '选项二',
                value: '02'
              }
            ]
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
