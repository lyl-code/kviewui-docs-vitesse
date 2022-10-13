# ActionSheet 动作面板

### 介绍
从底部弹出一个动作面板供用户选择选项。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

## 基本用法

### 基本用法

组件提供 `v-model:show` 属性实现动作面板的显示隐藏实时状态监听，提供 `actions` 属性供用户设置动作面板显示的内容项。

<show-code com-type="actionsheet" com-show-type="base" />

### 展示取消按钮

组件提供 `cancel-text` 属性可以让用户自定义取消按钮内容。

<show-code com-type="actionsheet" com-show-type="cancel" />

### 展示标题和描述

组件提供了 `description` 属性可以让用户自定义描述内容，`title` 属性可以让用户自定义标题内容。

<show-code com-type="actionsheet" com-show-type="title-desc" />

## 选项状态

### 不同选项状态

可以通过 `actions` 属性数组的 `loading` `disable` 属性设置面板选项的状态为 `加载中` `禁用`，通过 `choose-item-value` 属性可以设置默认选中内容。

<show-code com-type="actionsheet" com-show-type="status" />

## Props

| 字段             | 说明                                   | 类型    | 默认值    |
|------------------|----------------------------------------|---------|-----------|
| v-model:show       | 是否展示动作面板                             | Boolean | false|
| actions       | 列表项                                 | Array   | [ ]       |
| title | 标题 | String | -
| description | 描述信息 | String | -
| cancel-text | 取消按钮文案 | String | -
| close-on-click-overlay | 点击遮罩是否关闭 | Boolean | `true`
| choose-item-color | 选中项的颜色，支持<a href="/guide/theme">主题</a> | String | `primary`
| choose-item-value | 选中项的文本内容 | String | -
| mode `通用属性`      | 页面模式，可选值为 `light` `dark`                   | String  | `light`

## actions数据结构

| 字段   | 说明               | 类型                          |
|--------|--------------------|-----------------------------------|
| name | 标题      | String    |
| description | 描述信息 | String          |
| color | 选项字体颜色（选中项颜色层级>选项字体颜色） | String          |
| loading | 是否为loading状态 | Boolean          |
| disable | 是否为禁用状态 | Boolean       |

## Events

| 字段   | 说明               | 回调参数                          |
|--------|--------------------|-----------------------------------|
| choose | 选择之后触发       | 选中列表项item, 选中的索引值index |
| cancel | 点击取消按钮时触发 | 无                                |
| close | 点击遮罩层时触发 | event: Event                              |