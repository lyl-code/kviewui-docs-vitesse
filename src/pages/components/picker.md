<!-- 
该文件由系统自动生成 2022-10-21 17:53
@version 1.0.0
@author kviewui <kviewui@163.com>
-->
# Picker 选择器

### 介绍
底部弹出多项集合供用户滚动选择其中一项。

<TipsIntroduce />

## 代码演示

## 单列选择
通过组件提供的 `columns` 属性可以设置 `单列选择` 和 `多列选择`，传 `一维数组` 数据即为 `单列选择`。

### 基本用法
通过组件提供的 `title` 属性可以设置标题，`v-model` 属性可以设置选择的值，`default-value` 属性可以设置默认选择的值。

<show-code com-type="picker" com-show-type="single-base" />

## 多列选择
`columns` 属性传 `多维数组` 数据即为 `多列选择`，`v-model:formatValue` 属性可以自定义格式化函数，具体可看下面示例代码。

### 基本用法

<show-code com-type="picker" com-show-type="multicolumn-base" />

### 多级联动
::: info 实现流程
- `columns` 属性传 `多维数组`。

- `columns` 属性增加 `children` 属性即为子级联动内容。

- `children` 属性数据结构同 `columns` 属性。
:::

<show-code com-type="picker" com-show-type="multicolumn-chain" />

### 设置默认选中
通过组件提供的 `default-value` 属性可以设置默认选中的值。

<show-code com-type="picker" com-show-type="multicolumn-default" />

## 加载状态

### 基本用法
通过组件提供的 `v-model:loading` 属性可以设置加载中状态。

<show-code com-type="picker" com-show-type="loading-base" />

### 自定义加载图标样式
通过组件提供的 `loading-icon` 属性可以加载图标，`loading-color` 属性可以设置加载图标颜色。

<show-code com-type="picker" com-show-type="loading-icon" />

### 异步获取
::: info 实现流程
- `columns` 属性数据先重置为空数组

- 可以通过 `setTimeout` 模拟异步场景下为 `columns` 属性赋值

- `setTimeout` 可以替换为真实业务中接口异步获取
:::

<show-code com-type="picker" com-show-type="loading-async" />

## API

### Props
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | ---
| v-model | 当前选中的值 | Array | []
| default-value | 默认值 | Array | []
| v-model:format-value | 数据格式化的值 | String | -
| format-separator | 数据格式化分隔符 | String | -
| v-model:show | 是否显示 | Boolean | `false`
| v-model:loading | 是否设置加载状态 | Boolean | `false`
| loading-color | 加载图标颜色，支持 <a href="/guide/theme">主题</a> | String| `primary`
| loading-size | 加载图标大小，见 <a href="icon">Icon 图标组件</a> 的 `size` 属性 | String \| Number | `48`
| loading-icon | 加载图标名称，见 <a href="icon">Icon 图标组件</a> 的 `type` 属性 | String | `spinner8`
| columns | 加载的数据，数据结构见下方说明 | Array | []
| title | 标题 | String | -
| cancel-text | 取消按钮文本 | String | `取消`
| confirm-text | 确定按钮文本 | String | `确定`
| popup-height | 弹出层初始高度，单位 `rpx` | String \| Number | `500`
| mode`通用属性` | 页面模式，有效值见下方说明 | String  | `light`

### Columns 数据结构
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | ---
| text | 选项的文字内容 | String | -
| value | 选项对应的唯一值 | String \| Number | -
| disable | 选项是否禁用 | Boolean | `false`
| className | 选项附加class | String | -
| children | 多级联动子级内容 | Array | -

<PropsModeProp />

### Events
| 名称 | 说明 | 回调参数
| --- | --- | ---
| change | 选项发生改变时触发 | Event
| update:modelValue | 双向绑定 | value `value` 为当前选择的值
| update:show | 双向绑定 `show` 属性 | bool `bool` 返回布尔值
| confirm | 点击确定按钮时触发 | { value } `value` 为当前选择的值
| cancel | 点击取消按钮时触发 | { value } `value` 为当前选择的值
| update:formatValue | 双向绑定 `format-value` 属性 | formatValue `formatValue` 为格式化后的字符串
| update:loading | 双向绑定 `loading` 属性 | bool `bool` 返回布尔值
| update:columns | 双向绑定 `columns` 属性 | columns `columns` 为变化后的columns数据
  