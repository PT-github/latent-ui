<!--
 * @Author: PT
 * @Date: 2020-05-09 10:09:27
 * @LastEditors: PT
 * @LastEditTime: 2020-05-09 18:03:18
 * @Description: file content
 -->
# Table 组件
> 标签： `<l-querytable></l-querytable>`

**功能：** 多级表头的表格
<br>
<br>

:::demo

```html
<template>
  <div class="demo-03">
    <!-- 带查询的表格也适用 -->
    <!-- <l-querytable
      v-model="form"
      :fields="fields"
      :dataSource="table.data"
      :columns="table.columns"
    ></l-querytable> -->
    <l-table :dataSource="table.data"
      :columns="table.columns">
      <template v-slot:domesticHeader>
        domesticHeader插槽(国内)
      </template>
      <template v-slot:firstName1Header>
        firstName1Header插槽
      </template>
      <template v-slot:firstName1="scope">
        firstName1插槽:{{scope.row.firstName1}}
      </template>
    </l-table>
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
            address: '上海市普陀区金沙江路 1518 弄',
            province: "湖南省",
            community: "中悦领秀城",
            firstName1: "王",
            lastName1: "小虎",
            firstName2: "Wang",
            lastName2: "Xiaohu"
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            province: "湖南省",
            community: "中悦领秀城",
            firstName1: "王",
            lastName1: "小虎",
            firstName2: "Wang",
            lastName2: "Xiaohu"
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            province: "湖南省",
            community: "中悦领秀城",
            firstName1: "王",
            lastName1: "小虎",
            firstName2: "Wang",
            lastName2: "Xiaohu"
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            province: "湖南省",
            community: "中悦领秀城",
            firstName1: "王",
            lastName1: "小虎",
            firstName2: "Wang",
            lastName2: "Xiaohu"
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            province: "湖南省",
            community: "中悦领秀城",
            firstName1: "王",
            lastName1: "小虎",
            firstName2: "Wang",
            lastName2: "Xiaohu"
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            province: "湖南省",
            community: "中悦领秀城",
            firstName1: "王",
            lastName1: "小虎",
            firstName2: "Wang",
            lastName2: "Xiaohu"
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            province: "湖南省",
            community: "中悦领秀城",
            firstName1: "王",
            lastName1: "小虎",
            firstName2: "Wang",
            lastName2: "Xiaohu"
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            province: "湖南省",
            community: "中悦领秀城",
            firstName1: "王",
            lastName1: "小虎",
            firstName2: "Wang",
            lastName2: "Xiaohu"
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
              align: 'left',
              children: [
                {
                  label: '国内',
                  value: 'domestic',
                  align: 'left',
                  children: [
                    {
                      label: '姓',
                      value: 'firstName1',
                      align: 'left'
                    },
                    {
                      label: '名',
                      value: 'lastName1',
                      align: 'left'
                    },
                  ]
                },
                {
                  label: '国外',
                  value: 'foreign',
                  align: 'left',
                  children: [
                    {
                      label: 'First Name',
                      value: 'firstName2',
                      align: 'left'
                    },
                    {
                      label: 'Last Name',
                      value: 'lastName2',
                      align: 'left'
                    },
                  ]
                },
              ]
            },
            {
              label: '地址',
              value: 'address',
              align: 'left',
              children: [
                {
                  label: '省份',
                  value: 'province',
                  align: 'left'
                },
                {
                  label: '小区',
                  value: 'community',
                  align: 'left'
                },
              ]
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
