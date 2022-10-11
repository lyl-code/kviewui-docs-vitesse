<script setup lang="ts">
import Prism from 'prismjs'
import '../assets/style/prism.scss'
// import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/toolbar/prism-toolbar'
// import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
// import 'prismjs/plugins/show-language/prism-show-language'

const props = defineProps({
  linkCode: {
    type: String,
    default: 'https://gitee.com/bad_-code/kviewui/tree/master/components/kui-button',
  },
  showPath: {
    type: String,
    default: 'button/ThemeButton',
  },
  language: {
    type: String,
    default: 'vue',
  },
})

const source = ref<string>()

onMounted(async () => {
  const isDev = import.meta.env.MODE === 'development'
  if (isDev) {
    const modules = import.meta.glob('../pages/components/**/*.vue', {
      as: 'raw',
    })
    /* @vite-ignore */
    // const data: any = await import(/* @vite-ignore */ `../pages/components/examples/${props.showPath}.vue?raw`)
    const data: any = modules[`../pages/components/examples/${props.showPath}.vue`]
    await data().then((res: any) => {
      source.value = res
      nextTick(() => {
        Prism.highlightAll()
      })
    })
    // sourceCode.value = data.default
  }
  else {
    // source.value = await fetch(`/pages/components/examples/${props.showPath}.vue`).then(res => res.text())
    const modules = import.meta.glob('../pages/components/**/*.vue', {
      as: 'raw',
    })
    /* @vite-ignore */
    // const data: any = await import(/* @vite-ignore */ `../pages/components/examples/${props.showPath}.vue?raw`)
    const data: any = modules[`../pages/components/examples/${props.showPath}.vue`]
    await data().then((res: any) => {
      source.value = res
      nextTick(() => {
        Prism.highlightAll()
      })
    })
  }
})

const isShow = ref<Boolean>(true)

const showAlert = ref(false)

const {
  text,
  copy,
  copied,
  isSupported,
} = useClipboard({ source })

const updateShow = (v: boolean) => {
  console.log(v)
}

const showCodeOnline = () => {
  showAlert.value = true
  setTimeout(() => {
    showAlert.value = false
  }, 2500)
}
</script>

<template>
  <div class="border-t h-10 flex items-center justify-end p-2">
    <ul class="flex items-center">
      <li title="查看组件源码" class="code-preview-icon">
        <a target="__blank" :href="linkCode">
          <div class="i-carbon-logo-github text-2xl text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
        </a>
      </li>
      <li title="在线编辑" class="code-preview-icon">
        <div class="i-carbon-code text-2xl text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" @click="showCodeOnline" />
      </li>
      <li title="复制" class="code-preview-icon">
        <div class="i-carbon-copy text-2xl text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" @click="copy()" />
      </li>
      <!-- <li title="查看代码" class="code-preview-icon">
        <svg
          class="icon-svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          data-v-65a7fb6c=""
          @click="openAndCloseCode"
        >
          <path
            fill="currentColor"
            d="m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"
          />
        </svg>
      </li> -->
    </ul>
  </div>
  <!-- <div v-if="copied" class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
    <span class="font-medium">代码复制成功!</span>
  </div> -->
  <Alert v-if="copied" />
  <!-- 在线编辑 -->
  <Alert v-if="showAlert" message="在线编辑功能开发中..." theme="warning" />
  <transition name="scale">
    <div v-show="isShow" class="relative">
      <div class="py-12px px-24px rounded-xl !bg-gray-800 relative">
        <pre
          class="language-vue !bg-gray-800"
          data-language="vue"
        ><code class="language-html">{{ source }}</code></pre>
        <div class="absolute top-4 right-4 text-gray-500">
          {{ props.language }}
        </div>
      </div>
      <div
        class="group flex justify-center items-center h-12 cursor-pointer sticky1 bottom-2 !hidden"
        @click="openAndCloseCode"
      >
        <svg
          class="h-4 w-4 group-hover:text-green mr-2 transition"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          data-v-65a7fb6c=""
        >
          <path fill="currentColor" d="M512 320 192 704h639.936z" />
        </svg>
        <span class="group-hover:text-green transition">隐藏源代码</span>
      </div>
    </div>
  </transition>
</template>

<style>
  ul,li{ padding:0;margin:0;list-style:none}

  /*@layer components {*/
  .code-preview-icon {
    @apply ml-4 cursor-pointer transition !important;
  }
  .icon-svg {
    @apply h-4 w-4 text-gray-500 hover:text-black;
  }
  /*}*/
  .scale-enter-from,
  .scale-leave-to {
    transform: scale(0);
  }
  .scale-leave-from,
  .scale-enter-to {
    transform: scale(1);
  }
  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.3s ease-in-out;
  }
</style>
