# Numberkeyboard 数字键盘

### 介绍
虚拟数字键盘，用于输入密码或验证码的场景，可以配合 <a href="short-password">ShortPassword 短密码组件</a> 或自定义输入框组件使用。

<TipsIntroduce />

## 代码演示

## 非右边栏模式
通过组件提供的 `right-sidebar` 属性可以设置 `非右边栏模式` 和 `右边栏模式` ，`random-number` 属性可以设置 `随机数` 键盘，`title` 属性可以设置键盘 `标题` ，`idcard` 属性可以设置 `身份证号键盘` ，`inputting` 属性可以显示正在输入的值。

### 基本用法

<show-code com-type="numberkeyboard" com-show-type="base" />

### 随机数键盘

<show-code com-type="numberkeyboard" com-show-type="random" />

### 带标题键盘

<show-code com-type="numberkeyboard" com-show-type="title" />

### 身份证号键盘

<show-code com-type="numberkeyboard" com-show-type="idcard" />

### 绑定值监听

<show-code com-type="numberkeyboard" com-show-type="desc" />

### 输入监听显示

<show-code com-type="numberkeyboard" com-show-type="inputting" />

## 右边栏模式
通过组件提供的 `confirm-background-color` 属性可以设置 `完成按钮背景色`，`confirm-text` 属性可以设置 `完成按钮文本`。

### 基本用法

<show-code com-type="numberkeyboard" com-show-type="right-base" />

### 随机数键盘

<show-code com-type="numberkeyboard" com-show-type="right-random" />

### 自定义完成按钮背景色

<show-code com-type="numberkeyboard" com-show-type="right-confirm-bg" />

### 自定义完成按钮文本

<show-code com-type="numberkeyboard" com-show-type="right-confirm-text" />

### 带标题键盘

<show-code com-type="numberkeyboard" com-show-type="right-title" />

## API

### Props
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | ---
| show | 是否显示，支持 `v-model` 绑定 | Boolean | `false`
| title | 键盘标题 | String | -
| right-sidebar | 是否设置右边栏模式 | Boolean | `false`
| random-number | 是否设置随机数键盘 | Boolean | `false`
| overlay | 是否显示遮罩 | Boolean | `false`
| v-model | 当前输入的值 | String \| Number | -
| maxlength | 输入的最大长度 | String \| Number | `6`
| idcard | 是否设置身份证号键盘 | Boolean | `false`
| inputting | 是否显示正在输入 | Boolean | `false`
| confirm-text | 确定按钮文本 | String | `完成`
| confirm-background-color | 确定按钮背景色，支持 <a href="/guide/theme">主题</a> | String | `primary`
| mode`通用属性` | 页面模式，有效值见下方说明 | String  | `light`

<PropsModeProp />

### Events
| 名称 | 说明 | 回调参数
| --- | --- | ---
| update:show | `show` 属性双向绑定 | show `show` 返回布尔值，表示当前显示状态
| update:modelValue | `v-model` 双向绑定 | value `value` 为当前输入的值
| input | 键盘输入时触发 | code `code` 为当前按键的值
| delete | 键盘删除时触发 | -
| close | 键盘关闭时触发 | -
| done | 点击完成按钮时触发 | -





