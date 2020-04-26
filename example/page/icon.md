<!--
 * @Author: PT
 * @Date: 2020-04-26 11:41:46
 * @LastEditors: PT
 * @LastEditTime: 2020-04-26 16:01:04
 * @Description: file content
 -->
#### Button 组件

> 标签： `<l-icon></l-icon>`

**功能：** icon。

:::demo

```html
  <l-icon name="iconshijian"></l-icon>
  <l-icon name="iconguanbi"></l-icon>
  <l-icon name="iconyincang"></l-icon>
  <l-icon name="iconwo"></l-icon>
```
:::

**LIcon 属性**

| 参数|说明|类型|默认值 |
|-| :------: | -----: | -----: |
| name | 字体class | String ||

**图标集合**
:::demo

```html
<template>
  <div class="icons">
    <div
      class="icon-item"
      v-for="(item, index) in list"
      :index="'icon_' + index"
    >
      <l-icon :name="item"></l-icon>
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: [
          "iconshijian",
          "iconguanbi",
          "iconyincang",
          "iconwo",
          "iconjia",
          "iconjian",
          "iconzhushi",
          "iconjiantou",
          "icondui",
          "iconshuangjiantou",
          "iconshangyi",
          "iconxiangyou",
          "icondengru",
          "iconbangzhu",
          "icondaoru",
          "icondaochu",
          "iconbi",
          "iconjianshao",
          "iconzhiding",
          "iconcai",
          "iconzhidi",
          "icontuichu",
          "iconxiangxia",
          "iconxiaoxi",
          "iconzhengque",
          "icontianjia",
          "iconshang",
          "iconjin",
          "icongengduo",
          "iconxiayi",
          "iconzuo",
          "iconxiangzuo",
          "iconxiangshang",
          "iconyou",
          "iconxia",
          "iconjiesuo",
          "iconyingyong",
          "iconsuoding",
          "icongongneng",
          "iconyuechi",
          "iconlianjie",
          "iconlianjie1",
          "iconshenfen",
          "iconqukuai",
          "iconyoujian",
          "iconsaoma",
          "iconguanxi",
          "iconxitongshezhi",
          "iconyinyong",
          "iconliebiao",
          "iconkongzhitai",
          "icondiannao",
          "iconshangchuan",
          "iconjiankong",
          "iconxiangji",
          "iconxiachuan",
          "iconxitongjiagou",
          "icongongzuotai",
          "iconshezhi",
          "iconpingtai",
          "iconzhuti",
          "iconyibiaopan",
          "iconchangjing",
          "iconjiegou",
          "iconwenwu",
          "iconwangluo",
          "iconlvhangxiang",
          "icondingyue",
          "iconzuzhijiegou",
          "iconshuju",
          "iconbijiben",
          "iconhuishou",
          "iconpingban",
          "iconfenxi",
          "iconbiaoqian",
          "iconshalou",
          "iconjingshi",
          "iconweizhi",
          "iconnaozhong",
          "iconerweima",
          "iconshaixuan",
          "iconzhibo",
          "iconwenjian",
          "iconzhoubian",
          "iconjingbao",
          "iconweixin",
          "iconcunchu",
          "iconditu",
          "iconrili",
          "icontupian",
          "iconshipin",
          "iconyinpin",
          "iconrizhi",
          "iconwenjianjia",
          "iconchangguan",
          "iconaixin",
          "iconfenxiang",
          "iconhexiao",
          "icongonglve",
          "iconliulan",
          "iconpinglun",
          "iconVR",
          "iconsousuo",
          "iconlanjie",
          "icontishi",
          "icontingzhi",
          "iconguanji",
          "iconjiancha",
          "iconfaxian",
          "iconcuo",
          "iconshoucang",
          "iconshuxie",
          "icondianzan",
          "iconbofang",
          "icontui",
          "iconxiaochengxu",
          "iconyanzheng"
        ]
      }
    }
  }
</script>
<style lang="less">
  .icons {
    display: flex;
    flex-wrap: wrap;
    .icon-item {
      width: 150px;
      height: 150px;
      display: inline-block;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .l-iconfont {
        font-size: 40px;
        height: 50px;
        line-height: 50px;
      }
    }
  }
</style>
```
:::
