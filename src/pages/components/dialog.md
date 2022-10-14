# Dialog 对话框

### 介绍
模态对话框，引导用户进行相关操作，常用于消息提示，消息确认，或在当前页面内完成特定的操作。

<TipsIntroduce />

## 代码演示

### 普通对话框

通过组件提供的 `show` 属性可以控制对话框的打开和关闭、`title` 属性可以设置对话框的标题、`content` 属性可以设置对话框的内容、`footer-direction` 属性可以设置底部按钮组的排列方式，支持 `水平排列` 和 `垂直排列` 、`mode` 属性可以设置对话框的暗黑模式。

<show-code com-type="dialog" com-show-type="normal" />

### 内容对齐

通过组件提供的 `content-align` 属性可以设置内容对齐方式，支持 `左对齐`、`居中对齐` 和 `右对齐`。

<show-code com-type="dialog" com-show-type="content" />

### 对话框类型

通过组件提供的 `type` 属性可以设置对话框的类型，支持 `提示对话框`、`编辑对话框` 和 `带图标的提示对话框`。

<show-code com-type="dialog" com-show-type="type" />

### 按钮组用法

通过组件提供的 `footer-type` 属性可以设置底部按钮组的类型，支持 `普通类型` 和 `贴边类型` ，通过组件提供的 `footer` 插槽可以自定义底部按钮组内容。

<show-code com-type="dialog" com-show-type="footer" />

## API

### Props

| 参数 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| show-icon | 是否显示顶部图标 | Boolean | `false`
| icon-prefix | <a href="icon">图标前缀</a> | String | `boot`
| icon-name | <a href="icon">图标名称</a> | String | -
| icon-color | <a href="/guide/theme">图标颜色/图标主题</a> | String | `primary`
| icon-color-level | <a href="/guide/theme">图标颜色色阶号</a> | [String, Number] | `5`
| icon-size | <a href="icon">图标大小</a> | [String, Number] | `80`
| title | 标题 | String | -
| title-align | 标题对齐方式，有效值见下方说明 | String | `center`
| show | 是否显示，支持`v-model`绑定 | Boolean | `false`
| content | 内容 | String | -
| content-align | 内容水平对齐方式，有效值见下方说明 | String | `center`
| confirm-button | 是否显示确定按钮 | Boolean | `true`
| cancel-button | 是否显示取消按钮 | Boolean | `true`
| confirm-button-text | 确定按钮文案 | String | `确定`
| cancel-button-text | 取消按钮文案 | String | `取消`
| cancel-auto-close | 取消按钮是否自动关闭对话框 | Boolean | `true`
| lock-scroll | 是否禁止滚动穿透，禁止时滚动弹出层不会引起页面滚动 | Boolean | `true`
| close-on-click-overlay | 点击遮罩是否关闭对话框 | Boolean | `false`
| footer-direction | 底部按钮组排列方式，有效值见下方说明 | String | `row`
| dialog-class | 对话框类名 | String | -
| dialog-style | 对话框样式 | String | -
| dialog-radius | 对话框圆角大小，有效值见下方说明 | String | `base`
| type | 对话框类型，有效值见下方说明 | String | `normal`
| footer-type | 按钮组类型，有效值见下方说明 | String | `margin`
| placeholder-text | 编辑对话框输入框占位文本，`type`属性值为`edit`生效 | String | `请输入内容`
| mode `通用属性` | 页面模式，有效值见下方说明 | String | `light`

### TitleAlign 有效值
| 值 | 说明
|----|-----
| left | 左对齐
| center | 居中对齐
| right | 右对齐

### ContentAlign 有效值
| 值 | 说明
|----|-----
| left | 左对齐
| center | 居中对齐
| right | 右对齐

### FooterDirection 有效值
| 值 | 说明
|----|-----
| row | 水平排列
| column | 垂直排列

### DialogRadius 有效值
| 值 | 说明
|----|-----
| none | `0rpx`
| sm | `10rpx`
| base | `30rpx`
| lg | `40rpx`
| xl | `50rpx`
| max | `9999rpx`

### Type 有效值
| 值 | 说明
|----|-----
| normal | 默认对话框
| tips | 提示对话框
| edit | 编辑对话框

### FooterType 有效值
| 值 | 说明
|----|-----
| margin | 带间隔
| no-margin | 贴边类型

<PropsModeProp />

## Slots

| 名称 | 说明
|---- |-----
| icon | 顶部图标插槽
| title | 标题插槽
| content | 内容插槽
| footer | 底部按钮组插槽

## Events

| 名称 | 说明 | 回调参数
|------| -----| -----
| confirm | 确定按钮点击事件 | -
| cancel | 取消按钮点击事件 | -