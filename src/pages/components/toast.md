# Toast 吐司

### 介绍
用于轻提示内容场景。

<TipsIntroduce />

## 代码演示

### 基本用法

通过组件提供的 `title` 属性可以设置标题，`content` 属性可以设置内容，`center` 属性可以设置内容是否居中，`bottom` 属性可以设置底部距离，`icon` 属性可以设置图标，`show-right-icon` 属性可以设置是否展示右边图标。

<show-code com-type="toast" com-show-type="base" />

### 提示类型

通过组件提供的 `type` 属性可以设置提示类型。

<show-code com-type="toast" com-show-type="type" />

### 遮罩类型

通过组件提供的 `overlay` 属性可以设置遮罩类型。

<show-code com-type="toast" com-show-type="overlay" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| title | 标题 | String | -
| content | 内容 | String | -
| duration | 展示时间，单位毫秒 | Number | `2000`
| center | 是否居中展示 | Boolean | `true`
| bottom | 底部距离 | String | `30px`
| content-center | 内容是否居中 | Boolean | `center`
| background-color | 背景色 | String | -
| icon | <a href="icon">图标</a> | String | -
| content-size | 内容文本大小，可选值见下方说明 | String | `base`
| overlay | 是否显示白色遮罩 | Boolean | `false`
| image | 图片链接 | String | -
| type | 提示类型，有效值见下方说明 | String | `normal`
| show | 是否显示 | Boolean | `false`

### ContentSize 有效值
| 值 | 说明
|----|-----
| sm | `24rpx`
| base | `28rpx`
| lg | `32rpx`

### Type 有效值
| 值 | 说明
|----|-----
| success | 成功提示
| danger | 失败提示
| warning | 警告提示
| loading | 加载提示
| normal | 默认提示

## Events

| 名称 | 说明 | 回调参数
|------| -----| -----
| closed | 关闭时调用 | -