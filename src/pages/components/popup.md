# Popup 弹出层

### 介绍

弹出层容器，用来展示弹窗，提示信息等内容，支持多个弹出层叠加展示。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

## 代码演示

### 基本用法

<show-code com-type="popup" com-show-type="base" />

### 弹出位置

通过组件提供的 `position` 属性可以设置弹出层的弹出位置。

<show-code com-type="popup" com-show-type="position" />

### 圆角弹窗

通过组件提供的 `radius-size` 属性可以设置圆角弹窗。

<show-code com-type="popup" com-show-type="radius-size" />

### 图标用法

通过组件提供的 `show-icon` 属性可以显示弹出层的图标，`close-icon-position` 属性可以设置图标的位置，`close-icon-type` 属性可以设置图标的类型。

<show-code com-type="popup" com-show-type="icon" />

### 自定义关闭事件

通过组件提供的 `close-on-click-mask` 属性禁用默认关闭事件，通过组件提供的 `click-close-icon` 事件可以自定义关闭。

<show-code com-type="popup" com-show-type="close" />

### 回调事件

通过组件提供的 `close` 和 `open` 事件可以接收弹出层关闭和打开时的回调。

<show-code com-type="popup" com-show-type="callback" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| width | 宽度 | string | -
| height | 高度 | string | -
| position | 弹出层弹出位置，可选值为 `center` `top` `right` `bottom` `left` | string | `center`
| close-on-click-mask | 点击遮罩是否关闭 | Boolean | `true`
| radius-size`通用属性` | 弹出层圆角大小 | String | `base`
| show | 是否显示 | Boolean | `false`
| show-icon | 是否显示图标 | Boolean | `false`
| close-icon-position | 图标位置，可选值为 `left` `right` | String | `right`
| close-icon-type | 图标类型，参考 <a href="/components/icon">Icon 图标</a> | String | -
| close-icon-color | 关闭图标颜色 | String | `rgba(0,0,0,0.5)`
| close-icon-size | 关闭图标大小 | Number | `40`
| overlay-ness | 遮罩透明度 | Number | `0.6`
| mode`通用属性` | 页面模式，可选值为 `light` `dark` | String  | `light`

### Position 有效值
| 值 | 说明
|----|-----
| center | 居中弹出
| top | 顶部弹出
| right | 右边弹出
| bottom | 底部弹出
| left | 左边弹出

### RadiusSize 有效值
| 值 | 说明 |
|----|------|
| none | `0rpx` |
| xs | `10rpx` |
| sm | `20rpx` |
| base | `30rpx` |
| lg | `40rpx` |
| xl | `50rpx` |
| max | `9999rpx` |

### CloseIconPosition 有效值
| 值 | 说明
|----|-----
| left | 左边
| right | 右边

### Mode 有效值
| 值 | 说明
|----|-----
| light | 明亮模式
| dark | 暗黑模式

### Slots

| 名称 | 说明
|------|-----
| content | 弹出层自定义内容

### Events

| 名称 | 说明 | 回调参数
|------|-----| -------
| open | 弹出层打开时触发 | -
| close | 弹出层关闭时触发 | -
| click-close-icon | 自定义关闭事件 | -