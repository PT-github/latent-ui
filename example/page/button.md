#### PageHeader 页面导航

> 标签： `aaa` 

**功能：** 页面头部显示页面导航或者提供工具插槽使用。

:::demo

```html

  <template>
    <div>
      md文件测试
    </div>

  </template>
  <script>
  export default {
    data(){
      return {
      }
    },
    methods:{
      _back(){
        console.log('返回')
      }
    }
  }
  </script>
  <style lang="css" >
  </style>

```
:::

**yl-page-header 属性**

| 参数        | 说明           |类型   |默认值|
| ------------- |:-------------:| -----:|---:|
| separator| 分隔符号 | String| "/" |

**yl-page-header 插槽**
  
| 名称        | 说明             |
| ------------- |:-------------:|
| default| 默认标题块插槽 | 
| tool| 工具栏区域插槽 | 


**yl-page-header-item 属性**

| 参数        | 说明           |类型   |默认值|
| ------------- |:-------------:| -----:|---:|
| to| 路由跳转路径 | String| "" |
| place| 使用replace方式挑战 | Boolean | false |
| link | 连接跳转 | String| "" |

**yl-page-header 插槽**
  
| 名称        | 说明             |
| ------------- |:-------------:|
| default| 标题名称 | 


