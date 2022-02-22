---
layout:     post
title:      "react native vector icons 使用"
subtitle:   ""
date:       2021-01-26 12:00:00
author:     "Hannibal"
catalog: false
header-style: text
tags:
  - 
---

## 目的

使用react-native-elements组件，正常显示react-native-vector-icons

## 环境

ubuntu 20.04

### 安装react-native-elements和icons

根据[官网](https://reactnativeelements.com/docs)安装。

### 使用示例

```javascript
import React, {Component} from 'react';
import {View} from 'react-native';
import {Input, Icon} from 'react-native-elements';
class App extends Component {
  render() {
    return (
      <View>
        <Input placeholder="BASIC INPUT" />

        <Input
          placeholder="INPUT WITH ICON"
          leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
        />
      </View>
    );
  }
}

export default App;

```

发现图标显示为X

### 解决方案

在android/app/build.gradle中添加语句```apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"```

重新```run-android```发现正常显示

然而我再去找这条语句时，发现它消失了？？？

## 致谢

[Mobx学习](https://segmentfault.com/a/1190000039808886)

