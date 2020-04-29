<!--
 * @Author: fenzhou
 * @Date: 2020-04-28 15:56:46
 * @LastEditors: fenzhou
 * @LastEditTime: 2020-04-28 17:29:31
 * @Description: 
 -->
#### Table 组件
> 标签： `<ele-table></ele-table>`

**功能：** 封装了表格功能。

:::demo

```html
<template>
    <ele-table :data="loadData" :columns="columns">
    </ele-table>
</template>
<script>
  export default {
    data() {
      return {
        loadData:[{
            name: 'bella'
        }],
        columns: [{
            label: '姓名',
            value: 'name',
            align: 'left'
        }]
      }
      
    }
  }
</script>