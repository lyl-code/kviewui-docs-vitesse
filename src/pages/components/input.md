# Input 输入框

### 介绍
用户可以在文本框内输入内容。

<TipsIntroduce />

## 代码演示

### 基本用法
通过组件提供的 `label` 属性可以设置输入框左边的文本，`placeholder` 属性可以设置输入框的待输入提示文本。

<show-code com-type="input" com-show-type="base" />

### 输入框类型
通过组件提供的 `type` 属性可以设置输入框的类型。

<show-code com-type="input" com-show-type="type" />

### 禁用和只读
通过组件提供的 `disabled` 属性可以设置输入框禁用，`readonly` 属性可以设置输入框只读。

<show-code com-type="input" com-show-type="disabled" />

### 图标显示
通过组件提供的 `right-icon` 属性可以设置输入框右边的图标，`left-icon` 属性可以设置输入框左边的图标，`clearable` 属性可以开启动态清除图标。

<show-code com-type="input" com-show-type="icon" />

### 错误提示
通过组件提供的 `required` 属性可以设置输入框的必填状态，`error` 属性可以设置输入框的错误状态，`error-message` 属性可以设置输入框底部的错误信息。

<show-code com-type="input" com-show-type="error" />

### 按钮插槽
通过组件提供的 `button` 插槽可以设置自定义输入框右边的按钮区内容。

<show-code com-type="input" com-show-type="slot" />

### 字数统计显示
通过组件提供的 `show-limit-word` 属性可以开启输入框的字数统计显示，`rows` 属性可以设置多文本输入框的行数，`maxlength` 属性可以设置最大输入长度。

<show-code com-type="input" com-show-type="font-number" />

### 对齐方式
通过组件提供的 `label-align` 属性可以设置输入框左边文本的对齐方式，`input-align` 属性可以设置输入框内容的对齐方式。

<show-code com-type="input" com-show-type="align" />

### 无底部边框
通过组件提供的 `border` 属性可以设置输入框的底部边框的显示或隐藏。

<show-code com-type="input" com-show-type="no-bottom-border" />

## API

### Props
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | ---
| v-model | 输入值 | String \| Number | -
| label | 输入框左侧的文本 | String | -
| label-width | 左侧文本的宽度，单位 `px` | String \| Number | `80`
| label-align | 左侧文本的对齐方式，有效值见下方说明 | String | `left`
| input-align | 输入框内容的对齐方式，有效值同 `label-align` 属性 | String | `left`
| required | 是否显示必填的 `*` | Boolean | `false`
| required-align | `*` 显示位置，有效值见下方说明 | String | `right`
| border | 是否显示输入框底部边框 | Boolean | `true`
| readonly | 是否只读 | Boolean | `false`
| clearable | 是否显示清除图标 | Boolean | `false`
| clear-icon | 清除图标，同 <a href="icon">Icon 图标</a>的 `type` 属性 | String | `cancel`
| clear-icon-size | 清除图标大小，同 <a href="icon">Icon 图标</a>的 `size` 属性 | String \| Number | `40`
| left-icon | 输入框左侧图标，同 <a href="icon">Icon 图标</a>的 `type` 属性 | String | -
| left-icon-size | 输入框左侧图标的大小，同 <a href="icon">Icon 图标</a>的 `size` 属性 | String \| Number | `28`
| left-icon-color | 输入框左侧图标的颜色，同 <a href="icon">Icon 图标</a>的 `color` 属性 | String | -
| right-icon | 输入框右侧图标，同 <a href="icon">Icon 图标</a>的 `type` 属性 | String | -
| right-icon-size | 输入框右侧图标的大小，同 <a href="icon">Icon 图标</a>的 `size` 属性 | String \| Number | `28`
| right-icon-color | 输入框右侧图标的颜色，同 <a href="icon">Icon 图标</a>的 `color` 属性 | String | -
| show-limit-word | 是否限制最大输入长度 | Boolean | `false`
| rows | 多文本输入框行数，`show-limit-word` 属性为 `true` 时有效 | Number | `1`
| error | 是否显示错误 | Boolean | `false`
| error-message | 是否显示输入框底部的错误信息 | Boolean | `false`
| error-message-align | 输入框底部错误信息的对齐方式，有效值同 `label-align` 属性 | String | `left`
| type | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | String | `text`
| text-content-type | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | String | -
| password | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Boolean | `false`
| placeholder | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | String | -
| placeholder-style | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | String | -
| placeholder-class | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | String | -
| disabled | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Boolean | `false`
| maxlength | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Number | `140`
| cursor-spacing | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Number | `0`
| focus | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Boolean | `false`
| confirm-type | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | String | `done`
| confirm-hold | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Boolean | `false`
| cursor | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Number | `null`
| selection-start | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Number | `-1`
| selection-end | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Number | `-1`
| adjust-position | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Boolean | `true`
| hold-keyboard | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Boolean | `false`
| auto-blur | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Boolean | `false`
| ignore-composition-event | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Boolean | `true`
| always-embed | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Boolean | `false`
| safe-password-cert-path | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | String | `null`
| safe-password-length | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Number | `null`
| safe-password-time-stamp | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Number | `null`
| safe-password-nonce | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | String | -
| safe-password-salt | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | String | -
| safe-password-custom-hash | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | String | -
| random-number | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Boolean | `false`
| controlled | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Boolean | `false`
| always-system | 见 [uniapp input输入框](https://uniapp.dcloud.net.cn/component/input.html) | Boolean | `false`

### LabelAlign 有效值
| 值 | 说明
| --- | ---
| left | 左对齐
| center | 居中对齐
| right | 右对齐

### RequiredAlign 有效值
| 值 | 说明
| --- | ---
| left | 左侧文本左边
| right | 左侧文本右边

### Events
| 名称 | 说明 | 回调参数
| --- | --- | ---
| input | 键盘输入时触发 | value `value` 为当前输入的值
| focus | 输入框聚焦时触发 | value `value` 为当前输入的值
| blur | 输入框失去焦点时触发 | value `value` 为当前输入的值
| linechange | 输入框行数变化时触发，`show-limit-word` 为 `true` 时有效 | value `value` 为当前输入的值
| confirm | 点击键盘完成时触发 | value `value` 为当前输入的值
| keyboardheightchange | 键盘高度变化时触发 | value `value` 为当前输入的值
| click-input | 输入框点击时触发 | value `value` 为当前输入的值
| click-left-icon | 输入框左边图标点击时触发 | value `value` 为当前输入的值
| click-right-icon | 输入框右边图标点击时触发 | value `value`  为当前输入的值







