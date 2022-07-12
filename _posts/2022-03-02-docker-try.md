---
layout:     post
title:      "docker容器部署后端服务"
subtitle:   ""
date:       2022-03-02 12:00:00
author:     "Hannibal"
catalog: false
header-style: text
tags:
  - 
---

## 目的

使用docker-compose部署后端gin服务+mysql数据库

## 环境

centos7

## docker 运行mysql 存储数据在本地

```bash
docker volume create mysql-db

docker run -dp 3306:3306 \
-v mysql-db:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
-e MYSQL_DATABASE=raborrow \
mysql:5.7

```



## docker-compose

`docker-compose up -d`

## 修改配置后重启

`docker-compose stop`

`docker-compose rm`

修改mysql ports 3306:3306

`docker-compose up -d`

## 致谢

[【已解决】OpenSSL SSL_connect: Connection was reset in connection to github.com:443](https://blog.csdn.net/qq_37555071/article/details/114260533)



