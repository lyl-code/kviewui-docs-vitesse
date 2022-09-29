<script setup lang="ts">
console.log(22222)
</script>

<template>
  <header>
    <Header />
  </header>
  <div
    class="container !max-w-screen-2xl lg:px-6 !mx-auto pt-25 grid-leyout !scrollbar !scrollbar-rounded !scrollbar-w-4px">
    <aside
      class="sidebar fixed z-50 lg:z-0 lg:z-static h-screen !overflow-auto !scrollbar !scrollbar-rounded !scrollbar-w-4px !scrollbar-thumb-color-green-500/50">
      <Asider />
    </aside>
    <main class="pt-0 pl-30 text-center text-gray-700 dark:text-gray-200 !h-screen">
      <RouterView class="lg:max-w-280" />
    </main>
    <Demo />
  </div>
  <div class="py-10 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
    [Default Layout]
  </div>
</template>
