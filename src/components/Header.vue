<script setup lang="ts">
import { useRoute } from 'vue-router'
import { nextTick, ref, watch } from 'vue'
const { t, availableLocales, locale } = useI18n()

locale.value = 'zh-CN'

const route = useRoute()

const pathname = window.location.pathname
const isComponentRoute = ref(pathname.includes('/component'))
const isGuideRoute = ref(pathname.includes('/guide'))
const isToolsRoute = ref(pathname.includes('/tools'))
const isTemplateRoute = ref(pathname.includes('/templates'))

watch(() => route.path, (newPath, oldPath) => {
  nextTick(() => {
    isComponentRoute.value = newPath.includes('/component')
    isGuideRoute.value = newPath.includes('/guide')
    isToolsRoute.value = newPath.includes('/tools')
    isTemplateRoute.value = newPath.includes('/template')
  })
}, { immediate: true })

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav class="dark:bg-black bg-black px-12 !fixed !w-full flex justify-between items-center z-100">
    <RouterLink class="flex items-center hover:opacity-80" to="/" :title="t('button.home')">
      <img class="h-20 mr-2" src="/kviewui.png" alt="">
      <div class="color-white text-3xl !tracking-wider !font-sans opacity-80 dark:opacity-100">
        Kview UI
      </div>
    </RouterLink>
    <div class="flex">
      <RouterLink class="icon-btn mx-3" to="/guide/intro" :title="t('button.guide')">
        <div class="color-gray" :class="isGuideRoute ? '!color-white' : ''">
          {{ t('button.guide') }}
        </div>
      </RouterLink>

      <RouterLink class="icon-btn mx-3" to="/component/button" :title="t('button.components')">
        <div class="color-gray" :class="isComponentRoute ? '!color-white' : ''">
          {{ t('button.components') }}
        </div>
      </RouterLink>

      <RouterLink class="icon-btn mx-3" to="/tools/intro" :title="t('button.tools')">
        <div class="color-gray" :class="isToolsRoute ? 'color-white' : ''">
          {{ t('button.tools') }}
        </div>
      </RouterLink>

      <RouterLink class="icon-btn mx-3" to="/template/intro" :title="t('button.templates')">
        <div class="color-gray" :class="isTemplateRoute ? 'color-white' : ''">
          {{ t('button.templates') }}
        </div>
      </RouterLink>

      <a class="icon-btn ml-10" rel="noreferrer" href="https://github.com/lyl-code/kviewui-docs-vitesse" target="_blank" title="GitHub">
        <div class="color-gray text-xl hover:color-gray" i-carbon-logo-github />
      </a>

      <button class="icon-btn mx-5 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
        <div class="text-xl color-gray" i="carbon-sun dark:carbon-moon" />
      </button>

      <a class="icon-btn ml-0" :title="t('button.toggle_langs')" @click="toggleLocales(availableLocales, locale)">
        <div class="text-xl color-gray" i-carbon-language />
      </a>

      <!-- <button class="icon-btn mx-5 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>

      <a class="icon-btn mx-5" :title="t('button.toggle_langs')" @click="toggleLocales()">
        <div i-carbon-language />
      </a>

      <RouterLink class="icon-btn mx-5" to="/about" :title="t('button.about')">
        <div i-carbon-dicom-overlay />
      </RouterLink>

      <a class="icon-btn ml-5" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
        <div i-carbon-logo-github />
      </a> -->
    </div>
  </nav>
</template>
