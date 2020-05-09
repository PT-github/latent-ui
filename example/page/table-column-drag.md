<!--
 * @Author: PT
 * @Date: 2020-05-10 00:30:19
 * @LastEditors: PT
 * @LastEditTime: 2020-05-10 00:32:01
 * @Description: file content
 -->
# Table 组件
> 标签： `<l-table></l-table>`

**功能：** 封装了表格列拖拽功能（兼容多级表头）。
<br>
## data传值（数组/promise）
<br>

:::demo

```html
<template>
  <div class="demo-01">
    <div class="table-box" style="height: 300px;">
      <l-table :dataSource="table.data" :columnDrag="true" :columns="table.columns">
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

