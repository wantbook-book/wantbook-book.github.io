---
layout:     post
title:      "ISE install"
subtitle:   ""
date:       2021-10-25 12:00:00
author:     "Hannibal"
catalog: false
header-style: text
tags:
  - arc
---

## 效果

安装成功ISE Design Suite 14.7，并成功添加license

## 步骤

### 下载ISE安装包

[官网下载安装包](https://www.xilinx.com/support/download/index.html/content/xilinx/en/downloadNav/vivado-design-tools/archive-ise.html)

我使用windows10，但没有下载14.7 Windows 10，就选择14.7，下方有14.7 Full Product Installation，选择Full Installer for Windows 7/XP/Server即可

### 安装

一路next，根据需求改下安装路径即可。

### 安装license文件

获取license文件。

![image-20211102151821852](..\_posts\images\image-20211102151821852.png)

软件安装后应该会有弹出Xilinx License Configuration Manager窗口，如果没有可以自己进入ise软件中，在菜单栏help中，找到Manage License...

![image-20211102152030541](..\_posts\images\image-20211102152030541.png)

在Acquire a License中选择Locate Existing License(s)后，点击next，后Load License，选择自己的*.lic文件即可。

可能出现点击Load License后，窗口消失没有反应。

可以前往安装目录path/to/ise/14.7/ISE_DS/common/bin/nt, 找到xlcm.exe，点击打开，这里没有问题。

## 参考

https://blog.csdn.net/weixin_30726161/article/details/95539740

https://cloud.tencent.com/developer/article/1767239
