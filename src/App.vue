<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'KviewUI',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: computed(() => preferredDark.value ? '/kviewui.png' : '/kviewui.png'),
    },
  ],
})

if (isDark.value)
  document.body.setAttribute('arco-theme', 'dark')
else
  document.body.removeAttribute('arco-theme')
</script>

<template>
  <RouterView />
</template>
