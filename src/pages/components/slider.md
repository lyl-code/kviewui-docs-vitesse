<!-- 
该文件由系统自动生成 2022-11-19 23:45
@version 1.0.0
@author kviewui <kviewui@163.com>
-->
# Slider 滑块

### 介绍
滑动输入条，用于在给定范围内选择一个值。

<TipsIntroduce />
::: info 演示提示
滑块组件演示需要在浏览器手机模式下运行查看
:::

## 代码演示

### 基本用法
通过组件提供的 `v-model` 属性可以设置默认值和当前进度百分比。

<show-code com-type="slider" com-show-type="base" />

### 双滑块
通过组件提供的 `range` 属性可开启双滑块模式，此时 `v-model` 属性值需为数组形式，可参考下面的示例代码。

<show-code com-type="slider" com-show-type="range" />

### 指定范围
通过组件提供的 `show-range` 属性可以显示滑块两端的范围值，`min` 属性可以设置选择的最小值，`max` 属性可以设置选择的最大值，可参考下面的示例代码。

<show-code com-type="slider" com-show-type="show-range" />

### 禁用
通过组件提供的 `disabled` 属性可以禁用滑块选择，样式为禁用，透明度降低。

<show-code com-type="slider" com-show-type="disabled" />

### 只读
通过组件提供的 `readonly` 属性可以禁用滑块选择，样式透明度正常。

<show-code com-type="slider" com-show-type="readonly" />

### 指定步长
通过组件提供的 `step` 属性可以指定滑块选择的步长。

<show-code com-type="slider" com-show-type="step" />

### 隐藏标签
通过组件提供的 `hidden-label` 属性可以隐藏滑块上方的标签展示。

<show-code com-type="slider" com-show-type="hidden-label" />

### 隐藏拖动水波纹
通过组件提供的 `hidden-active-ripple` 属性可以隐藏滑块点击拖动时周围的水波纹效果。

<show-code com-type="slider" com-show-type="hidden-active-ripple" />

### 自定义主题
通过组件提供的 `theme-color` 属性可以设置滑块的主题色。

<show-code com-type="slider" com-show-type="theme-color" />

### 自定义样式
通过组件提供的 `inactive-color` 属性可以设置未激活的滑块轨道颜色，`active-color` 属性可以设置激活的滑块轨道颜色，`thumb-color` 属性可以设置滑块的颜色，具体可参考下方示例。

<show-code com-type="slider" com-show-type="custom-style" />

### 自定义滑块按钮
通过组件提供的 `thumb` 插槽可以自定义滑块样式，具体可参考下方示例。

<show-code com-type="slider" com-show-type="slot" />

### 选择事件监听
通过组件提供的 `change` 事件回调可以自定义滑块选择事件，具体可参考下方示例。

<show-code com-type="slider" com-show-type="change" />

### 值的校验
通过组件提供的 `rules` 属性可以自定义校验规则，具体可参考下方示例。

<show-code com-type="slider" com-show-type="rules" />

## API

### Props
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | ---
| v-model | 滑块默认值 | String \| Number \| Array | -
| current-value | 滑块当前值 | String \| Number \| Array | -
| max | 滑块最大值 | String \| Number | `100`
| min | 滑块最小值 | String \| Number | `0`
| step | 滑块步长 | String \| Number | `1`
| disabled | 滑块是否禁用 | Boolean | `false`
| readonly | 滑块是否只读 | Boolean | `false`
| track-height | 滑块高度，单位rpx | Number | `12`
| track-size | 滑块按钮大小，单位rpx | Number | `30`
| range | 是否开启双滑块 | Boolean | `false`
| rules | 字段校验，字段结构见下方说明 | Object | `{}`
| show-range | 是否显示滑块两端范围说明值 | Boolean | `false`
| hidden-label | 是否隐藏标签 | Boolean | `false`
| hidden-active-ripple | 是否隐藏水波纹 | Boolean | `false`
| theme-color | 主题色，见 <a href="/guide/theme">主题</a> | String | `primary`
| inactive-color | 滑轨未激活颜色，支持 <a href="/guide/theme">主题</a> | String |-
| thumb-color | 滑块按钮颜色，支持 <a href="/guide/theme">主题</a> | String |-
| active-color | 滑轨激活颜色，支持 <a href="/guide/theme">主题</a> | String |-
| mode | 页面模式，有效值见下方说明 | String | `light`

<PropsRulesProp />

<PropsModeProp />

### Slots
| 名称 | 说明
| --- | ---
| error | 字段校验错误提示内容插槽
| thumb | 自定义滑块插槽

### Events
| 事件名称 | 说明 | 回调参数
| --- | --- | ---
| update:modelValue | `v-model`属性双向绑定 | value: number
| change | 滑块变化时触发事件 | {type: string, error: boolean, range: boolean, value: number}，`type` 字段为变化触发事件类型，可为 `touchmove`\|`click`，`error`字段为校验是否错误，`range`字段表示是否为双滑块变化，`value`字段为当前选择值
| update:currentValue | `current-value`属性双向绑定 | value: number

  