<script setup lang="ts">
console.log(22222)
const route = useRoute()

const pathname = window.location.pathname
const isComponentRoute = ref(pathname.includes('/component'))
watch(() => route.path, (newPath, oldPath) => {
  nextTick(() => {
    isComponentRoute.value = newPath.includes('/component')
  })
}, { immediate: true })
</script>

<template>
  <header>
    <Header />
  </header>
  <div class="flex box-border !overflow-y-hidden">
    <div
      class="container !max-w-screen-2xl lg:px-6 !mx-auto grid-leyout !scrollbar !scrollbar-rounded !scrollbar-w-4px flex justify-between relative top-88px box-border"
    >
      <aside
        class="sidebar min-w-200px pb-160px fixed1 z-50 lg:z-0 h-screen !overflow-auto !scrollbar !scrollbar-rounded !scrollbar-w-4px !scrollbar-thumb-color-green-500/50 lt-lg:!hidden"
      >
        <Asider />
      </aside>
      <!-- <main class="pt-0 pl-30 text-center text-gray-700 dark:text-gray-200 !h-screen">
      <RouterView class="lg:max-w-280" />
    </main> -->
      <RouterView class="lg:max-w-280 !h-screen !overflow-auto !scrollbar !scrollbar-rounded !scrollbar-w-0px !scrollbar-thumb-color-transparent box-border px-10 pb-176px" />
    </div>
    <!-- <div class="color-black flex items-center">
      [Default Layout]
    </div> -->
    <div v-show="isComponentRoute" class="pr-0">
      <Simulator class="mt-100px !scrollbar !scrollbar-rounded !scrollbar-w-4px !scrollbar-thumb-color-green-500/50 lt-sm:!hidden" />
    </div>
  </div>
</template>
