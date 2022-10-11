<script setup lang="ts">
const props = defineProps({
  message: {
    type: String,
    default: '代码复制成功！',
  },
  autoHide: {
    type: Boolean,
    default: true,
  },
  theme: {
    type: String,
    default: 'success',
  },
})

const emits = defineEmits(['update:show', 'update'])

// const show = ref<Boolean>(true)

const animatedClass = ref<string>('animated-fade-in animated-duration-500')

const themeClass = ref<string>('text-green-600 bg-green-100 dark:bg-green-200 dark:text-green-800')

onMounted(() => {
  if (props.autoHide) {
    setTimeout(() => {
      animatedClass.value = 'animated-fade-out'
    }, 2000)
  }

  if (props.theme === 'success')
    themeClass.value = 'text-green-600 bg-green-100 dark:bg-green-200 dark:text-green-800'
  if (props.theme === 'warning')
    themeClass.value = 'text-orange-600 bg-orange-100 dark:bg-orange-200 dark:text-orange-800'
  if (props.theme === 'danger')
    themeClass.value = 'text-red-600 bg-red-100 dark:bg-red-200 dark:text-red-800'
  if (props.theme === 'info')
    themeClass.value = 'text-blue-600 bg-blue-100 dark:bg-blue-200 dark:text-blue-800'
})
</script>

<template>
  <div class="p-4 mb-4 text-base text-center rounded-lg animated" :class="[animatedClass, themeClass]" role="alert">
    <span class="font-medium">{{ props.message }}</span>
  </div>
</template>
