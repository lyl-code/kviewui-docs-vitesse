<script setup lang="ts">
const route = useRoute()
const baseURL = 'https://www.kviewui.com/h5#/pages/'
const currentURL = ref(route.path)
const simulator = ref(null)
const src = ref('')

const currentLink = (reload = false) => {
  if (reload) {
    src.value = ''
  }
  else {
    const linkArr = currentURL.value.split('/')

    src.value = `${baseURL}${linkArr[1]}/${linkArr[2]}/${linkArr[2]}`
  }
}

watch(() => route.path, (newPath, oldPath) => {
  nextTick(() => {
    currentURL.value = newPath
    currentLink()
  })
})

currentLink()

const reload = () => {
  const iframe = document.createElement('demo')
  currentLink(true)
  setTimeout(() => {
    currentLink(false)
  }, 10)
}

const showQr = ref(false)
</script>

<template>
  <div class="absolute1 right-3rem w-375px h-667px bg-gray-100 rounded-xl shadow-lg flex-col !z1 overflow-y-hidden">
    <iframe id="demo" ref="simulator" name="demo_simulator" class="w-full h-630px" :src="src" frameborder="0" />
    <div class="absolute right-5 bottom-12 h-30 w-30 xl:w-25 xl:h-25 bg-white rounded-xl animated animated-slide-in-up flex items-center justify-center" v-if="showQr">
      <!-- <vue-qr :text="src" logo-src="/qrcode.png" :logo-scale="0.3" /> -->
      <img src="/qrcode.png" class="rounded-xl h-30 w-30 xl:w-22 xl:h-22" alt="">
    </div>
    <div class="bg-white h-36px px-3 flex justify-end items-center z-9999">
      <a class="icon-btn">
        <div class="color-gray-600 dark:!color-gray text-lg color-gray" i-carbon-restart @click="reload" />
      </a>
      <a class="icon-btn pl-2 relative">
        <div class="color-gray-600 dark:!color-gray text-lg color-gray" i-carbon-qr-code @click="showQr = !showQr" />
      </a>
    </div>
  </div>
</template>
