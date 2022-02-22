---
layout:     post
title:      "react native mobx使用"
subtitle:   ""
date:       2021-01-26 12:00:00
author:     "Hannibal"
catalog: false
header-style: text
tags:
  - 
---

## 目的

使用mobx管理组件state实践

## 环境

ubuntu 20.04

### 安装mobx

```yarn add mobx``` mobx-react安装最新的mobx和mobx-react，我的是 ```"mobx": "^6.3.13"``` ```"mobx-react": "^7.2.1"```

**建议使用yarn进行包管理**

包版本由x.y.z三位数字构成：fix了大的bug，z位加1；有了功能的优化或添加且和上个版本兼容，y位加1；有了大的功能改进且不与上个版本兼容，则x位加1。

^7.2.1代表只会升级到y位数字的最新，而不会更新x位数字，保持与之前的包兼容。

~6.2.1代表只会更新z位数字，而不会更新x、y位数字。



### mobx创建mobx/index.js添加状态管理组件

```react
// Counter Store -> 管理 Counter 组件的 Store
import {makeAutoObservable} from 'mobx';

class CounterStore {
  // 数值状态
  name = 'hannibal';
  count = 1;
  constructor() {
    // 将参数对象中的属性设置为 observable state
    // 将参数对象中的方法设置为 action
    makeAutoObservable(this);
  }
  // 使数值状态加一
  setName() {
    this.name = 'hannibal' + this.count;
    this.count += 1;
  }
  // 重置数值状态
  reset() {
    this.count = 0;
  }
}

export default CounterStore;

```

### 创建组件component/btn.js

```react
import React, {Component} from 'react';
import {View, Text} from 'react-native';
class Btn extends Component {
  handleClick = () => {
    console.log('click');
    this.props.rootStore.setName();
  };
  render() {
    return (
      <View>
        <Text onPress={this.handleClick}>
          {'我阿' + this.props.rootStore.name}
        </Text>
      </View>
    );
  }
}
export default Btn;

```

### 在App.js中设置监听btn组件

```react
import React, {Component} from 'react';
// observer: 监控当前组件使用到的由 MobX 跟踪的 observable state, 当状态发生变化时通知 React 更新视图
import CounterStore from './mobx/index';
import Btn from './components/btn';
import {observer} from 'mobx-react';

const counterStore = new CounterStore();
observer(Btn);
class App extends Component {
  render() {
    return <Btn rootStore={counterStore} />;
  }
}

export default App;
```

## 使用装饰器语法

### 问题

值改变没有触发re-render

### inject observer顺序问题

```jsx
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {observer, inject} from 'mobx-react';
import moment from 'moment';
//需要先inject，再observer
@inject('RootStore')
@observer
class Btn extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.RootStore.phone}</Text>
        <Button
          title="BUTN"
          onPress={() =>
            this.props.RootStore.setUserInfo(moment(new Date()).format('LTS'))
          }
        />
      </View>
    );
  }
}
export default Btn;
```



## 致谢

[Mobx学习](https://segmentfault.com/a/1190000039808886)

