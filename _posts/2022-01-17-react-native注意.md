---
layout:     post
title:      "react native注意"
subtitle:   ""
date:       2021-01-17 12:00:00
author:     "Hannibal"
catalog: false
header-style: text
tags:
  - 
---

## 目的

记录react native易错的写法
## 环境

ubuntu 20.04

### 事件函数调用中的this

```react

class App extends Component{
  state = {
    num: 100
  };
  handlePress(){
    //this指向该函数，不能正确获取state
    this.setState({num: ++this.state.num})
  }
  render(){
    return (
      <View>
        <Text onPress={this.handlePress}>{this.state.num}</Text>
      </View>
    )

  }
};
```

```react
class App extends Component{
  state = {
    num: 100
  };
  constructor(){
      super();
      this.handlePress = this.handlePress.bind(this);
  }
  handlePress(){
    this.setState({num: ++this.state.num})
  }
  ...
};
```

```react
class App extends Component{
  state = {
    num: 100
  };
	//也可以使用箭头函数
  handlePress = ()=>{
    this.setState({num: ++this.state.num})
  }
  ...
};
```

```react

class App extends Component{
  state = {
    num: 100
  };
  handlePress(){
    this.setState({num: ++this.state.num})
  }
  render(){
    return (
      <View>
            {//可能有时函数调用需要本身，有时需要外部？个别指定}
        <Text onPress={this.handlePress.bind(this)}>{this.state.num}</Text>
      </View>
    )

  }
};
```

### mobx使用

1. 安装依赖

   - ```npm install mobx mobx-react @babel/plugin-proposal-decorators```
   - 或者```yarn add mobx mobx-react @babel/plugin-proposal-decorators```

2. 在babel.config.js添加配置

   - 修改后

     ```js
     module.exports = {
       presets: ['module:metro-react-native-babel-preset'],
       //后面加的
       plugins: [
         ['@babel/plugin-proposal-decorators', {'legacy': true}]
       ]
     };
     
     ```

3. 新建mobx/index.js存放全局数据

   ```js
   import {observable, action} from "mobx";
   
   class RootStore{
       @observable name = "hello";
       @action changeName(name){
           this.name = name;
       }
   }
   
   export default new RootStore();



## 致谢

[官方环境配置文档](https://reactnative.dev/docs/environment-setup)

