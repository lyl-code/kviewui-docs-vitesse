interface Features {
  icon: string
  title: string
  details: string
}

export const features = ref<Array<Features>>([{
  icon: '💡',
  title: '完全TypeScript',
  details: '所有组件开发均为原生ts开发，完善的类型支持',
}, {
  icon: '⚡️',
  title: '暗黑模式',
  details: '支持应用暗黑模式切换和组件暗黑模式切换',
}, {
  icon: '🛠️',
  title: '丰富的组件库',
  details: '提供50+个高质量通用组件',
}, {
  icon: '🛠️',
  title: '主题定制',
  details: '内置70+个性化主题可供选择，同时支持自定义主题定制 ',
}, {
  icon: '🔩',
  title: '全局配置',
  details: '提供全局配置组件统一页面内所有组件的共有属性内容',
}, {
  icon: '🔑',
  title: '多端兼容',
  details: '基于UNI-APP框架，组件支持H5/APP/小程序多个运行环境',
}])
