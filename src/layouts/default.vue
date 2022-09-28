<script setup lang="ts">
console.log(22222)
</script>

<template>
  <header>
    <Header />
  </header>
  <aside class="pt-30 px-0 flex absolute w-58 h-screen overflow-auto">
    <Asider />
  </aside>
  <main class="flex px-4 justify-center pt-25 text-center text-gray-700 dark:text-gray-200 h-screen overflow-auto">
    <RouterView />
    <!-- <Footer />
    <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
      [Default Layout]
    </div> -->
  </main>
</template>
