# Space 间隔

### 介绍
    
在 `kui-space` 组件包裹下可以给行或者列增加内间距。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

## 代码演示

### 基本用法

默认在行和列之间增加 `20rpx` 间隔。

<show-code com-type="space" com-show-type="base" />

### 垂直布局

通过 `direction` 属性可以设置组件方向，支持水平和垂直两种布局方式。

<show-code com-type="space" com-show-type="direction" />

### 自定义间隔

通过 `gap` 属性可以设置组件内元素的水平和垂直间隔，规则：`[上下间隔，左右间隔]`。

<show-code com-type="space" com-show-type="gap" />

### 对齐方式

通过 `justify` 属性可以设置组件内子元素主轴对齐方式。

#### 靠右对齐

`justify` 属性为 `end` 可以设置靠右对齐。

<show-code com-type="space" com-show-type="justify-end" />

#### 环绕对齐

`justify` 属性为 `space-around` 可以设置环绕对齐。

<show-code com-type="space" com-show-type="justify-space-around" />

#### 居中对齐

`justify` 属性为 `center` 可以设置居中对齐。

<show-code com-type="space" com-show-type="justify-center" />

#### 两端对齐

`justify` 属性为 `space-between` 可以设置两端对齐。

<show-code com-type="space" com-show-type="justify-space-between" />

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| justify `通用属性`         | 主轴对齐方式，可选值为 `start` `end` `center` `space-around` `space-between` `space-evenly`，具体可 [点此参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-items)               | String | `start`                |
| direction `通用属性`         | 布局方向，可选值为 `row` `column`              | String | `row`                |
| align `通用属性`         | 侧轴对齐方式，，可选值为 `start` `end` `center` `baseline` `stretch`，具体可[点此参考](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)                | String | `start`                |
| gap         | 子元素间距，规则：`[上下间隔，左右间隔]`，如：`[20,50]`               | String | `[20,20]`                |
| block         | 是否块状布局               | Boolean | `false`                |

### Slots

| 名称 | 说明           | 
|--------|----------------|
| default  | 内容 | 
    