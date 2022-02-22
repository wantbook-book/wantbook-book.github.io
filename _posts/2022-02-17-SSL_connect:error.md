---
layout:     post
title:      "curl: (35) OpenSSL SSL_connect: Connection reset by peer in connection to github.com:443"
subtitle:   ""
date:       2021-02-10 12:00:00
author:     "Hannibal"
catalog: false
header-style: text
tags:
  - 
---

## 目的

安装使用imagepy

## 环境

ubuntu 20.04

## 解决方案

clash代理问题

`env | grep proxy`

我设置了`all_proxy=socks5://127.0.0.1:7891`

设置git代理

```bash
git config --global http.proxy 127.0.0.1:7891
git config --global https.proxy 127.0.0.1:7891
```

根据自己设置的proxy调整端口

查看git config `git config --global -l`

取消某个config， `git config --global --unset http.proxy`

## 致谢

[【已解决】OpenSSL SSL_connect: Connection was reset in connection to github.com:443](https://blog.csdn.net/qq_37555071/article/details/114260533)



