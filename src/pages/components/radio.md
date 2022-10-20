# Radio 单选按钮

### 介绍
在一组备选项中进行单选。

<TipsIntroduce />

## 代码演示
::: danger 使用注意
- `kui-radio-group` 组件和 `kui-radio` 组件必须同时使用

- `kui-radio` 组件必须被 `kui-radio-group` 组件直接包裹使用
:::

### 基本用法
通过 `kui-radio-group` 组件提供的 `v-model` 属性绑定当前选中的 `value` 。

<show-code com-type="radio" com-show-type="base" />

### 横向用法
通过 `kui-radio-group` 组件提供的 `direction` 属性可以设置单选按钮的方向，支持 `横向` 和 `竖向`。

<show-code com-type="radio" com-show-type="row" />

### 自定义图标
通过 `kui-radio` 组件提供的 `active-icon` 属性可以设置单选按钮选中状态的图标，`inactive-icon` 属性可以设置单选按钮未选中状态的图标。

<show-code com-type="radio" com-show-type="icon" />

### 自定义图标大小
通过 `kui-radio` 组件提供的 `icon-size` 属性可以设置单选按钮的图标大小。

<show-code com-type="radio" com-show-type="icon-size" />

### 自定义图标颜色
通过 `kui-radio` 组件提供的 `active-color` 属性可以设置单选按钮选中状态的图标颜色，`inactive-color` 属性可以设置单选按钮未选中状态的图标颜色。

<show-code com-type="radio" com-show-type="icon-color" />

### change监听
通过 `kui-radio-group` 组件提供的 `change` 事件可以自定义监听单选按钮选中状态改变时的业务逻辑。

<show-code com-type="radio" com-show-type="change" />

## API

### RadioGroup Props
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | --- 
| v-model | 当前选中的值 | String \| Number \| Boolean | -
| label-position | 文本位置，有效值见下方说明 | String | `right` 
| direction | 单选按钮排列方式，有效值见下方说明 | String | `column`

### Radio Props
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | ---
| value | 单选按钮绑定的值 | String \| Number \| Boolean | -
| checked | 是否选中 | Boolean | `false`
| disabled | 是否禁用 | Boolean | `false`
| active-color | 选中状态的颜色，支持 <a href="/guide/theme">主题</a>  | String | `primary`
| inactive-color | 未选中状态的颜色，支持 <a href="/guide/theme"> 主题</a> | String | `grey`
| icon-size | 图标大小，单位`rpx` | Number | `36`
| active-icon | 选中状态的图标，同 <a href="icon">Icon 图标</a> 的 `type` 属性 | String | `radio-checked2`
| inactive-icon | 未选中状态的图标，同 <a href="icon">Icon 图标</a> 的 `type` 属性 | String | `radio-unchecked`
| mode`通用属性` | 页面模式，有效值见下方说明 | String  | `light`

### LabelPosition 有效值
| 值 | 说明
| --- | --- 
| left | 文本居左
| right | 文本居右

### Direction 有效值
| 值 | 说明 
| --- | --- 
| column | 垂直排列 
| row | 水平排列 

<PropsModeProp />

### RadioGroup Events
| 名称 | 说明 | 回调参数
| --- | --- | ---
| change | 单选按钮选中状态改变时被调用 | value






