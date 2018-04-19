#  vuex

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 使用的整体技术选项

### 脚手架使用的vue的脚手架 vue init webpack 项目名,但得在全局中下载vue-cli(搭建vue脚手架的工具)

### 使用的是vue来写的 原因：ue是一套用于构建用户界面的渐进式框架。vue使用MVVM框架，可以实现数据的双向绑定，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

### 使用的element-ui库,因为element-ui是专门为vue写的一个集结css,html,js的库，使vue的开发更方便

### 使用的es6语法,因为es6可以更加方便的实现很多复杂的操作，提高开发人员的效率

### 使用的css写的样式,原因是不用配置直接可以写入样式,但建议用scss和less来写入样式,使样式的写入更方便

## 路由的搭建
### 是使用vue的搭建路由方式:{
### path:'/路由的路径',
### component:'路由的页面/组件',
### children:{path:'',component:''}//子路由
### }
### 路由拦截的实现：使用的router.beforeEach的next值来判断是否为登陆页面，若是登录页则next(),若不是则判断是否登录过，登陆过就next()若没有则跳转至登陆页面（登录人名和token字段存入本地存储和store数据中方便展示登录信息，token为请求的用户名和密码的加密）

## 数据请求以及封装全局接口的方法

### 数据请求用的axios 里面有请求拦截和响应拦截，且将axios的实例请求拦截和响应拦截后再抛出的

### 封装的全局接口 用的server.js里面的设置跨域成为的全局接口

##  项目中的核心功能

### 路由中login页面的判断  echarts的应用及数据的变化  添加创意的tab切换功能

##  项目中的难点及困难

### 日历的数据操作，解决方案静下心来仔细思考自己写的代码是否有bug

### echarts中的数据变化主要是后台Mock数据的模拟，解决方案是[`dataY1|${num}`]

###  tab切换时点击是他所有的tab的内容都出现，解决方案是v-show来显示隐藏

## 数据管理

### store存储数据用的，state是初始数据，mutations时会更新数据

![Image text](https://github.com/sunyani123/workhelpproject/blob/master/%E9%A1%B9%E7%9B%AE%E6%B5%81%E7%A8%8B.png)