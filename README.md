# bundle-loader-easy

react-router4.0 && bundle-loader 按需加载方案简化工具

## 安装

`npm install --save bundle-loader-easy`

## 使用

```js
let lazyload = require('bundle-loader-easy');
let components = lazyload(array);
```

## 案例

##引入
```
let lazyload = require('bundle-loader-easy')
```
##懒加载数组
```
array = [{
    name: 'A',
    component: require('bundle-loader?lazy!./containers/')
}]
or
array = {
    name: 'A',
    component: require('bundle-loader?lazy!./containers/')
}
```
##载入
```
let components = lazyload(array)
```
##router设置
```
<Route path="/A" component={components.A}/>
```

