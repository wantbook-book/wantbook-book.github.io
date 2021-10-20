---
layout:     post
title:      "博客搭建"
subtitle:   "based on huxpro.github.io"
date:       2021-10-12 12:00:00
author:     "Hannibal"
catalog: false
header-style: text
tags:
  - 被夹
---

## 最终效果

- 基于github.io搭建属于自己的第一个博客网站

  ![image-20211012134618129](.\images\2021-10-12_img2.png)

## 内容

- 基于huxpro.github.io博客模板，发布自己的第一篇博文
- 在本地查看博客效果

## 步骤

### 在GitHub创建博客仓库

- 新建repository，命名为<username\>.github.io，**其中<username\>替换成你的github的账户名**

### clone huxpro.github.io仓库模板

github.io默认采用Jekyll作为建站工具。使用Jekell设计自己心仪的静态网站（Jekyll没有任何的后台数据库），需要一定的前端功底。对于大多数没有前端基础的人，我们可以借鉴别人造好的轮子。如本文借鉴的模板[国人开发的主题](https://github.com/Huxpro/huxpro.github.io)。

- 可以先fork到自己的账户下，然后clone主题

  ​	```git clone git@github.com:keysaim/huxpro.github.io.git```

- 修改remote，方便后续更新push

  ```git remote add hannibal git@github.com:wantbook-book/wantbook-book.github.io.git```

### 修改模板，发布自己的博客

- 修改配置

  基于Jekyll的博客网站，对于配置，非常重要的一个文件是_config.yml文件，打开对其进行修改。（易懂）

- 编写博客

  Jekyll的博文都是要求放在_posts目录下的，同时对文件名有严格要求，必须符合YEAR-MONTH-DAY-title.MARDUP。我们使用markdown撰写博文，格式举例：2021-10-11-build-my-blog.md
  
- 发布博客

  ```bash
  $ git add .
  $ git commit 
  $ git push hannibal master #git remote -v 查看所有远程仓库进行选择填写
  ```

### 本地查看博客

如果每次查看博客都要在push到仓库后进行更新后，那么修改博客会十分繁琐，因此可以用Jekyll先在本地构建网站，查看博文效果。

- 安装Ruby， 参考[官网教程](https://www.ruby-lang.org/en/downloads/)

- 安装Github pages

  ```sudo gem install github-pages```

- 可能会缺失其他gem包，可以采用```sudo gem install 包名```进行安装

  - ​	![image-20211012133931353](.\images\2021-10-12_img1.png)

    则```sudo gem install jekyll```

- 开启Jekyll本地服务

  ```bash
  $ cd keysaim.github.io
  $ jekyll serve --watch
  ```

  打开命令行中显示的地址进行访问，一般为http://127.0.0.1:4000

## 参考

- https://keysaim.github.io/post/blog/2017-08-15-how-to-setup-your-github-io-blog/

## 致谢 ##

感谢Huxpro提供的Jekyll及参考文章作者！
