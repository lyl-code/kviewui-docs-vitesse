import fs, { constants } from 'fs'
import { access } from 'fs/promises'
import path from 'path'
import sd from 'silly-datetime'
import { menus } from '../src/composables/aside'
import { std } from './std'

// 引入readline模块
const readline = require('readline')

// 创建readline接口实例
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const fwFile = (str: string, flag: any, fileName: string, filePath: string) => {
  fs.writeFileSync(path.resolve(process.cwd(), `./src/pages/components/${fileName}.md`), str, {
    flag,
  })
}

/**
 * 读取aside配置
 * @param fileName 页面名称
 * @return
 */
const readAside = (fileName: string) => {
  return (menus().component.find(menu => menu.children.find(item => item.enName === fileName)))?.children.find(item => item.enName === fileName)
}

// 调用接口方法
r1.question('请输入页面名称：\t', async (answer) => {
  console.log('页面名称是：', answer)
  // 根据输入的页面名称获取定义的页面配置信息
  const readAsideInfo = readAside(answer)
  if (!readAsideInfo) {
    console.warn(std('该页面配置不存在！', 'danger'))
    r1.close()
  }
  console.log('开始创建页面...')
  // 设置文件路径
  const filePath = path.resolve(process.cwd(), `./src/pages/components/${answer}.md`)
  // 自定义页面初始化内容
  const content
  = `<!-- 
该文件由系统自动生成
@Author <kviewui@163.com>
@CreateDate ${sd.format(new Date(), 'YYYY-MM-DD HH:mm')}
-->
# ${readAsideInfo?.name}

### 介绍
${readAsideInfo?.describe}

<TipsIntroduce />

## 代码演示

### 基本用法

## API

### Props

### Slots

### Events
  `
  try {
    await access(filePath, constants.R_OK | constants.W_OK)
    console.warn(std('页面文件已存在！', 'danger'))
  }
  catch {
  // 初始化内容写入文件
    fwFile(content, 'w', answer, filePath)
    console.log(std(`页面创建完成，页面路径：${filePath}`, 'success'))
  }
  // 不加close，则不会结束
  r1.close()
})

// close事件监听
r1.on('close', () => {
  // 结束程序
  process.exit(0)
})
