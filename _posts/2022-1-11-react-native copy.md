---
layout:     post
title:      "react native入门"
subtitle:   "开发android app"
date:       2021-1-11 12:00:00
author:     "Hannibal"
catalog: false
header-style: text
tags:
  - arc
---

## 目的

使用react native构建第一个android app
## 环境
ubuntu 20.04
## 能安装显示 "helloworld" app
### 安装expo client

由于没有react经验，也没有android开发经验，react native官方文档说expo client对新手比较友好，所以先用expo client尝试一下。

```npm install -g expo-cli``` 安装完成

### 安装 expo android client

打开手机开发者模式，选用usb调试，使usb连接能传输文件数据。

```expo client:install:android ```可以直接在手机上安装

### 创建项目

```expo init AwesomeProject --npm```  init过程中的install javascript dependencies会需要很长时间。可以配置npm的国内代理，加快下载。

```npm config set registry http://registry.npm.taobao.org``` 这是暂时的使用

改为永久配置 将```registry=http://registry.npm.taobao.org```写入~/.npmrc文件中

```bash 
cd AwesomeProject
npm start # you can also use: expo start
```
可以根据提示选择启动方式

连上手机，需要接受你的电脑的调试，会有弹窗，没有的话断开usb重新连接。

```npm run android``` 就可以看到

## 入门设计一个简单app



## 其他知识

### npx和npm的区别

创建一个react项目的对比

```bash
#npm
npm install -g create-react-app
create-react-app test-app

#npx
npx create-react-app test-app
```

npx可以把npm的module当做命令来执行，

使用create-react-app module时，npm要安装完，才使用

npx虽然也是安装完后使用，但使用完后就会直接删除掉，不会永久保留，可以看做是一条简小的命令

还有其他区别.....参考致谢

## 其他问题

### apt install或者时候certificate verification failed

安装ca-certificate 

```apt-get install ca-certificates```

安装过还是不行的重新安装一次

```apt-get install --reinstall ca-certificates```


## 致谢

[npx和npm之间的关系](https://juejin.cn/post/6844903945664462855)

