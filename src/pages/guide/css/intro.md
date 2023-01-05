#### <span class="text-lg text-gray-500 font-normal">指南</span>

<div class="w-screen"></div>

### 介绍
<a-typography-text>
    由于业内CSS原子化的盛行，组件库参考 <a-link status="success" href="https://tailwindcss.com">tailwindcss</a-link> 的设计思路，并且结合 <a-link status="success" href="https://uniapp.dcloud.net.cn/tutorial/nvue-css.html">UNIAPP NVUE的样式支持</a-link> 给大家提供了一套原子化的CSS样式库，助力各位开发者用户高效开发业务。
</a-typography-text>

### CSS样式概览
::: warning 注意事项
+ 这里的<span class="font-bold">平台差异说明</span>只是<span class="font-bold">CSS分类</span>的平台差异概览，具体属性的平台差异请点击详情去该<span class="font-bold">CSS分类</span>的详情介绍查看
+ 全局样式库已自动添加了浏览器前缀处理，开发者们不需要自己手动处理浏览器前缀问题
+ NVUE的样式支持请查看<a-link href="https://uniapp.dcloud.net.cn/tutorial/nvue-css.html">UNIAPP NVUE样式</a-link>
:::
<div class="mt-10" />

| CSS分类 | CSS属性 | 平台差异说明
| --- | --- | ---
| <a-link href="overflow">溢出</a-link> | overflow | H5、小程序、app-vue
| <a-link href="position">定位方式</a-link> | position | H5、小程序、app-vue、app-nvue
| <a-link href="inset">定位位置</a-link> | top \| right \| bottom \| left | H5、小程序、app-vue、app-nvue
| <a-link href="zIndex">层级</a-link> | z-index | H5、小程序、app-vue、app-nvue
| <a-link href="flexGrow">Flex Grow</a-link> | flex-grow | H5、小程序、app-vue
| <a-link href="flexShrink">Flex Shrink</a-link> | flex-shrink | H5、小程序、app-vue
| <a-link href="grid">Grid</a-link> | display: grid | H5、小程序、app-vue
| <a-link href="gridTemplateColumns">Grid Template Columns</a-link> | grid-template-columns | H5、小程序、app-vue
| <a-link href="gridColumn">Grid Column</a-link> | grid-column | H5、小程序、app-vue
| <a-link href="gridTemplateRows">Grid Template Rows</a-link> | grid-template-rows | H5、小程序、app-vue
| <a-link href="gridRow">Grid Row</a-link> | grid-row | H5、小程序、app-vue
| <a-link href="gridRowStart">Grid Row Start</a-link> | grid-row-start | H5、小程序、app-vue
| <a-link href="gridRowEnd">Grid Row End</a-link> | grid-row-end | H5、小程序、app-vue
| <a-link href="gridAutoFlow">Grid Auto Flow</a-link> | grid-auto-flow | H5、小程序、app-vue
| <a-link href="gridAutoColumns">Grid Auto Columns</a-link> | grid-auto-columns | H5、小程序、app-vue
| <a-link href="gridAutoRows">Grid Auto Rows</a-link> | grid-auto-rows | H5、小程序、app-vue
| <a-link href="gap">Gap</a-link> | gap | H5、小程序、app-vue
| <a-link href="columnGap">Column Gap</a-link> | column-gap | H5、小程序、app-vue
| <a-link href="rowGap">Row Gap</a-link> | row-gap | H5、小程序、app-vue
| <a-link href="justifyItems">Justify Items</a-link> | justify-items | H5、小程序、app-vue
| <a-link href="flex">Flex</a-link> | display: flex | H5、小程序、app-vue、app-nvue
| <a-link href="flexDirection">Flex方向</a-link> | flex-direction | H5、小程序、app-vue、app-nvue
| <a-link href="flexWrap">Flex Wrap</a-link> | flex-wrap | H5、小程序、app-vue、app-nvue
| <a-link href="justifyContent">Justify Content</a-link> | justify-content | H5、小程序、app-vue、app-nvue
| <a-link href="alignItems">Align Items</a-link> | align-items | H5、小程序、app-vue、app-nvue
| <a-link href="justifySelf">Justify Self</a-link> | justify-self | H5、小程序、app-vue
| <a-link href="alignContent">Align Content</a-link> | align-content | H5、小程序、app-vue
| <a-link href="alignSelf">Align Self</a-link> | align-self | H5、小程序、app-vue
| <a-link href="placeContent">Place Content</a-link> | place-content | H5、小程序、app-vue
| <a-link href="placeItems">Place Items</a-link> | place-items | H5、小程序、app-vue
| <a-link href="placeSelf">Place Self</a-link> | place-self | H5、小程序、app-vue
| <a-link href="padding">内边距</a-link> | padding / padding-top \| right \| bottom \|  left | H5、小程序、app-vue、app-nvue
| <a-link href="margin">外边距</a-link> | margin / margin-top \| right \| bottom \| left | H5、小程序、app-vue、app-nvue
| <a-link href="width">宽度</a-link> | width | H5、小程序、app-vue、app-nvue
| <a-link href="minWidth">最小宽度</a-link> | min-width | H5、小程序、app-vue
| <a-link href="maxWidth">最大宽度</a-link> | max-width | H5、小程序、app-vue
| <a-link href="height">高度</a-link> | height | H5、小程序、app-vue、app-nvue
| <a-link href="minHeight">最小高度</a-link> | height | H5、小程序、app-vue
| <a-link href="maxHeight">最大高度</a-link> | max-height | H5、小程序、app-vue
| <a-link href="fontFamily">字体序列</a-link> | font-family | H5、小程序、app-vue、app-nvue
| <a-link href="fontSize">字体大小</a-link> | font-size | H5、小程序、app-vue、app-nvue
| <a-link href="fontSmoothing">字体平滑度</a-link> | font-smoothing | H5、小程序、app-vue
| <a-link href="fontStyle">字体样式</a-link> | font-style | H5、小程序、app-vue、app-nvue
| <a-link href="fontWeight">字体粗细</a-link> | font-weight | H5、小程序、app-vue、app-nvue
| <a-link href="fontVariantNumeric">Font Variant Numeric</a-link> | font-variant-numeric | H5、小程序、app-vue
| <a-link href="letterSpacing">字母间距</a-link> | letter-spacing | H5、小程序、app-vue
| <a-link href="lineHeight">行高</a-link> | line-height | H5、小程序、app-vue、app-nvue
| <a-link href="placeholderColor">占位文本色</a-link> | color | H5、小程序、app-vue
| <a-link href="textAlign">文本对齐</a-link> | text-align | H5、小程序、app-vue、app-nvue
| <a-link href="color">文本颜色</a-link> | color | H5、小程序、app-vue、app-nvue
| <a-link href="opacity">透明度</a-link> | opacity | H5、小程序、app-vue、app-nvue
| <a-link href="textDecoration">文本装饰</a-link> | text-decoration | H5、小程序、app-vue、app-nvue
| <a-link href="textTransform">文本转换</a-link> | text-transform | H5、小程序、app-vue
| <a-link href="textOverflow">文本溢出</a-link> | text-overflow | H5、小程序、app-vue、app-nvue
| <a-link href="verticalAlign">垂直对齐</a-link> | vertical-align | H5、小程序、app-vue
| <a-link href="whiteSpace">空白</a-link> | white-space | H5、小程序、app-vue
| <a-link href="wordBreak">文本换行</a-link> | word-break | H5、小程序、app-vue
| <a-link href="backgroundAttachment">背景图像固定</a-link> | background-attachment | H5、小程序、app-vue
| <a-link href="backgroundClip">背景图像裁剪</a-link> | background-clip | H5、小程序、app-vue
| <a-link href="backgroundColor">背景颜色</a-link> | background-color | H5、小程序、app-vue、app-nvue
| <a-link href="backgroundOrigin">Background Origin</a-link> | background-origin | H5、小程序、app-vue
| <a-link href="backgroundPosition">背景图像位置</a-link> | background-position | H5、小程序、app-vue
| <a-link href="backgroundRepeat">背景图像重复</a-link> | background-repeat | H5、小程序、app-vue
| <a-link href="backgroundSize">背景图像大小</a-link> | background-size | H5、小程序、app-vue
| <a-link href="backgroundImage">背景图像</a-link> | background-image | H5、小程序、app-vue
| <a-link href="borderRadius">边框圆角</a-link> | border-radius \| border-top-left-radius \| border-top-right-radius \| border-bottom-left-radius \| border-bottom-right-radius | H5、小程序、app-vue、app-nvue
| <a-link href="borderWidth">边框厚度</a-link> | border-width \| border-top-width \| border-right-width \| border-bottom-width \| border-left-width | H5、小程序、app-vue、app-nvue
| <a-link href="borderStyle">边框样式</a-link> | border-style | H5、小程序、app-vue、app-nvue
| <a-link href="borderColor">边框颜色</a-link> | border-color | H5、小程序、app-vue、app-nvue
| <a-link href="divideWidth">分割线厚度</a-link> | border-left-width、border-right-width \| border-top-width、border-bottom-width | H5
| <a-link href="filter">Filter</a-link> | filter | H5、小程序、app-vue
| <a-link href="blur">Blur</a-link> | filter: blur | H5、小程序、app-vue
| <a-link href="animation">动画</a-link> | animation | H5、小程序、app-vue
| <a-link href="resize">大小调整</a-link> | resize | H5、小程序、app-vue
| <a-link href="userSelect">用户选择</a-link> | user-select | H5、小程序、app-vue
| <a-link href="fill">填充</a-link> | fill | H5、小程序、app-vue
| <a-link href="stroke">线条</a-link> | stroke | H5、小程序、app-vue
| <a-link href="strokeWidth">线条厚度</a-link> | stroke-width | H5、小程序、app-vue
| <a-link href="blur">屏幕阅读器</a-link> | - | H5、小程序、app-vue
| <a-link href="transform">2D / 3D转换</a-link> | transform | H5、小程序、app-vue、app-nvue
| <a-link href="transformOrigin">变换原点</a-link> | transform-origin | H5、小程序、app-vue、app-nvue
| <a-link href="sticky">Position Sticky</a-link> | display: sticky | H5、小程序、app-vue、app-nvue

















