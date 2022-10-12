<script lang="ts">
export default {
  setup() {
    const onClick = () => {
      uni.showToast({
        title: '图片被点击',
      })
    }

    return {
      onClick,
    }
  },
}
</script>

<template>
  <kui-image
    width="440rpx"
    height="440rpx"
    :radius="30"
    preview
    src="https://www.kviewui.com/images/dog1.png"
    @click="onClick"
  />
</template>
