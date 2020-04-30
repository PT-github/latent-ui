<!--
 * @Author: PT
 * @Date: 2020-04-30 09:38:08
 * @LastEditors: PT
 * @LastEditTime: 2020-04-30 12:03:18
 * @Description: file content
 -->


> 标签： `<l-queryform></l-queryform>`

**功能：** 带搜索按钮的form。

:::demo

```html
  <template>
    {{ JSON.stringify(form) }}
    <l-queryform v-model="form" :inlineNumber="3" :fields="fields" @search="handleSearch"></l-queryform>
    <hr>
    <l-queryform v-model="form" :inlineNumber="3" :fields="fields" :showReset="false" @search="handleSearch"></l-queryform>
    <hr>
    <l-queryform v-model="form" :inlineNumber="3" :fields="fields" :handleReset="handleReset" @search="handleSearch" searchBarText="搜索" resetBarText="清空"></l-queryform>
<hr>
    <l-queryform v-model="form" :inlineNumber="3" :fields="fields" :handleReset="handleReset" @search="handleSearch">
      <template #operation>
        <el-button icon="el-icon-search" circle></el-button>
      </template>
    </l-queryform>
  </template>
  <script>
    export default {
      data () {
        return {
          form: {
            name: '',
            age: '',
            sex: '',
            startTime: '',
            endTime: ''
          },
          fields: [
            {
              label: "姓名",
              prop: "name",
              clearable: true,
              type: 'input',
              handle: (v, item) => {
                console.log('handle', v, item)
              }
            },
            {
              type: 'number',
              label: '年龄',
              prop: 'age',
              min: 0,
              max: 150
            },
            {
              type: 'select',
              label: '性别',
              prop: 'sex',
              options: [
                {
                  label: '男',
                  value: '1'
                },
                {
                  label: '女',
                  value: '2'
                },
              ]
            },
            {
              type: 'date',
              eType: 'datetimerange',
              prop: 'dateTime',
              label: '时间',
              keySets: [ 'startTime', 'endTime' ]
            },
          ]
        }
      },
      methods: {
        handleSearch (v) {
          alert('查询入参：' + JSON.stringify(v))
        },
        handleReset () {
          alert('自定义重置功能')
        }
      }
    }
  </script>
```
:::

**属性**

| 参数          |                  说明                   |    类型 |   默认值   |
| ------------ | :-------------------------------------: | ------: | -------: |
| fields       |           form内组件配置（详见下表）        |  array |     -     |
| value/v-model|                   绑定值                 |   object |          |
| inlineNumber| inline为true时有效，一行显示formitem个数|   number |    3    |
| showReset   |          是否显示重置按钮       |   boolean |    true      |
| searchBarText   |          查询按钮显示文字       |   string |    '查询'      |
| resetBarText   |          重置按钮显示文字       |   string |    '重置'      |
| handleReset   |          覆盖重置按钮点击事件       |   function |    -      |
| 其属性配置，请参照form属性配置|
<br/>
<br/>
<br/>

**Events**

| 事件名称      | 说明   |  回调参数  |
| ------------ | :---: | :---: |
| search       | 点击查询按钮时的回调函数 | value/v-model绑定的值 |
<br/>
<br/>
<br/>

**插槽**

| name          |                  说明                   |
| ------------ | :-------------------------------------: |
| operation       |           操作栏内容        |
