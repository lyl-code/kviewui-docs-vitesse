<script setup lang="ts">
console.log(22222)
</script>

<template>
  <header>
    <Header />
  </header>
  <aside class="pt-30 px-0 flex absolute w-58 h-screen overflow-auto scrollbar scrollbar-rounded scrollbar-w-4px">
    <Asider />
  </aside>
  <main class="pt-25 pl-3 !w-screen text-center text-gray-700 dark:text-gray-200 scroll-auto">
    <RouterView class="lg:max-w-280" />
    <!-- <Footer />
    <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
      [Default Layout]
    </div> -->
  </main>
</template>
