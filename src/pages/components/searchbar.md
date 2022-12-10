<!-- 
该文件由系统自动生成 2022-12-10 11:27
@version 1.0.0
@author kviewui <kviewui@163.com>
-->
# SearchBar 搜索栏

### 介绍
用于搜索场景的输入框组件。

<TipsIntroduce />

## 代码演示

### 基本用法
通过组件提供的 `v-model` 属性可以获取当前输入的值。

<show-code com-type="searchbar" com-show-type="base" />

### 事件监听
通过组件提供的 `show-action` 属性可以显示搜索栏右边的动作按钮，`search` 事件回调可以触发搜索动作，`click-lefticon` 事件回调可以触发点击左边图标动作，`click-action` 事件回调可以触发点击动作按钮动作，具体可参考下方示例。

<show-code com-type="searchbar" com-show-type="event" />

### 隐藏搜索图标
通过组件提供的 `show-lefticon` 属性可以隐藏搜索图标。

<show-code com-type="searchbar" com-show-type="show-lefticon" />

### 搜索框文本对齐
通过组件提供的 `input-align` 属性可以设置搜索框文本对齐方式，具体可参考下方示例。

<show-code com-type="searchbar" com-show-type="input-align" />

### 禁用搜索框
通过组件提供的 `disabled` 属性可以禁止搜索框输入，可正常触发搜索框点击事件，具体可参考下方示例。

<show-code com-type="searchbar" com-show-type="disabled" />

### 自定义样式
通过组件提供的 `background` 属性可以设置搜索框外部背景色，`input-background` 属性可以设置搜索框背景色，具体可参考下方示例。

<show-code com-type="searchbar" com-show-type="custom-style"  />

### 显示全部图标
通过组件提供的 `label` 属性可以显示搜索框左边的标签，`show-lefticon` 属性可以显示搜索框左边的图标，`show-righticon` 属性可以显示搜索框右边的图标，`show-action` 属性可以显示搜索框右边的动作按钮，具体可参考下方示例。

<show-code com-type="searchbar" com-show-type="show-all-icon" />

### 搜索框点击事件监听
通过组件提供的 `click-input` 事件回调可以自定义搜索框点击事件，具体可参考下方示例。

<show-code com-type="searchbar" com-show-type="click-input" />

## API

### Props
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | ---
| v-model | 当前输入的值 | String \| Number | -
| label | 搜索框左侧文本 | String | -
| shape`通用属性` | 搜索框形状，有效值见下方说明 | String | `round`
| maxlength | 最大输入长度 | String \| Number | `9999`
| background | 输入框外部背景色，支持 <a href="/guide/theme">主题</a> | String | `grey`
| background-level | 搜索框外部背景色色阶，见 <a href="/guide/theme">主题色阶</a> | String \| Number | `0`
| placeholder | 输入框占位提示 | String | '请输入搜索内容'
| clearable | 是否动态显示清除按钮 | Boolean | `true`
| input-background | 输入框背景色，支持 <a href="/guide/theme">主题</a> | String | `grey`
| input-background-level | 输入框背景色色阶，见 <a href="/guide/theme">主题色阶</a> | String \| Number | `1`
| confirm-type | 键盘右下角按钮显示文本，有效值见下方说明 | String | `done`
| autofocus | 输入框是否自动聚焦 | Boolean | `false`
| disabled | 是否禁用输入框 | Boolean | `false`
| readonly | 输入框是否只读 | Boolean | `false`
| input-align | 输入内容对齐方式，有效值见下方说明 | String | `left`
| show-action | 是否显示右边动作按钮 | Boolean | `false`
| show-lefticon | 是否显示输入框左边的图标 | Boolean | `true`
| show-righticon | 是否显示输入框右边的图标 | Boolean | `false`
| mode | 页面模式，有效值见下方说明 | String | `light`


### Shape 有效值
| 值 | 说明
| --- | ---
| round | 圆角
| square | 方角

### ConfirmType 有效值
| 值 | 说明
| --- | ---
| send | `发送`
| search | `搜索`
| next | `下一个`
| go | `前往`
| done | `完成`

### InputAlign 有效值
| 值 | 说明
| --- | ---
| left | 居左对齐
| center | 居中对齐
| right | 居右对齐

<PropsModeProp />

### Slots
| 名称 | 说明
| --- | ---
| lefticon | 输入框左边图标插槽
| clearicon | 输入框清除按钮插槽
| righticon | 输入框右边图标插槽
| action | 输入框右边动作按钮插槽

### Events
| 名称 | 说明 | 回调参数
| --- | --- | ---
| update:modelValue | `v-model`属性双向绑定 | value: number
| change | 输入内容时触发 | value: string, event
| click-input | 点击输入框时触发 | event
| search | 搜索时触发 | value: string
| focus | 输入框聚焦时触发 | event
| blur | 输入框失去焦点时触发 | value: string, event
| clear | 点击清除按钮时触发 | value: string
| click-action | 点击输入框右边动作按钮时触发 | event
| click-lefticon | 点击输入框左边图标时触发 | event
| click-righticon | 点击输入框右边图标时触发 | event
  