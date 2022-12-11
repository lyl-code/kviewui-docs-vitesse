<script setup lang="ts">
// import { ucfirst } from 'locutus/php/strings'
import * as lodash from 'lodash'
import { Message } from '@arco-design/web-vue'
import App from '~/App.vue'
import { colorPresetNames, colors } from '~/composables/colors'
import { copy } from '~/composables/utils'

const app = createApp(App)
Message._context = app._context

const light = colors.light
const dark = colors.dark

const store = useUserStore()
const { darkMode } = storeToRefs(store)
const alertShow = ref(false)

const changeMove = (color: string) => {
  copy(color)
  // Message.success('复制成功')
  // alertShow.value = true
  // setTimeout(() => {
  //   alertShow.value = false
  // }, 1000)
}

// const isDarkMode = ref(darkMode.value)

const changeDark = () => {
  getCurrentInstance()?.appContext.config.globalProperties.$message('哈哈')
  toggleDark()
  store.setMode(isDark.value)
  if (isDark.value)
    document.body.setAttribute('arco-theme', 'dark')

  else
    document.body.removeAttribute('arco-theme')
}
</script>

<template :key="darkMode">
  <Alert v-if="alertShow" />
  <div :key="darkMode">
    <a-tabs :default-active-key="darkMode ? '2' : '1'" type="capsule" position="top" @change="changeDark()">
      <a-tab-pane key="1" title="明亮模式">
        <div class="grid-cols-3 grid gap-5 mt-10">
          <div v-for="(item, index) in colorPresetNames" :key="index" class="flex flex-col justify-center items-center">
            <div class="text-lg font-black text-black mb-3">
              {{ lodash.upperFirst(item.enName) }} / {{ item.name }}
            </div>
            <template v-if="!darkMode">
              <div
                v-for="(childItem, childIndex) in light[item.enName]"
                :key="childIndex" class="h-10 w-full flex items-center justify-between px-3 cursor-pointer hover:scale-105 hover:transition hover:duration-200" :class="childIndex > 4 ? 'text-white' : 'text-black'" :style="{
                  'background-color': childItem,
                  'border-top-left-radius': childIndex === 0 ? '8px' : '0px',
                  'border-top-right-radius': childIndex === 0 ? '8px' : '0px',
                  'border-bottom-left-radius': childIndex + 1 === light[item.enName].length ? '8px' : '0px',
                  'border-bottom-right-radius': childIndex + 1 === light[item.enName].length ? '8px' : '0px',
                }" @click="changeMove(childItem)"
              >
                <div class="flex justify-between w-full">
                  <span>{{ item.enName }}-{{ childIndex }}</span>
                  <span>{{ childItem }}</span>
                </div>
              </div>
            </template>
            <template v-else>
              <div
                v-for="(childItem, childIndex) in dark[item.enName]" :key="childIndex" class="h-10 w-full flex items-center justify-between px-3 cursor-pointer hover:scale-105 hover:transition hover:duration-200" :style="{
                  'background-color': childItem,
                  'border-top-left-radius': childIndex === 0 ? '8px' : '0px',
                  'border-top-right-radius': childIndex === 0 ? '8px' : '0px',
                  'border-bottom-left-radius': childIndex + 1 === light[item.enName].length ? '8px' : '0px',
                  'border-bottom-right-radius': childIndex + 1 === light[item.enName].length ? '8px' : '0px',
                }"
              >
                <div class="flex justify-between w-full">
                  <span :class="childIndex > 4 ? 'dark:!text-black' : 'dark:!text-white'">{{ item.enName }}-{{ childIndex }}</span>
                  <span>{{ childItem }}</span>
                </div>
              </div>
            </template>
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" title="暗黑模式">
        <div class="grid-cols-3 grid gap-5 mt-10">
          <div v-for="(item, index) in colorPresetNames" :key="index" class="flex flex-col justify-center items-center">
            <div class="text-lg font-black text-black mb-3">
              {{ lodash.upperFirst(item.enName) }} / {{ item.name }}
            </div>
            <template v-if="isDark">
              <div
                v-for="(childItem, childIndex) in dark[item.enName]" :key="childIndex" class="h-10 w-full flex items-center justify-between px-3 cursor-pointer hover:scale-105 hover:transition hover:duration-200" :style="{
                  'background-color': childItem,
                  'border-top-left-radius': childIndex === 0 ? '8px' : '0px',
                  'border-top-right-radius': childIndex === 0 ? '8px' : '0px',
                  'border-bottom-left-radius': childIndex + 1 === light[item.enName].length ? '8px' : '0px',
                  'border-bottom-right-radius': childIndex + 1 === light[item.enName].length ? '8px' : '0px',
                }"
              >
                <div class="flex justify-between w-full">
                  <span :class="childIndex > 4 ? 'dark:!text-black' : 'dark:!text-white'">{{ item.enName }}-{{ childIndex }}</span>
                  <span>{{ childItem }}</span>
                </div>
              </div>
            </template>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
