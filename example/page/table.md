<!--
 * @Author: fenzhou
 * @Date: 2020-04-28 15:56:46
 * @LastEditors: PT
 * @LastEditTime: 2020-05-09 17:58:35
 * @Description: 
 -->
# Table 组件
> 标签： `<l-table></l-table>`

**功能：** 封装了表格功能。
<br>
## data传值（数组/promise）
<br>

:::demo

```html
<template>
  <div class="demo-01">
    <div class="table-box" style="height: 300px;">
      <l-table :dataSource="table.data" :columns="table.columns">
        <template v-slot:name="scope">
          name的插槽{{scope.row.name}}
        </template>
        <template v-slot:nameHeader>
          name的表头插槽
        </template>
      </l-table>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Table01',
    data() {
      return {
        table: {
          data: [
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
          ],
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
```
:::

<br>

