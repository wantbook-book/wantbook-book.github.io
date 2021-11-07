---
layout:     post
title:      "web knowledege"
subtitle:   ""
date:       2021-10-25 12:00:00
author:     "Hannibal"
catalog: false
header-style: text
tags:
  - arc
---

## const，let，var区别

### var

#### 变量提升

```javascript
console.log(a); // undefined
var a = 0;
console.log(a); // 0
```

解释顺序为

```javascript
var a;
console.log(a); // undefined
a = 0;
console.log(a); // 0
```

#### 作用域

循环内定义的var变量在外部可以访问到，这点不太好

```javascript
for(var i = 0; i < 5; i++){
    var a = 0;
}
console.log(i); // 5
console.log(a); // 0
```

#### 可重复定义

```javascript
var a = 0;
console.log(a); // 0
var a = 1;
console.log(a); // 1
```

### let

#### 不会提升变量

#### 块级作用域

#### 禁止重复定义

#### 不属于window对象

```javascript
var a = 0;
console.log(window.a) // 0
let b = 1;
console.log(window.b) // undefined
```

### const

#### 可以看作是不能修改的let

## ==, =\=\=,  !=, !=\= 区别

### ==, !=

判断操作数值是否相等

### ==\=， !=\=

判断操作数值和数据类型是否相等

## script文件引入位置

置于body后，等待所有元素渲染完毕后，否则获取DOM对象会出错

```javascript
<!DOCTYPE html>
<html lang="zh-cn">
    <head>
        <meta charset="utf-8">
        <title>步骤四</title>
        <meta name="author" content="方文凯">
    </head>
    <body>
        <img class="ai" src="images/AI.png" alt="灰原哀" style="width:200px;height:200px;position:absolute;top:0px;left:0px;">
        <script type="text/javascript" src="scripts/img_position.js"></script>
    </body>
</html>
```



## 参考

https://www.cnblogs.com/zhangboblogs/p/8053574.html

https://www.cnblogs.com/JobsOfferings/p/varLetConst.html

