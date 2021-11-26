---
layout:     post
title:      "wechat miniprogram"
subtitle:   ""
date:       2021-10-25 12:00:00
author:     "Hannibal"
catalog: false
header-style: text
tags:
  - arc
---

## 效果

完成第一个微信小程序

## 内容

### 小程序代码构成

#### app.json

```json
{
  "pages":[
    "pages/index/index",
    "pages/logs/logs"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "Weixin",
    "navigationBarTextStyle":"black"
  }
}
```

- pages字段指定小程序页面路径
- window定义小程序外观
  - 背景色
  - 导航栏颜色
  - 导航栏标题
  - 导航栏字体颜色

#### project.config.json

对自己开发工具界面个性化定义设置

#### page.json

#### wxml 模板， wxss 样式， js 逻辑交互

设计一个页面，完成一个页面功能

