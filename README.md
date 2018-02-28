# useful-regex

react-router && bundle-loader 按需加载方案简化工具

## 安装

`npm install --save bundle-loader-easy`

## 使用

```js
let lazyload = require('bundle-loader-easy');
let components = lazyload(array);
```

## 案例

let lazyload = require('bundle-loader-easy');

array = [{
    name: 'A',
    component: require('bundle-loader?lazy!./containers/')
}];

let components = lazyload(array);

<Route path="/A" component={components.A}/>;

