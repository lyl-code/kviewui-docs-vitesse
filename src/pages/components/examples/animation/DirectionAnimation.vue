<template>
  <kui-animation
    ref="KuiAnimation"
    name="scale-up-center"
    :duration="0.5"
    :delay="2"
    runing
    direction="reverse"
  >
    <view class="kui-h-24 kui-w-24 kui-rounded-md color-primary" />
  </kui-animation>
</template>

<style>
    .color-primary {
        background-color: #00BC79
    }
</style>
