export const menus = () => {
  return {
    component: [
      {
        name: '基础组件',
        enName: 'basic',
        link: '',
        children: [
          {
            name: 'Button 按钮',
            enName: 'Button',
            type: 'component',
            show: true,
            describe: '按钮用于触发一个操作，如提交表单。',
            author: 'kviewui@163.com',
            link: '/components/button',
          },
          {
            name: 'Cell 单元格',
            enName: 'Cell',
            type: 'component',
            show: true,
            describe: '列表项，可组成列表。',
            author: 'kviewui@163.com',
            link: '/components/cell',
          },
          {
            name: 'Image 图片',
            enName: 'Image',
            type: 'component',
            show: true,
            describe: '增强版的 img 标签，提供多种图片填充模式，支持图片加载中提示、加载失败提示。',
            author: 'kviewui@163.com',
            link: '/components/image',
          },
          {
            name: 'Icon 图标',
            enName: 'Icon',
            type: 'component',
            show: true,
            describe: '可支持多种 字体图标平台的图标集，可以通过 Icon 组件使用。',
            author: 'kviewui@163.com',
            link: '/components/icon',
          },
          {
            name: 'Tag 标签',
            enName: 'Tag',
            type: 'component',
            show: true,
            describe: '用于标记关键词和主要内容。',
            author: 'kviewui@163.com',
            link: '/components/tag',
          },
          {
            name: 'Badge 徽标',
            enName: 'Badge',
            type: 'component',
            show: true,
            describe: '展示图标或文字右上角的红色圆点、数字或者文字，表示有新内容或新消息待处理。',
            author: 'kviewui@163.com',
            link: '/components/badge',
          },
        ],
      },
      {
        name: '布局组件',
        enName: 'layout',
        link: '',
        children: [
          {
            name: 'Layout 布局',
            enName: 'layout',
            type: 'component',
            show: true,
            describe: 'Layout 提供了 kui-row 和 kui-col 两个辅助布局的组件，帮助您高效率的进行页面布局。',
            author: 'kviewui@163.com',
            link: '/components/layout',
          },
          {
            name: 'Grid 宫格',
            enName: 'grid',
            type: 'component',
            show: true,
            describe: '将页面区域分隔成等宽区块。',
            author: 'kviewui@163.com',
            link: '/components/grid',
          },
          {
            name: 'Divider 分割线',
            enName: 'divider',
            type: 'component',
            show: true,
            describe: '用于将内容分隔为多个区域。',
            author: 'kviewui@163.com',
            link: '/components/divider',
          },
          {
            name: 'Space 间隔',
            enName: 'space',
            type: 'component',
            show: true,
            describe: '在 kui-space 组件包裹下可以给行或者列增加内间距。',
            author: 'kviewui@163.com',
            link: '/components/space',
          },
          {
            name: 'Sticky 粘性布局',
            enName: 'sticky',
            type: 'component',
            show: true,
            describe: 'Sticky组件基于CSS中的 position: sticky 属性实现的效果，当组件在屏幕或者指定容器范围内时，按照正常的布局排列，当组件超出屏幕或者指定容器范围时，始终固定在屏幕或者指定容器顶部。',
            author: 'kviewui@163.com',
            link: '/components/sticky',
          },
        ],
      },
      {
        name: '展示组件',
        enName: 'show',
        link: '',
        children: [
          {
            name: 'Spin 加载动画',
            enName: 'spin',
            type: 'component',
            show: true,
            describe: 'Spin 组件提供了 15 种常见的CSS3加载场景动画，基本满足各种常见的等待加载场景需求。',
            author: 'kviewui@163.com',
            link: '/components/spin',
          },
          {
            name: 'Overlay 遮罩',
            enName: 'overlay',
            type: 'component',
            show: true,
            describe: '创建一个遮罩层，用来强调特定的元素，防止用户进行其他操作。',
            author: 'kviewui@163.com',
            link: '/components/overlay',
          },
          {
            name: 'Animation 动效',
            enName: 'animation',
            type: 'component',
            show: true,
            describe: '给元素添加常用的动画效果，Animation 基于 animista 总结而来，目前支持 10+ 种主轴动画形式。',
            author: 'kviewui@163.com',
            link: '/components/animation',
          },
          {
            name: 'Collapse 折叠面板',
            enName: 'collapse',
            type: 'component',
            show: true,
            describe: '将内容放置在多个折叠面板中，点击面板标题可展开或收缩内容。',
            author: 'kviewui@163.com',
            link: '/components/collapse',
          },
          {
            name: 'Skeleton 骨架屏',
            enName: 'skeleton',
            type: 'component',
            show: true,
            describe: '在页面上待加载区域填充灰色的占位图，用来展示界面加载过程的过渡效果。组件提供了标题，段落，头像，卡片等场景骨架，具体可参考下面代码演示部分。',
            author: 'kviewui@163.com',
            link: '/components/skeleton',
          },
          {
            name: 'Progress 进度条',
            enName: 'progress',
            type: 'component',
            show: true,
            describe: '用来展示当前操作的进度。',
            author: 'kviewui@163.com',
            link: '/components/progress',
          },
        ],
      },
      {
        name: '反馈组件',
        enName: 'feedback',
        link: '',
        children: [
          {
            name: 'Popup 弹出层',
            enName: 'popup',
            type: 'component',
            show: true,
            describe: '弹出层容器，用来展示弹窗，提示信息等内容，支持多个弹出层叠加展示。',
            author: 'kviewui@163.com',
            link: '/components/popup',
          },
          {
            name: 'Snackbar 消息条',
            enName: 'snackbar',
            type: 'component',
            show: true,
            describe: '在页面顶部或者底部展示消息提示。',
            author: 'kviewui@163.com',
            link: '/components/snackbar',
          },
          {
            name: 'ActionSheet 动作面板',
            enName: 'actionSheet',
            type: 'component',
            show: true,
            describe: '从底部弹出一个动作面板供用户选择选项。',
            author: 'kviewui@163.com',
            link: '/components/actionsheet',
          },
          {
            name: 'Dialog 对话框',
            enName: 'dialog',
            type: 'component',
            show: true,
            describe: '模态对话框，引导用户进行相关操作，常用于消息提示，消息确认，或在当前页面内完成特定的操作。',
            author: 'kviewui@163.com',
            link: '/components/dialog',
          },
          {
            name: 'Toast 吐司',
            enName: 'toast',
            type: 'component',
            show: true,
            describe: '用于轻提示内容场景。',
            author: 'kviewui@163.com',
            link: '/components/toast',
          },
        ],
      },
      {
        name: '表单组件',
        enName: 'form',
        link: '',
        children: [
          {
            name: 'Switch 开关',
            enName: 'switch',
            type: 'component',
            show: true,
            describe: '用来切换打开和关闭状态',
            author: 'kviewui@163.com',
            link: '/components/switch',
          },
          {
            name: 'Radio 单选按钮',
            enName: 'radio',
            type: 'component',
            show: true,
            describe: '在一组备选项中进行单选。',
            author: 'kviewui@163.com',
            link: '/components/radio',
          },
          {
            name: 'Checkbox 复选按钮',
            enName: 'checkbox',
            type: 'component',
            show: true,
            describe: '在一组备选项中进行多选。',
            author: 'kviewui@163.com',
            link: '/components/checkbox',
          },
          {
            name: 'Input 输入框',
            enName: 'input',
            type: 'component',
            show: true,
            describe: '用户可以在文本框内输入内容。',
            author: 'kviewui@163.com',
            link: '/components/input',
          },
          {
            name: 'Stepper 步进器',
            enName: 'stepper',
            type: 'component',
            show: true,
            describe: '由增加按钮、输入框和减少按钮组成，用户可以在输入框内直接输入数字，也可以通过增加按钮和减少按钮控制输入框内的数字增减，常用在比如购物车、直接购买物品等场景增加减少物品数量。',
            author: 'kviewui@163.com',
            link: '/components/stepper',
          },
          {
            name: 'Numberkeyboard 数字键盘',
            enName: 'numberkeyboard',
            type: 'component',
            show: true,
            describe: '虚拟数字键盘，用于输入密码或验证码的场景，可以配合 <a href="short-password">ShortPassword 短密码组件</a> 或自定义输入框组件使用。',
            link: '/components/numberkeyboard',
          },
          {
            name: 'Picker 选择器',
            enName: 'picker',
            type: 'component',
            show: true,
            describe: '底部弹出多项集合供用户滚动选择其中一项。',
            link: '/components/picker',
          },
          {
            name: 'Rate 评分',
            enName: 'rate',
            type: 'component',
            show: true,
            describe: '用于快速的评级操作，或对评级进行展示。',
            link: '/components/rate',
          },
          {
            name: 'Slider 滑块',
            enName: 'slider',
            type: 'component',
            show: true,
            describe: '滑动输入条，用于在给定范围内选择一个值。',
            link: '/components/slider',
          },
          {
            name: 'SearchBar 搜索栏',
            enName: 'searchbar',
            type: 'component',
            show: true,
            describe: '用于搜索场景的输入框组件。',
            link: '/components/searchbar',
          },
          {
            name: 'ShortPassword 短密码',
            enName: 'shortpassword',
            type: 'component',
            show: true,
            describe: '短密码输入框，常用于密码输入和短信验证码输入，可搭配 `Numberkeyboard 数字键盘` 组件一起使用',
            link: '/components/shortpassword',
          },
          {
            name: 'Uploader 上传',
            enName: 'uploader',
            type: 'component',
            show: true,
            describe: '用于将本地的图片或文件上传到服务器场景。',
            link: '/components/uploader',
          },
        ],
      },
    ],
    guide: [
      {
        name: '开发指南',
        enName: 'guide',
        link: '',
        children: [
          {
            name: '介绍',
            enName: 'intro',
            type: 'guide',
            show: true,
            describe: '',
            link: '/guide/intro',
            children: [],
          },
          {
            name: '快速上手',
            enName: 'start',
            type: 'guide',
            show: true,
            describe: '',
            link: '/guide/start',
            children: [],
          },
          {
            name: '颜色',
            enName: 'palette',
            type: 'guide',
            show: true,
            describe: '',
            link: '/guide/palette',
            children: [],
          },
          {
            name: '设计变量',
            enName: 'token',
            type: 'guide',
            show: true,
            describe: '',
            link: '/guide/token',
            children: [],
          },
        ],
      },
      {
        name: 'CSS全局样式库',
        enName: 'css',
        link: '',
        children: [
          {
            name: '介绍',
            enName: 'intro',
            type: 'guide',
            show: true,
            describe: '由于业内CSS原子化的盛行，组件库参考tailwindcss的设计思路，并且结合UNIAPP NVUE的样式支持给大家提供了一套原子化的CSS样式库，助力各位开发者用户高效开发业务。',
            author: 'kviewui@163.com',
            link: '/guide/css/intro',
          },
          {
            name: 'Box Sizing',
            enName: 'boxSizing',
            type: 'guide',
            show: true,
            describe: '控制浏览器如何计算元素的总大小的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/box-sizing',
          },
          {
            name: 'Display',
            enName: 'display',
            type: 'guide',
            show: true,
            describe: '控制元素显示类型的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/display',
          },
          {
            name: '溢出',
            enName: 'overflow',
            type: 'guide',
            show: true,
            describe: '',
            author: 'kviewui@163.com',
            link: '/guide/css/overflow',
          },
          {
            name: '定位',
            enName: 'position',
            type: 'guide',
            show: true,
            describe: '用于控制元素在DOM中的位置的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/position',
          },
          {
            name: '定位位置',
            enName: 'top-right-bottom-left',
            type: 'guide',
            show: true,
            describe: '用于控制定位元素的位置的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/top-right-bottom-left',
          },
          {
            name: '层级',
            enName: 'z-index',
            type: 'guide',
            show: true,
            describe: '用于控制元素的堆栈顺序的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/z-index',
          },
          {
            name: 'Flex方向',
            enName: 'flex-direction',
            type: 'guide',
            show: true,
            describe: '控制 Flex 子项的方向的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/flex-direction',
          },
          {
            name: 'Flex Wrap',
            enName: 'flex-wrap',
            type: 'guide',
            show: true,
            describe: '控制 Flex 子项是否换行的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/flex-wrap',
          },
          {
            name: 'Flex',
            enName: 'flex',
            type: 'guide',
            show: true,
            describe: '用于控制 flex 项目放大和缩小的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/flex',
          },
          {
            name: 'Flex Grow',
            enName: 'flex-grow',
            type: 'guide',
            show: true,
            describe: '控制 flex 项目放大的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/flex-grow',
          },
          {
            name: 'Flex Shrink',
            enName: 'flex-shrink',
            type: 'guide',
            show: true,
            describe: '控制 flex 项目缩小的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/flex-shrink',
          },
          {
            name: 'Grid Template Columns',
            enName: 'grid-template-columns',
            type: 'guide',
            show: true,
            describe: '用于在网格布局中指定列的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/grid-template-columns',
          },
          {
            name: 'Grid Column Start / End',
            enName: 'grid-column',
            type: 'guide',
            show: true,
            describe: '用于控制在网格列中元素的大小和放置方式的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/grid-column',
          },
          {
            name: 'Grid Template Rows',
            enName: 'grid-template-rows',
            type: 'guide',
            show: true,
            describe: '用于在网格布局中指定行的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/grid-template-rows',
          },
          {
            name: 'Grid Row Start / End',
            enName: 'grid-row',
            type: 'guide',
            show: true,
            describe: '用于控制在网格行中元素的大小和放置方式的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/grid-row',
          },
          {
            name: 'Grid Auto Flow',
            enName: 'grid-auto-flow',
            type: 'guide',
            show: true,
            describe: '用于控制网格中元素如何自动放置的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/grid-auto-flow',
          },
          {
            name: 'Grid Auto Columns',
            enName: 'grid-auto-columns',
            type: 'guide',
            show: true,
            describe: '用于控制隐式创建的网格列的大小的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/grid-auto-columns',
          },
          {
            name: 'Grid Auto Rows',
            enName: 'grid-auto-rows',
            type: 'guide',
            show: true,
            describe: '用于控制隐式创建的网格行的大小的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/grid-auto-rows',
          },
          {
            name: 'Gap',
            enName: 'gap',
            type: 'guide',
            show: true,
            describe: '用于控制隐式创建的网格行与列之间的间隙的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/gap',
          },
          {
            name: 'Justify Content',
            enName: 'justify-content',
            type: 'guide',
            show: true,
            describe: '用于控制 flex 和 grid 项目如何沿着容器的主轴定位的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/justify-content',
          },
          {
            name: 'Justify Items',
            enName: 'justify-items',
            type: 'guide',
            show: true,
            describe: '用于控制网格项目如何沿其内联轴对齐的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/justify-items',
          },
          {
            name: 'Justify Self',
            enName: 'justify-self',
            type: 'guide',
            show: true,
            describe: '用于控制单个网格项如何沿其内联轴对齐的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/justify-self',
          },
          {
            name: 'Align Content',
            enName: 'align-content',
            type: 'guide',
            show: true,
            describe: '用于控制在多行 flex 和网格容器中行的位置的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/align-content',
          },
          {
            name: 'Align Items',
            enName: 'align-items',
            type: 'guide',
            show: true,
            describe: '用于控制 Flex 和网格项如何沿着容器的横轴定位的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/align-items',
          },
          {
            name: 'Align Self',
            enName: 'align-self',
            type: 'guide',
            show: true,
            describe: '用于控制单个 flex 或网格项如何沿其容器的交叉轴定位的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/align-self',
          },
          {
            name: 'Place Content',
            enName: 'place-content',
            type: 'guide',
            show: true,
            describe: '用于同时控制内容如何在水平和垂直方向上对齐的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/place-content',
          },
          {
            name: 'Place Items',
            enName: 'place-items',
            type: 'guide',
            show: true,
            describe: '用于同时控制项目如何在水平和垂直方向对齐的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/place-items',
          },
          {
            name: 'Place Self',
            enName: 'place-self',
            type: 'guide',
            show: true,
            describe: '用于同时控制单个项目如何在水平和垂直方向上对齐的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/place-self',
          },
          {
            name: '内边距',
            enName: 'padding',
            type: 'guide',
            show: true,
            describe: '控制元素内边距的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/padding',
          },
          {
            name: '外边距',
            enName: 'margin',
            type: 'guide',
            show: true,
            describe: '控制元素外边距的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/margin',
          },
          {
            name: '宽度',
            enName: 'width',
            type: 'guide',
            show: true,
            describe: '用来设置元素宽度的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/width',
          },
          {
            name: '最小宽度',
            enName: 'min-width',
            type: 'guide',
            show: true,
            describe: '用来设置元素最小宽度的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/min-width',
          },
          {
            name: '最大宽度',
            enName: 'max-width',
            type: 'guide',
            show: true,
            describe: '用来设置元素最大宽度的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/max-width',
          },
          {
            name: '高度',
            enName: 'height',
            type: 'guide',
            show: true,
            describe: '用来设置元素高度的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/height',
          },
          {
            name: '最小高度',
            enName: 'min-height',
            type: 'guide',
            show: true,
            describe: '用来设置元素最小高度的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/min-height',
          },
          {
            name: '最大高度',
            enName: 'max-height',
            type: 'guide',
            show: true,
            describe: '用来设置元素最大高度的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/max-height',
          },
          {
            name: '字体序列',
            enName: 'font-family',
            type: 'guide',
            show: true,
            describe: '控制元素字体序列的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/font-family',
          },
          {
            name: '字体大小',
            enName: 'font-size',
            type: 'guide',
            show: true,
            describe: '用来控制元素字体大小的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/font-size',
          },
          {
            name: '字体平滑度',
            enName: 'font-smoothing',
            type: 'guide',
            show: true,
            describe: '用来控制字体平滑度的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/font-smoothing',
          },
          {
            name: '字体样式',
            enName: 'font-style',
            type: 'guide',
            show: true,
            describe: '用来控制字体样式的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/font-style',
          },
          {
            name: '字体粗细',
            enName: 'font-weight',
            type: 'guide',
            show: true,
            describe: '用来控制字体粗细的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/font-weight',
          },
          {
            name: 'Font Variant Numeric',
            enName: 'font-variant-numeric',
            type: 'guide',
            show: true,
            describe: '用来控制数字变形的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/font-variant-numeric',
          },
          {
            name: '字母间距',
            enName: 'letter-spacing',
            type: 'guide',
            show: true,
            describe: '用于控制元素的字距（字母间距）的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/letter-spacing',
          },
          {
            name: '行高',
            enName: 'line-height',
            type: 'guide',
            show: true,
            describe: '用于控制元素的前行距（行高）的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/line-height',
          },
          {
            name: '占位文本色',
            enName: 'placeholder-color',
            type: 'guide',
            show: false,
            describe: '用于控制占位文本颜色的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/placeholder-color',
          },
          {
            name: '文本对齐',
            enName: 'text-align',
            type: 'guide',
            show: true,
            describe: '用来控制文本对齐的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/text-align',
          },
          {
            name: '文本颜色',
            enName: 'text-color',
            type: 'guide',
            show: true,
            describe: '用于控制元素的文字颜色的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/text-color',
          },
          {
            name: '文本装饰',
            enName: 'text-decoration',
            type: 'guide',
            show: true,
            describe: '用于控制文本装饰的实用功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/text-decoration',
          },
          {
            name: '文本转换',
            enName: 'text-transform',
            type: 'guide',
            show: true,
            describe: '用于控制文本转换的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/text-transform',
          },
          {
            name: '文本溢出',
            enName: 'text-overflow',
            type: 'guide',
            show: true,
            describe: '用于控制元素中文本溢出的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/text-overflow',
          },
          {
            name: '垂直对齐',
            enName: 'vertical-align',
            type: 'guide',
            show: true,
            describe: '用于控制内联或表格单元格的垂直对齐的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/vertical-align',
          },
          {
            name: '空格',
            enName: 'whitespace',
            type: 'guide',
            show: true,
            describe: '用于控制元素的空格属性的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/whitespace',
          },
          {
            name: '文本换行',
            enName: 'word-break',
            type: 'guide',
            show: true,
            describe: '用于控制元素中的换行符的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/word-break',
          },
          {
            name: '背景图像固定',
            enName: 'background-attachment',
            type: 'guide',
            show: true,
            describe: '用于控制背景图片在滚动时的表现的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/background-attachment',
          },
          {
            name: '背景图像裁剪',
            enName: 'background-clip',
            type: 'guide',
            show: true,
            describe: '用于控制元素背景的边界框的实用功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/background-clip',
          },
          {
            name: '背景颜色',
            enName: 'background-color',
            type: 'guide',
            show: true,
            describe: '用于控制元素背景色的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/background-color',
          },
          {
            name: 'Background Origin',
            enName: 'background-origin',
            type: 'guide',
            show: true,
            describe: '用于控制元素背景相对于边框、填充和内容的位置的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/background-origin',
          },
          {
            name: '背景图像位置',
            enName: 'background-position',
            type: 'guide',
            show: true,
            describe: '用于控制元素背景图片位置的功能类',
            author: 'kviewui@163.com',
            link: '/guide/css/background-position',
          },
          {
            name: '背景图像重复',
            enName: 'background-repeat',
            type: 'guide',
            show: true,
            describe: '用于控制元素背景图像重复的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/background-repeat',
          },
          {
            name: '背景图像大小',
            enName: 'background-size',
            type: 'guide',
            show: true,
            describe: '用于控制元素背景图背景大小的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/background-size',
          },
          {
            name: '背景渐变',
            enName: 'background-gradient',
            type: 'guide',
            show: true,
            describe: '用于控制元素背景渐变的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/background-gradient',
          },
          {
            name: '边框圆角',
            enName: 'border-radius',
            type: 'guide',
            show: true,
            describe: '用于控制元素边框半径的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/border-radius',
          },
          {
            name: '边框厚度',
            enName: 'border-width',
            type: 'guide',
            show: true,
            describe: '用于控制元素边框宽度的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/border-width',
          },
          {
            name: '边框样式',
            enName: 'border-style',
            type: 'guide',
            show: true,
            describe: '用于控制元素边框样式的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/border-style',
          },
          {
            name: '边框颜色',
            enName: 'border-color',
            type: 'guide',
            show: true,
            describe: '用于控制元素边框颜色的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/border-color',
          },
          {
            name: '不透明度',
            enName: 'opacity',
            type: 'guide',
            show: true,
            describe: '用于控制元素不透明度的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/opacity',
          },
          {
            name: '模糊滤镜',
            enName: 'blur',
            type: 'guide',
            show: true,
            describe: '用于将模糊滤镜应用于元素的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/blur',
          },
          {
            name: '动画',
            enName: 'animation',
            type: 'guide',
            show: true,
            describe: '使元素产生动画的CSS动画功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/animation',
          },
          {
            name: '2D / 3D转换',
            enName: 'transform',
            type: 'guide',
            show: true,
            describe: '用于控制变换行为的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/transform',
          },
          {
            name: '变换原点',
            enName: 'transform-origin',
            type: 'guide',
            show: true,
            describe: '用于指定元素变换源点的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/transform-origin',
          },
          {
            name: '旋转',
            enName: 'rotate',
            type: 'guide',
            show: true,
            describe: '用于旋转元素的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/rotate',
          },
          {
            name: '大小调整',
            enName: 'resize',
            type: 'guide',
            show: true,
            describe: '用于控制一个元素如何调整大小的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/resize',
          },
          {
            name: '用户选择',
            enName: 'user-select',
            type: 'guide',
            show: true,
            describe: '用于控制用户是否可以在元素中选择文本的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/user-select',
          },
          {
            name: '填充',
            enName: 'fill',
            type: 'guide',
            show: true,
            describe: '用于设置 SVG 元素填充(fill)样式的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/fill',
          },
          {
            name: '线条',
            enName: 'stroke',
            type: 'guide',
            show: true,
            describe: '用于设置 SVG 元素线条(stroke)样式的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/stroke',
          },
          {
            name: '线条厚度',
            enName: 'stroke-width',
            type: 'guide',
            show: true,
            describe: '用于设置 SVG 元素线条厚度(Stroke Width)的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/stroke-width',
          },
          {
            name: '屏幕阅读器',
            enName: 'screen-readers',
            type: 'guide',
            show: true,
            describe: '用于改善屏幕阅读器的可访问性的功能类。',
            author: 'kviewui@163.com',
            link: '/guide/css/screen-readers',
          },
        ],
      },
    ],
  }
}
