# Animation 动效

### 介绍

给元素添加常用的动画效果，Animation 基于 [animista](https://animista.net) 总结而来，目前支持 `10+` 种主轴动画形式。

<!--@include: ./tips/introduce.md-->

<TipsIntroduce />

## 代码演示

### 基本用法

通过组件提供的 `name` 属性可以设置 [animista](https://animista.net) 的 `10+` 动画形式。

<show-code com-type="animation" com-show-type="base" />

### 动画时间

通过组件提供的 `duration` 属性可以设置动画时间。

<show-code com-type="animation" com-show-type="duration" />

### 动画时间单位

通过组件提供的 `duration-unit` 属性可以设置动画时间单位，支持 `ms` `s`。

<show-code com-type="animation" com-show-type="duration-unit" />

### 动画缓动曲线函数

通过组件提供的 `timing-function` 属性可以设置 `29`种 动画时间缓动曲线函数。

<show-code com-type="animation" com-show-type="timing-function" />

### 动画延迟时间

通过组件提供的 `delay` 属性可以设置动画延迟时间。

<show-code com-type="animation" com-show-type="delay" />

### 动画延迟时间单位

通过组件提供的 `delay-unit` 属性可以设置动画延迟时间单位。

<show-code com-type="animation" com-show-type="delay-unit" />

### 动画重复次数

通过组件提供的 `interation-count` 属性可以设置动画重复次数。

<show-code com-type="animation" com-show-type="interation-count" />

### 循环播放动画

通过组件提供的 `infinite` 属性可以设置动画循环播放。

<show-code com-type="animation" com-show-type="infinite" />

### 动画开始方向

通过组件提供的 `direction` 属性可以设置动画开始方向。

<show-code com-type="animation" com-show-type="direction" />

### 动画填充模式

通过组件提供的 `fill-mode` 属性可以设置动画填充模式。

<show-code com-type="animation" com-show-type="fill-mode" />

### 动画播放状态

通过组件提供的 `runing` 属性可以设置动画播放与暂停状态。

<show-code com-type="animation" com-show-type="runing" />

### 完整动画演示

可以通过组件暴露的 `changeState` 方法统一调整以上文档中所有的动画属性，方便动态设置动画效果。

<show-code com-type="animation" com-show-type="demo" />

## API

### Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| duration | 动画时间 | Number | `0.4`
| duration-unit | 动画时间单位，可选值为 `ms` `s` | String | `s`
| timing-function | 动画时间缓动曲线函数 | String | `linear`
| delay | 动画延迟时间 | Number | `0`
| delay-unit | 动画延迟时间单位 | String | `s`
| interation-count | 动画重复次数 | Number | `1`
| infinite | 是否循环播放动画，设置为 `true` 时 `interation-count`属性将失效  | Boolean | `false`
| direction | 动画开始方向 | String | `normal`
| fill-mode | 动画填充模式 | String | `both`
| name | 动画名称 | String | `scale-up-center`
| runing | 是否正在播放动画 | Boolean | `false`

### TimingFunction 有效值
| 值 | 说明
| ----- | -----
| linear | 参考 [animista](https://animista.net)
| ease | 参考 [animista](https://animista.net)
| ease-out | 参考 [animista](https://animista.net)
| ease-in | 参考 [animista](https://animista.net)
| ease-in-out | 参考 [animista](https://animista.net)
| ease-in-quad | 参考 [animista](https://animista.net)
| ease-in-cubic | 参考 [animista](https://animista.net)
| ease-in-quart | 参考 [animista](https://animista.net)
| ease-in-quint | 参考 [animista](https://animista.net)
| ease-in-sine | 参考 [animista](https://animista.net)
| ease-in-expo | 参考 [animista](https://animista.net)
| ease-in-circ | 参考 [animista](https://animista.net)
| ease-in-back | 参考 [animista](https://animista.net)
| ease-out-quad | 参考 [animista](https://animista.net)
| ease-out-cubic | 参考 [animista](https://animista.net)
| ease-out-quart | 参考 [animista](https://animista.net)
| ease-out-quint | 参考 [animista](https://animista.net)
| ease-out-sine | 参考 [animista](https://animista.net)
| ease-out-expo | 参考 [animista](https://animista.net)
| ease-out-circ | 参考 [animista](https://animista.net)
| ease-out-back | 参考 [animista](https://animista.net)
| ease-in-out-quad | 参考 [animista](https://animista.net)
| ease-in-out-cubic | 参考 [animista](https://animista.net)
| ease-in-out-quart | 参考 [animista](https://animista.net)
| ease-in-out-quint | 参考 [animista](https://animista.net)
| ease-in-out-sine | 参考 [animista](https://animista.net)
| ease-in-out-expo | 参考 [animista](https://animista.net)
| ease-in-out-circ | 参考 [animista](https://animista.net)
| ease-in-out-back | 参考 [animista](https://animista.net)

### Direction 有效值
| 值 | 说明 |
|----|------
| normal | 参考 [animista](https://animista.net)
| reverse | 参考 [animista](https://animista.net)
| alternate | 参考 [animista](https://animista.net)
| alternate-reverse | 参考 [animista](https://animista.net)

### FillMode 有效值
| 值 | 说明
|----|------
| none | 参考 [animista](https://animista.net)
| forwards | 参考 [animista](https://animista.net)
| backwards | 参考 [animista](https://animista.net)
| both | 参考 [animista](https://animista.net)

### Slots
| 名称                   | 说明                 |
|-----------------------|----------------------|
| default               | 动画元素         |

### Events
| 事件名 | 说明           | 参数          | 回调参数          |
| ------ | -------------- | ----------------- | ----------------- 
| changeRuningState  | 改变当前动画播放状态 | - | - |
| changeState | 修改动画参数 | 参数名称，参数值 | - |
| restart | 重复播放 | `name` 动画形式 | - |