<script setup lang="ts">
import { colors } from '~/composables/colors'
import { fontWeight, fonts, radiusSize } from '~/composables/size'
const props = defineProps({
  theme: {
    type: String,
    default: '',
  },
})

const store = useUserStore()
const { darkMode } = storeToRefs(store)
const theme = ref(props.theme ? props.theme : 'primary')

const modeType = ref(!isDark ? 'dark' : 'light')

watchEffect(() => {
  console.log(darkMode.value, 'hhhaha')
  modeType.value = darkMode.value ? 'dark' : 'light'
})

console.log(colors)
console.log(darkMode.value)

const columns = [
  {
    title: '变量名',
    dataIndex: 'dataName',
    slotName: 'dataName',
    width: 260,
  },
  {
    title: '变量值',
    dataIndex: 'dataValue',
    slotName: 'dataValue',
    width: 200,
  },
  {
    title: 'CSS变量',
    dataIndex: 'cssValue',
    width: 200,
    slotName: 'cssValue',
  },
  {
    title: '使用场景',
    dataIndex: 'useScene',
    width: 550,
  },
]

const mainColorPanel = reactive([{
  name: '品牌色',
  theme: 'primary',
}, {
  name: '成功色',
  theme: 'success',
}, {
  name: '危险色',
  theme: 'danger',
}, {
  name: '警告色',
  theme: 'warning',
}, {
  name: '链接色',
  theme: 'link',
}, {
  name: '信息色',
  theme: 'info',
}])

const data = reactive([{
  key: 5,
  useScene: '常规使用',
  colorName: theme.value,
}, {
  key: 6,
  useScene: '点击状态',
  colorName: theme.value,
}, {
  key: 2,
  useScene: '一般禁用',
  colorName: theme.value,
}, {
  key: 1,
  useScene: '文字禁用',
  colorName: theme.value,
}, {
  key: 0,
  useScene: '白底悬浮',
  colorName: theme.value,
}, {
  key: 3,
  useScene: '特殊场景',
  colorName: theme.value,
}])

const fontData = reactive([{
  key: 'base',
  useScene: '正文-常规',
}, {
  key: 'sm',
  useScene: '正文-中',
}, {
  key: 'sm',
  useScene: '辅助文案/次要文案',
}, {
  key: 'xs',
  useScene: '正文-小',
}, {
  key: 'lg',
  useScene: '标题-小',
}, {
  key: 'xl',
  useScene: '标题-中',
}, {
  key: '2xl',
  useScene: '标题-大',
}, {
  key: '4xl',
  useScene: '运营标题-小',
}, {
  key: '5xl',
  useScene: '运营标题-中',
}, {
  key: '6xl',
  useScene: '运营标题-大',
}])

const radiusData = reactive([{
  key: 'none',
  useScene: '直角',
}, {
  key: 'xs',
  useScene: '常规-小',
}, {
  key: 'sm',
  useScene: '常规-中',
}, {
  key: 'base',
  useScene: '常规',
}, {
  key: 'lg',
  useScene: '较大',
}, {
  key: 'xl',
  useScene: '大',
}, {
  key: 'max',
  useScene: '全圆角',
}])

const fontWeightData = reactive([{
  key: 'thin',
  useScene: '极细',
}, {
  key: 'extralight',
  useScene: '纤细',
}, {
  key: 'light',
  useScene: '细体',
}, {
  key: 'normal',
  useScene: '常规',
}, {
  key: 'medium',
  useScene: '中等加粗',
}, {
  key: 'semibold',
  useScene: '半粗',
}, {
  key: 'bold',
  useScene: '粗体',
}, {
  key: 'extrabold',
  useScene: '中黑',
}, {
  key: 'black',
  useScene: '黑体',
}])

const shadeOpenNessData = reactive([{
  key: '0',
  dataName: 'shadeOpenness',
  dataValue: 0.6,
  cssValue: '-',
  useScene: '黑色遮罩透明度',
}])
</script>

<template>
  <div class="w-screen">
    <!-- 功能色设计变量 -->
    <template v-for="(item, index) in mainColorPanel" :key="index">
      <div class="mb-10">
        <div class="text-2xl text-black mb-3">
          {{ item.name }}
        </div>
        <a-table :columns="columns" :data="data" column-resizable :bordered="false" :pagination="false">
          <template #dataName="{ record }">
            <div class="flex items-center">
              <div
                class="w-4.5 h-4.5 rounded-sm mr-2" :style="{
                  'background-color': colors[modeType][item.theme][record.key],
                }"
              />
              <span>{{ `${item.theme}[${record.key}]` }}</span>
            </div>
          </template>
          <template #cssValue="{ record }">
            <span>{{ `${item.theme}-${record.key}` }}</span>
          </template>
          <template #dataValue="{ record }">
            <span>{{ colors[modeType][item.theme][record.key] }}</span>
          </template>
        </a-table>
      </div>
    </template>
    <!-- 字体大小设计变量 -->
    <div class="mb-10">
      <div class="text-2xl text-black mb-3">
        字体大小
      </div>
      <a-table :columns="columns" :data="fontData" column-resizable :bordered="false" :pagination="false">
        <template #dataName="{ record }">
          <div class="flex items-center">
            <span>{{ `fonts['${record.key}']` }}</span>
          </div>
        </template>
        <template #cssValue="{ record }">
          <span>{{ `text-${record.key}` }}</span>
        </template>
        <template #dataValue="{ record }">
          <span>{{ fonts[record.key] }}rpx</span>
        </template>
      </a-table>
    </div>
    <!-- 边框圆角 -->
    <div class="mb-10">
      <div class="text-2xl text-black mb-3">
        边框圆角
      </div>
      <a-table :columns="columns" :data="radiusData" column-resizable :bordered="false" :pagination="false">
        <template #cssValue="{ record }">
          <span>{{ record.key }}</span>
        </template>
        <template #dataValue="{ record }">
          <span>{{ radiusSize[record.key] }}rpx</span>
        </template>
        <template #dataName="{ record }">
          <span>{{ `rounded-${record.key}` }}</span>
        </template>
      </a-table>
    </div>
    <!-- 字重 -->
    <div class="mb-10">
      <div class="text-2xl text-black mb-3">
        字重
      </div>
      <a-table :columns="columns" :data="fontWeightData" column-resizable :bordered="false" :pagination="false">
        <template #dataName="{ record }">
          <div class="flex items-center">
            <span>{{ `fontWeight['${record.key}']` }}</span>
          </div>
        </template>
        <template #cssValue="{ record }">
          <span>{{ `font-${record.key}` }}</span>
        </template>
        <template #dataValue="{ record }">
          <span>{{ fontWeight[record.key] }}rpx</span>
        </template>
      </a-table>
    </div>
    <!-- 行高基数 -->
    <div class="mb-10">
      <div class="text-2xl text-black mb-3">
        行高基数
      </div>
      <div class="tracking-widest leading-loose">
        按照国际无障碍网页使用标准中的行高公式<a-tag>lineHeight = fontSize * 1.5</a-tag>，既为<a-tag>字体大小 * 1.5倍</a-tag>
        实际测试发现按照上面公式随着字号越大，<p>行高则出现阶梯式增大，对移动端视觉效果不是很好，于是对行高计算做出一些调整，使行高由原来的字体大小成倍变化改为基数增加，</p>
        <p>得出如下公式：</p>
        <p><a-tag>lineHeight = fontSize + 8</a-tag>，行高基数为<a-tag>8</a-tag></p>
        <p>注意：如果字体单位是rpx的话，行高基数也需要相应转化</p>
      </div>
    </div>
    <!-- 遮罩透明度 -->
    <div class="mb-10">
      <div class="text-2xl text-black mb-3">
        遮罩透明度
      </div>
      <a-table :columns="columns" :data="shadeOpenNessData" column-resizable :bordered="false" :pagination="false" />
    </div>
  </div>
</template>
