<!--
 * @Author: PT
 * @Date: 2020-05-07 17:23:15
 * @LastEditors: PT
 * @LastEditTime: 2020-05-07 17:51:04
 * @Description: file content
 -->
# Table 组件
> 标签： `<l-table></l-table>`

**功能：** 高度设定
<br>
<br>

:::demo

```html
<template>
  <div class="demo-02">
    <div class="title">表格一(高度自适应)：</div>
    <div class="table-box" style="height: 400px;">
      <l-table :dataSource="table.data" :columns="table.columns">
      </l-table>
    </div>
    <div class="title" style="margin-top: 20px;">表格二(传递height)：</div>
    <div class="table-box">
      <l-table :dataSource="table.data" :height="200" :columns="table.columns">
      </l-table>
    </div>
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
.title {
  font-size: 18px;
  line-height: 36px;
}
</style>
```
:::

