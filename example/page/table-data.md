<!--
 * @Author: PT
 * @Date: 2020-05-07 16:00:40
 * @LastEditors: PT
 * @LastEditTime: 2020-05-07 17:21:57
 * @Description: file content
 -->
# Table 组件
> 标签： `<l-table></l-table>`

**功能：** data传值（数组Array/方法Function）
<br>
<br>

:::demo

```html
<template>
  <div class="demo-01">
    <div class="title">表格一(传Array数组)：</div>
    <div class="table-box" style="height: 300px;">
      <l-table :dataSource="table.data" :columns="table.columns" :showPage="false">
      </l-table>
    </div>
    <div class="title" style="margin-top: 20px;">表格二(传方法)：</div>
    <div class="table-box" style="height: 200px;">
      <l-table :dataSource="data2" :columns="table.columns" :showPage="false">
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
          data: data,
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
        data2: (params) => {
          console.log(params)
          return new Promise(resolve => {
            setTimeout(() => {
              resolve({
                pageNo: 1,
                total: 100,
                list: data
              })
            }, 3000)
          })
        }
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

