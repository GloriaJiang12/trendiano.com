## 项目说明

## 主要基于requirejs模块化开发设计思路来构建页面

## 页面介绍

### 1、 主页 index1

- 图片均采用懒加载

### 2、 商品列表页 goodsList(只包含了主页中product的一个T恤商品列表)

- 商品列表页 (goodsList) 写了一个分页效果，通过点击页面进行加载数据库中指定行数的数据

- 图片懒加载

### 3、 商品详情页 goodsDetail

- 包含放大镜，断点轮播等效果

### 4、 购物车 shopCar

- 实现全选，单选，商品数量只能通过上下按钮进行加减，商品数量的改变时价格也随之改变，总价的计算等

### 5、 登录 login

- 利用md5加密传输密码

- cookie记录用户登录详情

### 6、 注册 regester

- md5传输密码

## 主要思路

1、 商品列表页（goodsList）的每个商品通过 a 标签拼接 id 链接到指定商品的指定 id 的商品详情页（goodsDetail.html），商品详情页（goodsDetail.html）获取地址栏上的 id ，通过ajax将获取到的 id 发送给后台（goodDetail.php文件），接收后台返回的数据渲染页面。