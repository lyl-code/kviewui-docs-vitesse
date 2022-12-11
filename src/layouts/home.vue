<script setup lang="ts">
console.log(features.value)
</script>

<template>
  <header>
    <Header />
  </header>
  <main class="container mx-auto flex flex-col items-center border-red border-0px">
    <RouterView />
    <!-- <Home /> -->
    <!-- <Footer /> -->
    <!-- <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
      [Home Layout]
    </div> -->
    <div class="w-auto1 p-3 border-green border-0px flex flex-col items-center relative1 mt-30 overflow-y-hidden px-0">
      <div class="border-blue border-0px flex flex-col items-center1">
        <div class="hero-content1 border-orange border-0px flex items-center justify-between lg:flex-row-reverse pl-10 lt-lg:px-3">
          <!-- <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl"> -->
          <div />
          <div>
            <h1 class="text-7xl font-bold">
              <span class="!color-green-600/90 font-sans font-bold">KviewUI</span>
            </h1>
            <h1 class="text-6xl font-bold mt-1">
              <span class="font-sans font-bold text-black/80 dark:text-white/80">多端业务开发利器</span>
            </h1>
            <p class="py-6 text-2xl color-gray-500">
              基于UNI-APP框架的多端开发UI组件库，让您的开发效率加倍提升
            </p>
            <RouterLink to="/guide/intro">
              <button class="btn1 bg-green6 dark:bg-green5 rounded-full btn-primary py-2 px-6 mr-3 mb-3 hover:bg-green5">
                开始
              </button>
            </RouterLink>
            <button class="btn1 bg-black/10 dark:bg-white/10 border-1px text-black/80 dark:text-white/80 border-gray/10 rounded-full btn-primary py-2 px-6 mr-3 hover:bg-black/20 hover:border-gray/10">
              为什么选KviewUI？
            </button>
            <a href="https://github.com/lyl-code/kviewui-docs-vitesse" target="__blank">
              <button class="btn1 bg-black/10 dark:bg-white/10 border-1px text-black/80 dark:text-white/80 border-gray/10 rounded-full btn-primary py-2 px-6 hover:bg-black/20 hover:border-gray/10">
                在 github 查看
              </button>
            </a>
          </div>
        </div>
        <div class="mt-15 pl-10 lt-lg:px-3">
          <div class="flex flex-wrap grid gap-5 box-border border-0px border-red-400">
            <template v-for="(item, index) in features" :key="index">
              <div class="w-1/4 lt-sm:w-full border-0px border-blue-300">
                <article class="p-24px rounded-12px bg-gray1 dark:bg-gray8 border-0px border-gray">
                  <div class="bg-gray2 dark:bg-gray9 p-10px w-45px h-45px inline-block rounded flex items-center justify-center">
                    {{ item.icon }}
                  </div>
                  <div class="my-20px text-16px font-600 dark:color-white/90">
                    {{ item.title }}
                  </div>
                  <div class="color-gray5 dark:color-gray4 text-14px">
                    {{ item.details }}
                  </div>
                </article>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
