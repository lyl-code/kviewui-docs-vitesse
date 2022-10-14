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