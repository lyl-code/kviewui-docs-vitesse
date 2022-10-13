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

    const openPopupIcon = () => {
      nextTick(() => {
        proxy.$refs.popupIcon.open()
      })
    }

    const openPopupIconPosition = () => {
      nextTick(() => {
        proxy.$refs.popupIconPosition.open()
      })
    }

    const openPopupIconType = () => {
      nextTick(() => {
        proxy.$refs.popupIconType.open()
      })
    }

    return {
      openPopupIcon,
      openPopupIconPosition,
      openPopupIconType,
    }
  },
}
</script>

<template>
  <kui-page :custom-header="false">
    <template #body>
      <view class="kui-mt-3">
        <kui-cell-group title="图标用法">
          <kui-cell title="关闭图标" @click="openPopupIcon('bottom')" />
          <kui-cell title="图标位置" @click="openPopupIconPosition('bottom')" />
          <kui-cell title="自定义图标" @click="openPopupIconType('bottom')" />
        </kui-cell-group>
      </view>
    </template>
  </kui-page>
  <kui-popup ref="popupIcon" show-icon height="200px" position="bottom">
    <kui-container :margin-y="0" height="auto" background-color="transparent">
      <view>
        <kui-text>测试内容icon</kui-text>
      </view>
    </kui-container>
  </kui-popup>
  <kui-popup ref="popupIconPosition" show-icon close-icon-position="left" height="200px" position="bottom">
    <kui-container :margin-y="0" height="auto" background-color="transparent">
      <view class="kui-mt-3">
        <kui-text>测试内容icon_position</kui-text>
      </view>
    </kui-container>
  </kui-popup>
  <kui-popup ref="popupIconType" show-icon close-icon-type="clear" height="200px" position="bottom">
    <kui-container :margin-y="0" height="auto" background-color="transparent">
      <view class="kui-mt-3">
        <kui-text>测试内容icon_type</kui-text>
      </view>
    </kui-container>
  </kui-popup>
</template>
