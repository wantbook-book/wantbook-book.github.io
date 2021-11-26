---
layout:     post
title:      "windows wsl"
subtitle:   "安装 go"
date:       2021-11-118 12:00:00
author:     "Hannibal"
catalog: false
header-style: text
tags:
  - arc
---

## 效果

在wsl-ubuntu 20.04下配置 go环境， 完成 go mod创建 project尝试

使用gin包 构建web服务，在wsl运行， 从windows访问

## 步骤

### 获取 go安装包

```cd /usr/local/src```在这里安装软件

```sudo wget https://golang.org/dl/go1.16.3.linux-amd64.tar.gz```获取go安装包，注意版本，这里是amd 64位

```sudo tar -zxvf go1.16.3.linux-amd64.tar.gz``` 解压 go安装包

### 配置 go环境变量

可以在/etc/profile文件里添加，或者 ~/.bashrc文件中添加

```vim ~/.bashrc``` 

```bash
#在文件末尾添加内容
export $GOROOT=/usr/local/src/go
export $PATH=$PATH:$GOROOT/bin
```

```source ~/.bashrc``` 重新读取配置文件

我这因为PATH里有一堆windows的环境路径，source出错，还没有去解决。

临时使用，我就直接```export PATH=$PATH:/usr/local/src/go/bin```

### 设置go env

```go env -w GO111MODULE=on``` 开启go mod模式

```go env -w GOPROXY=https://goproxy.cn,https://goproxy.io,direct``` 换源

### go mod初始化项目

```mkdir hellworld && cd hellworld``` 创建go项目目录，进入

```go mod init hellworld``` 初始化生成一个名为helloworld的module项目

```go get xxx_pkg``` 使用go get 获取需要的go包

![image-20211118163552841](.\images\image-20211118163552841.png)

可以发现go.mod go.sum出现变化

![image-20211118163736866](.\images\image-20211118163736866.png)

所有go get 的包会缓存在 $GOPATH/go/pkg 中

### 创建vendor目录

将依赖转移到本地的 vendor目录

如果很多个module都cache 包到$GOPATH/go/pkg里，

其他人下载运行时，```go tidy```更新包即可

### 运行 go程序

```go
//hellworld.go
package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
)

func main() {
    // 1.创建路由
   r := gin.Default()
   // 2.绑定路由规则，执行的函数
   // gin.Context，封装了request和response
   r.GET("/", func(c *gin.Context) {
      c.String(http.StatusOK, "hello World!")
   })
   // 3.监听端口，默认在8080
   r.Run(":8000")
```

```go run hellworld.go``` 即可

### gin服务的访问

由于wsl 容器中运行的web服务无法直接被windows localhost访问

先获取其映射的ip地址 ```ip addr```

就可以访问了

## 致谢

[GOLANG 开启GO MOD](http://yangkai.org.cn/2020/06/06/Golang-%E5%BC%80%E5%90%AFgo-mod/)

[wsl安装go环境，ubuntu20安装go环境]()

[WSL2跟踪 - 18945: 通过localhost直接访问 WSL2 容器中的服务](https://blog.csdn.net/weixin_44008092/article/details/98254833)

