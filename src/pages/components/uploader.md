<!-- 
该文件由系统自动生成 2022-12-10 18:07
@version 1.0.0
@author kviewui <kviewui@163.com>
-->
# Uploader 上传

### 介绍
用于将本地的图片或文件上传到服务器场景。

<TipsIntroduce />

## 代码演示

### 基本用法
通过组件提供的 `url` 属性可以设置上传服务器的接口地址，`xhr-code-name` 属性可以设置语义化接口响应状态码字段，`xhr-code` 属性可以设置上传接口成功响应状态码，`v-model` 属性可以绑定已经上传的文件列表，具体可参考下方示例。

::: info 【modelValue】字段结构说明

`status`：`ready`【准备上传】、`uploading`【上传中】、`failed`【上传失败】

`url`：预览图地址

`message`：上传状态提示语

`name`：隐藏预览图时的提示文案

:::

<show-code com-type="uploader" com-show-type="base" />

### 上传状态
通过组件提供的 `v-model` 属性可以设置上传状态，参数格式为 `数组形式`，`url` 字段为组件显示的预览图地址，`status` 字段为上传状态，可选值为 `ready`【准备上传】、`uploading`【上传中...】、`failed`【上传失败】，`message` 字段为上传状态描述语，具体可参考下方示例。

<show-code com-type="uploader" com-show-type="status" />

### 上传完成不显示预览图
通过组件提供的 `preview-image` 属性上传完成时可以隐藏预览图。

<show-code com-type="uploader" com-show-type="hidden-preview-image" />

### 文件预览【原生预览】
组件已默认开启点击图片查看大图效果。

<show-code com-type="uploader" com-show-type="preview-image" />

### 限制上传数量
通过组件提供的 `max-count` 属性可以设置最大上传数量，具体可参考下方示例。

<show-code com-type="uploader" com-show-type="max-count" />

### 限制上传大小
通过组件提供的 `max-size` 属性可以设置单个文件最大大小，单位为`字节`，`oversize` 事件回调可以自定义文件超出大小限制的业务逻辑，具体可参考下方示例。

<show-code com-type="uploader" com-show-type="max-size" />

### 自定义上传图标
通过组件提供的 `upload-icon` 插槽可以自定义上传图标样式，具体可参考下方示例。

<show-code com-type="uploader" com-show-type="upload-icon" />

### 自定义上传样式
通过组件提供的默认插槽可以自定义上传按钮，此时会覆盖默认上传按钮样式，具体可参考下方示例。

<show-code com-type="uploader" com-show-type="custom-upload-style" />

### 预览图自定义样式
通过组件提供的 `preview-cover` 插槽可以自定义预览图封面样式，具体可参考下方示例。

<show-code com-type="uploader" com-show-type="preview-cover" />

### 手动上传
通过组件的 `auto-upload` 属性可以关闭组件自动上传，在默认插槽里面自定义上传按钮实现手动上传场景，实现步骤如下：

::: info 实现步骤

1、将组件提供的 `auto-upload` 属性设置为 `false`

2、给组件添加 `ref` 属性，用来手动控制组件上传提交事件

3、在组件默认插槽自定义上传按钮

4、在上传按钮的点击事件里面通过绑定的 `ref` 触发组件的 `submit` 事件

:::

具体可参考下方示例代码。

<show-code com-type="uploader" com-show-type="auto-upload" />

### 自定义预览图大小
通过组件提供的 `upload-icon-size` 属性可以设置预览图尺寸大小。

<show-code com-type="uploader" com-show-type="upload-icon-size" />

### 上传前置处理
通过组件提供的 `before-upload` 属性可以自定义函数实现上传前置处理逻辑，组件提供了上传前图片压缩【H5支持】和上传前图片格式校验，具体可参考下方示例代码。

::: tip
由于演示部署系统限制，下面演示代码将分开演示
:::

<show-code com-type="uploader" com-show-type="before-upload" />
<show-code language="ts" com-type="uploader" com-show-type="before-upload-ts" />

### 删除前置处理
通过组件提供的 `before-delete` 属性可以自定义函数实现删除前置处理逻辑，组件提供了删除前二次确认场景，具体可参考下方示例代码。

<show-code com-type="uploader" com-show-type="before-delete" />

### 禁用文件上传
通过组件提供的 `disabled` 属性可以禁用文件上传。

<show-code com-type="uploader" com-show-type="disabled" />

### 禁用点击查看大图
通过组件提供的 `preview-full-image` 属性可以禁用点击查看大图。

<show-code com-type="uploader" com-show-type="preview-full-image" />

### 自定义单个图片点击事件
在 `v-model` 属性里面可以添加 `onClickItem` 事件实现自定义点击单个图片的逻辑处理，组件演示了点击第二个图片将会播放视频场景（视频来源于[VARLET](https://varlet.gitee.io/varlet-ui)），具体可参考下方示例。

<show-code com-type="uploader" com-show-type="custom-click-item" />


## API

### Props
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | ---
| v-model | 已经上传的文件列表，字段结构见下方说明 | FileItem[] | []
| name | `input` 标签的 `name` 值 | String | 'file'
| accept | 允许上传的文件类型，见[说明](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | String | '*'
| url | 上传服务器的接口地址 | String | -
| preview-image | 上传成功后是否展示预览图 | Boolean | `true`
| deletable | 是否展示删除按钮 | Boolean | `true`
| method | 上传请求的http method | String | 'post'
| upload-icon-size | 预览图/上传区域大小，单位rpx | String \| Number | `200`
| upload-icon | 预览图图标，见 <a href="icon">Icon 图标</a> | String | -
| preview-full-image | 是否开启点击查看大图 | Boolean | `true`
| capture | 图片选取模式，见[说明](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture) | String | ''
| max-size | 上传文件的最大大小 | String \| Number | Number.MAX_VALUE
| max-count | 文件上传数量限制 | String \| Number | `9`
| headers | 设置上传的请求头 | Object | {}
| formData | 上传的formData信息 | Object | {}
| xhr-code | 上传接口成功响应状态码 | String \| Number | `200`
| multiple | 是否开启多文件上传 | Boolean | `false`
| disabled | 是否禁用文件上传 | Boolean | `false`
| timeout | 上传超时时间，单位毫秒 | String \| Number | `30000`
| before-upload | 上传前置处理函数 | async (file: ImageFile[]) => Promise | -
| before-delete | 删除前置处理函数 | (index: number, fileList: ImageFile[]) => bool | (index: number, files: FileItem[]) => true
| size-type | 上传图类型，original 原图，compressed 压缩图，默认二者都有 | Array | ['original', 'compressed']
| source-type | 选图模式，album 从相册选图，camera 使用相机，默认二者都有 | Array | ['album', 'camera']
| crop | 图像裁剪参数，设置后 `sizeType` 失效，字段结构见下方说明 | Object | -
| before-xhr-upload | xhr自定义上传 | Function | -
| auto-upload | 是否自动上传 | Boolean | `true`
| id | 唯一标识 | String \| Number | -
| xhr-code-name | 语义化接口响应状态码字段名称 | String | -
| mode | 页面模式，有效值见下方说明 | String | `light`


### FileItem【modelValue】 字段结构
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | ---
| url | 预览图地址 | String | -
| file | 选择的文件字节流 | File | -
| path | 选择图片后的本地路径 | String | -
| type | 文件类型 | String | 'image/jpeg'
| status | 上传状态，有效值见下方说明 | String | 'ready'
| message | 上传状态描述 | String | '准备上传'
| name | 图片名称 | String | -
| uid | 图片的唯一标识 | String | -
| progress | 上传进度 | String | Number | -
| formData | 上传需要的data | new FormData() | -
| id | 组件的唯一标识 | String | -
| itemClick | 单个图片的点击事件 | () => Promise | -

### Crop 字段结构
| 参数 | 说明 | 类型 | 默认值 | 必填
| --- | --- | --- | --- | ---
| quality | 取值范围为1-100，数值越小，质量越低（仅对jpg格式有效）。默认值为80。 | Number | `80` | 否
| width | 裁剪的宽度，单位为px，用于计算裁剪宽高比。 | Number | - | 是
| height | 裁剪的高度，单位为px，用于计算裁剪宽高比。 | Number | - | 是
| resize | 是否将width和height作为裁剪保存图片真实的像素值。默认值为true。注：设置为false时在裁剪编辑界面显示图片的像素值，设置为true时不显示 | Boolean | `true` | 否

<PropsModeProp />

### Slots
| 名称 | 说明
| --- | ---
| delete-btn | 删除按钮插槽
| preview-cover | 预览图封面插槽
| upload-icon | 上传按钮图标插槽

### Events
| 事件名称 | 说明 | 回调参数
| --- | --- | ---
| oversize | 文件大小超出限制时触发 | oversize: ImageFile[]
| start | 开始上传时触发 | option: UploadOptions
| progress | 上传进度变化时触发 | { event, option: UploadOptions, progress: FileItem.progress }
| success | 上传成功时触发 | { data: UniNamespace.UploadFileSuccessCallbackResult, response: data, option: UploadOptions, fileItem: FileItem }
| update:modelValue | 文件列表变化时触发 | ImageFile[]
| failed | 上传失败时触发 | { data: UniNamespace.UploadFileSuccessCallbackResult, response: data, option: UploadOptions, fileItem: FileItem }
| change | 选择图片时触发 | ImageFile[]
| delete | 删除文件时触发 | { index: number, id: String, ...ImageFile[] }
| item-click | 图片点击时触发 | { index: number, id: String, ...ImageFile[] }

### Methods
通过 `ref` 可以调用组件实例方法

| 方法名 | 说明 | 参数 | 返回值
| --- | --- | --- | ---
| submit | 手动上传时执行上传操作 | - | -
| clearUploadQueue | 清空手动上传时的上传队列 | index | -
| del | 手动删除图片操作 | index | -
  