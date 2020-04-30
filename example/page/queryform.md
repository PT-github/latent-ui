<!--
 * @Author: PT
 * @Date: 2020-04-30 09:38:08
 * @LastEditors: PT
 * @LastEditTime: 2020-04-30 11:29:36
 * @Description: file content
 -->


> 标签： `<l-queryform></l-queryform>`

**功能：** 带搜索按钮的form。

:::demo

```html
  <template>
    {{ JSON.stringify(form) }}
    <l-queryform v-model="form" :inlineNumber="3" :fields="fields" @search="handleSearch"></l-queryform>
    <l-queryform v-model="form" :inlineNumber="3" :fields="fields" :handleReset="handleReset" @search="handleSearch"></l-queryform>
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


