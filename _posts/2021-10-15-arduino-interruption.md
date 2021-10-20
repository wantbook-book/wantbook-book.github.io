---
layout:     post
title:      "arduino interruption"
subtitle:   "based on huxpro.github.io"
date:       2021-10-12 12:00:00
author:     "Hannibal"
catalog: false
header-style: text
tags:
  - robot
---

## 效果

使用arduino中断脚接收中断条件，触发中断。

项目需要，在小车前进过程中，若openMV识别到植株，则使用RISING中断条件，触发arduino中断，实现小车停止运动对植株进行处理。

## 步骤

### 查找中断脚

arduino mega 2560 pro中断脚有2，3，18，19，20，21。 ([所有引脚图](https://shop.cpu.com.tw/product/60772/info/))

### 中断注册

```c

const byte ledPin = 13; 
//用2号引脚作为中断触发引脚
const byte interruptPin = 2;  
 
volatile byte state = LOW;
 
void setup() {
  pinMode(ledPin, OUTPUT);
 
  //将中断触发引脚（2号引脚）设置为INPUT_PULLUP（输入上拉）模式
  pinMode(interruptPin, INPUT_PULLUP); 
 
  //设置中断触发程序
  attachInterrupt(digitalPinToInterrupt(interruptPin), blink, CHANGE);
}
 
void loop() {
  digitalWrite(ledPin, state);
}
 
//中断服务程序
void blink() {
  state = !state;
}
```



