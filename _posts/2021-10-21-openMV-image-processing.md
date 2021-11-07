---
layout:     post
title:      "openMV"
subtitle:   "image processing"
date:       2021-10-12 12:00:00
author:     "Hannibal"
catalog: false
header-style: text
tags:
  - arc
---

## 图像基础知识

### 对比度

对比度指最高亮度和最低亮度的比值。对比度越高，说明图片亮暗差异越明显。

### 饱和度

色彩越鲜艳，饱和度越高。纯蓝、纯红、纯绿属于高饱和度，灰蓝、玫红、草绿属于低饱和度。

## 特征检测和特征匹配

### 步骤

- 转换为灰度图
- 提取特征点
- 特征点描述
- 匹配特征点
- 筛选特征点
