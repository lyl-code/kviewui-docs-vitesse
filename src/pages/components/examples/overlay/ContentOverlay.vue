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
        proxy.$refs['overlay-content'].open()
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
            <kui-text>自定义插槽内容</kui-text>
            <kui-container radius="10px" background-color="#FFFFFF">
              <kui-button type="primary" block @click="showOverlay()">
                显示遮罩层
              </kui-button>
            </kui-container>
          </view>
        </kui-config-provider>
      </template>
    </kui-page>
    <kui-overlay ref="overlay-content" :z-index="9999">
      <template #content>
        <view class="kui-w-full kui-h-full kui-flex kui-justify-center kui-items-center">
          <kui-container height="100px" width="300px" radius="10px" background-color="#FFFFFF">
            <view class="kui-text-center kui-h-full kui-flex kui-flex-col kui-justify-center">
              <kui-text>自定义插槽内容</kui-text>
            </view>
          </kui-container>
        </view>
      </template>
    </kui-overlay>
  </view>
</template>
