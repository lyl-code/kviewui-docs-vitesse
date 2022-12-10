<script lang="ts">
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const hiddenActiveRipple = ref(0)

    return {
      ...toRefs({
        hiddenActiveRipple,
      }),
    }
  },
}
</script>

<template>
  <view class="kui-w-full kui-h-full">
    <kui-page :custom-header="false">
      <template #body>
        <view class="kui-w-full">
          <kui-space :gap="[30, 0]" direction="column">
            <view class="kui-w-full">
              <kui-cell-group title="隐藏拖动水波纹" desc="拖动得时候不显示按钮周围的水波纹样式">
                <kui-slider v-model="hiddenActiveRipple" hidden-active-ripple />
              </kui-cell-group>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>

<style>

</style>
