<!--
 * @Author: PT
 * @Date: 2020-04-23 18:32:14
 * @LastEditors: PT
 * @LastEditTime: 2020-04-27 09:06:22
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


