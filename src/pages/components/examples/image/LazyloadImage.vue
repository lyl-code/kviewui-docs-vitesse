<template>
  <view class="kui-mt-3">
    <template v-for="i in 100" :key="i">
      <kui-image
        height="200rpx"
        :radius="30"
        lazyload
        src="https://www.kviewui.com/images/dog1.png"
      />
    </template>
  </view>
</template>
