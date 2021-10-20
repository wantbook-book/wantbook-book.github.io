---
layout:     post
title:      "Configure Anaconda"
subtitle:   "based on huxpro.github.io"
date:       2021-10-12 12:00:00
author:     "Hannibal"
catalog: false
header-style: text
tags:
  - environment
---

## 效果

在windows上建立虚拟环境，简便的安装python包，进行python程序的编写运行。

## 步骤

### 安装Anaconda

下载地址：https://www.anaconda.com/download/

选择合适的版本安装即可。

### 配置环境变量

windows下，打开计算机右键属性，高级系统管理，环境变量，在Path里添加conda/Script的路径，如**D:\path\to\anaconda\Scripts**

![image-20211020133600437](htpps://github.com/\images\image-20211020133600437.png)

输入conda，如图则为成功

### 切换国内镜像源

参考[清华Anaconda镜像使用帮助](https://mirror.tuna.tsinghua.edu.cn/help/anaconda/)

windows无法直接创建.condarc文件，可以先执行```conda config --set show_channel_urls yes```生成该文件，可在C://user/username/.condarc找到

```bash
#将下面的内容粘贴到.condarc文件中
#我的需要将https改为http，不然会报CondaHTTPError: HTTP 000 CONNECTION FAILED for url <https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r/win-64/current_repodata.json>
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
```



运行```conda clean -i```清除索引缓存，保证用的是镜像站提供的索引

运行```conda upgrade --all```查看是否配置成功

![image-20211020140818942](.\images\image-20211020140818942.png)

### 管理虚拟环境

#### 创建自己的虚拟环境

创建名为python38的以python3.8为解释器的环境

```conda create -n python38 python=3.8```

**从环境包信息文件创建虚拟环境**

```conda env export > environment.yaml```可导出当环境的包信息

```conda env create -f environment.yaml```创建环境

#### 进入环境

若忘记了自己创建的环境名，可使用```conda env list```查看所有的环境

```conda activate python37```进入环境

**注**

可能需要```conda init cmd.exe```如果在windows的话，看报错解决

#### 卸载环境

```conda remove --name test --all```

### 使用conda安装和卸载第三方包

```conda install requests```安装requests包

```conda remove requests```卸载requests包

## 参考

https://www.jianshu.com/p/b2b117ac5561

https://blog.csdn.net/ITLearnHall/article/details/81708148
