<!-- 
该文件由系统自动生成 2022-12-10 17:29
@version 1.0.0
@author kviewui <kviewui@163.com>
-->
# ShortPassword 短密码

### 介绍
短密码输入框，常用于密码输入和短信验证码输入，搭配 `Numberkeyboard 数字键盘` 组件一起使用

<TipsIntroduce />

## 代码演示

### 基本用法
通过组件提供的 `v-model` 属性可以绑定当前输入的值。

<show-code com-type="shortpassword" com-show-type="base" />

### 自定义长度
通过组件提供的 `length` 属性可以设置输入框长度，具体可参考下方示例。

<show-code com-type="shortpassword" com-show-type="length" />

### 普通文本类型
通过组件提供的 `password` 属性可以设置普通文本类型，具体可参考下方示例。

<show-code com-type="shortpassword" com-show-type="password" />

### 提示信息
通过组件提供的 `tips-message` 属性可以设置底部提示信息，`error-message` 属性可以设置错误提示信息，`change` 事件回调可以自定义正在输入时的操作，`confirm` 事件回调可以自定义输入完成时的操作，具体可参考 下方示例。

<show-code com-type="shortpassword" com-show-type="tips"  />

## API

### Props
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | ---
| v-model | 当前输入的值 | String | -
| show | 是否显示组件 | Boolean | `true`
| tips-message | 提示信息 | String | -
| error-message | 错误提示语 | String | -
| length | 密码长度 | String \| Number | `6`
| password | 是否为密码输入类型 | Boolean | `true`
| focus | 输入框是否自动聚焦 | Boolean | `false`
| autocomplete | 是否自动完成 | Boolean | `true`
| mode | 页面模式，有效值见下方说明 | String | `light`

<PropsModeProp />

### Events
| 事件名称 | 说明 | 回调参数
| --- | --- | ---
| update:modelValue | `v-model`属性双向绑定 | value: number
| change | 输入时触发 | value: number
| confirm | 输入完成时触发 | value: number
  