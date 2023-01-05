<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

locale.value = 'zh-CN'

const route = useRoute()

const pathname = window.location.pathname
const isComponentRoute = ref(pathname.includes('/components'))
const isGuideRoute = ref(pathname.includes('/guide'))
const isToolsRoute = ref(pathname.includes('/tools'))
const isTemplateRoute = ref(pathname.includes('/templates'))

watch(() => route.path, (newPath, oldPath) => {
  nextTick(() => {
    isComponentRoute.value = newPath.includes('/components')
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

const showMore = ref(false)

const toggleMore = (bool: boolean) => {
  showMore.value = bool
}

const store = useUserStore()
const { darkMode } = storeToRefs(store)

const changeDark = () => {
  toggleDark()
  store.setMode(isDark.value)
  console.log(darkMode.value)
  if (isDark.value)
    document.body.setAttribute('arco-theme', 'dark')

  else
    document.body.removeAttribute('arco-theme')
}

const subscribe = store.$subscribe((mutation, state) => {
  console.log(state.darkMode)
}, { detached: true })
</script>

<template>
  <nav
    class="bg-white px-2 sm:px-4 py-2.5 dark:bg-black/1 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div class="flex justify-between items-center mx-10 lt-lg:mx-1">
      <RouterLink class="flex items-center hover:opacity-80" to="/" :title="t('button.home')">
        <img class="h-40px mr-2" src="/kviewui.png" alt="">
        <div
          class="dark:color-white color-black text-2xl !tracking-wider !font-sans opacity-80 dark:opacity-100 relative right-2 top-1 lt-md:!hidden"
        >
          <span color-green-600 dark:color-green-500>Kview</span>
          <span>UI</span>
        </div>
        <div class="lt-sm:!hidden">
          <span
            class="bg-green-500 text-white text-sm font-semibold mr-2 px-1.5 py-0.5 rounded-full dark:bg-green-600 dark:text-gray-100 !tracking-2px !font-serif"
          >v1.0.0</span>
        </div>
      </RouterLink>
      <div class="flex lt-lg:!hidden">
        <div id="navbar-sticky" class="items-center w-full md:flex md:w-auto">
          <RouterLink class="icon-btn mx-3" to="/guide/intro" :title="t('button.guide')">
            <div class="color-gray-600 dark:!color-gray" :class="isGuideRoute ? 'dark:!color-white !color-black' : ''">
              {{ t('button.guide') }}
            </div>
          </RouterLink>

          <RouterLink class="icon-btn mx-3" to="/components/button" :title="t('button.components')">
            <div
              class="color-gray-600 dark:!color-gray"
              :class="isComponentRoute ? 'dark:!color-white !color-black' : ''"
            >
              {{ t('button.components') }}
            </div>
          </RouterLink>

          <RouterLink class="icon-btn mx-3" to="/tools/intro" :title="t('button.tools')">
            <div class="color-gray-600 dark:!color-gray" :class="isToolsRoute ? 'dark:!color-white !color-black' : ''">
              {{ t('button.tools') }}
            </div>
          </RouterLink>

          <RouterLink class="icon-btn mx-3" to="/template/intro" :title="t('button.templates')">
            <div
              class="color-gray-600 dark:!color-gray"
              :class="isTemplateRoute ? 'dark:!color-white !color-black' : ''"
            >
              {{ t('button.templates') }}
            </div>
          </RouterLink>
        </div>
        <div class="flex items-center hidden">
          <a
            class="icon-btn ml-10" rel="noreferrer" href="https://github.com/lyl-code/kviewui-docs-vitesse"
            target="_blank" title="GitHub"
          >
            <div class="color-gray-600 dark:!color-gray text-xl color-gray" i-carbon-logo-github />
          </a>

          <button class="icon-btn mx-5 !outline-none" :title="t('button.toggle_dark')" @click="changeDark()">
            <div class="color-gray-600 dark:!color-gray text-xl color-gray" i="carbon-sun dark:carbon-moon" />
          </button>

          <a
            class="icon-btn lg:mr-20" :title="t('button.toggle_langs')"
            @click="toggleLocales(availableLocales, locale)"
          >
            <div class="color-gray-600 dark:!color-gray text-xl color-gray" i-carbon-language />
          </a>
        </div>
      </div>
      <div class="lg:!hidden">
        <button
          v-if="!showMore" class="icon-btn animated color-gray-600 dark:color-gray hover:!color-black dark:hover:!color-gray !outline-none lg:!hidden"
          :class="!showMore ? 'animated-fade-in' : 'animated-fade-out'"
          @click="toggleMore(true)"
        >
          <div class="text-xl" i="carbon-overflow-menu-vertical" />
        </button>
        <button
          v-if="showMore"
          class="icon-btn animated color-gray-600 dark:color-gray hover:!color-black dark:hover:!color-gray !outline-none"
          :class="showMore ? 'animated-fade-in' : 'animated-fade-out'"
          @click="toggleMore(false)"
        >
          <div class="text-xl" i="carbon-close" />
        </button>
      </div>
    </div>
    <div v-if="showMore" class="absolute h-screen w-screen top-61px z-99 bg-white dark:bg-gray-900 overflow-y-hidden transition duration-500">
      <div class="flex w-full justify-center pt-6 animated animated-fade-in-down animated-duration-400">
        <div class="flex flex-col w-288px">
          <div id="navbar-sticky" class="flex flex-col items-start w-full">
            <div class="border-b dark:border-b-gray w-full py-2.5">
              <RouterLink class="icon-btn" to="/guide/intro" :title="t('button.guide')" @click="toggleMore(false)">
                <div
                  class="color-gray-600 dark:!color-gray font-normal"
                  :class="isGuideRoute ? 'dark:!color-white !color-black' : ''"
                >
                  {{ t('button.guide') }}
                </div>
              </RouterLink>
            </div>

            <div class="border-b dark:border-b-gray w-full py-2.5">
              <RouterLink class="icon-btn" to="/components/button" :title="t('button.components')" @click="toggleMore(false)">
                <div
                  class="color-gray-600 dark:!color-gray font-normal"
                  :class="isComponentRoute ? 'dark:!color-white !color-black' : ''"
                >
                  {{ t('button.components') }}
                </div>
              </RouterLink>
            </div>

            <div class="border-b dark:border-b-gray w-full py-2.5">
              <RouterLink class="icon-btn" to="/tools/intro" :title="t('button.tools')" @click="toggleMore(false)">
                <div
                  class="color-gray-600 dark:!color-gray font-normal"
                  :class="isToolsRoute ? 'dark:!color-white !color-black' : ''"
                >
                  {{ t('button.tools') }}
                </div>
              </RouterLink>
            </div>

            <div class="border-b dark:border-b-gray w-full py-2.5">
              <RouterLink class="icon-btn" to="/template/intro" :title="t('button.templates')" @click="toggleMore(false)">
                <div
                  class="color-gray-600 dark:!color-gray font-normal"
                  :class="isTemplateRoute ? 'dark:!color-white !color-black' : ''"
                >
                  {{ t('button.templates') }}
                </div>
              </RouterLink>
            </div>

            <div class="w-full flex py-6 justify-center items-center hidden">
              <a
                class="icon-btn" rel="noreferrer" href="https://github.com/lyl-code/kviewui-docs-vitesse"
                target="_blank" title="GitHub"
              >
                <div class="color-gray-600 dark:!color-gray text-xl color-gray" i-carbon-logo-github />
              </a>

              <button class="icon-btn mx-5 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
                <div class="color-gray-600 dark:!color-gray text-xl color-gray" i="carbon-sun dark:carbon-moon" />
              </button>

              <a class="icon-btn" :title="t('button.toggle_langs')" @click="toggleLocales(availableLocales, locale)">
                <div class="color-gray-600 dark:!color-gray text-xl color-gray" i-carbon-language />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
  /* .arco-tabs-tab-active {
    color: red !important;
  } */
</style>
