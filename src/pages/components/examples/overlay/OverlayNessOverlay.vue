<script lang="ts">
import type { SetupContext } from 'vue'
import {
  getCurrentInstance,
  nextTick,
} from 'vue'

export default {
  setup(props, context: SetupContext) {
    const { proxy } = getCurrentInstance()

    const showOverlay = () => {
      nextTick(() => {
        proxy.$refs.overlay.open()
      })
    }

    return {
      showOverlay,
    }
  },
}
</script>

<template>
  <view class="kui-w-full kui-h-full">
    <kui-page :custom-header="false">
      <template #body>
        <kui-config-provider font-size="16px" color="#666">
          <view class="kui-mt-5">
            <kui-text>自定义遮罩透明度</kui-text>
            <kui-container radius="10px" background-color="#FFFFFF">
              <kui-button type="primary" block @click="showOverlay(0.4)">
                显示遮罩层
              </kui-button>
            </kui-container>
          </view>
        </kui-config-provider>
      </template>
    </kui-page>
    <kui-overlay ref="overlay" :overlay-ness="0.4" />
  </view>
</template>
