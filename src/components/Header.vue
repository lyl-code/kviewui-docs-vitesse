<script setup lang="ts">
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
  <nav
    class="dark:bg-black bg-white !fixed !w-full px-160 flex justify-between items-center z-100 border-b !hidden">
    <RouterLink class="flex items-center hover:opacity-80" to="/" :title="t('button.home')">
      <img class="h-20 mr-0" src="/kviewui.png" alt="">
      <div class="dark:color-white color-black text-2xl !tracking-wider !font-sans opacity-80 dark:opacity-100">
        Kview UI1
      </div>
    </RouterLink>
    <div class="flex">
      <RouterLink class="icon-btn mx-3" to="/guide/intro" :title="t('button.guide')">
        <div class="color-gray-600 dark:!color-gray" :class="isGuideRoute ? 'dark:!color-white !color-black' : ''">
          {{ t('button.guide') }}
        </div>
      </RouterLink>

      <RouterLink class="icon-btn mx-3" to="/component/button" :title="t('button.components')">
        <div class="color-gray-600 dark:!color-gray" :class="isComponentRoute ? 'dark:!color-white !color-black' : ''">
          {{ t('button.components') }}
        </div>
      </RouterLink>

      <RouterLink class="icon-btn mx-3" to="/tools/intro" :title="t('button.tools')">
        <div class="color-gray-600 dark:!color-gray" :class="isToolsRoute ? 'dark:!color-white !color-black' : ''">
          {{ t('button.tools') }}
        </div>
      </RouterLink>

      <RouterLink class="icon-btn mx-3" to="/template/intro" :title="t('button.templates')">
        <div class="color-gray-600 dark:!color-gray" :class="isTemplateRoute ? 'dark:!color-white !color-black' : ''">
          {{ t('button.templates') }}
        </div>
      </RouterLink>

      <a class="icon-btn ml-10" rel="noreferrer" href="https://github.com/lyl-code/kviewui-docs-vitesse" target="_blank"
        title="GitHub">
        <div class="color-gray-600 dark:!color-gray text-xl color-gray" i-carbon-logo-github />
      </a>

      <button class="icon-btn mx-5 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
        <div class="color-gray-600 dark:!color-gray text-xl color-gray" i="carbon-sun dark:carbon-moon" />
      </button>

      <a class="icon-btn ml-0" :title="t('button.toggle_langs')" @click="toggleLocales(availableLocales, locale)">
        <div class="color-gray-600 dark:!color-gray text-xl color-gray" i-carbon-language />
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




  <nav
    class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <RouterLink class="flex items-center hover:opacity-80" to="/" :title="t('button.home')">
        <img class="h-12 mr-2" src="/kviewui.png" alt="">
        <div class="dark:color-white color-black text-2xl !tracking-wider !font-sans opacity-80 dark:opacity-100 relative right-2 top-2">
          <span color-green-600>Kview</span>
          <span>UI</span>
        </div>
      </RouterLink>
      <div class="flex items-center md:order-2">
        <a class="icon-btn ml-10" rel="noreferrer" href="https://github.com/lyl-code/kviewui-docs-vitesse"
          target="_blank" title="GitHub">
          <div class="color-gray-600 dark:!color-gray text-xl color-gray" i-carbon-logo-github />
        </a>

        <button class="icon-btn mx-5 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
          <div class="color-gray-600 dark:!color-gray text-xl color-gray" i="carbon-sun dark:carbon-moon" />
        </button>

        <a class="icon-btn lg:mr-20" :title="t('button.toggle_langs')" @click="toggleLocales(availableLocales, locale)">
          <div class="color-gray-600 dark:!color-gray text-xl color-gray" i-carbon-language />
        </a>
        <!-- <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> -->
        <button data-collapse-toggle="navbar-sticky" type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky" aria-expanded="true">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div class="hidden justify-between lg:!pl-200 items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <RouterLink class="icon-btn mx-3" to="/guide/intro" :title="t('button.guide')">
          <div class="color-gray-600 dark:!color-gray" :class="isGuideRoute ? 'dark:!color-white !color-black' : ''">
            {{ t('button.guide') }}
          </div>
        </RouterLink>

        <RouterLink class="icon-btn mx-3" to="/component/button" :title="t('button.components')">
          <div class="color-gray-600 dark:!color-gray"
            :class="isComponentRoute ? 'dark:!color-white !color-black' : ''">
            {{ t('button.components') }}
          </div>
        </RouterLink>

        <RouterLink class="icon-btn mx-3" to="/tools/intro" :title="t('button.tools')">
          <div class="color-gray-600 dark:!color-gray" :class="isToolsRoute ? 'dark:!color-white !color-black' : ''">
            {{ t('button.tools') }}
          </div>
        </RouterLink>

        <RouterLink class="icon-btn mx-3" to="/template/intro" :title="t('button.templates')">
          <div class="color-gray-600 dark:!color-gray" :class="isTemplateRoute ? 'dark:!color-white !color-black' : ''">
            {{ t('button.templates') }}
          </div>
        </RouterLink>
      </div>
    </div>
  </nav>



</template>
