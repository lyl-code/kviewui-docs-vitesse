# Snackbar 消息条

### 介绍

在页面顶部或者底部展示消息提示。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

## 代码演示

### 基本用法

通过组件提供的 `show` 属性可以设置消息条的显示状态。

<show-code com-type="snackbar" com-show-type="base" />

### 消息类型

通过组件提供的 `type` 属性可以设置消息条的类型。

<show-code com-type="snackbar" com-show-type="type" />

### 朴素类型

通过组件提供的 `plain` 属性可以设置消息条为朴素类型（浅色底色）。

<show-code com-type="snackbar" com-show-type="plain" />

### 非通栏类型

通过组件提供的 `full` 属性可以设置消息条为通栏和非通栏类型。

<show-code com-type="snackbar" com-show-type="full" />

### 自定义样式

通过组件提供的 `background-color` 属性可以设置消息条的背景色，`color` 属性可以设置消息条的文本色。

<show-code com-type="snackbar" com-show-type="custom-style" />

### 垂直排列

通过组件提供的 `content-center` 属性可以设置消息条内容禁止居中显示，搭配组件提供的 `action` 插槽可以增加动作按钮，实现带动作按钮的消息条效果。

<show-code com-type="snackbar" com-show-type="content-center" />

### 自定义位置

通过组件提供的 `position` 属性可以设置消息条显示的位置。

<show-code com-type="snackbar" com-show-type="position" />

### 自定义时长

通过组件提供的 `duration` 属性可以设置消息条显示的时长。

<show-code com-type="snackbar" com-show-type="duration" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| type`通用属性` | 消息条类型，可选值为 `primary` `info` `warning` `danger` `success` | String  | `primary`
| show | 展示状态 | Boolean | `false`
| position | 显示位置，可选值为 `top` `bottom` | String | `top`
| duration | 显示时长，单位`ms` | Number | `3000`
| content | 消息内容 | String | -
| content-center | 消息内容是否居中 | Boolean | `true`
| class-name | 自定义类名 | String | -
| loading-type`暂不开放` | 加载中图标类型，可参考 <a href="/components/icon">Icon 图标</a> | String | -
| loading-size`暂不开放` | 加载中图标大小 | String | `normal`
| forbid-click`暂不开放` | 是否禁止穿透点击 | Boolean | `false`
| background-color | 背景色 | String | -
| color | 文本色 | String | -
| plain | 是否为朴素类型 | Boolean | `false`
| top | 自定义top位置 | Number | `0`
| bottom | 自定义bottom位置 | Number | `0`
| full | 是否通栏 | Boolean | `true`
| opacity | 透明度 | Number | `1`
| action-slot | 是否使用action插槽 | Boolean | `false`

### Type 有效值
| 值 | 说明
|----|-----
| primary | 主要类型
| info | 信息类型
| warning | 警告类型
| danger | 危险类型
| success | 成功类型

### Position 有效值
| 值 | 说明
|----|-----
| top | 显示在顶部
| bottom | 显示在底部

### Slots

| 名称 | 说明
|----|-----
| default | 自定义消息条内容区
| action | 动作按钮区

### Events

| 事件名 | 说明 | 回调参数
|--------|------| -----
| closed | 消息条关闭时触发 | -