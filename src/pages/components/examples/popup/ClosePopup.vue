<script lang="ts">
import type { SetupContext } from 'vue'
import {
  getCurrentInstance,
  nextTick,
} from 'vue'

export default {
  setup(props, context: SetupContext) {
    const {
      proxy,
    } = getCurrentInstance()

    const onClickCloseIcon = () => {
      nextTick(() => {
        proxy.$refs.popupClose.forceClose()
      })
    }

    return {
      onClickCloseIcon,
    }
  },
}
</script>

<template>
  <kui-page :custom-header="false">
    <template #body>
      <view class="kui-mt-3">
        <kui-cell-group title="自定义关闭事件">
          <kui-cell title="手动关闭" @click="openPopupClose" />
        </kui-cell-group>
      </view>
    </template>
  </kui-page>
  <kui-popup ref="popupClose" :close-on-click-mask="false" show-icon height="200px" position="bottom" @click-close-icon="onClickCloseIcon">
    <kui-container :margin-y="0" height="auto" background-color="transparent">
      <view class="kui-mt-3">
        <kui-text>测试内容close</kui-text>
      </view>
    </kui-container>
  </kui-popup>
</template>
