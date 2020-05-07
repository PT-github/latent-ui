<!--
 * @Author: PT
 * @Date: 2020-04-27 09:45:31
 * @LastEditors: PT
 * @LastEditTime: 2020-05-07 17:03:06
 * @Description: file content
 -->

#### Form 组件

> 标签： `<l-form></l-form>`

**功能：** 配置form表单。

:::demo

```html
<template>
  <span>
    <l-form :rules="rules" :fields="fields" v-model="form"></l-form>
    <!-- <l-form :fields="fields" :inline="true" :inlineNumber="2" v-model="form"></l-form> -->
  form数据：{{ JSON.stringify(form) }}
  </span>
</template>
<script>
  export default {
    data() {
      return {
        rules: {
          inputname: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        },
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
            handle(v) {
              console.log('handle', v)
            }
          },
          {
            type: 'number',
            label: '数量',
            prop: 'count',
            min: 0,
            max: 150,
            step: 5,
            stepStrictly: true
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
            type: 'input',
            eType: 'password',
            label: '密码',
            prop: 'password',
            clearable: true,
            showPassword: true
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
            eType: 'picker'
          },
          {
            label: "time[picker]类型(isRange为true)",
            prop: "timename2",
            type: 'time',
            eType: 'picker',
            isRange: true
          },
          {
            label: "time[picker]类型(isRange为true)",
            prop: "timename3",
            type: 'time',
            eType: 'picker',
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
            eType: 'date', // year/month/date/dates/week
            handle: (v, item) => {
              console.log('handle', v, item)
            }
          },
          {
            label: "date[range]类型",
            prop: "datename1",
            type: 'date',
            eType: 'daterange',
            keySets: [ 'startTime1', 'endTime1' ],
            handle: (v, item) => {
              console.log('handle', v, item)
            }
          },
          {
            label: "date[range]类型",
            prop: "datename2",
            type: 'date',
            eType: 'datetimerange',
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

| 参数          |                  说明                   |    类型 |   默认值   |
| ------------ | :-------------------------------------: | ------: | -------: |
| fields       |           form内组件配置（详见下表）        |  array |     -     |
| value/v-model|                   绑定值                 |   object |          |
| inline       |          是否一行显示formitem       |   boolean |    false      |
| inlineNumber| inline为true时有效，一行显示formitem个数|   number |    3    |
| 其他属性配置，请参照element-ui中的form属性配置|

**fields**

|  参数 |    说明    |  类型 | 可选值 | 默认值 | 是否必传项 |
| ---- | :--------: | -----: | -----: | -----: | -----: |
| type |显示组件的类型|string | text/input/number/select/checkbox/radio/time/date |-|是|
<br/><br/><br/>

## fileds中组件可以配置element-ui的对应组件列出的所有配置，如遇到有中划线连接的字段，则采用驼峰式传入（个别字段被使用时用e前缀来区分[例如input中type使用eType来传递]）
例如：
```html
inputNumber配置:
{
  type: 'number',
  label: '数量',
  prop: 'count',
  min: 0,
  max: 150,
  step: 5,
  stepStrictly: true
}
input配置:
{
  type: 'input',
  eType: 'password'
  label: '名称',
  prop: 'name',
  clearable: true,
  showPassword: true // show-password改为驼峰式传入组件
}
```

**fileds中组件type为text**
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必传项 |
| --------- | :------: | :-----: | :-----: | :-----: | -----: |
|label|标签文本|string|-|-|-|
|prop|表单域model字段|-|-|-|-|
<br/><br/><br/>

**fileds中组件type为number**
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必传项 |
| --------- | :------: | :-----: | :-----: | :-----: | -----: |
|label|同text|-|-|-|-|
|prop|同text|-|-|-|-|
|handle|数据发生改变时回调函数|function|-|-|-|
|其他参数，参考element-ui文档(如遇到有中划线连接的字段，则采用驼峰式传入)|
<br/><br/><br/>

**fileds中组件type为input**
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必传项 |
| --------- | :------: | :-----: | :-----: | :-----: | -----: |
|label|同text|-|-|-|-|
|prop|同text|-|-|-|-|
|eType|input显示类型|string|input/textarea/password等和其他原声input的type值|-|-|
|handle|数据发生改变时回调函数|function|-|-|-|
|其他参数，参考element-ui文档(如遇到有中划线连接的字段，则采用驼峰式传入)|
<br/><br/><br/>

**fileds中组件type为select**
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必传项 |
| --------- | :------: | :-----: | :-----: | :-----: | -----: |
|label|同text|-|-|-|-|
|prop|同text|-|-|-|-|
|isGroup|下拉选项是否分组|boolean|-|false|-|
|attrProps|字段配置选项|object|-|-|-|
|attrProps.label|选项标签对应字段|string|-|-|-|
|attrProps.value|选项值对应字段|string|-|-|-|
|attrProps.options|选项列表对应字段|string|-|-|-|
|handle|数据发生改变时回调函数|function|-|-|-|
|其他参数，参考element-ui文档(如遇到有中划线连接的字段，则采用驼峰式传入)|
<br/><br/><br/>


**fileds中组件type为checkbox/radio**
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必传项 |
| --------- | :------: | :-----: | :-----: | :-----: | -----: |
|label|同text|-|-|-|-|
|prop|同text|-|-|-|-|
|valueFormat|勾选值类型[针对checkbox]|string|string/array|array|-|
|attrProps|字段配置选项|object|-|-|-|
|attrProps.label|选项标签对应字段|string|-|-|-|
|attrProps.value|选项值对应字段|string|-|-|-|
|attrProps.options|选项列表对应字段|string|-|-|-|
|handle|数据发生改变时回调函数|function|-|-|-|
|其他参数，参考element-ui文档(如遇到有中划线连接的字段，则采用驼峰式传入)|
<br/><br/><br/>

**fileds中组件type为time**
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必传项 |
| --------- | :------: | :-----: | :-----: | :-----: | -----: |
|label|同text|-|-|-|-|
|prop|同text|-|-|-|-|
|eType|组件显示类型|string|picker/select|select|-|
|isRange|是否为时间范围选择|boolean|-|false|-|
|keySets|当isRange为true时，设置起始时间和结束时间对应表单数据中的字段|array|-|-|-|
|handle|数据发生改变时回调函数|function|-|-|-|
|其他参数，参考element-ui文档(如遇到有中划线连接的字段，则采用驼峰式传入)|
<br/><br/><br/>

**fileds中组件type为date**
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必传项 |
| --------- | :------: | :-----: | :-----: | :-----: | -----: |
|label|同text|-|-|-|-|
|prop|同text|-|-|-|-|
|eType|组件显示类型|year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange	|date|-|
|keySets|当设置为时间范围时，设置起始时间和结束时间对应表单数据中的字段|array|-|-|-|
|handle|数据发生改变时回调函数|function|-|-|-|
|其他参数，参考element-ui文档(如遇到有中划线连接的字段，则采用驼峰式传入)|
<br/><br/><br/>

