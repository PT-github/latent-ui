<!--
 * @Author: fenzhou
 * @Date: 2020-04-28 15:56:46
 * @LastEditors: PT
 * @LastEditTime: 2020-05-07 17:55:01
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

## 高度自适应
<br>

:::demo

```html
<template>
  <div class="demo-02" :class="{'is-fold': isFold}" :style="{height: vHeight + 'px'}">
    <div class="opera">
      <el-button type="primary" @click="handleFold">表格容器高度变化</el-button>
    </div>
    <div class="table-box">
      <l-table :dataSource="table.data" parent-selector=".demo-02" :columns="table.columns">
      </l-table>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Table2',
    data() {
      return {
        isFold: false,
        vHeight: 300,
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
    },
    methods: {
      handleFold () {
        this.vHeight = this.vHeight === 300 ? 400 : 300
        this.$nextTick(() => {
          this.isFold = !this.isFold
        })
      }
    }
  }
</script>
<style lang="less" scoped>
.demo-02 {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
}
.table-fold {
  height: 300px;
}
.demo-02 .table-box {
  flex: 1;
}
</style>

```
:::

