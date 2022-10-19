# Switch 开关

### 介绍
用来切换打开和关闭状态。

<TipsIntroduce />

## 代码演示

### 基本用法
通过组件提供的 `modelValue` 属性可以设置开关的打开和关闭状态，具体示例可看下面代码。

<show-code com-type="switch" com-show-type="base" />

### 禁用状态
通过组件提供的 `disabled` 属性可以设置开关的禁用状态。

<show-code com-type="switch" com-show-type="disabled" />

### 加载状态
通过组件提供的 `loading` 属性可以设置开关的加载状态。

<show-code com-type="switch" com-show-type="loading" />

### change监听
通过组件提供的 `change` 事件回调可以自定义监听开关的打开关闭事件。

<show-code com-type="switch" com-show-type="change" />

### 异步控制
通过组件提供的 `change` 事件回调可以自定义开关的打开关闭状态，比如实现异步控制效果，具体示例可看下面代码。

<show-code com-type="switch" com-show-type="async" />

### 自定义颜色
通过组件提供的 `active-color` 属性可以设置开关的打开状态颜色。

<show-code com-type="switch" com-show-type="colors" />

### 文字描述
通过组件提供的 `active-text` 属性可以设置开关打开状态的文字描述，`inactive-text` 属性可以设置开关关闭状态的文字描述。

<show-code com-type="switch" com-show-type="text" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| v-model | 开关状态 | Boolean | `false`
| disabled | 是否禁用 | Boolean | `false`
| loading | 加载状态 | Boolean  | `false`
| icon-color | 图标颜色，支持设置<a href="/guide/theme">主题</a> | String | `primary`
| icon | <a href="icon">图标</a> | String | -
| active-color | 打开状态的颜色，支持设置<a href="/guide/theme">主题</a> | String | `primary`
| inactive-color | 关闭状态的颜色，支持设置<a href="guide/theme">主题</a> | String | `grey`
| active-text | 打开状态的文字内容 | String | -
| inactive-text | 关闭状态的文字内容 | String | -
| active-value | 打开状态的值 | String \| Number \| Boolean | `true`
| inactive-value | 关闭状态的值 | String \| Number \| Boolean | `false`
| mode`通用属性` | 页面模式，有效值见下方说明 | String  | `light`

<PropsModeProp />

### Events

| 名称 | 说明 | 回调参数
|------| -----| -----
| change | 开关状态改变被调用事件 | value, event






