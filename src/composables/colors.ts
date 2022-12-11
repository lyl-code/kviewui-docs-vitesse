/**
 * 基础调色板，需满足WCAG 2.0标准 (https://www.w3.org/TR/WCAG20/)
 * 参考arco design的梯度色彩生成算法，将颜色分为0-9 共10个梯度，主色定义为5，索引大于5为暗色，小于5为亮色
 */
import { kviewUIColor } from 'kviewui-color'

interface colorType {
  red: string
  orangered: string
  orange: string
  gold: string
  yellow: string
  lime: string
  green: string
  brandgreen: string
  cyan: string
  blue: string
  deepblue: string
  purple: string
  pinkpurple: string
  magenta: string
  grey: string
  primary: string
  success: string
  danger: string
  warning: string
  link: string
  info: string
}

// 获取组件库预设亮色主色值
const getPresetColor = (key: string): string => {
  return kviewUIColor.getPresetColors()[key].primary
}

// 组件库预设色板名称
export const colorPresetNames = [{
  name: '浪漫红',
  enName: 'red',
}, {
  name: '晚秋红',
  enName: 'orangered',
}, {
  name: '活力橙',
  enName: 'orange',
}, {
  name: '黄昏色',
  enName: 'gold',
}, {
  name: '柠檬黄',
  enName: 'yellow',
}, {
  name: '新生绿',
  enName: 'lime',
}, {
  name: '翡翠绿',
  enName: 'green',
}, {
  name: '碧涛青',
  enName: 'cyan',
}, {
  name: '海空蓝',
  enName: 'blue',
}, {
  name: '极致蓝',
  enName: 'deepblue',
}, {
  name: '暗夜紫',
  enName: 'purple',
}, {
  name: '青春紫',
  enName: 'pinkpurple',
}, {
  name: '品红色',
  enName: 'magenta',
}, {
  name: '中性灰',
  enName: 'grey',
}]

// 组件库预设调色板
export const colorPresetPanel: colorType = {
  red: getPresetColor('red'), // 红色 AA(5.67)
  orangered: getPresetColor('orangered'), // 橙红色 AAA(13.63)
  orange: getPresetColor('orange'), // 橙色 AAA(8.19)
  gold: getPresetColor('gold'), // 黄昏色 AAA(12.0)
  yellow: getPresetColor('yellow'), // 黄色 AAA(15.32)
  lime: getPresetColor('lime'), // 新生绿 AAA(12.62)
  green: getPresetColor('green'), // 绿色 AAA(7.56)
  brandgreen: getPresetColor('green'), // 活力绿 AAA(8.47)
  cyan: getPresetColor('cyan'), // 青色 AAA(10.23)
  blue: getPresetColor('blue'), // 蓝色 AA(6.58)
  deepblue: getPresetColor('arcoblue'), // 极致蓝 AA(5.19)
  purple: getPresetColor('purple'), // 暗夜紫 AA(6.94)
  pinkpurple: getPresetColor('pinkpurple'), // 青春紫 AA(5.10)
  magenta: getPresetColor('magenta'), // 品红 AA(5.81)
  grey: getPresetColor('gray'), // 中性灰 AA(6.48)
  // 以下为功能色设置
  primary: getPresetColor('green'), // 品牌色
  success: getPresetColor('green'), // 成功色
  danger: getPresetColor('red'), // 危险色
  warning: getPresetColor('orange'), // 警告色
  link: getPresetColor('blue'), // 链接色
  info: getPresetColor('blue'), // 信息色
}

// 基础主色
const colorPresetData: colorType = {
  red: colorPresetPanel.red, // 红色 AA(5.67)
  orangered: colorPresetPanel.orangered, // 橙红色 AAA(13.63)
  orange: colorPresetPanel.orange, // 橙色 AAA(8.19)
  gold: colorPresetPanel.gold, // 黄昏色 AAA(12.0)
  yellow: colorPresetPanel.yellow, // 黄色 AAA(15.32)
  lime: colorPresetPanel.lime, // 新生绿 AAA(12.62)
  green: colorPresetPanel.green, // 绿色 AAA(7.56)
  brandgreen: colorPresetPanel.brandgreen, // 活力绿 AAA(8.47)
  cyan: colorPresetPanel.cyan, // 青色 AAA(10.23)
  blue: colorPresetPanel.blue, // 蓝色 AA(6.58)
  deepblue: colorPresetPanel.deepblue, // 极致蓝 AA(5.19)
  purple: colorPresetPanel.purple, // 暗夜紫 AA(6.94)
  pinkpurple: colorPresetPanel.pinkpurple, // 青春紫 AA(5.10)
  magenta: colorPresetPanel.magenta, // 品红 AA(5.81)
  grey: colorPresetPanel.grey, // 中性灰 AA(6.48)
  // 以下为功能色设置
  primary: colorPresetPanel.primary, // 品牌色
  success: colorPresetPanel.success, // 成功色
  danger: colorPresetPanel.danger, // 危险色
  warning: colorPresetPanel.warning, // 警告色
  link: colorPresetPanel.link, // 链接色
  info: colorPresetPanel.info,
}

// 亮色/暗色色板
const colorPalette: Function = (color: string, index: number, dark = false): String => {
  return kviewUIColor.generate(color, { dark, list: false, index })
}

// 根据色板生成主色的阶梯色阶
const makeColorByPalette: Function = (color: string, dark: boolean): Array<string> => {
  const colorData: any = []
  for (let i = 1; i <= 10; i++)
    colorData.push(colorPalette(colorPresetData[color], i, dark))

  // 灰色单独处理
  if (color === 'grey' && dark) {
    return [
      '#17171a',
      '#2e2e30',
      '#484849',
      '#5f5f60',
      '#78787a',
      '#929293',
      '#ababac',
      '#c5c5c5',
      '#dfdfdf',
      '#f6f6f6',
    ]
  }

  if (color === 'grey' && !dark) {
    return [
      '#f7f8fa',
      '#f2f3f5',
      '#e5e6eb',
      '#c9cdd4',
      '#a9aeb8',
      '#86909c',
      '#6b7785',
      '#4e5969',
      '#272e3b',
      '#1d2129',
    ]
  }

  return colorData
}

// 根据基础主色生成亮色/暗色模式的阶梯色阶色板
const makeModeColors: Function = (dark: boolean): Object => {
  const modeColors: Array<string> = []
  // 获取基础主色key
  const colorPresetKey: Array<string> = Object.keys(colorPresetData)
  colorPresetKey.map((item) => {
    if (!dark) {
      modeColors[item] = []
      modeColors[item] = makeColorByPalette(item, dark)
    }
    else {
      modeColors[item] = makeColorByPalette(item, !!dark)
    }
  })

  return modeColors
}

// 根据颜色色调生成暗黑模式色调
const darken: Function = (color: string, alpha = 0.2): String => {
  const isDarken = new Color(color).isDark()
  return isDarken ? new Color(color).lighten(alpha) : new Color(color).darken(alpha)
}

export const colors = {
  light: makeModeColors(false),
  dark: makeModeColors(true),
  darken,
}
