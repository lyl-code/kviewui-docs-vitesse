# Spin 加载动画

### 介绍

Spin 组件提供了 `15` 种常见的CSS3加载场景动画，基本满足各种常见的等待加载场景需求。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

## 代码演示

### 基本用法

通过 `type` 属性可以设置加载动画类型，目前支持 `15` 种加载动画类型。

<show-code com-type="spin" com-show-type="base" />

### 自定义主题色

组件提供了 `theme` 属性方便设置自定义主题色，可参考<a href="/guide/theme">主题</a>。

<show-code com-type="spin" com-show-type="theme" />

### 自定义背景色

组件提供了 `background-color` 属性可以设置系统内置主题色之外的自定义背景色。

<show-code com-type="spin" com-show-type="background-color" />

### 自定义大小

组件提供了 `size` 属性可以设置不同的大小。

<show-code com-type="spin" com-show-type="size" />

## API

### Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | 动画类型，目前支持 `15` 种动画类型 | String | `circle-dot`
| size | 动画大小，可选值为 `sm` `base` `lg` `xl` | String | `base`
| background-color | 动画背景色 | String | -
| speed`暂不支持` | 动画速度，可选值为 `sm` `base` `lg` `xl` | String | `base`
| scale | 动画缩放系数，设置该属性时`size`属性失效 | Number | `0`
| width | 宽度，默认单位`rpx` | Number | `80`
| height | 高度，默认单位`rpx` | Number | `80`
| theme | 主题色，可参考 <a href="/guide/theme">主题</a>| String | -