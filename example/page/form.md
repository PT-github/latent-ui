<!--
 * @Author: PT
 * @Date: 2020-04-27 09:45:31
 * @LastEditors: PT
 * @LastEditTime: 2020-04-29 16:32:09
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
          numbername: "-1",
          inputname1: "",
          inputname2: "",
          option: "",
          option2: "",
          checkname: [],
          // startTime: '0:0:0',
          // endTime: '10:10:10',
          // startTime1: '00:00:00',
          // endTime1: '10:10:10',
        },
        fields: [
          {
            label: "text类型",
            prop: "textname",
            type: 'text'
          },
          {
            label: "number类型",
            prop: "numbername",
            type: 'number',
            controls: false,
            handle(v) {
              console.log('handle', v)
            }
          },
          {
            label: "input类型",
            prop: "inputname",
            clearable: true,
            type: 'input',
            handle: (v, item) => {
              console.log('handle', v, item)
            }
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
            multiple: true,
            isGroup: false,
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
              }
            ],
            attrProps: {
              label: 'name'
            },
            handle: (v, item) => {
              console.log('handle', v, item)
            }
          },
          {
            label: "select类型（下拉带分组）",
            prop: "option2",
            type: 'select',
            clearable: true,
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
            },
            handle: (v, item) => {
              console.log('handle', v, item)
            }
          },
          {
            label: "checkbox类型(值为string类型)",
            prop: "checkname1",
            type: 'checkbox',
            valueFormat: 'string',
            disabled: false,
            size: '',
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
            ],
            handle: (v, item) => {
              console.log('handle', v, item)
            }
          },
          {
            label: "time类型",
            prop: "timename",
            type: 'time'
          },
          {
            label: "time[picker]类型",
            prop: "timename1",
            type: 'time',
            subType: 'picker'
          },
          {
            label: "time[picker]类型(isRange为true)",
            prop: "timename2",
            type: 'time',
            subType: 'picker',
            isRange: true
          },
          {
            label: "time[picker]类型(isRange为true)",
            prop: "timename3",
            type: 'time',
            subType: 'picker',
            isRange: true,
            keySets: [ 'startTime', 'endTime' ],
            handle: (v, item) => {
              console.log('handle', v, item)
            }
          },
          {
            label: "date类型",
            prop: "datename",
            type: 'date',
            subType: 'date', // year/month/date/dates/week
            handle: (v, item) => {
              console.log('handle', v, item)
            }
          },
          {
            label: "date[range]类型",
            prop: "datename1",
            type: 'date',
            subType: 'daterange',
            keySets: [ 'startTime1', 'endTime1' ],
            handle: (v, item) => {
              console.log('handle', v, item)
            }
          },
          {
            label: "date[range]类型",
            prop: "datename2",
            type: 'date',
            subType: 'datetimerange',
            keySets: [ 'startTime2', 'endTime2' ],
            handle: (v, item) => {
              console.log('handle', v, item)
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
