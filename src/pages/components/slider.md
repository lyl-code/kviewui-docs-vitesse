<!-- 
该文件由系统自动生成 2022-11-19 23:45
@version 1.0.0
@author kviewui <kviewui@163.com>
-->
# Slider 滑块

### 介绍
滑动输入条，用于在给定范围内选择一个值。

<TipsIntroduce />

## 代码演示

### 基本用法
通过组件提供的 `v-model` 属性可以设置默认值和当前进度百分比。

<show-code com-type="slider" com-show-type="base" />

### 双滑块
通过组件提供的 `range` 属性可开启双滑块模式，此时 `v-model` 属性值需为数组形式，可参考下面的示例代码。

<show-code com-type="slider" com-show-type="range" />

### 指定范围
通过组件提供的 `show-range` 属性可以显示滑块两端的范围值，`min` 属性可以设置选择的最小值，`max` 属性可以设置选择的最大值，可参考下面的示例代码。

<show-code com-type="slider" com-show-type="show-range" />

## API

### Props

### Slots

### Events
  