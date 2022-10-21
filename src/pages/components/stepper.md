# Stepper 步进器

### 介绍
由增加按钮、输入框和减少按钮组成，用户可以在输入框内直接输入数字，也可以通过增加按钮和减少按钮控制输入框内的数字增减，常用在比如购物车、直接购买物品等场景增加减少物品数量。

<TipsIntroduce />

## 代码演示

### 基本用法
通过组件提供的 `v-model` 属性可以设置当前正在输入的值。

<show-code com-type="stepper" com-show-type="base" />

### 自定义步长
通过组件提供的 `step` 属性可以设置步长。

<show-code com-type="stepper" com-show-type="step" />

### 禁用全部
通过组件提供的 `disabled` 属性可以禁用增减按钮和输入框。

<show-code com-type="stepper" com-show-type="disabled" />

### 禁用输入框
通过组件提供的 `disabled-input` 属性可以禁用输入框输入。

<show-code com-type="stepper" com-show-type="disabled-input" />

### 最小值和最大值
通过组件提供的 `min` 属性可以设置最小值，`max` 属性可以设置最大值。

<show-code com-type="stepper" com-show-type="min-max" />

### 小数步长

<show-code com-type="stepper" com-show-type="decimal-step" />

### 设置保留的小数点位数
通过组件提供的 `decimal-places` 属性可以设置保留的小数点位数。

<show-code com-type="stepper" com-show-type="decimal-places" />

### 自定义样式
通过组件提供的 `reduce-border-color` 属性可以设置减号按钮的边框色，`add-border-color` 属性可以设置加号按钮的边框色，`add-icon-background-color` 属性可以设置加号按钮的背景色，`reduce-icon-background-color` 属性可以设置减号按钮的背景色，`shape` 属性可以设置步进器的形状，`border-color` 属性可以设置步进器的边框色，`input-width` 属性可以设置输入框的宽度，`input-spacing` 属性可以设置输入框的间距。

<show-code com-type="stepper" com-show-type="custom-style" />

### 动态切换
通过组件提供的 `active-auto-hidden` 属性可以实现输入达到设置的最小值时输入框和减号按钮自动隐藏效果。

<show-code com-type="stepper" com-show-type="auto-hidden" />

### 不可操作点击监听
通过组件提供的 `forbid` 事件可以自定义按钮不可操作的业务逻辑。

<show-code com-type="stepper" com-show-type="disabled-change" />

## API

### Props
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | --- 
| v-model | 初始值 | String \| Number | -
| disabled | 是否禁用全部 | Boolean | `false`
| disabled-input | 是否禁用输入框 | Boolean | `false`
| input-width | 输入框宽度 | String | `80rpx`
| input-spacing | 输入框外间距，单位 `px` | String \| Number | `5`
| input-background-color | 输入框背景色，支持 <a href="/guide/theme">主题</a> | String | -
| input-background-color-level | 输入框背景色色阶号，见 <a href="/guide/theme">主题</a> | String \| Number | `5`
| min | 最小值 | String \| Number | `1`
| max | 最大值 | String \| Number | `9999`
| step | 步长 | String \| Number | `1`
| decimal-places | 保留的小数点位数 | String \| Number | `0`
| shape | 按钮形状，有效值见下方说明 | String | `round`
| reduce-icon-color | 减号图标颜色，支持 <a href="/guide/theme">主题</a> | String | `black`
| reduce-icon-color-level | 减号图标颜色色阶号，见 <a href="/guide/theme">主题</a> | String \| Number | `5`
| reduce-icon-background-color | 减号图标背景色，支持 <a href="/guide/theme">主题</a> | String |-
| reduce-icon-background-color-level | 减号图标背景色色阶号，见 <a href="/guide/theme">主题</a> | String \| Number | `5`
| reduce-border-color | 减号按钮边框色，支持 <a href="/guide/theme">主题</a> | String | `primary`
| reduce-border-color-level | 减号按钮边框色色阶号，见 <a href="/guide/theme">主题</a> | String \| Number | `5`
| add-icon-color | 加号图标颜色，支持 <a href="/guide/theme">主题</a> | String | `black`
| add-icon-color-level | 加号图标颜色色阶号，见 <a href="/guide/theme">主题</a> | String \| Number | `5`
| add-icon-background-color | 加号图标背景色，支持 <a href="/guide/theme">主题</a> | String | `primary`
| add-icon-background-color-level | 加号图标背景色色阶号，见 <a href="/guide/theme">主题</a> | String \| Number | `5`
| add-border-color | 加号按钮边框色，支持 <a href="/guide/theme">主题</a> | String | -
| add-border-color-level | 加号按钮边框色色阶号，见 <a href="/guide/theme">主题</a> | String \| Number | `5`
| size | 按钮大小，单位 `px` | String \| Number | `24`
| font-size | 输入框字体大小，单位 `px` | String \| Number | `16`
| border-color | 步进器边框色，支持 <a href="/guide/theme">主题</a> | String | -
| border-color-level | 步进器边框色色阶号，见 <a href="/guide/theme">主题</a> | String \| Number | `5`
| background-color | 步进器背景色，支持 <a href="/guide/theme">主题</a> | String | -
| background-color-level | 步进器背景色色阶号，见 <a href="/guide/theme">主题</a> | String \| Number | `5`
| active-auto-hidden | 输入框和减号按钮不可操作时是否自动隐藏 | Boolean | `false`
| mode`通用属性` | 页面模式，有效值见下方说明 | String  | `light`

### Shape 有效值
| 值 | 说明
| --- | ---
| square | 方形按钮
| round | 圆形按钮
| half-round | 胶囊按钮

<PropsModeProp />

### Events
| 名称 | 说明 | 回调参数
| --- | --- | --- 
| add | 加号按钮点击被调用 | Event
| reduce | 减号按钮被调用 | Event
| forbid | 不可操作时被调用 | (label, Event) `label` 返回 `add` 或者 `reduce`，`add` 表示加号按钮不可操作，`reduce` 表示减号按钮不可操作
| change | 输入框值改变时被调用 | (value, Event) `value` 表示当前输入值
| blur | 输入框失去焦点时被调用 | (value, Event) `value` 表示当前输入值
| focus | 输入框聚焦时被调用 | (value, Event) `value` 表示当前输入值
| update:modelValue | 输入值双向绑定 | value `value` 为当前输入的值








