# Checkbox 复选按钮

### 介绍
在一组备选项中进行多选。

<TipsIntroduce />

## 代码演示

### 基本用法
通过组件提供的 `v-model` 属性可以设置复选按钮的选中状态，通过默认插槽可以自定义复选按钮的文本内容。

<show-code com-type="checkbox" com-show-type="base" />

### 半选中状态
通过组件提供的 `indeterminate` 属性可以设置复选按钮的半选中状态。

<show-code com-type="checkbox" com-show-type="half" />

### 禁用状态
通过组件提供的 `disabled` 属性可以设置复选按钮的禁用状态。

<show-code com-type="checkbox" com-show-type="disabled" />

### 自定义图标
通过组件提供的 `active-icon` 属性可以设置选中状态的图标，`inactive-icon` 属性可以设置未选中状态的图标。

<show-code com-type="checkbox" com-show-type="icon" />

### 自定义图标大小
通过组件提供的 `icon-size` 属性可以设置图标大小。

<show-code com-type="checkbox" com-show-type="icon-size" />

### change监听
通过组件提供的 `change` 事件回调可以自定义复选按钮状态改变时的业务逻辑。

<show-code com-type="checkbox" com-show-type="change" />

## 复选按钮组
`kui-checkbox-group` 组件包裹 `kui-checkbox` 组件可以实现复选按钮组的使用场景。

### 基本用法

<show-code com-type="checkbox" com-show-type="group-base" />

### 全选/取消/反选

通过 `kui-checkbox-group` 组件提供的 `change` 事件回调可以自定义 `全选/取消/反选` 的使用场景。
::: info 实现流程
+ `kui-checkbox-group` 组件定义 `ref` 属性值

+ 通过ref调用 `kui-checkbox-group` 组件内部的 `toggleAll` 事件可实现 `全选`，`toggleCancel` 事件可实现 `取消`，`toggleReverse` 事件可实现 `反选`
:::

<show-code com-type="checkbox" com-show-type="group-check" />

### 限制可选数
通过 `kui-checkbox-group` 组件提供的 `max` 属性可以设置可选数，超出可选数将不可再次选择。

<show-code com-type="checkbox" com-show-type="group-limit" />

### 半选应用场景

<show-code com-type="checkbox" com-show-type="half-demo" />

## API

### Checkbox Props
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | ---
| v-model | 是否选中 | Boolean | `false`
| disabled | 是否禁用 | Boolean | `false`
| value | 绑定的值 | String \| Number \| Boolean | -
| active-color | 选中状态的颜色，支持 <a href="/guide/theme">主题</a> | String | `primary`
| inactive-color | 非选中状态的颜色，支持 <a href="/guide/theme">主题</a> | String | `grey`
| icon-size | 图标大小，同 <a href="icon">Icon 图标</a> 的 `size` 属性 | Number | `36`
| active-icon | 选中状态的图标，同 <a href="icon">Icon 图标</a> 的 `type` 属性 | String | `check_circle1`
| inactive-icon | 未选中状态的图标，同 <a href="icon">Icon 图标</a> 的 `type` 属性 | String | `panorama_fisheye`
| label-position | 文本位置，有效值见下方说明 | String | `right`
| indeterminate | 是否半选中 | Boolean | `false`
| indeterminate-icon | 半选中状态的图标，同 <a href="icon">Icon 图标</a> 的 `type` 属性 | String | `delete`
| mode`通用属性` | 页面模式，有效值见下方说明 | String | `light`

### LabelPosition 有效值
| 值 | 说明
| --- | ---
| left | 文本居左
| right | 文本居右

<PropsModeProp />

### CheckboxGroup Props
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | ---
| v-model | 当前选中的值 | String \| Number \| Boolean | []
| disabled | 是否禁用 | Boolean | `false`
| max | 可选数 | Number | `0`
| direction | 复选按钮的排列方式，有效值见下方说明 | String | `row`

### Direction 有效值
| 值 | 说明
| --- | ---
| row | 水平排列
| column | 垂直排列

### Checkbox Events
| 名称 | 说明 | 回调参数
| --- | --- | ---
| change | 复选按钮状态选中改变时被调用 | {checked, value} `checked` 表示选中状态，`value` 表示当前选中的值

### CheckboxGroup Events
| 名称 | 说明 | 回调参数
| --- | --- | ---
| change | 复选按钮状态选中改变时被调用 | value `value` 返回一个数组，表示当前选中值的集合







