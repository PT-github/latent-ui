<!--
 * @Author: PT
 * @Date: 2020-04-23 18:32:14
 * @LastEditors: PT
 * @LastEditTime: 2020-04-27 18:34:36
 * @Description: 指南
 -->
# 安装
<br/><br/><br/>
## npm安装
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```html
npm install latent-ui -S
```

## 引入 LatentUI
你可以引入整个LatentUI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的LatentUI。

### 完整引入
在 main.js 中写入以下内容：

```html
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import LatentUI from 'latent-ui'
import 'latent-uilib/index.css';
import App from './App.vue';

Vue.use(ElementUI);
Vue.use(LatentUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
### 按需引入
借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
首先，安装 babel-plugin-component：

```html
npm install babel-plugin-component -D

```
然后，将 .babelrc 修改为：
```html
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      },
      "element-ui"
    ],
    [
      "component",
      {
        "libraryName": "latent-ui",
        "styleLibrary": {
          "name": "theme",
          "base": false
        }
      },
      "latent-ui"
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 Button，那么需要在 main.js 中写入以下内容：
```html
import Vue from 'vue';
import { Button } from 'latent-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
/* 或写为
 * Vue.use(Button)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

完整组件列表和引入方式（完整组件列表以 components.json 为准）

```html
const components = [
  Button,
  Icon,
  Form
]
```


