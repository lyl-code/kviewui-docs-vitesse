<script setup lang="ts">
const route = useRoute()

const pathname = window.location.pathname
const isComponentRoute = ref(pathname.includes('/component'))
watch(() => route.path, (newPath, oldPath) => {
  nextTick(() => {
    isComponentRoute.value = newPath.includes('/component')
  })
}, { immediate: true })

const showAside = ref(false)

const asideAnimateClass = ref('animated-slide-in-left')
const asideAnimateBodyClass = ref('animated-fade-in')

const hideAside = () => {
  asideAnimateClass.value = 'animated-slide-out-left'
  asideAnimateBodyClass.value = 'animated-fade-out'
  setTimeout(() => {
    showAside.value = false
    asideAnimateClass.value = 'animated-slide-in-left'
    asideAnimateBodyClass.value = 'animated-fade-in'
  }, 500)
}

let timer: NodeJS.Timeout

const goTop = () => {
  // document.getElementById('content').scrollTop = 0
  timer = setInterval(() => {
    const top = document.getElementById('content').scrollTop
    const speed = top / 4
    if (document.getElementById('content').scrollTop != 0)
      document.getElementById('content').scrollTop -= speed

    if (top == 0)
      clearInterval(timer)
  }, 30)
}
</script>

<template>
  <header>
    <Header />
  </header>
  <div class="flex box-border !overflow-y-hidden">
    <div class="w-screen h-60px border-t border-y fixed flex justify-between items-center top-60px lg:hidden">
      <button class="icon-btn mx-4 !outline-none" @click="showAside = !showAside">
        <div class="color-gray-600 dark:!color-gray text-xl color-gray" i="carbon-menu" />
      </button>
      <div class="">
        <button class="icon-btn mx-6 lt-sm:mx-4 !outline-none" @click="goTop">
          <div class="color-gray-600 dark:!color-gray text-xl color-gray" i="carbon-up-to-top" />
        </button>
      </div>
    </div>

    <div
      class="container !max-w-screen-2xl lg:px-6 !mx-auto grid-leyout !scrollbar !scrollbar-rounded !scrollbar-w-4px flex justify-between relative top-60px lt-lg:top-120px box-border"
    >
      <aside
        class="sidebar min-w-200px py-30px pb-160px fixed1 z-50 lg:z-0 h-screen !overflow-auto !scrollbar !scrollbar-rounded !scrollbar-w-4px !scrollbar-thumb-color-green-500/50 dark:!scrollbar-thumb-color-green-700/50 lt-lg:!hidden"
      >
        <Asider />
      </aside>
      <!-- <main class="pt-0 pl-30 text-center text-gray-700 dark:text-gray-200 !h-screen">
      <RouterView class="lg:max-w-280" />
    </main> -->
      <RouterView
        id="content"
        class="!block lg:max-w-280 !h-screen !overflow-auto !scrollbar !scrollbar-rounded !scrollbar-w-0px !scrollbar-thumb-color-transparent box-border px-10 pt-30px pb-176px"
      />
    </div>
    <!-- <div class="color-black flex items-center">
      [Default Layout]
    </div> -->
    <div v-show="isComponentRoute" class="pr-0 lt-lg:mt-0px flex items-center">
      <Simulator
        class=" lt-sm:!hidden"
      />
    </div>
  </div>
  <div
    v-if="showAside" class="h-screen w-screen fixed overflow-y-hidden z999 inset-0 aside-overlay animated"
    :class="asideAnimateBodyClass"
    @click="hideAside"
  >
    <aside
      class="sidebar bg-white dark:bg-gray-900 min-w-200px py-30px pb-160px fixed z-50 lg:z-0 h-screen !overflow-auto !scrollbar !scrollbar-rounded !scrollbar-w-4px !scrollbar-thumb-color-green-500/50 animated animated-duration-500"
      :class="asideAnimateClass"
    >
      <Asider />
    </aside>
  </div>
</template>
