<!-- 
该文件由系统自动生成 2022-11-16 16:29
@version 1.0.0
@author kviewui <kviewui@163.com>
-->
# Rate 评分

### 介绍
用于快速的评级操作，或对评级进行展示。

<TipsIntroduce />

## 代码演示

### 基本用法
通过组件提供的 `v-model` 属性可以设置当前激活的星数量。

<show-code com-type="rate" com-show-type="base" />

### 自定义总数
通过组件提供的 `count` 属性可以设置需要展示的星总数，默认为 `5` 个。

<show-code com-type="rate" com-show-type="count" />

### 自定义颜色
通过组件提供的 `active-color` 属性可以设置自定义颜色，自定义颜色支持通过 `active-color-level` 属性设置颜色色阶，具体示例可参考下面代码演示。

<show-code com-type="rate" com-show-type="color" />

### 自定义图标
通过组件提供的 `active-icon` 属性可以设置激活状态的<a href="icon">图标</a>，`inactive-icon` 属性可以设置未激活状态的 <a href="icon">图标</a>。

<show-code com-type="rate" com-show-type="icon" />

### 半选
通过组件提供的 `allow-half` 属性可以设置组件的半选状态，可以设置 `v-model` 为小数实现激活的半选数，具体可参考下面的代码演示。

<show-code com-type="rate" com-show-type="half" />

### 自定义大小
通过组件提供的 `icon-size` 属性可以设置组件的大小。

<show-code com-type="rate" com-show-type="size" />

### 自定义间隔
通过组件提供的 `gap` 属性可以设置星星列间距。

<show-code com-type="rate" com-show-type="gap" />

### 禁选
通过组件提供的 `disabled` 属性可以设置组件禁选，此时组件颜色将置灰。

<show-code com-type="rate" com-show-type="disabled" />

### 只读
通过组件提供的 `readonly` 属性可以设置组件只读。

<show-code com-type="rate" com-show-type="readonly" />

### 事件监听
通过组件提供的 `change` 事件回调可以实现自定义事件监听场景。

<show-code com-type="rate" com-show-type="change" />

### 字段校验

::: tip
错误提示内容支持插槽定制，具体可以参考组件API的插槽部分。
:::

通过组件提供的 `rules` 属性可以设置字段校验内容，`validator` 字段自定义正则校验规则，`message` 字段自定义错误提示内容，具体可参考下面的代码演示。

<show-code com-type="rate" com-show-type="rules" />

## API

### Props
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | ---
| v-model | 当前分数 | String \| Number | `0`
| count | 图标总数 | Number \| Number | `5`
| active-color | 激活状态的颜色，支持 <a href="/guide/theme">主题</a> | String | `primary`
| active-color-level | 激活状态的颜色色阶号 | Number \| Number | `5`
| inactive-color | 未激活状态的颜色，支持 <a href="/guide/theme">主题</a> | String | `grey`
| inactive-color-level | 未激活状态的颜色色阶号 | Number \| Number | `4`
| icon-size | 图标大小，同 <a href="icon">Icon 图标</a> 的 `size` 属性 | String \| Number | `36`
| active-icon | 激活状态的图标，同 <a href="icon">Icon 图标</a> 的 `type` 属性 | String | `star`
| inactive-icon | 未激活状态的图标，同 <a href="icon">Icon 图标</a> 的 `type` 属性 | String | `star-o`
| gap | 图标间距 | String \| Number | `20`
| allow-half | 是否半选 | Boolean | `false`
| readonly | 是否只读 | Boolean | `false`
| disabled | 是否禁用 | Boolean | `false`
| touchable `暂未发布` | 是否滑动选择 | Boolean | `false`
| rules | 字段校验，字段结构见下方说明 | Object | `{}`
| mode | 页面模式，有效值见下方说明 | String | `light`

### Rules 字段结构
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | ---
| validator | 校验规则 | (score: number) => void | -
| message | 错误提示内容 | String | -

<PropsModeProp />

### Slots
| 名称 | 说明
| --- | ---
| error | 字段校验错误提示内容插槽

### Events
| 名称 | 说明 | 回调参数
| --- | --- | ---
| update:modelValue | `v-model`属性双向绑定 | score: number
| change | 当前分值变化时触发事件 | score: number
  