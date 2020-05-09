<!--
 * @Author: PT
 * @Date: 2020-05-09 09:24:16
 * @LastEditors: PT
 * @LastEditTime: 2020-05-09 09:40:06
 * @Description: file content
 -->
# Table 组件
> 标签： `<l-querytable></l-querytable>`

**功能：** 带查询的表格
<br>
<br>

:::demo

```html
<template>
  <div class="demo-03">
    <l-querytable
      v-model="form"
      :fields="fields"
      :dataSource="table.data"
      :columns="table.columns"
      ></l-querytable>
  </div>
</template>
<script>
  export default {
    name: 'Table01',
    data() {
      let data = [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
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
        ],
        table: {
          data: (params) => {
            console.log(params)
            return new Promise(resolve => {
              setTimeout(() => {
                resolve({
                  pageNo: params.pageNo,
                  total: 100,
                  list: data
                })
              }, 1000)
            })
          },
          columns: [
            {
              label: '日期',
              value: 'date',
              align: 'left'
            },
            {
              label: '姓名',
              value: 'name',
              align: 'left'
            },
            {
              label: '地址',
              value: 'address',
              align: 'left'
            },
          ]
        },
      }
    }
  }
</script>
<style lang="less">
.demo-03 {
  height: 400px;
}
</style>
```
:::
